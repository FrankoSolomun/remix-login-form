import { Header } from "./Header";
import { useLoaderData } from "@remix-run/react";
import { LoaderData } from "~/routes/_index";

export function Layout({ children }: { children: React.ReactNode }) {
  const data = useLoaderData<LoaderData>();

  const isAuthenticated = data?.user ? true : false;

  return (
    <div className="h-screen w-full bg-gray-200">
      <Header isAuthenticated={isAuthenticated} />
      {children}
    </div>
  );
}
