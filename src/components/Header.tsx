
import Navigation from "@/components/Navigation";
import { TNavigateParams } from "@/services/types/types";


const navItems: TNavigateParams[] = [
  { label: "Home", href: "/"},
  { label: "About", href: "/about"},
  { label: "Contact", href: "/contact"},
  { label: "Blog", href: "/blog"}
]

const Header = () => {
  return (
    <header className={'fixed top-0 w-full flex justify-center bg-gradient-to-l from-black to-gray-100 text-white'}>
      <div className={'mt-8 mb-8'}>
        <Navigation Navigate={navItems} />
      </div>
    </header>
  )
}

export default Header
