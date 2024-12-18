import React from 'react'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import { Poppins,Inter } from 'next/font/google';
const poppins = Poppins({
    subsets: ['latin'], // Load only the required subsets
    weight: ['400', '500', '700'], // Specify the font weights you need
    variable: '--font-poppins', // Optional: Add a custom CSS variable
  });
  
const inter = Inter({
    subsets: ['latin'], // Load only required subsets
    variable: '--font-inter', // Optional: Add a custom CSS variable
  });
 interface cartTittle {
title:string;
itemCategory:string;
noArrow?:string;
addButton?:any;
 } 

const CartHeader:React.FC<cartTittle>=({title,itemCategory,noArrow,addButton})=> {
  return (
    
    <div className={`h-[108px] ml-[20px] md:ml-[80px] mt-[70px] ${poppins.className} flex flex-col gap-[22px]`}>
      {/* <hr /> */}
       {/* margin working to do */}
                <div className='flex'>
            <div className=' h-[40px] flex gap-[16px] items-center'>
                <span className='w-[20px] h-[40px] bg-customRed rounded-md'></span>
                <h2 className=' text-customRed text-[16px] font-medium '>{title}</h2>
            </div>
        </div>
        <div className=' text-customBlack flex md:gap-20 justify-between '>
            <h1 className={`${inter.className} font-medium text-[24px] md:text-[36px]`}>{itemCategory}</h1>
            <div className=' md:ml-0 ml-12 flex md:w-[302px] h-[50px] items-center '>
            <div>{addButton}</div>
                <div className={`md:w-[100px] h-[46px] flex gap-[8px] md:mr-0 mr-3 items-center ml-10  ${noArrow}`}>
                    <i className='bg-arrowBg rounded-full h-[46px] w-[46px] flex justify-center items-center '><GoArrowLeft className='text-[24px]' /></i>
                    <i className='bg-arrowBg rounded-full h-[46px] w-[46px] flex justify-center items-center '><GoArrowRight className='text-[24px]' /></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartHeader