import { IPosts } from "../types/types";
import { Simulate } from "react-dom/test-utils";
import error = Simulate.error;

export function searchPosts (text: string, allPosts: IPosts[]) {

  return (
    allPosts.filter(item =>
      item.title?.toLowerCase().includes(text.toLowerCase())
    )
  )
}


export async function getPostsBySearch(text: string): Promise<IPosts[]>{
  const res = await fetch(`http://localhost:3000/api/posts?q=${text}`)

    return res.json()
}