// middleware.js

export function middleware(req) {
    if (req.url?.startsWith('/admin')) {
      // Logic for '/admin' routes
      console.log("Admin-related request detected.");
    }
  
    // Continue to the next middleware or request handler
    return new Response('Request processed', { status: 200 });
  }
  
  export const config = {
    matcher: '/admin/*',
  };
  