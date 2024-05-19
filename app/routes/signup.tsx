import {
  json,
  ActionFunction,
  LoaderFunction,
  redirect,
} from "@remix-run/node";
import { sessionStorage } from "./utils/session.server";
import { useActionData, Link } from "@remix-run/react";
import { Layout } from "app/components/layout";
import { Textfield } from "~/components/textfield";
import { ActionData } from "./login";
import React, { useState } from "react";
import { createUser } from "./utils/user.server";
import { authenticator } from "./utils/auth.server";

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
        <form method="POST" className="flex flex-col items-center gap-3">
          {actionData?.error && <p className="error">{actionData.error}</p>}
          <Textfield
            htmlFor="email"
            name="email"
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange(e, "email")}
          />
          <Textfield
            htmlFor="password"
            name="password"
            label="Password"
            type="password"
            value={formData.password}
            onChange={(e) => handleInputChange(e, "password")}
          />
          <Textfield
            htmlFor="name"
            name="name"
            label="Name"
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange(e, "name")}
          />
          <Textfield
            htmlFor="surname"
            name="surname"
            label="Surname"
            type="text"
            value={formData.surname}
            onChange={(e) => handleInputChange(e, "surname")}
          />

          <Textfield
            htmlFor="birthdate"
            name="birthdate"
            label="Date of Birth"
            type="text"
            value={formData.birthdate}
            onChange={handleDateChange}
            pattern="\d{2}\.\d{2}\.\d{4}"
            placeholder="Date of birth" // Initial placeholder
            focusPlaceholder="DD.MM.YYYY" // Placeholder on focus
          />

          <Textfield
            htmlFor="address"
            name="address"
            label="Address"
            type="text"
            value={formData.address}
            onChange={(e) => handleInputChange(e, "address")}
          />
          <button
            type="submit"
            name="_action"
            value="register"
            className="bg-blue-700 text-white py-3 w-[320px] rounded-full mt-3"
          >
            Signup
          </button>
          <div>
            {"Already have an account?"}{" "}
            <Link to="/login" className="text-blue-700">
              Login here
            </Link>
          </div>
        </form>
      </div>
    </Layout>
  );
}
