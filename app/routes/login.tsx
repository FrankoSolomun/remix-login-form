import React, { useState } from "react";
import {
  ActionFunction,
  LoaderFunction,
  json,
  redirect,
} from "@remix-run/node";
import { useActionData, Link } from "@remix-run/react";
import { Layout } from "app/components/layout";
import { Textfield } from "~/components/textfield";
import { authenticator } from "./utils/auth.server";
import { SocialsProvider } from "remix-auth-socials";

export interface ActionData {
  fields?: {
    email?: string;
    password?: string;
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
          <h2 className="text-[30px]">Login</h2>
          {actionData?.error && (
            <p className="text-red-500">
              {actionData.error} <br />
              {actionData.details}
            </p>
          )}
          <Textfield
            htmlFor="email"
            name="email"
            label="Email"
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
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-lg"
          >
            Login
          </button>
          <Link to="/signup" className="text-blue-500">
            {"Don't have an account? Register here"}
          </Link>
        </form>
        <form action={`/auth/${SocialsProvider.GOOGLE}`} method="post">
          <button>Login with Google</button>
        </form>
      </div>
    </Layout>
  );
}
