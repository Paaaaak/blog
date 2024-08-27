import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "blogposts");

export function getSortedPostsData() {
  // Get file names under /posts
  const folderNames = fs.readdirSync(postsDirectory);
  const allPostsData = folderNames.map((folderName) => {
    const id = folderName;

    const fullPath = path.join(postsDirectory, folderName, 'index.mdx');
    console.log(fullPath)
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const blogPost: BlogPost = {
      id,
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      date: matterResult.data.date,
      tags: matterResult.data.tags || [],
      backgroundImage: matterResult.data.backgroundImage,
      isPublished: matterResult.data.isPublished,
    };

    // Combine the data with the id
    return blogPost;
  });
  // Sort posts by date
  allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
  return allPostsData.filter(post => post.isPublished);
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, id, 'index.mdx');
  const fileContents = fs.readFileSync(fullPath, "utf8");
  
  const { data: frontmatter, content } = matter(fileContents);
  console.log(frontmatter, content);

  const blogPostWithHTML: BlogPost & { content: string } = {
    id,
    title: frontmatter.title,
    subtitle: frontmatter.subtitle,
    date: frontmatter.date,
    tags: frontmatter.tags,
    backgroundImage: frontmatter.backgroundImage, 
    isPublished: frontmatter.isPublished,
    content,
  };

  // Combine the data with the id
  return blogPostWithHTML;
}
