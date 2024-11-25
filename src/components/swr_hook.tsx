"use client"


// Method 4 ვერცელის ჰუკი useSWR - ის გამოყენებით

import useSWR from "swr";
import { getAllPost } from "@/services/app/getPosts";
import Link from "next/link";
import React from "react";

const SwrHook = () => {
  const {data: posts, isLoading} = useSWR("posts", getAllPost)

  return (
    isLoading
      ? <div>Loading...</div>
      : <div>
          <ul className="list-disc">
            {
              posts?.map((post: any) =>
                <li key={post.id}>
                  <Link href={`/blog/${String(post.id)}`}>{post.title}</Link>
                </li>
              )
            }
          </ul>
       </div>
  );

};

export default SwrHook;