import { getSortedPostsData } from "@/lib/posts";
import React, { Suspense } from "react";
import Posts from "../../components/Posts";
import Background from "../../components/Background";
import Loading from "../loading";

export const metadata = {
  title: "Jaehyeon's Blog asdasd",
  description: "Created by Dave Gray",
  keywords: "nextjs, seo, metadata",
};

const page = () => {
  const posts = getSortedPostsData();

  return (
    <main className="main">
      <Suspense fallback={<Loading></Loading>}>
        <Background pageType="posts"></Background>
        <div className="main-div">
          <Posts posts={posts}></Posts>
        </div>
      </Suspense>
    </main>
  );
};

export default page;
