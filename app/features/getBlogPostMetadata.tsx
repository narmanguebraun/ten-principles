// Fetching data from local folder markdown files
// Get posts metadata

import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "@/types/types";

export const getBlogPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const posts = markdownPosts
    .map((fileName) => {
      const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
      const matterResult = matter(fileContents);

      return {
        slug: fileName.replace(".md", ""),
        title: matterResult.data.title,
      };
    })
    .sort((post1, post2) => (post1.title > post2.title ? -1 : 1));

  return posts;
};
