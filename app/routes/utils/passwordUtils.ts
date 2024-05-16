import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { getSession } from "./getSession";

const prisma = new PrismaClient();

export async function checkPassword(
  request: Request,
  submittedPassword: string,
): Promise<boolean> {
  const session = await getSession(request);
  const userId = session.get("userId");

  console.log("Session retrieved, User ID:", userId); // Log the user ID retrieved from session

  if (!userId) {
    console.error("User ID not found in session.");
    return false;
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    console.error("User not found with ID:", userId);
    return false;
  }

  const passwordMatch = await bcrypt.compare(submittedPassword, user.password);
  console.log("Password check:", {
    submittedPassword,
    hashedStoredPassword: user.password,
    matchResult: passwordMatch,
  }); // Log the result of the password comparison

  return passwordMatch;
}

export async function updatePassword(
  request: Request,
  newPassword: string,
): Promise<void> {
  const session = await getSession(request);
  const userId = session.get("userId");

  console.log("Session retrieved for update, User ID:", userId); // Log the user ID retrieved from session for update

  if (!userId) {
    throw new Error("User ID not found in session.");
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);
  await prisma.user.update({
    where: { id: userId },
    data: { password: hashedPassword },
  });

  console.log("Password updated for User ID:", userId); // Log the confirmation of password update
}
