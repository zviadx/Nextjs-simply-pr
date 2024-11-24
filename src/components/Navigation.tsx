"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TNavigateParams } from "@/services/types/types";

const Navigation = ({ Navigate }: { Navigate: TNavigateParams[] }) => {
  const pathName = usePathname()

  return (
    <>
      {
        Navigate.map(navItem =>
            <Link key={navItem.label} className={`ml-4 ${pathName === navItem.href ? "text-blue-900" : " "}`}
                  href={navItem.href}>{navItem.label}</Link>
        )
      }
    </>
  );
};

export default Navigation;