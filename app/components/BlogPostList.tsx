import { getBlogPostMetadata } from "../features/getBlogPostMetadata";

import BlogPostCard from "./BlogPostCard";

const BlogPostList = () => {
  const postMetadata = getBlogPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <BlogPostCard key={post.slug} {...post} />
  ));

  return <>{postPreviews}</>;
};

export default BlogPostList;
