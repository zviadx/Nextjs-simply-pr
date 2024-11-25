
import Link from "next/link";
import React from "react";
import { IPosts } from "@/services/types/types";
import { ISearchProps } from "@/components/SearchPosts";

export interface IIPosts {
  posts: IPosts[]
}

const Posts = ({posts}: IIPosts) => {
  return (
    <div>
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

export default Posts;