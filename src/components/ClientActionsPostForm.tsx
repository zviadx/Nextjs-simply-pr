"use client"
import React, { FormEvent, FormEventHandler, useState } from "react";
import { redirect, useRouter } from "next/navigation";

const ClientActionsPostForm =  ({ createPost }: {createPost: (formData: FormData) => Promise<void>}) => {
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget);
    const {title, body} = Object.fromEntries(formData)


    try {
      const result = await fetch("http://localhost:3001/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ title, body, userId: 1 })
        }
      )
      if (result.ok) {
        const post = await result.json()
        router.push(`/blog/${post.id}`)
      } else {
        console.error("An unexpected error occurred:", result)
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
    await createPost(formData);
  }

  return (
    <div>
      <form
        className={"flex flex-col items-center justify-center gap-2.5"}
        onSubmit={handleSubmit}
      >
        <input
          placeholder={"Enter Title"}
          className={"border-2 border-gray-700 w-1/3"}
          required
          name={"title"}
        />
        <textarea
          placeholder={"Enter Text"}
          className={"border-2 border-gray-700 w-1/3"}
          required
          name={"body"}
        />
        <div>
          <input
            className={"border-2 border-sky-500 p-2 rounded-md mb-4"}
            type={"submit"}
            value={"Add Text"}
          />
        </div>
      </form>
    </div>
  );
};

export default ClientActionsPostForm;
