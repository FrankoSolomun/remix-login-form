import React, { useState } from "react";
import { useActionData } from "@remix-run/react";

interface FormData {
  email: string;
  password: string;
  name: string;
  surname: string;
  birthdate: string;
  address: string;
}

interface RegisterFormProps {
  formData: FormData;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string,
  ) => void;
  handleDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface ActionData {
  error?: string;
}

export default function RegisterForm({
  formData,
  handleInputChange,
  handleDateChange,
}: RegisterFormProps) {
  const actionData = useActionData<ActionData>();
  const [birthdatePlaceholder, setBirthdatePlaceholder] =
    useState("Date of birth");

  const handleBirthdateFocus = () => {
    setBirthdatePlaceholder("DD.MM.YYYY");
  };

  const handleBirthdateBlur = () => {
    if (!formData.birthdate) {
      setBirthdatePlaceholder("Date of birth");
    }
  };

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    name: "",
    surname: "",
    birthdate: "",
    address: "",
  });

  const isValidEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validateInputs = () => {
    const newErrors = {
      email: "",
      password: "",
      name: "",
      surname: "",
      birthdate: "",
      address: "",
    };

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Provide a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.surname) {
      newErrors.surname = "Surname is required";
    }

    if (!formData.birthdate) {
      newErrors.birthdate = "Date of birth is required";
    }

    if (!formData.address) {
      newErrors.address = "Address is required";
    }

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    if (!validateInputs()) {
      e.preventDefault(); // Prevent form submission if validation fails
    }
  };

  const getBorderClass = (field: keyof FormData) => {
    if (errors[field]) {
      return "border-red-500";
    } else if (formData[field]) {
      return "border-green-500";
    } else {
      return "border-gray-300"; // Neutral border color
    }
  };

  return (
    <form
      method="POST"
      className="flex flex-col items-center gap-3"
      onSubmit={handleSubmit}
    >
      {actionData?.error && <p className="error">{actionData.error}</p>}
      <div className="flex flex-col w-[320px]">
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange(e, "email")}
          placeholder="Email"
          className={`px-5 py-3 mt-1 border rounded-full ${getBorderClass("email")}`}
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>
      <div className="flex flex-col w-[320px]">
        <input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={(e) => handleInputChange(e, "password")}
          placeholder="Password"
          className={`px-5 py-3 mt-1 border rounded-full ${getBorderClass("password")}`}
        />
        {errors.password && <p className="text-red-500">{errors.password}</p>}
      </div>
      <div className="flex flex-col w-[320px]">
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={(e) => handleInputChange(e, "name")}
          placeholder="Name"
          className={`px-5 py-3 mt-1 border rounded-full ${getBorderClass("name")}`}
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
      </div>
      <div className="flex flex-col w-[320px]">
        <input
          id="surname"
          name="surname"
          type="text"
          value={formData.surname}
          onChange={(e) => handleInputChange(e, "surname")}
          placeholder="Surname"
          className={`px-5 py-3 mt-1 border rounded-full ${getBorderClass("surname")}`}
        />
        {errors.surname && <p className="text-red-500">{errors.surname}</p>}
      </div>
      <div className="flex flex-col w-[320px]">
        <input
          id="birthdate"
          name="birthdate"
          type="text"
          value={formData.birthdate}
          onChange={handleDateChange}
          onFocus={handleBirthdateFocus}
          onBlur={handleBirthdateBlur}
          pattern="\d{2}\.\d{2}\.\d{4}"
          placeholder={birthdatePlaceholder}
          className={`px-5 py-3 mt-1 border rounded-full ${getBorderClass("birthdate")}`}
        />
        {errors.birthdate && <p className="text-red-500">{errors.birthdate}</p>}
      </div>
      <div className="flex flex-col w-[320px]">
        <input
          id="address"
          name="address"
          type="text"
          value={formData.address}
          onChange={(e) => handleInputChange(e, "address")}
          placeholder="Address"
          className={`px-5 py-3 mt-1 border rounded-full ${getBorderClass("address")}`}
        />
        {errors.address && <p className="text-red-500">{errors.address}</p>}
      </div>
      <button
        type="submit"
        name="_action"
        value="register"
        className="bg-blue-700 text-white py-3 w-[320px] rounded-full mt-3"
      >
        Signup
      </button>
    </form>
  );
}
