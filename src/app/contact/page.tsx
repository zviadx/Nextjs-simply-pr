

import React from "react";
import { getLimitedPost } from "@/services/app/getPosts";

const Contact = async () => {
  const posts = await getLimitedPost(2)
  console.log(posts)

  return (
    <div className="flex justify-center mt-32">
      <button
          className={"border-2 border-sky-500 p-1.5 rounded-md active:translate-x-[2px] active:translate-y-[2px]"}
          // onClick={() => {
            // window.location.href = "/api/posts"
            // console.log(getLimitedPost(2))
          //}}
      >
        Download posts
      </button>
    </div>
  );
};

export default Contact;
