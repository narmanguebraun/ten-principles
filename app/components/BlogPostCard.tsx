import Link from "next/link";
import { PostMetadata } from "@/types/types";

const BlogPostCard = (props: PostMetadata) => {
  return (
    <div>
      <h2>
        <Link href={`/posts/${props.slug}`}>{props.title}</Link>
      </h2>
    </div>
  );
};

export default BlogPostCard;
