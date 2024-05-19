import { Authenticator, AuthorizationError } from "remix-auth";
import { sessionStorage } from "./session.server";
import { FormStrategy } from "remix-auth-form";
import { GoogleStrategy } from "remix-auth-google";
import { prisma } from "./prisma.server";
import bcrypt from "bcryptjs";

const sessionSecret = process.env.SESSION_SECRET || "";
const googleClientId = process.env.GOOGLE_CLIENT_ID || "";
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET || "";

if (!sessionSecret) {
  console.error("SESSION_SECRET not set");
  throw new Error("SESSION_SECRET is required");
}
if (!googleClientId) {
  console.error("GOOGLE_CLIENT_ID not set");
  throw new Error("GOOGLE_CLIENT_ID is required");
}
if (!googleClientSecret) {
  console.error("GOOGLE_CLIENT_SECRET not set");
  throw new Error("GOOGLE_CLIENT_SECRET is required");
}

// Initialize the Authenticator
const authenticator = new Authenticator<string>(sessionStorage);

// Form Strategy for email and password authentication
const formStrategy = new FormStrategy(async ({ form }) => {
  const email = form.get("email");
  const password = form.get("password");

  if (
    typeof email !== "string" ||
    !email ||
    typeof password !== "string" ||
    !password
  ) {
    console.error("Invalid form data received", { email, password });
    throw new AuthorizationError("Email or password is missing or invalid");
  }

  console.log("Authenticating:", { email, password });

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      console.log("User not found for email:", email);
      throw new AuthorizationError("User not found");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      console.log("Password mismatch for user:", email);
      throw new AuthorizationError("Invalid email or password");
    }

    const session = await sessionStorage.getSession();
    session.set("userId", user.id); // Store the user ID in the session
    const commitResult = await sessionStorage.commitSession(session);

    console.log("User authenticated and session committed:", user.id);
    console.log("Session commit result (cookie header):", commitResult);

    return user.id;
  } catch (error) {
    console.error(
      "Error during database access or password verification:",
      error,
    );
    throw new Error("Internal server error");
  }
});

// Google Strategy for Google OAuth2 authentication
const googleStrategy = new GoogleStrategy(
  {
    clientID: googleClientId,
    clientSecret: googleClientSecret,
    callbackURL: "http://localhost:3000/auth/google/callback",
  },
  async ({ accessToken, refreshToken, extraParams, profile }) => {
    console.log("Received Google profile data:", profile);

    let user = await prisma.user.findUnique({
      where: { email: profile.emails[0].value },
    });

    if (!user) {
      console.log("Creating new user from Google profile");
      user = await prisma.user.create({
        data: {
          email: profile.emails[0].value,
          name: profile.name.givenName,
          surname: profile.name.familyName,
          password: bcrypt.hashSync("defaultPassword", 10),
          address: "defaultAddress",
          birthdate: "defaultBirthdate",
        },
      });
    } else {
      console.log("User found in database", user);
    }

    return user.id;
  },
);

// Register the strategies with the authenticator
authenticator.use(formStrategy, "form");
authenticator.use(googleStrategy, "google");

export { authenticator };
