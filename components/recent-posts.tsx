import { getSortedPostsData } from "@/lib/posts";
import Post from "./post";

export default async function RecentPosts() {
  const posts = await getSortedPostsData();
  const recentPosts = posts.slice(0, 5);

  return (
    <section>
      <ul>
        {recentPosts.map((post) => {
          if (!post.isPublished) {
            return;
          }
          return <Post key={post.id} post={post} />;
        })}
      </ul>
    </section>
  );
}
