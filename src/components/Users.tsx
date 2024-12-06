"use client"


import { getUsers } from "@/services/app/getUsers";
import { IUsers } from "@/services/types/types";
import toast from "react-hot-toast";

const Users = () => {
  // try {
    const users: Promise<IUsers[]> = getUsers()
  //   toast.success("Users fetched successfully!")
  // } catch (error) {
  //   toast.error("Error fetching users.")
  // }

  return (
    <div
      className="absolute mb-5 flex flex-col items-center justify-center min-h-full min-w-full rounded-md shadow-lg"
    >
      <button
        className={"border-2 border-sky-500 p-1.5 rounded-md active:translate-x-[2px] active:translate-y-[2px]"}
        onClick={() => {
          // window.location.href = "/api/posts"
          console.log(users.then(res => res))
        }}
      >
        Download posts
      </button>
    </div>
  );
};

export default Users;