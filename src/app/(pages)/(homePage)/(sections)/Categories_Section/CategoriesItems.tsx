import Image from 'next/image'
import React from 'react'
import { Poppins,Inter } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'], // Load only the required subsets
    weight: ['400', '500', '700'], // Specify the font weights you need
    variable: '--font-poppins', // Optional: Add a custom CSS variable
  });
interface CategoryItems {
    itemSrc:any;
    itemName:string;
    cameraBg?:string;
    cameraText?:string;
}

const CategoriesItems :React.FC<CategoryItems>=({itemSrc,itemName,cameraBg,cameraText}) => {
  return (
    <div className={`mb-[60px] shadow-black shadow-md md:shadow-none ${cameraBg} rounded-md border-2 border-customBlack/30 w-[170px] gap-4 h-[145px] flex flex-col justify-center items-center`}>
   <div className='flex flex-col '>
    <Image
    src={itemSrc}
    width={56}
    height={56}
   
    alt='Categories'
    />
   </div>
    <div className={`text-[16px] ${poppins.className} ${cameraText} w-[101px] h-[24px] text-center`}>{itemName}</div>
    </div>
  )
}

export default CategoriesItems