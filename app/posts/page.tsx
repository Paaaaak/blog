import { getSortedPostsData } from "@/lib/posts";
import React, { Suspense } from "react";
import Posts from "../../components/posts";
import Background from "../../components/background";
import PostsContainer from "@/components/posts-container";
import Skeleton from "@/components/skeleton";

export const metadata = {
  title: "Posts | Paaak's Blog",
};

const page = async () => {
  return (
    <>
      <header>
        <Background pageType="posts"></Background>
      </header>
      <main className="main">
        <div className="main-div">
          <Suspense fallback={<Skeleton length={3}></Skeleton>}>
            <PostsContainer></PostsContainer>
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default page;
