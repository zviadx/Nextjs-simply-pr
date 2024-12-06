"use client"

import React from "react";
import { IUsers } from "@/services/types/types";
import useSWR from "swr";
import { getUsers } from "@/services/app/getUsers";
import Link from "next/link";

const SwrHookOfUsers = () => {
  const { data: users, isLoading } = useSWR("allUsers", getUsers)

  return (
    isLoading
      ? <div>Loading...</div>
      : <div>
        <ul className="list-disc">
          {
            users?.map((user: IUsers) =>
              <li key={user.id}>
                <Link href={`/contacts/${String(user.id)}`}>{`${user.username} -- ${user.password} -- ${user.email}`}</Link>
              </li>
            )
          }
        </ul>
      </div>
  );
};

export default SwrHookOfUsers;