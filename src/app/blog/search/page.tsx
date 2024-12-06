import { getPostsBySearch } from "@/services/app/serchPosts";
import Posts from "@/components/Posts";

interface IProps {
  searchParams: {
    q: string
  }
}

// მეთოდი 1 ↓
async function SearchResults({ searchParams }: IProps) {

  // 1 ↓
  const searchTerm = (await searchParams).q
  const posts = await getPostsBySearch(searchTerm)

  return (
    <div className="absolute top-32 flex flex-col items-center justify-center min-h-full min-w-full
        rounded-md shadow-lg">
      <h4 className={"font-black"}>Searched posts</h4>
      <Posts posts={posts} />
    </div>
  );
};

export default SearchResults;