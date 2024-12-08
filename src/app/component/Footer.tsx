import Image from "next/image"
import foterlogo from "../public/foterlogo.png"
import Link from 'next/link';

export default function Footer () {
  return (
    <>
    <div className="flex flex-wrap w-full  justify-center mt-28 mb-3  gap-4 ">
    <div className="flex flex-col sm:w-full md:w-[32%] lg:w-[22%] gap-3 ">
    <Image
        src={foterlogo}
        alt="Description of the image"
        width={85}
        height={36} />
        <p className="text-base font-normal text-[#9F9F9F]">400 University<br></br> Drive Suite 200<br></br> Coral Gables,
        FL 33134 USA</p>
    </div>
    <div className="flex flex-col sm:w-full md:w-[32%] lg:w-[22%]">
    <h4 className="text-[16px] text-[#9F9F9F] mb-4">Links</h4>
        <ul className="text-base font-[500]">
        <Link href="/"><li className="mb-4">Home</li></Link>
        <Link href="/Shop"><li className="mb-4" >Shop</li></Link>
        <Link href="/blog"><li className="mb-4">Blog</li></Link>
        <Link href="/contact"><li className="mb-4">Contact</li></Link>
        </ul>
    </div>
    <div className="flex flex-col sm:w-full md:w-[32%] lg:w-[22%]">
    <h4 className="text-[16px] text-[#9F9F9F] mb-4">Help</h4>
        <ul className="text-base font-[500]">
        <li className="mb-4">Payment Options</li>
        <li className="mb-4">Returns</li>
        <li className="mb-4">Privacy Policies</li>
        </ul>
    </div>
    <div className="flex flex-col sm:w-full md:w-[32%] lg:w-[22%]">
    <h4 className="text-[16px] text-[#9F9F9F] mb-4">Newsletter</h4>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    </div>
    </div>


   <div className="flex flex-col w-full items-center border-t-[#32313134] border-t-2 pt-4  pb-4">
  <p className=" text-[#333] text-[16px]">2023 furino. All rights reverved</p>
  </div>
    </>
  )
}
