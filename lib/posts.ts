import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "blogposts");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.mdx$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const blogPost: BlogPost = {
      id,
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      date: matterResult.data.date,
      tags: matterResult.data.tags || [],
    };

    // Combine the data with the id
    return blogPost;
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");


  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  
  const { data: frontmatter, content } = matter(fileContents);
  console.log(frontmatter, content);

  const blogPostWithHTML: BlogPost & { content: string } = {
    id,
    title: frontmatter.title,
    subtitle: frontmatter.subtitle,
    date: frontmatter.date,
    tags: frontmatter.tags,
    content,
  };

  // Combine the data with the id
  return blogPostWithHTML;
}
