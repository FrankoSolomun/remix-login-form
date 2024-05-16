import React from "react";
import {
  redirect,
  ActionFunction,
  json,
  LoaderFunction,
} from "@remix-run/node";
import { useActionData, Form } from "@remix-run/react";
import { Layout } from "~/components/layout";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { useLoaderData } from "@remix-run/react";
import { authenticator } from "./utils/auth.server";
import { LoaderData } from "./_index";

const prisma = new PrismaClient();

interface ActionData {
  error?: string;
}

export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  if (!user) {
    throw new Response("Not Found", { status: 404 });
  }

  const userData = await prisma.user.findUnique({
    where: { id: user },
  });

  if (!userData) {
    throw new Response("User Not Found", { status: 404 });
  }

  const userWithFormattedDate = {
    ...userData,
    birthdate: userData.birthdate.toISOString().substring(0, 10),
  };

  return json({ user: userWithFormattedDate });
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  console.log("Form Data Received:", Object.fromEntries(formData));

  const oldPassword = formData.get("oldPassword");
  const newPassword = formData.get("newPassword");
  const userId = formData.get("userId");

  console.log("Parsed Form Data:", { oldPassword, newPassword, userId });

  if (
    typeof oldPassword !== "string" ||
    oldPassword.trim() === "" ||
    typeof newPassword !== "string" ||
    newPassword.trim() === "" ||
    typeof userId !== "string" ||
    userId.trim() === ""
  ) {
    console.log("Invalid form submission detected");
    return json({ error: "Invalid form submission" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) {
    return json({ error: "User not found" }, { status: 404 });
  }

  const passwordMatch = await bcrypt.compare(oldPassword, user.password);
  if (!passwordMatch) {
    return json(
      { error: "The current password is incorrect." },
      { status: 400 },
    );
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);
  await prisma.user.update({
    where: { id: userId },
    data: { password: hashedPassword },
  });

  return redirect("/dashboard");
};

export default function ChangePassword() {
  const actionData = useActionData<ActionData>();
  const { user } = useLoaderData<LoaderData>();

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="mb-10 text-bold text-[30px]">Change Password</h1>
        <Form method="post" className="flex flex-col items-center gap-3">
          <input type="hidden" name="userId" value={user.id} />
          {actionData?.error && <p>{actionData.error}</p>}
          <div className="flex flex-col">
            <label
              htmlFor="oldPassword"
              className="text-sm font-semibold text-gray-700"
            >
              Current Password:
            </label>
            <input
              id="oldPassword"
              name="oldPassword"
              type="password"
              className="p-2 mt-1 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="newPassword"
              className="text-sm font-semibold text-gray-700"
            >
              New Password:
            </label>
            <input
              id="newPassword"
              name="newPassword"
              type="password"
              className="p-2 mt-1 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-full px-5 mt-4"
          >
            Update Password
          </button>
        </Form>
      </div>
    </Layout>
  );
}
