import React from "react";
import { Metadata } from "next";
import { getAllPost, getPosts } from "@/services/app/getPosts";


interface IPostProps<T> {
  params: {
    id: T
  }
}

// async function getData(id: string){
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//     next: {
//       revalidate: 60
//     }
//   })
//   return res.json()
// }

// export async function generateStaticParams(){
//   const posts: any[] = await getAllPost()
//   return posts.map((post) => ({
//     slug: post.id.toString()
//   })
//   )
// }

export async function generateMetadata({ params }: IPostProps<string> ): Promise<Metadata>{
  const { id } = await params
  const post = await getPosts(id);
  return {
    title: post.title
  }
}

async function Post({ params }: IPostProps<string>){
  const { id } = await params
  const post = await getPosts(id)
  console.log(post)

  return (
    <div className="flex justify-center items-center flex-col mt-32 text-red-600">
      <h1>{post.title}</h1>
      <p className="top-1/3 text-black">{post.body}</p>
    </div>
  )
}

export default Post;
