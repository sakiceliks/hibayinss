import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

export async function GET(request, { params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'content', `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return new Response(JSON.stringify({ error: 'File not found' }), { status: 404 });
  }
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContents);

  const mdxSource = await serialize(content, { scope: data });

  return new Response(JSON.stringify({ mdxSource, data }), { status: 200 });
}
