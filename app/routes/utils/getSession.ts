import { sessionStorage } from "./session.server";

export async function getSession(request: Request) {
  return await sessionStorage.getSession(request.headers.get("Cookie"));
}
