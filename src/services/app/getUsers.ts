import { IUsers } from "@/services/types/users";


export async function getUsers(): Promise<IUsers[]>{
  const res = await fetch("http://localhost:3000/api/users")
  const usersRaw: IUsers[] = await res.json()
  usersRaw.map(user => {
    user.password = `user@${user.id}`
  })
  return usersRaw
}