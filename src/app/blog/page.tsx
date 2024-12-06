
import PostSearch from "@/components/PostSearch";
import SwrHookOfPosts from "@/components/swrHookOfPosts";
import BlogPosts from "@/components/BlogPosts";


export default async function Blog() { // No more async here

  return (
    <div
      className="absolute top-32 flex flex-col items-center justify-center min-h-full min-w-full rounded-md shadow-lg">
      <BlogPosts />
      {/*<PostSearch />*/}
      {/*<SwrHookOfPosts />*/}
    </div>
  );
};