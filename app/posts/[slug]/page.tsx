// Fetching data from local folder markdown files
// Get single post metadata + content

import Link from "next/link";
import Markdown from "markdown-to-jsx";

import { getBlogPostContent } from "@/app/features/getBlogPostContent";
import { getBlogPostMetadata } from "@/app/features/getBlogPostMetadata";

export const generateStaticParams = async () => {
  const posts = getBlogPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getBlogPostContent(slug);
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <article className="p-8 max-w-[500px] prose">
        <h1 className="font-bold text-md">{post.data.title}</h1>
        <Markdown>{post.content}</Markdown>
      </article>
      <footer className="p-8 text-sm">
        <Link href="/">&larr; Index</Link>
      </footer>
    </main>
  );
};

export default PostPage;
