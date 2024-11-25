
import BlogPosts from "@/components/BlogPosts";
import { getAllPost } from "@/services/app/getPosts";
import SearchPosts from "@/components/SearchPosts";
import PostSearch from "@/components/PostSearch";
import SwrHook from "@/components/swr_hook";


export default async function Blog() { // No more async here
  // const allPosts = await getAllPost()

  return (
    <div
      className="absolute top-32 flex flex-col items-center justify-center min-h-full min-w-full rounded-md shadow-lg">
      {/*<BlogPosts />*/}
      <PostSearch />
      <SwrHook />
    </div>
  );
};