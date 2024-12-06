import { IUsers } from "@/services/types/types"
import { NextResponse } from "next/server";

export const AllUsers = async () => {
  const users = await fetch("https://jsonplaceholder.typicode.com/users", {
      next: {
        revalidate: 60
      }
    }
  )
  return users.json()
}

export async function GET(req: Request) {
    const users: IUsers[] = await AllUsers();
    console.log(users)
    return NextResponse.json(users);
}

export async function POST(req: Request) {
  try {
    const newUser: IUsers = await req?.json();
    return NextResponse.json(newUser);
  } catch (error: any) {
    return NextResponse.json({ message: `Method POST, Something went wrong with error: ${error.message}` });
  }

}
