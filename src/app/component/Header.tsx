import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logof from "../public/logof.png";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser  } from "react-icons/fa";


export default function Header (){
  return (
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5  grid-rows-[100px] gap-2">
    <div className="grid items-center justify-center row-span-1 col-span-5 sm:col-span-2  md:col-span-1 ml-3">
    <Image
        src={logof}
        alt="Description of the image"
        width={118}
        height={24} />
    </div>
    <div className="grid items-center row-span-1  col-span-5 sm:col-span-3 md:col-span-2 " >
        <ul className="flex justify-center text-base gap-11 lg:gap-16 sm:gap-7 ">
        <Link href="/"><li>Home</li></Link>
        <Link href="/Shop"><li>Shop</li></Link>
        <Link href="/blog"><li>Blog</li></Link>
        <Link href="/contact"><li>Contact</li></Link>
        </ul>
    </div>
    <div className="flex items-center justify-center row-span-1 col-span-2  gap-4" >
    <FaRegUser  className="fa-regular" size={17} />
     <IoSearchOutline className="cursor-pointer" size={20}/>
     <IoMdHeartEmpty size={21} />
    <Link href="/cart"><IoCartOutline size={21} /></Link> 
      </div>
   </div> 
  )
}
