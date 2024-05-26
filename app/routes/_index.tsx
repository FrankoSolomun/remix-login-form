import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Layout } from "~/components/layout";
import { authenticator } from "./utils/auth.server";

export interface User {
  id: string;
  email: string;
  name: string;
  surname: string;
  address: string;
  birthdate: string;
  profilePicture: string;
  type: string;
}

export interface LoaderData {
  user: User;
  isAuthenticated: boolean;
}

export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request);
  return json({ user, isAuthenticated: Boolean(user) });
};

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const { user, isAuthenticated } = useLoaderData<LoaderData>();

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-[50px]">{"Frenki's account creation form!"}</h1>
        <p className="text-[20px] text-gray-400 leading-3 mb-7">
          {"This is a simple account creation form using Remix."}
        </p>
        <div className="flex flex-col gap-2 items-center">
          {!isAuthenticated && (
            <>
              <a href="/login">
                <button className="bg-blue-500 text-white p-2 rounded-lg w-36">
                  Log in
                </button>
              </a>
              <a href="/signup">
                <button className="bg-white text-blue-500 p-2 rounded-lg w-36">
                  Sign up
                </button>
              </a>
            </>
          )}
          {isAuthenticated && (
            <a href="/dashboard">
              <button className="bg-blue-500 text-white p-2 rounded-lg w-36">
                Dashboard
              </button>
            </a>
          )}
        </div>
      </div>
    </Layout>
  );
}
