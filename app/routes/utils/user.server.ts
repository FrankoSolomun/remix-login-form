import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { RegisterForm } from "./type.server";
import pkg from "jsonwebtoken";

const { sign, verify } = pkg;
const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables");
}

export const createUser = async (user: RegisterForm) => {
  const existingUser = await prisma.user.findUnique({
    where: { email: user.email },
  });

  if (existingUser) {
    return { error: "Email already in use." };
  }

  const passwordHash = await bcrypt.hash(user.password, 12);
  try {
    const newUser = await prisma.user.create({
      data: {
        email: user.email,
        password: passwordHash,
        name: user.name,
        surname: user.surname,
        birthdate: user.birthdate,
        address: user.address,
      },
    });
    return { user: newUser };
  } catch (error) {
    console.error("Failed to create user:", error);
    return { error: "Failed to create user due to server error." };
  }
};

export const getUserByEmail = async (email: string) => {
  return prisma.user.findUnique({ where: { email } });
};

export const savePasswordResetToken = async (userId: string, token: string) => {
  console.log("Saving token to the database for user ID:", userId);
  await prisma.passwordResetToken.upsert({
    where: { userId },
    update: { token },
    create: { userId, token },
  });
  console.log("Token saved successfully");
};

export const verifyPasswordResetToken = async (token: string) => {
  try {
    console.log("Verifying token:", token);
    const payload = verify(token, JWT_SECRET) as {
      userId: string;
      exp: number;
    };
    console.log("Token payload:", payload);

    const currentTime = Math.floor(Date.now() / 1000);
    if (payload.exp < currentTime) {
      console.log("Token is expired");
      await prisma.passwordResetToken.delete({ where: { token } });
      return false;
    }

    const tokenRecord = await prisma.passwordResetToken.findUnique({
      where: { token },
    });
    console.log("Token record from DB:", tokenRecord);

    return tokenRecord ? true : false;
  } catch (error) {
    console.error("Token verification error:", error);
    return false;
  }
};

export const resetPassword = async (token: string, newPassword: string) => {
  try {
    console.log("Resetting password with token:", token);
    const payload = verify(token, JWT_SECRET) as { userId: string };
    const hashedPassword = await bcrypt.hash(newPassword, 12);
    const userId = payload.userId;

    console.log("Updating password for user ID:", userId);
    await prisma.user.update({
      where: { id: userId },
      data: { password: hashedPassword },
    });

    console.log("Deleting password reset token from the database");
    await prisma.passwordResetToken.delete({ where: { token } });
    console.log("Password reset token deleted successfully");
  } catch (error) {
    console.error("Failed to reset password:", error);
    throw error;
  }
};
