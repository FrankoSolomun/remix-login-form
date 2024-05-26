import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function createTransporter() {
  try {
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

export async function sendPasswordResetEmail(email) {
  try {
    const user = await getUserByEmail(email); // Ensure this function retrieves the user correctly
    if (!user) {
      throw new Error("User not found");
    }

    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      throw new Error("JWT secret is not defined in environment variables");
    }

    const token = sign({ userId: user.id }, jwtSecret, {
      expiresIn: "1h",
    });

    await savePasswordResetToken(user.id, token); // Ensure this function saves the token correctly

    const resetLink = `${process.env.APP_URL}/reset-password?token=${token}`;

    const transporter = await createTransporter();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Password Reset Request",
      html: `<p>You requested a password reset. Click <a href="${resetLink}">here</a> to reset your password.</p>`,
    };

    console.log("Sending password reset email...");
    const info = await transporter.sendMail(mailOptions);
    console.log("Password reset email sent:", info);
  } catch (error) {
    console.error("Failed to send password reset email:", error);
    throw new Error("Failed to send password reset email.");
  }
}

// Testing the email functionality
async function testEmailFunctionality() {
  try {
    const transporter = await createTransporter();
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // sending to the same address for testing
      subject: "Test Email",
      text: "This is a test email to verify your SMTP configuration.",
    };

    console.log("Sending test email...");
    const info = await transporter.sendMail(mailOptions);
    console.log("Test email sent:", info);
  } catch (error) {
    console.error("Failed to send test email:", error);
  }
}

testEmailFunctionality();
