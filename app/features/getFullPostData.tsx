// Fetching data from local folder markdown files
// Get posts with metadata and body content

import fs from "fs";
import matter from "gray-matter";
import { FullPostData } from "@/types/types";

export const getFullPostData = (): FullPostData[] => {
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
        content: matterResult.content,
      };
    })
    .sort((post1, post2) => (post1.slug > post2.slug ? 1 : -1));

  return posts;
};
