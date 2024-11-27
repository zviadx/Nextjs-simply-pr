
// Method 5 - routs

import { NextResponse } from "next/server";
import { IPosts } from "@/services/types/types";

const AllPosts = async () => {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts", {
      next: {
        revalidate: 60
      }
    }
  )
  return posts.json()
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const posts = await AllPosts()
  const query: string | null = searchParams.get('q')

  if (query) {
    return NextResponse.json(posts.filter((post: IPosts) => post.title?.toLowerCase().includes(query?.toLowerCase())))
  } else {
    return NextResponse.json(posts)
  }
}

export async function POST(req: Request) {
  const body = await req.json()
  console.log(body)

  return NextResponse.json(body)
}
