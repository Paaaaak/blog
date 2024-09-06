import { getSortedPostsData } from "@/lib/posts";
import React, { Suspense } from "react";
import Posts from "../../components/Posts";
import Background from "../../components/background";
import Loading from "../loading";

export const metadata = {
  title: "Jaehyeon's Blog asdasd",
  description: "Created by Dave Gray",
  keywords: "nextjs, seo, metadata",
};

const page = () => {
  const posts = getSortedPostsData();

  return (
    <>
      <header>
        <Background pageType="posts"></Background>
      </header>
      <main className="main">
        <div className="main-div">
          <Posts posts={posts}></Posts>
        </div>
      </main>
    </>
  );
};

export default page;
