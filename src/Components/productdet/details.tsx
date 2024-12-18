"use client";
import Image from "next/image"
import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";

const Details = ({ product }: { product: { title: string, price: number,rating:number } }) => {
    const [quantity, setQuantity] = useState(1)
    const fullStars = Math.floor(product.rating); // Full stars
    const halfStars = product.rating % 1 >= 0.5 ? 1 : 0; // Half star (if there's a remainder)
    const emptyStars = 5 - fullStars - halfStars; // Remaining empty stars
  
    return (
        <div className="md:w-2/5 w-full md:p-2 md:pt-0 pt-10">
            <h1 className="w-full sm:text-2xl text-xl font-medium">{product?.title}</h1>

            <div className='flex gap-1 items-center'>
            <div className={`flex gap-1`}>
  {[...Array(fullStars)].map((_, i) => (
    <FaStar key={`full-${i}`} className="text-yellow-500 text-[14px]" />
  ))}
  {[...Array(halfStars)].map((_, i) => (
    <FaStarHalfAlt key={`half-${i}`} className="text-yellow-500 text-[14px]" />
  ))}
  {[...Array(emptyStars)].map((_, i) => (
    <FaRegStar key={`empty-${i}`} className="text-yellow-500 text-[14px]" />
  ))}
</div>
                <span className="text-zinc-500 text-sm py-2"> &nbsp; (150 reviews) &nbsp; | &nbsp; <span className="text-green-500">In Stock</span></span>
            </div>

            <span className="text-xl">${product.price * quantity}.00</span>
            <p className="text-sm py-3 border-b-2 border-zinc-300">
                PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
            </p>

            <div className="flex items-center py-3 gap-2">
                <span className="text-lg mr-4">Colours:</span>
                <button className="w-4 h-4 rounded-full focus:outline-none focus:ring-1 focus:ring-zinc-800 bg-red-600"></button>
                <button className="w-4 h-4 rounded-full focus:outline-none focus:ring-1 focus:ring-zinc-800 bg-zinc-500"></button>
            </div>

            <div className="flex items-center py-3 gap-2">
                <span className="text-lg mr-4">Size:</span>
                <button className="w-8 h-8 text-xs border-zinc-400
                 border rounded-sm hover:bg-customRed hover:text-white focus:bg-customRed focus:text-white focus:border-none">XS</button>
                <button className="w-8 h-8 text-xs border-zinc-400 border rounded-sm hover:bg-customRed hover:text-white focus:bg-customRed focus:text-white focus:border-none">S</button>
                <button className="w-8 h-8 text-xs border-zinc-400 border rounded-sm hover:bg-customRed hover:text-white focus:bg-customRed focus:text-white focus:border-none">M</button>
                <button className="w-8 h-8 text-xs border-zinc-400 border rounded-sm hover:bg-customRed hover:text-white focus:bg-customRed focus:text-white focus:border-none">L</button>
                <button className="w-8 h-8 text-xs border-zinc-400 border rounded-sm hover:bg-customRed hover:text-white focus:bg-customRed focus:text-white focus:border-none">XL</button>
            </div>

            <div className="flex flex-wrap items-center py-3 gap-2">
                <div className="flex items-center border border-zinc-400 rounded-md">
                    <button onClick={() => quantity <= 1 ? setQuantity(1) : setQuantity(quantity - 1)} className="w-10 h-10 border-r border-zinc-400 text-lg flex justify-center items-center hover:bg-customRed hover:text-white"><LuMinus /></button>
                    <span className="md:px-10 px-8 font-medium">{quantity.toString().length > 1 ? quantity : "0" + quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 border-l border-zinc-400 text-lg flex justify-center items-center hover:bg-customRed hover:text-white"><GoPlus /></button>
                </div>
                <button className="rounded-sm  bg-customRed text-white md:px-8 px-5 sm:py-2 py-3 sm:text-base text-xs"> Buy Now</button>
                <button className="w-10 h-10 border hover:bg-customRed focus:text-white hover:text-white focus:bg-customRed focus:border-none border-zinc-400 rounded-md flex justify-center items-center p-1">
                <CiHeart className="text-[20px]" />
                </button>
            </div>

            <div className="flex items-center py-3 gap-2 w-full">
                <div className="w-full border border-zinc-400 rounded-md">
                    <div className="w-full border-b border-zinc-400 flex items-center gap-5 p-4">
                        <div className="w-14 h-14 p-1">
                            <Image src={"/Images/delivery.png"} alt="" width={50} height={50}  />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-base font-medium">Free Delivery</span>
                            <span className="text-sm">Enter your postal code for Delivery Availability</span>
                        </div>
                    </div>
                    <div className="w-full flex items-center gap-5 p-4">
                        <div className="w-10 h-10 p-1">
                            <Image src={"/Images/Icon-return.png"} alt="" width={45} height={45} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-base font-medium">Return Delivery</span>
                            <span className="text-sm">Free 30 Days Delivery Returns. Details</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details