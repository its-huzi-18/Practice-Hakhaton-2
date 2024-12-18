import React from 'react'
import CartHeader from '@/Components/CartHeader'
import CartItems from '@/Components/CartItems'
import { Poppins, Inter } from "next/font/google";
import Link from 'next/link';

const poppins = Poppins({
  subsets: ["latin"], // Load only the required subsets
  weight: ["400", "500", "700"], // Specify the font weights you need
  variable: "--font-poppins", // Optional: Add a custom CSS variable
});

const ImgData = [
  {
    id: 11,
    noDiscount: 'hidden',
    ImagesSrc: '/Images/dogFood.png',
    title: 'Bread Dry Dog Food',
    newPrice: 100,
    noOldPrice: 'hidden',
    itemNum: 35,
    rating: 3,
    width: 115,
    height: 180,
    containerHeight: 'h-[332px]',
    alt: 'Dog Food',
  },
  {
    id: 3,
    noDiscount: 'hidden',
    ImagesSrc: '/Images/camera.png',
    title: 'CANON EOS DSLR Camera',
    noOldPrice: 'hidden',
    newPrice: 360,
    itemNum: 95,
    rating: 4,
    width: 146,
    height: 163,
    containerHeight: 'h-[332px]',
    alt: 'DSLR Camera',
  },
  {
    id: 4,
    noDiscount: 'hidden',
    ImagesSrc: '/Images/laptop.png',
    title: 'ASUS FHD Gaming Laptop',
    newPrice: 700,
    noOldPrice: 'hidden',
    itemNum: 325,
    rating: 5,
    width: 172,
    height: 180,
    containerHeight: 'h-[332px]',
    alt: 'Gaming Laptop',
  },
  {
    id: 5,
    noDiscount: 'hidden',
    ImagesSrc: '/Images/creame.png',
    title: 'Curology Product Set',
    newPrice: 500,
    noOldPrice: 'hidden',
    itemNum: 145,
    rating: 4,
    width: 172,
    height: 159,
    containerHeight: 'h-[332px]',
    alt: 'Product Set',
  },
  {
    id: 6,
    noDiscount: 'hidden',
    ImagesSrc: '/Images/kidsCar.png',
    title: 'Kids Electric Car',
    newPrice: 960,
    noOldPrice: 'hidden',
    itemNum: 65,
    rating: 5,
    width: 180,
    height: 133,
    containerHeight: 'h-[332px]',
    newProduct: 'visible',
    circleColor: 'bg-darkRed',
    noShowColor: 'visible',
    alt: 'Electric Car',
  },
  {
    id: 7,
    noDiscount: 'hidden',
    ImagesSrc: '/Images/shoes.png',
    title: 'Jr. Zoom Soccer Cleats',
    newPrice: 1160,
    noOldPrice: 'hidden',
    itemNum: 35,
    rating: 5,
    width: 186,
    height: 164,
    containerHeight: 'h-[332px]',
    circleColor: 'bg-customYellow',
    noShowColor: 'visible',
    alt: 'Soccer Cleats',
  },
  {
    id: 12,
    ImagesSrc: '/Images/blackGamepad.png',
    title: 'GP11 Shooter USB Gamepad',
    newPrice: 660,
    noDiscount: 'hidden',
    noOldPrice: 'hidden',
    itemNum: 55,
    rating: 4.5,
    width: 178,
    height: 150,
    containerHeight: 'h-[332px]',
    newProduct: 'visible',
    circleColor: 'bg-customBlack',
    noShowColor: 'visible',
    alt: 'USB Gamepad',
  },
  {
    id: 8,
    noDiscount: 'hidden',
    ImagesSrc: '/Images/jacket.png',
    title: 'Quilted Satin Jacket',
    newPrice: 660,
    noOldPrice: 'hidden',
    itemNum: 55,
    rating: 4.5,
    width: 182,
    height: 176,
    containerHeight: 'h-[332px]',
    circleColor: 'bg-darkGreen',
    noShowColor: 'visible',
    alt: 'Satin Jacket',
  },
];


function OurProducts() {
  return (
    <div className={poppins.className}>
        <CartHeader
        title='Our Products'
        itemCategory='Explore Our Products'
        />
        <div className='mt-[80px] md:mt-[60px] justify-center md:justify-normal md:ml-[80px] flex flex-wrap gap-12 md:gap-[30px] max-w-full'>
        {ImgData.map((data:any,index:number)=>{
      return(
        <Link key={index} className='shadow-lg shadow-black w-[280px] rounded-sm justify-center md:shadow-none md:w-auto md:justify-normal flex' href={`/products/${data.id}`}>
     <CartItems
     noShowColor={data.noShowColor}
     newProduct={data.newProduct} 
      ImagesSrc={data.ImagesSrc}
      noDiscount={data.noDiscount}
       title={data.title}
       newPrice={data.newPrice}
       noOldPrice= {data.noOldPrice}
       itemNum={data.itemNum}
       rating={data.rating}
       containerHeight={data.containerHeight}
       height={data.height}
       width={data.width}
       id={data.id}
       alt={data.alt}
     />
        </Link>
      )
     })}
        </div>
        <div className='flex justify-center my-10'>
        <button className="text-[16px] shadow-md shadow-black font-medium rounded-[4px] text-customText bg-customRed w-[234px] h-[56px] p-[16px_48px] flex justify-center items-center">View All Products</button>
        </div>
    </div>
  )
}

export default OurProducts
