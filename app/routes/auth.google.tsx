import { authenticator } from "./utils/auth.server";
import { ActionFunction } from "@remix-run/node";
import { SocialsProvider } from "remix-auth-socials";

export const action: ActionFunction = async ({ request }) => {
  return authenticator.authenticate(SocialsProvider.GOOGLE, request, {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  });
};
