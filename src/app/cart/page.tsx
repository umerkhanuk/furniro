import Image from "next/image"
import icon1 from '../public/icon1.png'
import icon2 from '../public/icon2.png'

export default function Cart (){
    return (
        <>
        <div className="flex flex-col w-full justify-center items-center mt-12" id="cartbgimg">
        <h2 className=" text-[#333] text-4xl font-[500]">Cart</h2>
       </div>

       <div className="flex flex-wrap w-full justify-center mt-12 mb-12 gap-4 ">
       <div className="flex flex-col sm:w-full md:w-[50%] lg:w-[60%]">
        <div className="flex items-center justify-center  bg-[#F9F1E7] min-h-[55px] ">
            <ul className="flex lg:gap-36 gap-6">
                <li>Product</li>
                <li>Price</li>
                <li>Quantity</li>
                <li>Subtotal</li>
            </ul>
        </div>
        </div>
        <div className="flex flex-col  bg-[#F9F1E7] min-h-[390px] w-[80%] md:w-[50%] lg:w-[38%]">
  <h4 className="text-3xl font-semibold text-[#333333] text-center mt-5">Cart Totals</h4>
  <div className="flex flex-col justify-center items-center">
  <h5 className="text-base font-semibold text-[#333333] mt-[10%]">Subtotal : Rs. 250,000.00</h5>
  <h5 className="text-base font-semibold text-[#333333]  ">Total : Rs. 250,000.00</h5>
  </div>
        </div>
        </div>

        <div className="flex flex-wrap w-full bg-[#F9F1E7] pt-6 pb-6 justify-center items-center mt-24 mb-24 gap-4 ">
        <div className="flex flex-col sm:w-full md:w-[32%] lg:w-[22%]">
        <Image
             src={icon1}
             width={76}
            height={22}
             alt="banner"
             className="w-full  mb-6"
            />
        </div>
      <div className="flex flex-col sm:w-full md:w-[32%] lg:w-[22%]">
        <Image
             src={icon2}
             width={76}
            height={22}
             alt="banner"
             className="w-full  mb-6"
            />
        </div>
              <div className="flex flex-col sm:w-full md:w-[32%] lg:w-[22%]">
              <Image
                   src={icon1}
                   width={76}
                  height={22}
                   alt="banner"
                   className="w-full  mb-6"
                  />
              </div>
            <div className="flex flex-col sm:w-full md:w-[32%] lg:w-[22%]">
            <Image
                 src={icon2}
                 width={76}
                height={22}
                 alt="banner"
                 className="w-full mb-6"
                />
            </div>
          </div>
        </>
    )

}