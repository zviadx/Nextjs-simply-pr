"use client"

import { States, usePosts } from "../../store";
import { shallow } from "zustand/shallow";
import { useEffect, useState } from "react";
import PostSearch from "@/components/PostSearch";
import Posts from "@/components/Posts";
import { IPosts } from "@/services/types/types";


const BlogPosts = () => {

    const posts = usePosts((state: any) => state.posts)
    const loading = usePosts((state: any) => state.loading)
    const GetPosts = usePosts((state: any) => state.GetPosts)

    useEffect(() => {
      GetPosts()
    }, [])

  return (
    <div
      className="absolute top-32 flex flex-col items-center justify-center min-h-full min-w-full rounded-md shadow-lg">
      <PostSearch />
      <Posts posts={posts} />

    </div>
  )
}

export default BlogPosts