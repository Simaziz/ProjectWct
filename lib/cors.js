import Cors from 'cors';

const cors = Cors({
  methods: ['GET', 'POST'],
});

export default async function handler(req, res) {
  await cors(req, res, () => {});

  if (req.method === 'POST') {
    // Your POST logic here
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
