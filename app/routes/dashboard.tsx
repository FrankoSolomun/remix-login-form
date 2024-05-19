import React, { useState } from "react";
import { Layout } from "~/components/layout";
import { LoaderFunction, json, ActionFunction } from "@remix-run/node";
import { useLoaderData, useFetcher } from "@remix-run/react";
import { authenticator } from "./utils/auth.server";
import { User, LoaderData } from "./_index";
import { PrismaClient } from "@prisma/client";
import { PencilIcon, UploadIcon } from "~/icons/icons";
import DashboardHeader from "~/components/DashboardHeader";

const prisma = new PrismaClient();

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  if (!userId) {
    throw new Response("Not Found", { status: 404 });
  }

  const userData = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!userData) {
    throw new Response("User Not Found", { status: 404 });
  }

  return json({ user: userData });
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const actionType = form.get("action");

  if (actionType === "updateUser") {
    const userId = form.get("userId") as string;
    const email = form.get("email") as string;
    const name = form.get("name") as string;
    const surname = form.get("surname") as string;
    const address = form.get("address") as string;
    const birthdate = form.get("birthdate") as string;
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        email,
        name,
        surname,
        address,
        birthdate,
        profilePicture: form.get("profilePicture") as string,
      },
    });

    console.log("User updated:", userId, updatedUser);
    return json(updatedUser);
  } else if (actionType === "uploadProfilePicture") {
    const userId = form.get("userId") as string;
    const profilePictureUrl = form.get("profilePictureUrl") as string;

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { profilePicture: profilePictureUrl },
    });

    console.log("Profile picture updated:", profilePictureUrl);
    return json(updatedUser);
  }
  return null;
};

export default function Dashboard() {
  const fetcher = useFetcher();
  const { user } = useLoaderData<LoaderData>();

  if (!user) {
    return <div>Loading...</div>;
  }

  const [editMode, setEditMode] = useState<keyof User | null>(null);
  const [formData, setFormData] = useState<User>({
    ...user,
  } as User);

  const handleEdit = (field: keyof User) => {
    setEditMode(field);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const saveChanges = () => {
    if (!user) return; // Early return if user is null
    const dataToSubmit = {
      ...formData,
      userId: user.id,
      action: "updateUser",
    };
    fetcher.submit(dataToSubmit, { method: "post" });
    setEditMode(null);
  };

  const userDetails: { label: string; value: string; field: keyof User }[] = [
    { label: "Email", value: user.email, field: "email" },
    { label: "Name", value: user.name, field: "name" },
    { label: "Surname", value: user.surname, field: "surname" },
    { label: "Address", value: user.address, field: "address" },
    { label: "Date of Birth", value: formData.birthdate, field: "birthdate" },
  ];

  return (
    <Layout>
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="bg-white w-[500px] h-[500px] py-6 px-8 rounded-[30px]">
          <DashboardHeader
            profilePicture={user.profilePicture}
            userName={user.name}
          />
          <div className="gap-2 flex flex-col">
            {userDetails.map((detail) => (
              <div
                key={detail.field}
                className={`px-6 py-[6px] rounded-3xl justify-between flex items-center h-[56px] ${
                  editMode === detail.field
                    ? "bg-gray-100"
                    : "hover:bg-gray-100"
                }`}
              >
                {editMode === detail.field ? (
                  <>
                    <div className="flex justify-between w-full">
                      <input
                        type="text" // Always treat birthdate as text
                        name={detail.field}
                        value={formData[detail.field]}
                        onChange={handleChange}
                        className="bg-transparent focus:outline-none w-full"
                      />
                      <button
                        className="bg-blue-500 flex justify-center items-center p-2 rounded-full"
                        onClick={saveChanges}
                      >
                        <UploadIcon className="w-5 h-5 stroke-white" />
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="group w-full flex justify-between items-center">
                      <div>
                        <p className="text-gray-400 leading-[20px]">
                          {detail.label}
                        </p>
                        <p>{detail.value}</p>
                      </div>
                      <button
                        onClick={() => handleEdit(detail.field)}
                        className="flex justify-center items-center p-2 rounded-full hover:bg-gray-300"
                      >
                        <PencilIcon className="w-4 h-4 hidden group-hover:block" />
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        <a
          href="/change-password"
          className="mt-5 bg-blue-700 text-white px-2 py-3 rounded-[30px] w-full max-w-[500px] flex justify-center items-center"
        >
          <p>Change password</p>
        </a>
      </div>
    </Layout>
  );
}
