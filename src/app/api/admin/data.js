import { verifyAdmin } from '../../../middlewares/verifyAdmin';

export default async function handler(req, res) {
  await verifyAdmin(req, res, async () => {
    // Your API logic here
    if (req.method === 'GET') {
      // Fetch data for admins
      res.status(200).json({ success: true, data: 'Admin-only data' });
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  });
}
