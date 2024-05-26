import React, { useState, useCallback } from "react";
import { useActionData } from "@remix-run/react";
import debounce from "lodash.debounce";

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
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
    confirmPassword: "",
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

  const validateField = (field: keyof FormData, value: string) => {
    const newErrors = { ...errors };

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

    if (field === "email") {
      if (!value) {
        newErrors.email = "Email is required";
      } else if (!isValidEmail(value)) {
        newErrors.email = "Provide a valid email address";
      } else {
        newErrors.email = "";
      }
    }

    if (field === "password") {
      if (!value) {
        newErrors.password = "Password is required";
      } else if (value.length < 8) {
        newErrors.password = "Password must be at least 8 characters";
      } else {
        newErrors.password = "";
      }
    }

    if (field === "confirmPassword") {
      if (!value) {
        newErrors.confirmPassword = "Please confirm your password";
      } else if (value !== formData.password) {
        newErrors.confirmPassword = "Passwords do not match";
      } else {
        newErrors.confirmPassword = "";
      }
    }

    if (field === "name") {
      if (!value) {
        newErrors.name = "Name is required";
      } else if (value.length < 2) {
        newErrors.name = "Name must be at least 2 characters";
      } else {
        newErrors.name = "";
      }
    }

    if (field === "surname") {
      if (!value) {
        newErrors.surname = "Surname is required";
      } else if (value.length < 2) {
        newErrors.surname = "Surname must be at least 2 characters";
      } else {
        newErrors.surname = "";
      }
    }

    if (field === "birthdate") {
      if (!value) {
        newErrors.birthdate = "Date of birth is required";
      } else if (!/^\d{2}\.\d{2}\.\d{4}$/.test(value)) {
        newErrors.birthdate = "Invalid date format";
      } else if (calculateAge(value) < 12) {
        newErrors.birthdate = "User must be at least 12 years old";
      } else {
        newErrors.birthdate = "";
      }
    }

    if (field === "address") {
      if (!value) {
        newErrors.address = "Address is required";
      } else {
        newErrors.address = "";
      }
    }

    setErrors(newErrors);
  };

  const debouncedValidateField = useCallback(debounce(validateField, 500), [
    formData,
  ]);

  const handleLiveValidation = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string,
  ) => {
    handleInputChange(e, field);
    debouncedValidateField(field as keyof FormData, e.target.value);
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

  const validateInputs = () => {
    const newErrors = {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      surname: "",
      birthdate: "",
      address: "",
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

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.name) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.surname) {
      newErrors.surname = "Surname is required";
    } else if (formData.surname.length < 2) {
      newErrors.surname = "Surname must be at least 2 characters";
    }

    if (!formData.birthdate) {
      newErrors.birthdate = "Date of birth is required";
    } else if (!/^\d{2}\.\d{2}\.\d{4}$/.test(formData.birthdate)) {
      newErrors.birthdate = "Invalid date format";
    } else if (calculateAge(formData.birthdate) < 12) {
      newErrors.birthdate = "User must be at least 12 years old";
    }

    if (!formData.address) {
      newErrors.address = "Address is required";
    }

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === "");
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
          onChange={(e) => handleLiveValidation(e, "email")}
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
          onChange={(e) => handleLiveValidation(e, "password")}
          placeholder="Password"
          className={`px-5 py-3 mt-1 border rounded-full ${getBorderClass("password")}`}
        />
        {errors.password && <p className="text-red-500">{errors.password}</p>}
      </div>
      <div className="flex flex-col w-[320px]">
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => handleLiveValidation(e, "confirmPassword")}
          placeholder="Confirm Password"
          className={`px-5 py-3 mt-1 border rounded-full ${getBorderClass("confirmPassword")}`}
        />
        {errors.confirmPassword && (
          <p className="text-red-500">{errors.confirmPassword}</p>
        )}
      </div>
      <div className="flex flex-col w-[320px]">
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={(e) => handleLiveValidation(e, "name")}
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
          onChange={(e) => handleLiveValidation(e, "surname")}
          placeholder="Surname"
          className={`px-5 py-3 mt-1 border rounded-full ${getBorderClass("surname")}`}
        />
        {errors.surname && <p className="text-red-500">{errors.surname}</p>}
      </div>
      <div className="flex flex-col w-[320px] relative">
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
          className={`px-5 py-3 mt-1 border rounded-full ${getBorderClass("birthdate")} placeholder-gray-400`}
        />
        {errors.birthdate && <p className="text-red-500">{errors.birthdate}</p>}
      </div>
      <div className="flex flex-col w-[320px]">
        <input
          id="address"
          name="address"
          type="text"
          value={formData.address}
          onChange={(e) => handleLiveValidation(e, "address")}
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
