import NextAuth from "next-auth";
import { authConfig } from "@/configs/auth";
import { NextApiRequest, NextApiResponse } from "next";


type CombineRequest = Request & NextApiRequest
type CombineResponse = Response & NextApiResponse;

const handler = async (req: CombineRequest, res: CombineResponse) => {
  return await NextAuth(req, res, authConfig);
};


export { handler as GET,  handler as POST }