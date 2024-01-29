// Fetching data from local folder markdown files
// Get single post content

import fs from "fs";
import matter from "gray-matter";

export const getBlogPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);

  return matterResult;
};
