import Navigation from "@/components/Navigation";
import { navItems } from "@/services/types/navigation";


const Header = () => {
  return (
    <header className={'fixed top-0 w-full flex bg-gradient-to-l from-black to-gray-100 text-white'}>
      <div
        className={'mt-8 mb-8 ml-[40%]'}
      >
        <Navigation Navigate={navItems} />
      </div>
    </header>
  )
}

export default Header
