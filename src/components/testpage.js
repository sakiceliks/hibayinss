import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

const Test = () => <div>Test Bileşeni İçeriği</div>;

const components = { Test };

export default function TestPage({ source }) {
  return (
    <div className="wrapper">
      <MDXRemote {...source} components={components} />
    </div>
  );
}

export async function getStaticProps() {
  const source = 'Some **mdx** text, with a component <Test />';
  const mdxSource = await serialize(source);
  return { props: { source: mdxSource } };
}
