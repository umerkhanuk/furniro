import Image from "next/image";
import banner from './public/banner.png'
import one from './public/one.png'
import two from './public/two.png'
import three from './public/three.png'
import image1 from './public/image1.png'
import image3 from './public/image3.png'
import Image5 from './public/Image5.png'
import p6 from './public/p6.png'
import p7 from './public/p7.png'
import p8 from './public/p8.png'
import p9 from './public/p9.png'
import rec1 from './public/rec1.png'
import rec2 from './public/rec2.png'
import Link from 'next/link';



export default function Home() {
  return (
    <>
<div className="flex justify-center items-center min-h-screen px-4 sm:px-8 md:px-12 lg:px-16">
  <div className="relative w-full max-w-7xl">
    <Image
      src={banner}
      width={1440}
      height={800}
      alt="banner"
      className="w-full min-h-[716px]"
    />
    <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 bg-[#FFF3E3] rounded-md p-6 sm:p-8 lg:p-12 max-w-md sm:max-w-lg">
      <h6 className="text-sm sm:text-base font-bold">New Arrival</h6>
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#B88E2F] mt-2">
        Discover Our <br /> New Collection
      </h3>
      <p className="text-sm sm:text-base mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore
      </p>
      <button className="mt-6 bg-[#B88E2F] text-white py-2 px-6 sm:px-8 rounded-md text-sm sm:text-base">
        BUY NOW
      </button>
    </div>
  </div>
</div>

<div className="flex flex-col w-full justify-center items-center mt-12">
  <h2 className=" text-[#333] text-3xl font-semibold">Browse The Range</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>

  <div className="flex flex-wrap w-full justify-center items-center mt-12 mb-12 gap-4 ">
  <div className="flex flex-col sm:w-full md:w-[45%] lg:w-[32%]">
    <Image
      src={one}
      width={100}
      height={100}
      alt="banner"
      className="w-full min-h-[480px]"
    />
  <h4 className="text-2xl font-semibold text-[#333333] text-center mt-5">Dining</h4>
  </div>

  <div className="flex flex-col sm:w-full md:w-[45%] lg:w-[32%]">
    <Image
      src={two}
      width={100}
      height={100}
      alt="banner"
      className="w-full min-h-[480px]"
    />
  <h4 className="text-2xl font-semibold text-[#333333] text-center mt-5">Living</h4>
  </div>
  <div className="flex flex-col sm:w-full md:w-[45%] lg:w-[32%]">
    <Image
      src={three}
      width={100}
      height={100}
      alt="banner"
      className="w-full min-h-[480px]"
    />
  <h4 className="text-2xl font-semibold text-[#333333] text-center mt-5">Bedroom</h4>
  </div>
</div>
      
<div className="flex flex-col w-full justify-center items-center mt-12">
  <h2 className=" text-[#333] text-3xl font-semibold">Our Products</h2>
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
  <Link href={'/product'}>
  <Image
      src={p6}
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
      src={p7}
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
      src={p8}
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
      src={p9}
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
      
       {/* {section4} */}
       <div className="flex flex-wrap w-full bg-[#FCF8F3] min-h-[670px] justify-center items-center mt-24 mb-24 gap-4 ">
       <div className="flex flex-col sm:w-full md:w-[30%] lg:w-[40%] pl-5">
        <h2 className="text-[40px] font-semibold text-[#3A3A3A] ">50+ Beautiful rooms 
        inspiration</h2>
        <button className=" bg-[#B88E2F]  w-[30%] p-2 text-[16px] text-white font-semibold mt-5">Explore More</button>
      </div>
      <div className="flex flex-col sm:w-full md:w-[35%] lg:w-[28%]">
      <Image
      src={rec1}
      width={100}
      height={800}
      alt="banner"
      className="w-full min-h-[582px]"
    />
      </div>
      <div className="flex flex-col lg:mt-[-65px] sm:w-full md:w-[35%] lg:w-[28%]">
      <Image
      src={rec2}
      width={100}
      height={800}
      alt="banner"
      className="w-full min-h-[486px]"
    />
      </div>
      </div>

  <div className="flex flex-col w-full justify-center items-center mt-12">
  <h2 className=" text-[#333] text-3xl font-semibold">#FuniroFurniture</h2>
  </div>
    <div className="relative bg-white w-full min-h-screen p-10">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4 relative">
        <Image
            src={image1}
            alt="Decor Item"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="col-span-4 relative">
        <Image
            src={Image5}
            alt="Table Decor"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="col-span-4 relative">
        <Image
            src={p7}
            alt="Bedroom Decor"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="col-span-6 relative mt-[-80px] z-10">
          <Image
            src={rec1}
            alt="Chair"
            className="w-full max-h-[300px] object-cover"
          />
        </div>

        <div className="col-span-6 relative mt-[-60px] z-0">
        <Image
            src={image1}
            alt="Kitchen Decor"
            className="w-full max-h-[300px] object-cover"
          />
        </div>
      </div>
    </div>

</>
  );
}
