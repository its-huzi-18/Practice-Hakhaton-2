import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'], // Load only the required subsets
    weight: ['400', '500', '700'], // Specify the font weights you need
    variable: '--font-poppins', // Optional: Add a custom CSS variable
  });

function TopHeader() {
  return (
    <>
     <header className={`text-center md:text-start h-[48px] bg-zinc-900 md:px-2 px-4 text-customText flex justify-center md:justify-end items-center text-[10px] md:text-[14px]`}>
        <div className='flex justify-between w-[859px] md:h-[24px] md:gap-0 gap-6 md:mr-[107px]'>
        <p className=''>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className='font-medium underline ml-1'>ShopNow</span></p>
        <div className='flex items-center justify-between space-x-2'>
        <span>English</span><span>
        <IoIosArrowDown />
        </span>
        </div>
        </div>
     </header>
    </>
  )
}

export default TopHeader