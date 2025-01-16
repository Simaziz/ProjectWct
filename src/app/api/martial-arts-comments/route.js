import { NextResponse } from "next/server";

let comments = []; // In-memory storage for demo purposes

// Handle GET requests
export async function GET() {
  return NextResponse.json(comments);
}

// Handle POST requests
export async function POST(request) {
  try {
    const { name, message } = await request.json();
    const newComment = {
      id: Date.now(),
      name,
      message,
      approved: true, // Automatically approve for simplicity
    };
    comments.push(newComment);
    return NextResponse.json({ success: true, comment: newComment });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to add comment." }, { status: 500 });
  }
}
