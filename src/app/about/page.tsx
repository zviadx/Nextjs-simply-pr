import { Metadata } from "next";
import Image from 'next/image'
import Child from "../assets/child.jpg"
import EagleEye from "../assets/EagleEye.jpg"
import Road from "../assets/road.jpg"
import Leaf from "../assets/leaf.jpg"


export const metadata: Metadata = {
  title: "About | Next App"
}

const About = () => {
  return (
    <div className="absolute flex flex-col items-center gap-32 justify-center mt-32">
      {/*<h3>Select SubItem</h3>*/}
      <Image
        src={Child.src}
        alt={"Child's Eyes"}
        width={300}
        height={300}
        priority={true}
      />
      <Image
        src={EagleEye.src}
        alt={"Road"}
        width={300}
        height={300}
        loading="lazy"
        priority={false}
      />
      <Image
        src={Leaf.src}
        alt={"Leaf"}
        width={300}
        height={300}
        loading="lazy"
        priority={false}
      />
      <Image
        src={Road.src}
        alt={"Road"}
        width={300}
        height={300}
        loading="lazy"
        priority={false}
      />
    </div>
  )
}

export default About
