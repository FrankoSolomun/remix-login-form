import React, { useState } from "react";
import { useActionData, useLoaderData, Link } from "@remix-run/react";
import { Layout } from "~/components/layout";

import {
  ActionFunction,
  LoaderFunction,
  json,
  redirect,
} from "@remix-run/node";
import { verifyPasswordResetToken, resetPassword } from "./utils/user.server";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");

  if (!token) {
    return json({ error: "Token is required" }, { status: 400 });
  }

  const valid = await verifyPasswordResetToken(token);
  if (!valid) {
    return json({ error: "Invalid or expired token" }, { status: 400 });
  }

  return json({ token });
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const token = formData.get("token");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  if (
    typeof password !== "string" ||
    typeof confirmPassword !== "string" ||
    password !== confirmPassword
  ) {
    return { error: "Passwords do not match" };
  }

  try {
    await resetPassword(token as string, password);
    return { success: "Password reset successfully" };
  } catch (error) {
    return { error: "Failed to reset password" };
  }
};

interface ActionData {
  error?: string;
  success?: string;
}

interface LoaderData {
  token: string;
  error?: string;
}

export default function ResetPassword() {
  const actionData = useActionData<ActionData>();
  const { token, error } = useLoaderData<LoaderData>();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center h-screen">
        <h2 className="text-[30px]">Reset Password</h2>
        {error && <p className="text-red-500">{error}</p>}
        {actionData?.error && (
          <p className="text-red-500">{actionData.error}</p>
        )}
        {actionData?.success && (
          <p className="text-green-500">{actionData.success}</p>
        )}
        {!error && !actionData?.success && (
          <form method="POST" className="flex flex-col items-center gap-3">
            <input type="hidden" name="token" value={token} />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New Password"
              className="px-5 py-3 mt-1 border rounded-full w-[320px]"
            />
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="px-5 py-3 mt-1 border rounded-full w-[320px]"
            />
            <button
              type="submit"
              className="bg-blue-700 text-white py-3 w-[320px] rounded-full mt-2"
            >
              Reset Password
            </button>
          </form>
        )}
        {actionData?.success && (
          <Link to="/login" className="text-blue-700">
            Go to login
          </Link>
        )}
      </div>
    </Layout>
  );
}
