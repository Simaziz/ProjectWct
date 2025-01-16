import { useSession } from "next-auth/react";
import CommentSection from "src/app/components/Comments"; // Import the comment section component

const HomePage = () => {
  const { data: session } = useSession(); // Get user session

  return (
    <div>
      <h1>Welcome to the Bodybuilding Page</h1>
      <p>Leave your thoughts below:</p>

      {/* If user is authenticated, show the CommentSection component */}
      {session ? (
        <CommentSection />
      ) : (
        <div>Please sign in to comment.</div>
      )}
    </div>
  );
};

export default HomePage;
