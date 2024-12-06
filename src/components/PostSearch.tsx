"use client"

// Method - 2 slug - ით გაფილტრული მასივის ჩამოტვირთვა, ფეიკ სერვერი რატომღაც
// არ ითვალისწინებს სტრინგით გაფილტვრას, თუმცა ნამდვილ სერვერზე იმუშავებს უპრობლემოდ

import { FormEvent, useState } from "react";
import { IPosts } from "@/services/types/types";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import { getPostsBySearch } from "@/services/app/serchPosts";

type TSearch = {
  onSearch: IPosts[]
}

const PostSearch = () => {
  const [search, setSearch] = useState<string>("")
  const router = useRouter()
  const { mutate } = useSWR("posts")

  const onHandleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(`/blog/search?q=${search}`)

    // const posts = getPostsBySearch(search)
    // mutate(posts)
  }

  return (
    <>
      <form onSubmit={onHandleSubmit}>
        <input
          type={"search"}
          placeholder={"Search..."}
          value={search}
          className={"border-2 border-sky-500 p-1 rounded-md"}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type={"submit"} className={"bg-sky-200 p-1.5 rounded-md mb-8 " +
          "active:bg-sky-300 active:translate-x-[1px] active:translate-y-[1px]"}>Search</button>
      </form>
    </>
  );
};

export default PostSearch;