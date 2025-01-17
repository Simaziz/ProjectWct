export async function POST(req) {
  try {
    // Clear the authentication token or session cookie
    return new Response(
      JSON.stringify({ message: 'Logged out successfully' }),
      {
        status: 200,
        headers: {
          'Set-Cookie': 'authToken=; Max-Age=0; Path=/; HttpOnly; Secure; SameSite=Strict',
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error("Logout error:", error);
    return new Response(
      JSON.stringify({ error: 'An error occurred during logout' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export const runtime = 'edge'; // Optional: Use 'edge' runtime for performance
