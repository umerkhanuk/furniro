import Image from "next/image";
import Link from 'next/link';

import image1 from '../public/image1.png'
import image3 from '../public/image3.png'
import Image5 from '../public/Image5.png'



export default function page ()  {
  return (
    <>
<div className="flex flex-col w-full justify-center items-center mt-12" id="cartbgimg">
  <h2 className=" text-[#333] text-4xl font-[500]">Shop</h2>
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
  )
}
