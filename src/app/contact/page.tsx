import Image from "next/image"
import { MdOutlineLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
export default function Cart (){
    return (
        <>
        <div className="flex flex-col w-full justify-center items-center mt-12" id="cartbgimg">
        <h2 className=" text-[#333] text-4xl font-[500]">Contact Us</h2>
</div>

        <div className="flex flex-col w-full justify-center items-center mt-12">
        <h2 className="text-2xl font-semibold text-center ">Get In Touch With Us</h2>
        <p className="text-gray-600 text-center">
          For more information about our products & services, please feel free to drop us an email. Our staff is always here to help. Do not hesitate!
        </p>
        </div>
       <div className="flex flex-col lg:flex-row items-start gap-10 p-10">
      <div className="flex flex-col space-y-6 lg:w-1/2">

        <div className="space-y-4">
          <div className="flex items-start">
            <span className="text-black text-xl mr-4"><MdOutlineLocationOn /></span>
            <p className="text-gray-700">
              <strong>Address:</strong> <br />
              236 5th SE Avenue, New York NY10000, United States
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-black text-xl mr-4"><FaPhoneAlt /></span>
            <p className="text-gray-700">
              <strong>Phone:</strong> <br />
              Mobile: (+84) 546-6789 <br />
              Hotline: (+84) 456-6789
            </p>
          </div>
          <div className="flex items-start">
            <span className="text-black text-xl mr-4"><IoTime /></span>
            <p className="text-gray-700">
              <strong>Working Time:</strong> <br />
              Monday-Friday: 9:00 - 22:00 <br />
              Saturday-Sunday: 9:00 - 21:00
            </p>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 p-2"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 p-2"
              placeholder="youremail@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 p-2"
              placeholder="This is optional"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
            <textarea
              id="message"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 p-2"
              placeholder="Hi! I'd like to ask about..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-600 text-white py-2 rounded-md text-lg hover:bg-yellow-500 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>

       </>
    )}
