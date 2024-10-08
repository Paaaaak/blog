import getFormattedDate from "@/lib/getFormattedDate";
import { getSortedPostsData, getPostData } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import PostBackground from "@/components/post-background";

import Highlight from "@/components/mdx/highlight";
import CustomUl from "@/components/mdx/custom-ul";
import CustomLi from "@/components/mdx/custom-li";
import CustomP from "@/components/mdx/custom-p";
import CustomH1 from "@/components/mdx/custom-h1";
import CustomImage from "@/components/mdx/custom-image";
import { getReadingTime } from "@/lib/getReadingTime";
import CustomCode from "@/components/mdx/custom-code";
import CustomBlockquote from "@/components/mdx/custom-blockquote";

const components = {
  h1: CustomH1,
  p: CustomP,
  ul: CustomUl,
  li: CustomLi,
  blockquote: CustomBlockquote,
  CustomImage,
  Highlight,
};

export async function generateStaticParams() {
  const posts = await getSortedPostsData();

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { postId: string };
}) {
  const posts = await getSortedPostsData();
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Paaak's Blog`,
    description: post.subtitle,
  };
}

/**
 * Server components in Next.js are components that are rendered on the server side,
 * allowing you to fetch data securely on the server without sending the data fetching logic to the client.
 * By making a server component async, you can use await to handle asynchronous operations directly in the component.
 *
 */
export default async function Post({ params }: { params: { postId: string } }) {
  const posts = await getSortedPostsData();
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) {
    notFound();
  }

  const postInfo = await getPostData(postId);

  return (
    <>
      <header>
        <PostBackground postInfo={postInfo}></PostBackground>
      </header>
      <main className="main">
        <div className="main-div">
          <MDXRemote
            source={postInfo.content}
            components={components}
          ></MDXRemote>
          <div className="common-button-container">
            <Link href="/" style={{ textDecoration: "none" }}>
              <div className="common-button" style={{ padding: "10px 30px" }}>
                <span>← Back to home</span>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
