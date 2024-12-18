'use client'
import React from 'react'
import Image from 'next/image';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Poppins,Inter } from 'next/font/google';
import { GoArrowRight } from 'react-icons/go';
import { FaApple } from 'react-icons/fa';
import { useEffect, useState } from 'react';


const inter = Inter({
  subsets: ['latin'], // Load only required subsets
  variable: '--font-inter', // Optional: Add a custom CSS variable
});

const poppins = Poppins({
    subsets: ['latin'], // Load only the required subsets
    weight: ['400', '500', '700'], // Specify the font weights you need
    variable: '--font-poppins', // Optional: Add a custom CSS variable
  });


function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after the component mounts
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const items = [
    "Woman’s Fashion",
    "Men’s Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby’s & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];
  return (
    <div>
<div className='flex  flex-col md:flex-row justify-evenly mt-9 items-center  -space-x-12'>
    <hr className='hidden md:block rotate-90 top-[22rem]  left-[70px] w-[28rem] absolute '/>
    <div className='mt-9 shadow-black/60 md:border-none rounded-sm md:shadow-none md:w-auto border-l-2 border-black/60 shadow-lg justify-center py-2 w-[250px] md:mt-16 flex order-2 md:block md:order-1'>
    <ul className={`flex flex-col space-y-4 text-[16px]`}>
      {items.map((item, index) => (
        <li
          key={index}
          className={`flex justify-between items-center gap-10 transform transition-all duration-500 ease-in-out 
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: `${index * 100}ms` }} // Delay for staggered animation
        >
          {item}
          {["Woman’s Fashion", "Men’s Fashion"].includes(item) && (
            <span>
              <MdKeyboardArrowRight className='-mr-20 w-[24px] h-[24px]' />
            </span>
          )}
        </li>
      ))}
    </ul>
    </div>
    <div className='overflow-hidden flex order-1 md:order-2 left-6 shadow-md shadow-black/50 md:left-auto w-[374px] md:w-[892px] h-[220px] md:h-[344px] bg-customBlack relative'>
<div className='flex flex-col gap-4 text-customText justify-center h-full ml-[22px] md:ml-8'>
  <div className=' flex gap-2 md:gap-6 items-center'>
  <FaApple
  className='w-[40px] h-[49px] '
  />
      <h2 className={`text-[16px] font-normal ${poppins.className} mt-1 text-customText`}>iPhone 14 Series</h2>
  </div>
  <h1 className={`md:w-[294px] md:h-[120px] md:text-[48px] font-semibold ${inter.className}`}>Up to 10% off Voucher</h1>
  <h3 className={`${poppins.className} font-medium text-[16px] text-white flex items-center gap-2 mt-4`}>
        <span className='border-b-2 border-customGrey'>ShopNow</span>
  <GoArrowRight  className='text-[24px]'/> 
        </h3>  </div> 
        <div className='z-20 absolute bottom-3 left-[297px]'>

<div className='-ml-10 md:ml-0 flex gap-[12px]'>
<div className='w-[12px] h-[12px] rounded-full bg-customText/50'></div>
<div className='w-[12px] h-[12px] rounded-full bg-customText/50'></div>
<div className='w-[12px] h-[12px] rounded-full bg-customRed border-2 border-white'></div>
<div className='w-[12px] h-[12px] rounded-full bg-customText/50'></div>
<div className='w-[12px] h-[12px] rounded-full bg-customText/50'></div>
</div>
        </ div>
      <div className='w-[250px]  md:w-auto absolute top-[30px] md:top-[16px]  left-[170px]  md:left-[396px]'>
<Image 
className='hidden md:block'
alt='iphone'
src={'/Images/iphone.png'}
width={496}
height={352}
/>
<Image 
className='md:hidden visible '
src={'/Images/iphoneSmall.png'}
alt='small IPhone'
width={245}
height={350}
/>
</div>
    </div>
</div>
    </div>
  )
}

export default HeroSection