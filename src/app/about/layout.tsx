import Link from "next/link";


const AboutLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="container flex flex-col items-center gap-3 mt-32 bg-blue-300">
      <h1 className="font-bold">About Us</h1>
      <ul className="text-red-600 list-disc">
        <li>
          <Link href={"/about/contacts"}>contacts</Link>
        </li>
        <li>
          <Link href={"/about/team"}>team</Link>`3
        </li>
      </ul>
      {children}
    </div>
  );
};

export default AboutLayout;
