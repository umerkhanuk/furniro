import Image from "next/image"
import image1 from '../public/image1.png'
import Asgaardsofa from '../public/Asgaardsofa.png'
import Group from '../public/Group.png'
import Link from 'next/link';

import image3 from '../public/image3.png'
import Image5 from '../public/Image5.png'

export default function page ()  {
    return (
      <>
  <div className="flex flex-wrap w-full justify-center items-center mt-12 mb-12 gap-4 ">
  <div className="flex flex-col sm:w-[2%] md:w-[6%] lg:w-[10%] gap-3 ml-6">
        <ul>
            <li>
            <Image
             src={image1}
             width={76}
            height={80}
             alt="banner"
             className="w-full min-h-[30px]  mb-6"
            />
            </li>
            <li>
            <Image
             src={image1}
             width={76}
            height={80}
             alt="banner"
             className="w-full min-h-[30px] mb-6"
            />
            </li>
            <li>
            <Image
             src={image1}
             width={76}
            height={80}
             alt="banner"
             className="w-full min-h-[30px] mb-6"
            />
            </li>
        </ul>
  </div>
  <div className="flex flex-col sm:w-[80%] md:w-[45%] lg:w-[40%] bg-[#F9F1E7]">
  <Image
             src={Asgaardsofa}
             width={100}
            height={100}
             alt="banner"
             className="w-full min-h-[500px]"
            />
  </div>
  <div className="flex flex-col justify-center items-left sm:w-full md:w-[40%] lg:w-[42%] lg:ml-6 gap-6">
        <h3 className="text-[42px] font-normal">Asgaard sofa</h3>
        <p className="text-[#9F9F9F] text-[24px]">Rs. 250,000.00</p>
        <p className="text-[13px]">Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
        <div className="gap-3 mt-7">
        <button id="mybtn" className="border-2 border-[#383838dd] rounded-md mr-6 text-[20px]">Add To Cart</button>
        <button id="mybtn" className="border-2 border-[#383838dd] rounded-md text-[20px]">+ Compare</button>
        </div>
        <div className="text-[#9F9F9F]">
           <p>SKU : SS001</p> 
           <p>Category : Sofas</p>
           <p>Tags : Sofa, Chair, Home, Shop</p>
        </div>
  </div>
 </div>

 <div className="flex flex-col justify-center items-center mt-12 pl-5 pr-5">
  <h2 className=" text-[#333] text-2xl font-semibold">Description</h2>
    <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
    <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
    <Image
             src={Group}
             width={100}
            height={100}
            alt="banner"
            className="w-full min-h-[348px] mt-10 mb-6"
            />
  </div>

  <div className="flex flex-col w-full justify-center items-center mt-12">
  <h2 className=" text-[#333] text-3xl font-semibold">Related Products</h2>
  </div>
  <div className="flex flex-wrap w-full justify-center items-center mt-12 mb-12 gap-4 ">
  <div className="flex flex-col sm:w-full md:w-[32%] lg:w-[22%]">
   <Link href={'/product'}> <Image
      src={image1}
      width={100}
      height={100}
      alt="banner"
      className="w-full min-h-[280px]"
    />
    <div className="flex flex-col w-full min-h-[100px] justify-center pl-4 bg-[#F4F5F7]">
      <h3 className="text-2xl font-semibold text-[#333333]">Syltherine</h3>
      <h3 className="text-base font-normal text-[#898989]">Stylish cafe chair</h3>
      <p className="text-[20px] font-semibold text-[#3A3A3A]">Rp 2.500.000
       <span className="text-[16px] font-normal text-[#898989]"> Rp 3.500.000</span></p>
    </div>
  </Link>
  </div>
  <div className="flex flex-col sm:w-full md:w-[32%] lg:w-[22%]">
  <Link href={'/product'}>
   <Image
      src={image3}
      width={100}
      height={100}
      alt="banner"
      className="w-full min-h-[280px]"
    />
    <div className="flex flex-col w-full min-h-[100px] justify-center pl-4 bg-[#F4F5F7]">
      <h3 className="text-2xl font-semibold text-[#333333]">Syltherine</h3>
      <h3 className="text-base font-normal text-[#898989]">Stylish cafe chair</h3>
      <p className="text-[20px] font-semibold text-[#3A3A3A]">Rp 2.500.000
       <span className="text-[16px] font-normal text-[#898989]"> Rp 3.500.000</span></p>
    </div>
    </Link>
  </div>
  <div className="flex flex-col sm:w-full md:w-[32%] lg:w-[22%]">
  <Link href={'/product'}>
  <Image
      src={Image5}
      width={100}
      height={100}
      alt="banner"
      className="w-full min-h-[280px]"
    />
    <div className="flex flex-col w-full min-h-[100px] justify-center pl-4 bg-[#F4F5F7]">
      <h3 className="text-2xl font-semibold text-[#333333]">Syltherine</h3>
      <h3 className="text-base font-normal text-[#898989]">Stylish cafe chair</h3>
      <p className="text-[20px] font-semibold text-[#3A3A3A]">Rp 2.500.000
       <span className="text-[16px] font-normal text-[#898989]"> Rp 3.500.000</span></p>
    </div>
   </Link>
  </div>
  <div className="flex flex-col sm:w-full md:w-[32%] lg:w-[22%]">
  <Link href={'/product'}>
    <Image
      src={Image5}
      width={100}
      height={100}
      alt="banner"
      className="w-full min-h-[280px]"
    />
    <div className="flex flex-col w-full min-h-[100px] justify-center pl-4 bg-[#F4F5F7]">
      <h3 className="text-2xl font-semibold text-[#333333]">Syltherine</h3>
      <h3 className="text-base font-normal text-[#898989]">Stylish cafe chair</h3>
      <p className="text-[20px] font-semibold text-[#3A3A3A]">Rp 2.500.000
       <span className="text-[16px] font-normal text-[#898989]"> Rp 3.500.000</span></p>
    </div>
  </Link>
  </div>
</div>
      </>
    )}