import { LoaderFunction } from "@remix-run/node";
import { authenticator } from "~/routes/utils/auth.server";
import { SocialsProvider } from "remix-auth-socials";

export const loader: LoaderFunction = async ({ request }) => {
  return authenticator.authenticate(SocialsProvider.GOOGLE, request, {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  });
};
