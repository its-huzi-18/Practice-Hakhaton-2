// import CartHeader from '../../Components/CartHeader'
import React from 'react'
import { Poppins,Inter } from 'next/font/google';
import CartItems from '@/Components/CartItems';
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
      id: 14,
      ImagesSrc: '/Images/bagItem.png',
      binIcon: true,
      oldPrice: 1160,
      cartIcon: 'visible',
      discount: 65,
      Heart: 'hidden',
      hoverEffect: 'no',
      title: 'Gucci duffle bag',
      newPrice: 960,
      itemNum: 65,
      rating: 5,
      width: 178,
      height: 129,
      optionalSize: 'mb-6',
      noRating: 'hidden',
      alt: 'Duffle Bag',
      noDiscount: 'visible',

    },
    {
      id: 15,
      ImagesSrc: '/Images/speakerItem.png',
      binIcon: true,
      noRating: 'hidden',
      cartIcon: 'visible',
      Heart: 'hidden',
      hoverEffect: 'no',
      noOldPrice: 'hidden',
      noDiscount: 'hidden',
      title: 'RGB liquid CPU Cooler',
      newPrice: 1960,
      itemNum: 65,
      rating: 5,
      width: 191,
      height: 95,
      alt: 'CPU Cooler',
    },
    {
      id: 12,
      ImagesSrc: '/Images/blackGamepad.png',
      binIcon: true,
      noRating: 'hidden',
      cartIcon: 'visible',
      Heart: 'hidden',
      hoverEffect: 'no',
      noOldPrice: 'hidden',
      noDiscount: 'hidden',
      title: 'GP11 Shooter USB Gamepad',
      newPrice: 550,
      itemNum: 65,
      rating: 5,
      width: 178,
      height: 150,
      optionalSize: 'mb-4',
      alt: 'USB Gamepad',
    },
    {
      id: 8,
      ImagesSrc: '/Images/blackCoat.png',
      binIcon: true,
      noRating: 'hidden',
      cartIcon: 'visible',
      Heart: 'hidden',
      hoverEffect: 'no',
      noOldPrice: 'hidden',
      noDiscount: 'hidden',
      title: 'Quilted Satin Jacket',
      newPrice: 750,
      itemNum: 65,
      rating: 5,
      width: 182,
      height: 176,
      optionalSize: 'mb-5',
      alt: 'Satin Jacket',
    },
  ];

  const AdditionalImgData = [
    {
      id: 4,
      ImagesSrc: '/Images/laptop.png',
      oldPrice: 1160,
      cartIcon: 'visible',
      discount: 65,
      Heart: 'hidden',
      hoverEffect: 'no',
      title: 'ASUS FHD Gaming Laptop',
      newPrice: 960,
      itemNum: 65,
      rating: 5,
      width: 158,
      height: 156,
      alt: 'Gaming Laptop',
    },
    {
      id: 1,
      ImagesSrc: '/Images/lcd.png',
      cartIcon: 'visible',
      Heart: 'hidden',
      hoverEffect: 'no',
      noOldPrice: 'hidden',
      noDiscount: 'hidden',
      title: 'IPS LCD Gaming Monitor',
      newPrice: 1160,
      itemNum: 65,
      rating: 5,
      width: 170,
      height: 129,
      alt: 'Gaming Monitor',
    },
    {
      id: 2,
      ImagesSrc: '/Images/controler.png',
      cartIcon: 'visible',
      newProduct: 'visible',
      Heart: 'hidden',
      hoverEffect: 'no',
      noOldPrice: 'hidden',
      noDiscount: 'hidden',
      title: 'HAVIT HV-G92 Gamepad',
      newPrice: 560,
      itemNum: 65,
      rating: 5,
      width: 165,
      height: 145,
      alt: 'Gamepad',
    },
    {
      id: 9,
      ImagesSrc: '/Images/keyboard.png',
      cartIcon: 'visible',
      Heart: 'hidden',
      hoverEffect: 'no',
      noOldPrice: 'hidden',
      noDiscount: 'hidden',
      title: 'AK-900 Wired Keyboard',
      newPrice: 200,
      itemNum: 65,
      rating: 5,
      width: 191,
      height: 101,
      alt: 'Keyboard',
    },
  ];  

const page = () => {
  return (
    <div>
      <div className={`${poppins.className}  md:ml-[80px] md:w-[1170px] md:h-[920px] my-[70px]`}>
<div className='md:w-[1170px] md:h-[438px]'>
<div className='flex justify-around md:justify-between items-center md:items-start'>
  <h2 className='text-[20px]'>Wishlist(4)</h2>
  <button className='w-[160px] shadow-black shadow-md md:shadow-none md:w-[233px] h-[56px] rounded-[4px] border-2 border-customBlack/30'>Move All To Bag</button>
  </div>
<div className='flex-col md:flex-row flex gap-12 md:gap-[30px] mt-14 md:mt-5 items-center'>
{ImgData.map((data:any,index:number)=>{
      return(
        <Link key={index}   className='last:hidden md:last:block rounded-sm md:rounded-none md:shadow-none shadow-lg shadow-black md:w-auto w-[280px]  flex justify-center' href={`/products/${data.id}`}>
<CartItems  
            noOldPrice={data.noOldPrice}
            discount={data.discount}
             noDiscount={data.noDiscount}
              alt={data.alt}
              id={data.id}
              ImagesSrc={data.ImagesSrc}
              binIcon={data.binIcon}
              oldPrice={data.oldPrice}
              cartIcon={data.cartIcon}
              Heart={data.Heart}
              hoverEffect={data.hoverEffect}
              title={data.title}
              newPrice={data.newPrice}
              itemNum={data.itemNum}
              rating={data.rating}
              width={data.width}
              height={data.height}
              noRating={data.noRating}                    
                    />
      </Link>
      )
     })}
</div>

</div>
<div className='md:w-[1170px] md:h-[350px]'>
<div className={`md:h-[108px] md:mt-[30px] mt-[90px] ${poppins.className}  gap-[22px]`}>
                <div className='flex justify-around md:justify-between items-center md:items-start'>
            <div className=' h-[40px] flex gap-[16px] items-center'>
                <span className='w-[20px] h-[40px] bg-customRed rounded-md'></span>
                <h1 className={`${poppins.className} text-[20px]`}>Just For You</h1>
                </div>
                <button className='shadow-black shadow-md md:shadow-none w-[150px] h-[56px] rounded-[4px] border-2 border-customBlack/30'>See All</button>
        </div>
        <div className='flex-col md:flex-row flex gap-12 md:gap-[30px] mb-24 md:mb-0 mt-14 md:mt-9 items-center'>
        {AdditionalImgData.map((data:any,index:number)=>{
      return(
        <Link key={index} href={`/products/${data.id}`} className='last:hidden md:last:block rounded-sm md:rounded-none md:shadow-none shadow-lg shadow-black md:w-auto w-[280px]  flex justify-center'>
        <CartItems
        discount={data.discount} 
        noOldPrice={data.noOldPrice}
                 newProduct={data.newProduct}
                ImagesSrc={data.ImagesSrc}
                oldPrice={data.oldPrice}
                cartIcon={data.cartIcon}
                noDiscount={data.noDiscount}
                Heart={data.Heart}
                hoverEffect={data.hoverEffect}
                title={data.title}
                newPrice={data.newPrice}
                itemNum={data.itemNum}
                rating={data.rating}
                width={data.width}
                height={data.height}
                id={data.id}
                alt={data.alt}
                />
                </Link>
              )
             })}
        </div>
    </div>
</div>
      </div>
    </div>
  )
}

export default page