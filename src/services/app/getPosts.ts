import { IPosts } from "../types/types";

export async function getPosts(id: string): Promise<IPosts>{
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60
    }
  })
  return res.json()
}


export async function getAllPost(): Promise<IPosts[]>{
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60
    }
  })
  return res.json()
}