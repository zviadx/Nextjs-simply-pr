"use client"

// Method 1 - ვტვირთავ ყველა პოსტს და ვფილტრავ კლიენტ კომპონენტში, აშკარად გამოუსადეგარი მიდგომა ბევრი პოსტის შემთხვევაში

import React, { useEffect, useState } from "react";
import { searchPosts } from "@/services/app/serchPosts";
import Posts from "@/components/Posts";
import { IPosts } from "@/services/types/posts";

export interface ISearchProps {
  allPosts: IPosts[]
}

const SearchPosts = ({allPosts}: ISearchProps) => {
  const [blogPosts, setBlogPosts] = useState<string>('')

  const posts= blogPosts ? searchPosts(blogPosts, allPosts) : allPosts


  if (!Array.isArray(posts)) {
    console.error("Posts is not an array:", posts)
    return <div>Error: Posts data is invalid.</div>
  }

  return (
    <>
    <div className={"flex flex-row justify-center items-center top-4 mb-5"}>
      <input
        type={"text"} placeholder={"search..."}
        className={"border-2 border-sky-500 p-1 rounded-md"}
        onChange={(e) => setBlogPosts(e.target.value)}
        value={blogPosts}
      />
      <button className={"bg-purple-200 p-1.5 rounded-md"}>search</button>
      </div>
      <Posts posts={posts}/>
    </>
  );
};

export default SearchPosts;