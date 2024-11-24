import {create} from 'zustand'
import { IPosts } from "@/services/types/types";
import { getAllPost } from "@/services/app/getPosts";

// Method 3 - სტეიტ მენეგერის გამოყენებით ზუსტანდი ამ შემთხვევაში ან ნებისმიერი სხვა

export interface States {
  posts?: IPosts[],
  loading?: boolean,
  error?: string | null,
  GetPosts?: () => Promise<void>,
  GetPostsBySearch?: (text: string) => Promise<void>
}

export const usePosts = create<States>()((set: any) => ({
  posts: [],
  loading: false,
  error: null,
  GetPosts: async () => {
    try {
      set({ loading: true })
      const response = await getAllPost()
      set({ posts: response, loading: false })
    } catch (err: any) {
      set({ error: err.message, loading: false })
    }
  },
  GetPostsBySearch: async (text: string) => {
    try {
      set({ loading: true })
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${text}`)
      set({ posts: response.json(), loading: false })
    } catch (err: any) {
      set({ error: err.message, loading: false })
    }
    }
}))

