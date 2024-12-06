"use client"

// Method 5 - routes

import { IPosts, IUsers } from "../types/types";

export async function getPosts(id: string): Promise<IPosts>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
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
  const res = await fetch("/api/posts")
  return res.json()
}

export async function getLimitedPost(num: number): Promise<IPosts[]>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/?_limit=${num}`)
  return res.json()
}