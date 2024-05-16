import { LoaderFunction, redirect } from "@remix-run/node";
import { sessionStorage } from "~/routes/utils/session.server";

export const action: LoaderFunction = async ({ request }) => {
  const session = await sessionStorage.getSession(
    request.headers.get("Cookie"),
  );
  return redirect("/login", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session),
    },
  });
};
