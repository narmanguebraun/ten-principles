import { getPosts } from "../features/getPosts";
import { PostCard } from "./PostCard";

export default async function PostList() {
  const posts = await getPosts();

  return (
    <>
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </>
  );
}
