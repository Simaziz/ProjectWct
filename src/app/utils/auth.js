import jwt from "jsonwebtoken";

export const verifyToken = (req) => {
  // Check if Authorization header exists and split it
  const token = req.headers.get("authorization")?.split(" ")[1];
  
  if (!token) {
    throw new Error("Authorization token missing.");
  }

  try {
    // Verify token using the secret key
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    // If token is invalid, throw an error
    throw new Error("Invalid token.");
  }
};
