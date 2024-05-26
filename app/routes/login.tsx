import React, { useState, useCallback } from "react";
import { ActionFunction, LoaderFunction } from "@remix-run/node";
import { useActionData, Link } from "@remix-run/react";
import { Layout } from "app/components/layout";
import { Textfield } from "~/components/textfield";
import { authenticator } from "./utils/auth.server";
import { SocialsProvider } from "remix-auth-socials";
import { GoogleIcon } from "~/icons/icons";
import debounce from "lodash.debounce";

export interface ActionData {
  fields?: {
    email?: string;
    password?: string;
    confirmPassword?: string;
    name?: string;
    surname?: string;
    birthdate?: string;
    address?: string;
  };
  error?: string;
  details?: string;
}

export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    successRedirect: "/",
  });
  return user;
};

export const action: ActionFunction = async ({ request }) => {
  return authenticator.authenticate("form", request, {
    successRedirect: "/",
    failureRedirect: "/login",
  });
};

export default function Login() {
  const actionData = useActionData<ActionData>();
  const [formData, setFormData] = useState({
    email: actionData?.fields?.email || "",
    password: actionData?.fields?.password || "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const isValidEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validateField = (field: keyof typeof formData, value: string) => {
    const newErrors = { ...errors };

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
      } else {
        newErrors.password = "";
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
    handleInputChange(e, field);
    debouncedValidateField(field as keyof typeof formData, e.target.value);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string,
  ) => {
    setFormData((form) => ({ ...form, [field]: event.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    const valid = validateInputs();
    if (!valid) {
      e.preventDefault(); // Prevent form submission if validation fails
    }
  };

  const validateInputs = () => {
    const newErrors = {
      email: "",
      password: "",
    };

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Provide a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === "");
  };

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center h-screen">
        <h2 className="text-[30px]">Login</h2>
        {actionData?.error && (
          <p className="text-red-500">
            {actionData.error} <br />
            {actionData.details}
          </p>
        )}
        <form
          method="POST"
          className="flex flex-col items-center gap-3"
          onSubmit={handleSubmit}
          noValidate // Disable default HTML validation
        >
          <Textfield
            htmlFor="email"
            name="email"
            label="Email"
            value={formData.email}
            onChange={(e) => handleLiveValidation(e, "email")}
            error={errors.email}
          />
          <Textfield
            htmlFor="password"
            name="password"
            label="Password"
            type="password"
            value={formData.password}
            onChange={(e) => handleLiveValidation(e, "password")}
            error={errors.password}
          />
          <button
            type="submit"
            className="bg-blue-700 text-white py-3 w-[320px] rounded-full mt-2"
          >
            Login
          </button>
        </form>
        <div className="mt-2">
          <Link to="/forgot-password" className="text-blue-700">
            Forgot Password?
          </Link>
        </div>
        <p className="my-5">{"----- or go with -----"}</p>
        <form
          action={`/auth/${SocialsProvider.GOOGLE}`}
          method="post"
          className="mt-2"
        >
          <button className="bg-white py-3 w-[320px] rounded-full flex justify-center items-center">
            <GoogleIcon className="w-6 h-6 mr-2" />
            Login with Google
          </button>
        </form>
        <div className="mt-2">
          {"Don't have an account?"}{" "}
          <Link to="/signup" className="text-blue-700">
            Sign up here
          </Link>
        </div>
      </div>
    </Layout>
  );
}
