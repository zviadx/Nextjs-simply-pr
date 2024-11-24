
import BlogPosts from "@/components/BlogPosts";
import { getAllPost } from "@/services/app/getPosts";
import SearchPosts from "@/components/SearchPosts";


export default async function Blog() { // No more async here
  const allPosts = await getAllPost()

  return (
    <div
      className="absolute top-32 flex flex-col items-center justify-center min-h-full min-w-full rounded-md shadow-lg">
      <BlogPosts />
    </div>
  );
};