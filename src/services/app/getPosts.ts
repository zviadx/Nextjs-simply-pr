// "use client"

// Method 5 - routes

// import { IUsers } from "@/services/types/users";
import { IPosts } from "@/services/types/posts";

export async function getPosts(id: string): Promise<IPosts>{
  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    next: {
      revalidate: 60
    }
  })
  return res.json()
}

export async function getAllPost(): Promise<IPosts[]>{
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //   next: {
  //     revalidate: 60
  //   }
  // })
  // return res.json()
  const res =  await fetch("/api/posts")
  return res.json()
}

export async function getLimitedPost(num: number): Promise<IPosts[]>{
  const res = await fetch(`http://localhost:3001/posts/?_limit=${num}`)
  return res.json()
}