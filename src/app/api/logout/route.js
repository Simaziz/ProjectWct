// pages/api/logout.js

export default function handler(req, res) {
    if (req.method === 'POST') {
      // Clear the authentication token or session cookie
      res.setHeader('Set-Cookie', 'authToken=; Max-Age=0; Path=/; HttpOnly; Secure; SameSite=Strict');
  
      // Respond with a success message
      res.status(200).json({ message: 'Logged out successfully' });
    } else {
      // Method not allowed
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} not allowed`);
    }
  }
  