import React from 'react'
import CartHeader from '@/Components/CartHeader'
import { Poppins,Inter} from 'next/font/google';
import Card from '@/Components/CartItems';

import Image from 'next/image';
import Link from 'next/link';
import CartItems from '@/Components/CartItems';

const poppins = Poppins({
    subsets: ['latin'], // Load only the required subsets
    weight: ['400', '500','600', '700'], // Specify the font weights you need
    variable: '--font-poppins', // Optional: Add a custom CSS variable
  });
  const inter = Inter({
    subsets: ['latin'], // Load only required subsets
    variable: '--font-inter', // Optional: Add a custom CSS variable
  });

const ImgData = [
  { id:13,  
    noDiscount:'hidden',
    ImagesSrc:"/Images/coatItem.png",
     title:'The north coat',
     newPrice:260,
     oldPrice:360,
     itemNum:65,
     width:140, 
     height:146,
      rating:5,
     alt:'coatItem'
    },
     {
      id:14,
      title:'Gucci duffle bag',
      ImagesSrc:'/Images/bagItem.png',
      newPrice:960,
      noDiscount:'hidden',
       oldPrice:1160,
       itemNum:65,
       rating:4.5,
       width:178,
        height:129,
        alt: 'bagItem'
       },
       {id:15, 
          noDiscount:'hidden',
        ImagesSrc:'/Images/speakerItem.png',
         title:'RGB liquid CPU Cooler',
         newPrice:160,
         oldPrice:170,
         itemNum:65,
         rating:4.5,       
         width:191,
         height:95,
         alt:'speakerItem'
       },
         {id:16,
              noDiscount:'hidden',
          ImagesSrc:'/Images/bookSelf.png',
           title:'Small BookSelf',
           newPrice:260,
           noOldPrice:'hidden',
           itemNum:65,
           rating:5,
           width:140,
           height:176,
           alt:'bookSelf'},
]




function BestProducts() {
  return (
    <div>
        <hr className='ml-[80px]'/>
        <CartHeader 
        title='This Month'
        noArrow='hidden'
        itemCategory='Best Selling Products'
        addButton={
            <button className='shadow-black md:mr-0 mr-2 shadow-md w-[159px] h-[56px]  rounded-sm bg-customRed text-customText font-medium text-[16px]'>
                View All
            </button> }
        />
        <div className=' md:justify-normal justify-center md:ml-[80px] md:h-[350px] flex flex-wrap mt-[80px] md:mt-[60px] md:overflow-hidden gap-12 md:gap-10'>
   

     {ImgData.map((data:any,index:number)=>{
      return(
        <Link key={index} className='shadow-black shadow-lg md:shadow-none w-[280px] md:w-auto md:block md:justify-normal md:rounded-none flex justify-center rounded-sm' href={`/products/${data.id}`}>

          <CartItems 
            ImagesSrc={data.ImagesSrc}
            
            width={data.width}
            height={data.height}
            alt={data.alt}
            noDiscount={data.noDiscount}
            title={data.title}
            newPrice={data.newPrice}
            oldPrice={data.oldPrice}
            noOldPrice={data.noOldPrice}
            itemNum={data.itemNum} id={data.id} rating={data.rating}
          />
        </Link>
      )
     })}
        </div>
        <div className='flex justify-center items-center relative my-20'>
          <Image
          className='md:hidden h-[290px]'
          src={'/Images/mobileFrame.jpeg'}
          width={370}
    objectFit="cover" 
    layout="responsive"
          height={400}
          quality={100}
          alt='mobileFrame'
          />
        <div className='hidden md:block -z-20 bg-customBlack w-[1170px] h-[500px] '>
            <div className='flex flex-col gap-5 justify-center h-full pl-14'>
          <h4 className={`${poppins.className} text-[16px] font-semibold text-customGreen`}>Categories</h4>
          <h1 className={`${inter.className} text-customText font-medium text-[48px] w-[443px] h-[120px]`}>Enhance Your Music Experience</h1>
          <div className='flex gap-4 my-6'>
            <div className='flex flex-col w-[62px] h-[62px] bg-white rounded-full justify-center items-center'>
                <h2 className={`${poppins.className} text-[16px] font-semibold`}>23</h2>
                <h4 className={`${poppins.className} text-[11px] font-normal text-customBlack -mt-[6px]`}>Hours</h4>
            </div>
            <div className='flex flex-col w-[62px] h-[62px] bg-white rounded-full justify-center items-center'>
                <h2 className={`${poppins.className} text-[16px] font-semibold`}>05</h2>
                <h4 className={`${poppins.className} text-[11px] font-normal text-customBlack -mt-[6px]`}>Days</h4>
            </div>
            <div className='flex flex-col w-[62px] h-[62px] bg-white rounded-full justify-center items-center'>
                <h2 className={`${poppins.className} text-[16px] font-semibold`}>59</h2>
                <h4 className={`${poppins.className} text-[11px] font-normal text-customBlack -mt-[6px]`}>Minutes</h4>
            </div>
            <div className='flex flex-col w-[62px] h-[62px] bg-white rounded-full justify-center items-center'>
                <h2 className={`${poppins.className} text-[16px] font-semibold`}>35</h2>
                <h4 className={`${poppins.className} text-[11px] font-normal text-customBlack -mt-[6px]`}>Seconds</h4>
            </div>
     
          </div>
          <button className='w-[171px] h-[56px] bg-customGreen font-medium text-customText rounded-sm'>Buy Now</button>
            </div>
            <Image 
          className='z-20 absolute left-[610px] top-[80px] '
          src={'/Images/bluetooth speaker.png'}
          width={568}
          height={330}
          alt='Bluetooth Speaker'
          />
        <div className="absolute w-[504px] h-[500px] left-[630px] top-[6.5px] bg-speakerBg opacity-30 blur-[100px] rounded-full">
        </div>

        </div>

        </div>
    </div>
  )
}

export default BestProducts