import RecentPosts from "../components/recent-posts";
import Namecard from "../components/namecard";
import Link from "next/link";
import Background from "../components/background";
import { Suspense } from "react";
import Skeleton from "@/components/skeleton";

export const metadata = {
  title: "Home | Paaak's Blog",
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
    <>
      <header>
        <Background pageType="main"></Background>
      </header>
      <main className="main">
        <div className="main-div">
          <Namecard></Namecard>
          <h2 className="main-h2">Recently published</h2>
          <Suspense fallback={<Skeleton length={3}></Skeleton>}>
            <RecentPosts></RecentPosts>
          </Suspense>
          <div className="common-button-container">
            <Link href={"/posts"} style={{ textDecoration: "none" }}>
              <div className="common-button">
                <span>See older posts</span>
                <div className="arrow"></div>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
