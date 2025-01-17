// middleware.js
export function middleware(request) {
    // Ensure we check for the correct request object type and check if URL starts with '/admin'
    if (request.url.startsWith('/admin')) {
      // Logic for '/admin' routes
      console.log("Admin-related request detected.");
    }
  
    // Continue to the next middleware or request handler
    return new Response('Request processed', { status: 200 });
  }
  
  export const config = {
    matcher: '/admin/*',  // Only apply this middleware to '/admin' routes
  };
  