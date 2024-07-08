import RecentPosts from "./components/RecentPosts";
import Namecard from "./components/Namecard";
import Link from "next/link";
import Background from "./components/Background";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: "Jaehyeon's Blog asdasd",
  description: "Created by Dave Gray",
  keywords: "nextjs, seo, metadata",
};

export default function Home() {
  return (
    <main className="main">
      <Suspense fallback={<Loading></Loading>}>
        <Background pageType="main"></Background>
        <div className="main-div">
          <Namecard></Namecard>
          <h2
            style={{
              paddingLeft: "25px",
              margin: "30px 0",
              color: "rgb(170, 170, 170)",
            }}
          >
            Recently published
          </h2>
          <RecentPosts></RecentPosts>
          <div className="common-button-container">
            <Link href={"/posts"} style={{ textDecoration: "none" }}>
              <div className="common-button">
                <span>See older posts</span>
                <div className="arrow"></div>
              </div>
            </Link>
          </div>
        </div>
      </Suspense>
    </main>
  );
}
