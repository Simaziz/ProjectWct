import { connectToDatabase } from "@/utils/db";
import User from "@/models/User";
import jwt from "jsonwebtoken";

export async function GET(req) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader) {
    return new Response(
      JSON.stringify({ message: "Authorization header missing" }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    );
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return new Response(
      JSON.stringify({ message: "Token not provided" }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined in environment variables");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    await connectToDatabase();

    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return new Response(
        JSON.stringify({ message: "User not found" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ user }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error fetching user profile:", error);

    if (error.name === "TokenExpiredError") {
      return new Response(
        JSON.stringify({ message: "Token has expired" }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    } else if (error.name === "JsonWebTokenError") {
      return new Response(
        JSON.stringify({ message: "Invalid token" }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    } else {
      return new Response(
        JSON.stringify({ message: "Internal server error" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  }
}

export const runtime = 'edge'; // Optional: You can use 'edge' runtime if needed for performance optimization
