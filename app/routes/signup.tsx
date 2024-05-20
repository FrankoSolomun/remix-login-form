import {
  json,
  ActionFunction,
  LoaderFunction,
  redirect,
} from "@remix-run/node";
import { sessionStorage } from "./utils/session.server";
import { useActionData, Link } from "@remix-run/react";
import { Layout } from "app/components/layout";
import React, { useState } from "react";
import { createUser } from "./utils/user.server";
import { authenticator } from "./utils/auth.server";
import RegisterForm from "~/components/RegisterForm";
import { ActionData } from "./login";

export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    successRedirect: "/",
  });
  return { user };
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const email = form.get("email");
  const password = form.get("password");
  const name = form.get("name");
  const surname = form.get("surname");
  const birthdate = form.get("birthdate") as string; // Cast to string
  const address = form.get("address");

  // Validate all fields for proper types and presence
  if (
    typeof email !== "string" ||
    email.trim() === "" ||
    typeof password !== "string" ||
    password.trim() === "" ||
    typeof name !== "string" ||
    name.trim() === "" ||
    typeof surname !== "string" ||
    surname.trim() === "" ||
    typeof birthdate !== "string" ||
    birthdate.trim() === "" ||
    typeof address !== "string" ||
    address.trim() === ""
  ) {
    return json(
      { error: "All fields are required and must be valid." },
      { status: 400 },
    );
  }

  // Validate birthdate format (DD.MM.YYYY)
  const datePattern = /^\d{2}\.\d{2}\.\d{4}$/;
  if (!datePattern.test(birthdate)) {
    return json({ error: "Invalid birthdate format" }, { status: 400 });
  }

  // Attempt to create the user
  const creationResult = await createUser({
    email,
    password,
    name,
    surname,
    birthdate,
    address,
  });

  if ("error" in creationResult) {
    return json({ error: creationResult.error }, { status: 400 });
  }

  // Session management after successful registration
  const session = await sessionStorage.getSession(
    request.headers.get("Cookie"),
  );

  session.set("userId", creationResult.user.id); // Store user ID in session

  const cookie = await sessionStorage.commitSession(session);

  return redirect("/login", {
    headers: {
      "Set-Cookie": cookie,
    },
  });
};

export default function Signup() {
  const actionData = useActionData<ActionData>();
  const [formData, setFormData] = useState({
    email: actionData?.fields?.email || "",
    password: actionData?.fields?.password || "",
    name: actionData?.fields?.name || "",
    surname: actionData?.fields?.surname || "",
    birthdate: actionData?.fields?.birthdate || "",
    address: actionData?.fields?.address || "",
  });

  // Handle input change
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string,
  ) => {
    setFormData((form) => ({ ...form, [field]: event.target.value }));
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = event.target;
    const inputType = (event.nativeEvent as InputEvent).inputType;

    // Normalize the input to only contain numbers and replace any misplaced dots
    value = value.replace(/[^0-9.]/g, "").replace(/\.+/g, "");

    // Format the string with dots in the correct places
    if (value.length > 2 && value[2] !== ".") {
      value = value.slice(0, 2) + "." + value.slice(2);
    }
    if (value.length > 5 && value[5] !== ".") {
      value = value.slice(0, 5) + "." + value.slice(5);
    }

    // Cut the value to the maximum length of 10 characters (DD.MM.YYYY)
    if (value.length > 10) {
      value = value.slice(0, 10);
    }

    // Handle deletion specifically, maintaining the position of dots
    if (inputType === "deleteContentBackward") {
      // Remove any trailing dots left over after deletion
      value = value.replace(/(\.$)|(\.\.)/g, "");
    }

    // Update form state
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: value,
    }));
  };

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center h-screen">
        <RegisterForm
          formData={formData}
          handleInputChange={handleInputChange}
          handleDateChange={handleDateChange}
        />
        <div>
          {"Already have an account?"}{" "}
          <Link to="/login" className="text-blue-700">
            Login here
          </Link>
        </div>
      </div>
    </Layout>
  );
}
