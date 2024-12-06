import { getServerSession } from "next-auth";
import { authConfig } from "@/configs/auth";
// import { NextApiRequest, NextApiResponse } from "next";


export default async function Profile() {
  const session = await getServerSession(authConfig)
  // console.log(session)
  return (
    <div>
      <h3>{session?.user?.name}</h3>
      {session?.user?.image && <img src={session?.user?.image} alt={"No Image..."}/>}

    </div>
  );
};