import Link from "next/link";
import { FullPostData } from "@/types/types";

export const FullPostCard = (props: FullPostData) => {
  return (
    <div className="mb-4">
      <h2 className="font-bold text-md">
        <Link href={`/posts/${props.slug}`}>{props.title}</Link>
      </h2>

      <p className="text-sm">{props.content}</p>
    </div>
  );
};
