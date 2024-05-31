// add-info.tsx
import React, { useState, useCallback } from "react";
import {
  ActionFunction,
  LoaderFunction,
  json,
  redirect,
} from "@remix-run/node";
import { useActionData, Form } from "@remix-run/react";
import debounce from "lodash.debounce";
import { prisma } from "./utils/prisma.server";
import { authenticator } from "./utils/auth.server";
import { handleInputChange, handleDateChange } from "./utils/formUtils";

interface ActionData {
  error?: string;
  success?: string;
}

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (user && user.address !== "Not given" && user.birthdate !== "Not given") {
    return redirect("/dashboard");
  }

  return json({});
};

export const action: ActionFunction = async ({ request }) => {
  const userId = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  const formData = await request.formData();
  const address = formData.get("address");
  const birthdate = formData.get("birthdate");

  if (typeof address !== "string" || typeof birthdate !== "string") {
    return json({ error: "Invalid form data" }, { status: 400 });
  }

  await prisma.user.update({
    where: { id: userId },
    data: { address, birthdate },
  });

  return redirect("/");
};

export default function AddInfo() {
  const actionData = useActionData<ActionData>();
  const [formData, setFormData] = useState({
    address: "",
    birthdate: "",
  });
  const [birthdatePlaceholder, setBirthdatePlaceholder] =
    useState("Date of birth");
  const [errors, setErrors] = useState({
    address: "",
    birthdate: "",
  });

  const handleBirthdateFocus = () => {
    setBirthdatePlaceholder("DD.MM.YYYY");
  };

  const handleBirthdateBlur = () => {
    if (!formData.birthdate) {
      setBirthdatePlaceholder("Date of birth");
    }
  };

  const isValidDate = (date: string) => {
    return /^\d{2}\.\d{2}\.\d{4}$/.test(date);
  };

  const calculateAge = (birthdate: string) => {
    const [day, month, year] = birthdate.split(".").map(Number);
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const validateField = (field: string, value: string) => {
    const newErrors = { ...errors };

    if (field === "address") {
      if (!value) {
        newErrors.address = "Address is required";
      } else {
        newErrors.address = "";
      }
    }

    if (field === "birthdate") {
      if (!value) {
        newErrors.birthdate = "Date of birth is required";
      } else if (!isValidDate(value)) {
        newErrors.birthdate = "Invalid date format";
      } else if (calculateAge(value) < 12) {
        newErrors.birthdate = "User must be at least 12 years old";
      } else {
        newErrors.birthdate = "";
      }
    }

    setErrors(newErrors);
  };

  const debouncedValidateField = useCallback(debounce(validateField, 500), [
    errors,
  ]);

  const handleLiveValidation = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string,
  ) => {
    if (field === "address") {
      handleInputChange(e, field, setFormData);
    } else if (field === "birthdate") {
      handleDateChange(e, setFormData); // Use handleDateChange for birthdate field
    }
    debouncedValidateField(field, e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    if (!validateInputs()) {
      e.preventDefault(); // Prevent form submission if validation fails
    }
  };

  const validateInputs = () => {
    const newErrors = {
      address: "",
      birthdate: "",
    };

    if (!formData.address) {
      newErrors.address = "Address is required";
    }

    if (!formData.birthdate) {
      newErrors.birthdate = "Date of birth is required";
    } else if (!isValidDate(formData.birthdate)) {
      newErrors.birthdate = "Invalid date format";
    } else if (calculateAge(formData.birthdate) < 12) {
      newErrors.birthdate = "User must be at least 12 years old";
    }

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === "");
  };

  const getBorderClass = (field: string) => {
    if (errors[field as keyof typeof errors]) {
      return "border-red-500";
    } else if (field === "address" ? formData.address : formData.birthdate) {
      return "border-green-500";
    } else {
      return "border-gray-300"; // Neutral border color
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h2 className="text-[30px]">Complete Your Profile</h2>
      {actionData?.error && <p className="text-red-500">{actionData.error}</p>}
      <Form
        method="post"
        className="flex flex-col items-center gap-3"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col w-[320px]">
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={(e) => handleLiveValidation(e, "address")}
            placeholder="Address"
            className={`px-5 py-3 mt-1 border rounded-full ${getBorderClass(
              "address",
            )}`}
          />
          {errors.address && <p className="text-red-500">{errors.address}</p>}
        </div>
        <div className="flex flex-col w-[320px] relative">
          <input
            type="text"
            name="birthdate"
            value={formData.birthdate}
            onChange={(e) => handleLiveValidation(e, "birthdate")}
            onFocus={handleBirthdateFocus}
            onBlur={handleBirthdateBlur}
            pattern="\d{2}\.\d{2}\.\d{4}"
            placeholder={birthdatePlaceholder}
            className={`px-5 py-3 mt-1 border rounded-full ${getBorderClass(
              "birthdate",
            )} placeholder-gray-400`}
          />
          {errors.birthdate && (
            <p className="text-red-500">{errors.birthdate}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-700 text-white py-3 w-[320px] rounded-full mt-2"
        >
          Submit
        </button>
      </Form>
    </div>
  );
}
