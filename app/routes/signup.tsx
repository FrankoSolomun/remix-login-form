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
  const birthdateStr = form.get("birthdate") as string | null; // Cast as string or null
  const address = form.get("address");

  if (
    typeof email !== "string" ||
    typeof password !== "string" ||
    typeof name !== "string" ||
    typeof surname !== "string" ||
    !birthdateStr ||
    typeof address !== "string"
  ) {
    return json({ error: "Invalid Form Data" }, { status: 400 });
  }

  const birthdate = new Date(birthdateStr); // Convert string to Date object
  if (isNaN(birthdate.getTime())) {
    // Check if the date is valid
    return json({ error: "Invalid birthdate" }, { status: 400 });
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

  // Check if the user creation was successful
  if ("error" in creationResult) {
    // Return the error if user creation failed
    return json({ error: creationResult.error }, { status: 400 });
  }

  // If user creation was successful, retrieve or create a new session
  const session = await sessionStorage.getSession(
    request.headers.get("Cookie"),
  );

  // Set the user ID in the session
  session.set("userId", creationResult.user.id); // Store user identifier in session

  // Commit the session and get the Set-Cookie header
  const cookie = await sessionStorage.commitSession(session);

  // Return a redirect response with the Set-Cookie header
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
            label="Date of birth"
            type="date"
            value={formData.birthdate}
            onChange={(e) => handleInputChange(e, "birthdate")}
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
            className="bg-blue-500 text-white p-2 rounded-lg"
          >
            Signup
          </button>
          <Link to="/login" className="text-blue-500">
            {"Already have an account? Login here"}
          </Link>
        </form>
      </div>
    </Layout>
  );
}
