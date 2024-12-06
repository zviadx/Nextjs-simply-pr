"use client"

import React, { useEffect } from "react";
import SwrHookOfUsers from "@/components/swrHookOfUsers";
import { getUsers } from "@/services/app/getUsers";
import { IUsers } from "@/services/types/types";
import { useStore } from "../../../store";
import Link from "next/link";
import Users from "@/components/Users";

const Contact =  () => {
  const users: IUsers[] = useStore((state: any) => state.users)
  const GetUsers = useStore((state: any) => state.GetUsers)

  useEffect(() => {
    GetUsers()
  }, [])

  return (
    <div className="flex justify-center mt-32">
      <Users />
      <ul className="list-disc">
        {
          users?.map(user =>
            <li key={user.id}>
              <Link href={`/blog/${String(user.id)}`}>{`${user.password} -- ${user.email}`}</Link>
            </li>
          )
        }
      </ul>
    </div>
  );
};

export default Contact;
