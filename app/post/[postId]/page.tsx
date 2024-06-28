import getFormattedDate from "@/lib/getFormattedDate";
import { getSortedPostsData, getPostData } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import Highlight from "@/app/components/Highlight";
import Background from "@/app/components/Background";

const components = {
  Highlight,
};

export function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
  };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) notFound();

  const { title, date, content } = await getPostData(postId);

  const pubDate = getFormattedDate(date);

  return (
    <main className="main">
      <Background pageType="posts"></Background>
      <div className="main-div">
        <h1 className="">{title}</h1>
        <p className="">{pubDate}</p>
        <article>
          <MDXRemote source={content} components={components}></MDXRemote>
          <p>
            <Link href="/">← Back to home</Link>
          </p>
        </article>
      </div>
    </main>
  );
}
