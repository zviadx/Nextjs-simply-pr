import NextAuth from "next-auth";
import { authConfig } from "@/configs/auth";
import { NextApiRequest, NextApiResponse } from "next";

// const handler = NextAuth(authConfig)
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  return await NextAuth(req, res, authConfig);
};


export { handler as GET,  handler as POST }