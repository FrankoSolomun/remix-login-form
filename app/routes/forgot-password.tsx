import React, { useState } from "react";
import { ActionFunction } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import { Layout } from "~/components/layout";
import { sendPasswordResetEmail } from "./utils/email.server";

interface ActionData {
  error?: string;
  success?: string;
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");

  if (typeof email !== "string" || email.trim() === "") {
    return { error: "Email is required" };
  }

  // Send password reset email
  try {
    await sendPasswordResetEmail(email);
    return { success: "Password reset email sent successfully." };
  } catch (error) {
    return { error: "Failed to send password reset email." };
  }
};

export default function ForgotPassword() {
  const actionData = useActionData<ActionData>();
  const [email, setEmail] = useState("");

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center h-screen">
        <h2 className="text-[30px]">Forgot Password</h2>
        {actionData?.error && (
          <p className="text-red-500">{actionData.error}</p>
        )}
        {actionData?.success && (
          <p className="text-green-500">{actionData.success}</p>
        )}
        <form method="POST" className="flex flex-col items-center gap-3">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="px-5 py-3 mt-1 border rounded-full w-[320px]"
          />
          <button
            type="submit"
            className="bg-blue-700 text-white py-3 w-[320px] rounded-full mt-2"
          >
            Send Password Reset Email
          </button>
        </form>
      </div>
    </Layout>
  );
}
