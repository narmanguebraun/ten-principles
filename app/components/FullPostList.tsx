import { getFullPostData } from "../features/getFullPostData";
import { FullPostCard } from "./FullPostCard";

const FullPostList = () => {
  const fullPostData = getFullPostData();
  const posts = fullPostData.map((post) => (
    <FullPostCard key={post.slug} {...post} />
  ));

  return <>{posts}</>;
};

export default FullPostList;
