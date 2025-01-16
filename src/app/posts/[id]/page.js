"use client"
import { useRouter } from "next/navigation";
import CommentSection from "src/app/comments"; // Adjust the path as needed

export default function PostPage({ params }) {
  const { id } = params;

  return (
    <div>
      <h1>Post ID: {id}</h1>
      <p>This is the page for post {id}.</p>

      <CommentSection postId={id} />
    </div>
  );
}
