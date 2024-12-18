import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Icon } from "@iconify/react";
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'

interface Arr {
  id: string | number,
     title: string,
      image: string,
       price: number,
       oldPrice:number,
       alt:string,
       rating:number 
}


const Card = ({arr}: { arr:Arr[] }) => {
    return (
        <>
        {
            arr.map((data: Arr, index) => {
              const fullStars = Math.floor(data.rating); // Full stars
              const halfStars = data.rating % 1 >= 0.5 ? 1 : 0; // Half star (if there's a remainder)
              const emptyStars = 5 - fullStars - halfStars; // Remaining empty stars
                return (
                    <Link href={`/products/${data.id}`} key={index} className='sm:w-60 xs:w-52  shadow-black shadow-md md:shadow-none w-[170px]  flex flex-col  items-center justify-center '>
                        <div className='sm:w-60 sm:h-56 xs:w-52 xs:h-44 w-36 h-40 bg-[#F5F5F5]  p-4 md:p-10 relative group'>
                            <Image src={data.image} alt={data.alt} width={600} height={600} className="w-full h-full object-contain" />
                            <div className=" w-full h-full absolute top-0 left-0 hidden group-hover:block transition-all">
                                <div className="absolute w-full h-8 left-0 bottom-0 justify-center items-center gap-1 bg-black flex cursor-pointer">
                                        <Icon
                                               icon="mdi-light:cart"
                                               width="24"
                                               height="24"
                                               className='text-white'
                                             />
                                    <div className="text-white text-sm">Add to cart</div>
                                </div>
                            </div>
                        </div>

<div className='flex flex-col justify-center items-center gap-1  xs:text-base text-sm'>

                        <div className='font-medium mt-2 xs:text-base text-sm text-center'>{data.title}</div> 
                    
                        {/* <div className='  > */}
                        <div className='flex gap-2 '>
                            <span className='text-red-500'>${data.price}</span> 
                            <span className='text-zinc-500'>${data.oldPrice}</span>
                        </div>
                            <div className='flex md:flex-row flex-col items-center gap-1'>
                            <div className='flex  gap-1'>
                            {[...Array(fullStars)].map((_, i) => (
                  <FaStar key={`full-${index}-${i}`} className="text-yellow-500 text-[14px]" />
                ))}
                {[...Array(halfStars)].map((_, i) => (
                  <FaStarHalfAlt key={`half-${index}-${i}`} className="text-yellow-500 text-[14px]" />
                ))}
                {[...Array(emptyStars)].map((_, i) => (
                  <FaRegStar key={`empty-${index}-${i}`} className="text-yellow-500 text-[14px]" />
                ))}
                            </div>
                            <span className="my-1 md:my-0 text-zinc-400 text-sm font-medium">(55)</span>
                            </div>
                        {/* </div> */}
                </div>
                    </Link>
                )
            })
        }</>

    )
}

export default Card