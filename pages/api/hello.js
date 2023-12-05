export default async function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ success: true });
  } else if (req.method === 'POST') {
    res.status(200).json({ message: 'Data stored successfully' });
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
}