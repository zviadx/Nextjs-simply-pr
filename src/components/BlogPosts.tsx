"use client"

import { States, useStore } from "../../store";
import { shallow } from "zustand/shallow";
import { useEffect, useState } from "react";
import PostSearch from "@/components/PostSearch";
import Posts from "@/components/Posts";

import { IPosts } from "@/services/types/posts";


const BlogPosts = () => {

    const posts = useStore((state: any) => state.posts)
    const loading = useStore((state: any) => state.loading)
    const GetPosts = useStore((state: any) => state.GetPosts)

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