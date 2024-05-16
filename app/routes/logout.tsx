import { ActionFunction } from "@remix-run/node";
import { authenticator } from "./utils/auth.server";

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const action = form.get("action");

  if (action === "logout") {
    return await authenticator.logout(request, { redirectTo: "/login" });
  }

  return null;
};
