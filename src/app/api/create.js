// app/api/create.js
export default async function handler(req, res) {
  console.log('API route reached:', req.method, req.url);
  console.log('Request Body:', req.body);
  
  if (req.method === 'POST') {
    // ... your existing logic
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
