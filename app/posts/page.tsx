import { getSortedPostsData } from "@/lib/posts";
import React, { Suspense } from "react";
import Posts from "../../components/posts";
import Background from "../../components/background";

export const metadata = {
  title: "Posts | Paaak's Blog",
};

const page = async () => {
  const posts = await getSortedPostsData();

  return (
    <>
      <header>
        <Background pageType="posts"></Background>
      </header>
      <main className="main">
        <div className="main-div">
          <Suspense fallback={<div>Page is loading...</div>}>
            <Posts posts={posts}></Posts>
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default page;
