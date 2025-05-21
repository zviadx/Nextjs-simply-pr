
import GoogleButton from "@/app/GoogleButton";
import SignInForm from "@/components/SignInForm";

export interface ISignIn {
  searchParams: {
    error: string
  }
}

const SignIn = async ({searchParams}: ISignIn) => {
  const error = ( await searchParams ).error

  return (
    <div className={"flex flex-col items-center"}>
      <h1 className={"text-6xl mb-8"}>Sign In</h1>
      <GoogleButton />
      <SignInForm />
      {
        error &&
        <div className={"bg-red-600 text-black p-2"}>
          UserName or Password is incorrect
        </div>
      }
    </div>

  );
};

export default SignIn;