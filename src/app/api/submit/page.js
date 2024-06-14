// pages/api/createFile.js

import fs from 'fs';

export default function handler(req, res) {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ error: 'Content is required' });
  }

  fs.writeFile('example.txt', content, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to create file' });
    }

    console.log('File created successfully');
    res.status(200).json({ message: 'File created successfully' });
  });
}
