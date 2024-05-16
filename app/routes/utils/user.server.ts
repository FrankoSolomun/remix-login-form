import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { RegisterForm } from "./type.server";

const prisma = new PrismaClient();

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
