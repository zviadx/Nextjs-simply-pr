

import React from "react";
import ActionsPostForm from "@/components/ActionsPostForm";
import { redirect } from "next/navigation";

const Page = () => {
  return (
    <div>
      <ActionsPostForm onSuccess={async (id?: string) => {
        "use server";
        redirect(`/blog/${id}`)
      }}/>
    </div>
  );
};

export default Page;