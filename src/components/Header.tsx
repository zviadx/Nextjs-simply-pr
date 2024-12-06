
import Navigation from "@/components/Navigation";
import { TNavigateParams } from "@/services/types/types";


const navItems: TNavigateParams[] = [
  { label: "Home", href: "/", auth: false},
  { label: "About", href: "/about", auth: false},
  { label: "Contact", href: "/contact", auth: false},
  { label: "Blog", href: "/blog", auth: false},
  { label: "Profile", href: "/profile", auth: true},
]

const Header = () => {
  return (
    <header className={'fixed top-0 w-full flex bg-gradient-to-l from-black to-gray-100 text-white'}>
      <div className={'mt-8 mb-8 ml-[40%]'}>
        <Navigation Navigate={navItems} />
      </div>
    </header>
  )
}

export default Header
