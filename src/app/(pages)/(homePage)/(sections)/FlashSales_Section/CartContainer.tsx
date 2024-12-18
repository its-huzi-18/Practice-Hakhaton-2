'use client'
import React from 'react'
import { Poppins,Inter } from 'next/font/google';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import CartItems from '@/Components/CartItems';
import { useState } from 'react';
import Link from 'next/link';


const poppins = Poppins({
    subsets: ['latin'], // Load only the required subsets
    weight: ['400', '500', '700'], // Specify the font weights you need
    variable: '--font-poppins', // Optional: Add a custom CSS variable
  });
  
const inter = Inter({
    subsets: ['latin'], // Load only required subsets
    variable: '--font-inter', // Optional: Add a custom CSS variable
  });
  const ImgData = [
    {
      id: 1,
      noDiscount: 'visible',
      ImagesSrc: '/Images/lcd.png',
      title: 'IPS LCD Gaming Monitor',
      newPrice: 375,
      oldPrice: 400,
      itemNum: 88,
      rating: 5,
      alt: 'Gaming Monitor',
      width:190,
      height:180,
      discount:30,
    },
    {
      id: 2,
      noDiscount: 'visible',
      ImagesSrc: '/Images/controler.png',
      title: 'HAVIT HV-G92 Gamepad',
      newPrice: 120,
      oldPrice: 160,
      itemNum: 88,
      rating: 5,
      height:172,
      width:152,
      alt: 'Gamepad',
      discount:40,
    },
    {
      id: 9,
      noDiscount: 'visible',
      ImagesSrc: '/Images/keyboard.png',
      title: 'AK-900 Wired Keyboard',
      newPrice: 960,
      oldPrice: 1160,
      itemNum: 75,
      rating: 4,
      width:191,
      height:101,
      alt: 'Keyboard',
      discount:35,
      
    },
    {
      id: 10,
      noDiscount: 'visible',
      ImagesSrc: '/Images/chair.png',
      title: 'S-Series Comfort Chair',
      newPrice: 375,
      oldPrice: 400,
      itemNum: 88,
      rating: 5,
      width:107,
      height:180,
      alt: 'Comfort Chair',
      discount:25,
    },
    {
      id: 10,
      noDiscount: 'visible',
      ImagesSrc: '/Images/chair.png',
      title: 'S-Series Comfort Chair',
      newPrice: 375,
      oldPrice: 400,
      itemNum: 88,
      rating: 5,
      width:107,
      height:180,
      alt: 'Comfort Chair',
      discount:25,
    },
  ];
  
  

function CartContainer() {
    
  const [translateX, setTranslateX] = useState(0); // State to track translation

  const handleLeftClick = () => {
    setTranslateX((prev) => prev + 50); // Move 50px to the right
  };

  const handleRightClick = () => {
    setTranslateX((prev) => prev - 50); // Move 50px to the left
  };
  return (
    <>
    <div className={`md:h-[493px] ml-[20px] md:ml-[80px] mt-[50px] md:mt-[90px] ${poppins.className} flex flex-col gap-[22px] md:overflow-hidden`}>
        <div className='flex'>
            <div className='w-[100px] h-[40px] flex gap-[16px] items-center'>
                <span className='w-[20px] h-[40px] bg-customRed rounded-md'></span>
                <h2 className=' text-customRed text-[14px] md:text-[16px] font-medium '>Today&s</h2>
            </div>
        </div>
        <div className=' text-customBlack items-center flex gap-6 md:gap-20 '>
            <h1 className={`${inter.className}  tracking-wide font-semibold md:font-medium text-[26px] md:text-[36px]`}>Flash Sales</h1>
            <div className=' flex md:w-[302px] h-[50px] items-center '>
                <div>
                    <h2 className='text-[10px] md:text-[12px] font-medium'>Days</h2>
                    <div className={`${inter.className} font-bold text-[22px] md:text-[32px] flex`}>03
                    <span className='text-clockBtn text-[22px] md:text-[32px] mx-1 md:mx-3'>:</span>
                    </div>
                    
                </div>
                <div>
                    <h2 className='text-[10px] md:text-[12px] font-medium'>Hours</h2>
                    <div className={`${inter.className} font-bold text-[22px] md:text-[32px] flex`}>23
                    <span className='text-clockBtn text-[22px] md:text-[32px] mx-1 md:mx-2'>:</span>
                    </div>
                    

                </div>
                <div>
                    <h2 className='text-[10px] md:text-[12px] font-medium'>Minutes</h2>
                    <div className={`${inter.className} font-bold text-[22px] md:text-[32px] flex`}>19
                    <span className='text-clockBtn text-[22px] md:text-[32px] mx-2'>:</span>
                    </div>
                  

                </div>
                <div>
                    <h2 className='text-[10px] md:text-[12px] font-medium'>Seconds</h2>
                    <span className={`${inter.className} font-bold text-[22px] md:text-[32px] flex`}>56</span>
                </div>
                <div className='hidden md:flex w-[100px] h-[46px] gap-[8px] items-center ml-[32rem]'>
                    <button
                     onClick={handleLeftClick}
                    className='bg-arrowBg rounded-full h-[46px] w-[46px] flex justify-center items-center '><GoArrowLeft className='text-[20px] md:text-[24px]' /></button>
                    <button 
                    onClick={handleRightClick}
                    className='bg-arrowBg rounded-full h-[46px] w-[46px] flex justify-center items-center '><GoArrowRight className='text-[24px]' /></button>
                </div>
            </div>
        </div>
<div
style={{ transform: `translateX(${translateX}px)`}}
className='md:h-[350px] flex md:flex-nowrap flex-wrap md:justify-normal md:mr-auto mr-[20px] justify-center  mt-6 md:mt-2  gap-12 md:gap-6'>
       {ImgData.map((data:any,index:number)=>{
      return(
        <Link key={index} href={`/products/${data.id}`}
        className='last:hidden md:last:block rounded-sm md:rounded-none md:shadow-none shadow-lg shadow-black md:w-auto w-[280px]  flex justify-center'>
<CartItems 
            ImagesSrc={data.ImagesSrc}
            noDiscount={data.noDiscount}
            discount={data.discount}
            title={data.title}
            newPrice={data.newPrice}
            oldPrice={data.oldPrice}
            itemNum={data.itemNum}
            rating={data.rating}
            width={data.width}
            height={data.height}
            alt={data.alt} id={data.id}/>
</Link>
      )
     })}

</div>

    </div>
    <div className='flex justify-center my-10'>
        <button className="text-[16px] font-medium rounded-[4px] text-customText bg-customRed w-[234px] h-[56px] p-[16px_48px] flex justify-center items-center shadow-black shadow-md">View All Products</button>
        </div>
<hr className='ml-[80px] mt-[20px] -mb-[15px]'/>
    </>
  )
}

export default CartContainer