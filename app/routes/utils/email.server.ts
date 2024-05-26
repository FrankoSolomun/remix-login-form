import nodemailer from "nodemailer";
import pkg from "jsonwebtoken";
import { getUserByEmail, savePasswordResetToken } from "./user.server";

const { sign } = pkg;

async function createTransporter() {
  try {
    console.log("Creating transporter...");
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // This should be your app-specific password
      },
    });
    return transporter;
  } catch (error) {
    console.error("Failed to create transporter:", error);
    throw error;
  }
}

export async function sendPasswordResetEmail(email: string) {
  try {
    console.log("Fetching user by email...");
    const user = await getUserByEmail(email);
    if (!user) {
      throw new Error("User not found");
    }
    console.log("User found:", user);

    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      throw new Error("JWT secret is not defined in environment variables");
    }

    console.log("Creating JWT token...");
    const token = sign({ userId: user.id }, jwtSecret, {
      expiresIn: "1h",
    });
    console.log("JWT token created:", token);

    console.log("Saving password reset token...");
    await savePasswordResetToken(user.id, token);
    console.log("Password reset token saved");

    const resetLink = `${process.env.APP_URL}/reset-password?token=${token}`;
    console.log("Password reset link:", resetLink);

    const transporter = await createTransporter();

    console.log("Sending password reset email...");
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Password Reset Request",
      html: `<p>You requested a password reset. Click <a href="${resetLink}">here</a> to reset your password.</p>`,
    });

    console.log(`Password reset email sent to ${email}`);
  } catch (error) {
    console.error("Failed to send password reset email:", error);
    throw new Error("Failed to send password reset email.");
  }
}

// Testing the email functionality
// async function testEmailFunctionality() {
//   try {
//     const transporter = await createTransporter();
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: process.env.EMAIL_USER, // sending to the same address for testing
//       subject: "Test Email",
//       text: "This is a test email to verify your SMTP configuration.",
//     };

//     console.log("Sending test email...");
//     const info = await transporter.sendMail(mailOptions);
//     console.log("Test email sent:", info);
//   } catch (error) {
//     console.error("Failed to send test email:", error);
//   }
// }

// testEmailFunctionality();
