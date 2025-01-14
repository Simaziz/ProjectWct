import jwt from "jsonwebtoken";

export async function GET(req) {
  // Extract the token from the Authorization header
  const token = req.headers.get("authorization")?.split(" ")[1];

  // If no token is provided, return an unauthorized response
  if (!token) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), { status: 401 });
  }

  try {
    // Verify the token using the JWT_SECRET
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // If the token is valid, proceed with the request
    return new Response(JSON.stringify({ message: "Authorized", user: decoded }), {
      status: 200,
    });
  } catch (error) {
    // If the token is invalid or expired, return an unauthorized response
    return new Response(JSON.stringify({ message: "Invalid token" }), { status: 401 });
  }
}