import fs from 'fs';
import { parse } from 'querystring';

export default function handler(req, res) {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const { title, description, date, firstName, tag1, tag2, tag3 } = parse(body);
      const data = `---
title: "${title}"
description: "${description}"
image: "{Path to your blog post image}"
publishedAt: "${date}"
updatedAt: "${new Date().toISOString().slice(0, 10)}"
author: "${firstName}"
isPublished: true
tags:
  - "${tag1}"
  - "${tag2}"
  - "${tag3}"
---

`;
      fs.appendFile('submissions.mdx', data, (err) => {
        if (err) throw err;
        console.log('Veriler dosyaya yazıldı.');
      });
      res.end('Form başarıyla gönderildi.');
    });
  } else {
    res.end('Bu endpoint sadece POST isteklerini kabul eder.');
  }
}
