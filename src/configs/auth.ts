import { type AuthOptions, User } from "next-auth";
import GoggleProvider from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import { getUsers } from "@/services/app/getUsers";
import toast from "react-hot-toast";
import { IUsers } from "@/services/types/types";

export const authConfig: AuthOptions = {
  providers: [
    GoggleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    Credentials({
      type: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: { label: "Password", type: "password", placeholder: "Password" }
      },
      async authorize(credentials) {
        if (!credentials?.email && !credentials?.password) { return null }

        const Users = await getUsers()
        const currUser = Users.find(user => user.email === credentials?.email)
        if (currUser && currUser?.password === credentials?.password) {
          const { password, ...userWithoutPass } = currUser
          return userWithoutPass as unknown as User
        }

        return null
      }
    })

  ]

}
