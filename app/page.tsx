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

/**
 * `Home` - A Server Component in Next.js
 *
 * This component is a Server Component by default since it resides within the `app` directory in a Next.js 13+ project.
 * Server Components are rendered on the server, providing better performance, SEO, and reduced client-side JavaScript.
 *
 * - **No Client-Side JavaScript**: Renders only HTML and CSS, minimizing the bundle size.
 * - **Data Fetching**: Supports secure server-side data fetching.
 * - **No Browser APIs**: Cannot use browser-specific APIs like `window` or `document`.
 * - **SEO Benefits**: Improves SEO with fully server-rendered HTML content.
 * 
 * To enable client-side interactivity, add `'use client'` at the top of the file.
 */
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
