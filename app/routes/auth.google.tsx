import { authenticator } from "./utils/auth.server";
import { ActionFunction, ActionFunctionArgs } from "@remix-run/node";
import { SocialsProvider } from "remix-auth-socials";

export const action: ActionFunction = ({ request }: ActionFunctionArgs) => {
  return authenticator.authenticate(SocialsProvider.GOOGLE, request, {
    successRedirect: "/dashboard",
    failureRedirect: "/",
  });
};
