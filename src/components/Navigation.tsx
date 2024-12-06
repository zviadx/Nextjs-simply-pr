"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TNavigateParams } from "@/services/types/types";
import { useSession, signOut } from "next-auth/react";

const Navigation = ({ Navigate }: { Navigate: TNavigateParams[] }) => {
  const pathName = usePathname()
  const session = useSession()
  // console.log(session)

  const navigateOnSession = () => {
    if (!session?.data) {
      return Navigate.filter(navEl => navEl.auth === false)
    } else {
      return Navigate
    }
  }

  return (
    <div className={"flex flex-row w-[60vw]"}>
      {
        navigateOnSession().map(navItem =>
            <Link key={navItem.label} className={`ml-4 ${pathName === navItem.href ? "text-blue-900" : " "}`}
                  href={navItem.href}>{navItem.label}</Link>

        )
      }

      <div className={"ml-auto mr-5"}>
        {
          session?.data
            ? <Link href={"#"} onClick={ () => signOut({ callbackUrl: "/" }) }>Sign Out</Link>
            : <Link href={"/api/auth/signin"}>Sign In</Link>
        }
      </div>
    </div>
  );
};

export default Navigation;