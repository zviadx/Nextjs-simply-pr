"use client"

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const SignInForm = () => {
  const router = useRouter()
  const [error, setError] = useState<string | null | undefined>(null)

  const onHandleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(null)

    const formData = new FormData(event.currentTarget)
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    console.log(email, password)

    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false
      })
      if (response?.ok) {
        router.push("/profile")
      } else {
        router.push('/signin?error=InvalidCredentials')
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      setError("An unexpected error occurred. Please try again.")
    }
  }

  return (
    <form
      className={"flex flex-col items-center mt-8"}
      onSubmit={onHandleSubmit}
    >
      <input
        className={"border-2 border-sky-500 p-2 rounded-md mb-4 user-invalid:border-red-500"}
        name={"email"} type={"email"} placeholder={"Email"} required={true}
      />
      <input
        className={"border-2 border-sky-500 p-2 rounded-md mb-4 user-invalid:border-red-500"}
        name={"password"} type={"password"} placeholder={"Password"} required={true}
      />
      <button
        className={"border-2 border-sky-500  pl-2 pr-2 ml-36 rounded-md mb-4 active:border-red-500 " +
          "active:translate-x-[1px] active:translate-y-[1px]"}
        type={"submit"}
      >accept</button>
    </form>
  );
};

export default SignInForm;