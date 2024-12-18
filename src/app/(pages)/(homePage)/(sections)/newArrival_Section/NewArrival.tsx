import React from 'react'
import CartHeader from '@/Components/CartHeader'
import Image from 'next/image'
import Link from 'next/link';
import { GoArrowUp } from 'react-icons/go';
import { Poppins,Inter} from 'next/font/google';

const inter = Inter({
  subsets: ['latin'], // Load only required subsets
  variable: '--font-inter', // Optional: Add a custom CSS variable
});

const poppins = Poppins({
  subsets: ['latin'], // Load only the required subsets
  weight: ['400', '500','600', '700'], // Specify the font weights you need
  variable: '--font-poppins', // Optional: Add a custom CSS variable
});


const NewArrival = () => {
  return (
    <div className='overflow-x-hidden md:overflow-x-auto'>
        <CartHeader 
        noArrow='hidden'
        title='Featured'
        itemCategory='New Arrival'
        />
        <div className='md:ml-[80px] ml-[10px] mt-[60px]'>

     <div className="grid gap-3 md:gap-0 grid-col-1 md:grid-cols-2 -space-x-6">
  <div className="col-span-2 md:col-span-1 w-[360px] md:w-[570px] h-[500px] md:h-[600px] bg-customBlack -z-10 relative ">
    {/* Content for PlayStation 5 */}
    <div className='absolute z-10 w-[242px] h-[122px] left-[10px] md:left-[32px] top-[403px] md:top-[446px]'>
      <div className='text-customText flex flex-col md:gap-2'>
        <h2 className={`text-[22px] md:text-[24px] ${inter.className} font-semibold`}>PlayStation 5</h2>
        <p className={`${poppins.className} text-[12px] md:text-[14px]`}>Black and White version of the PS5 coming out on sale.</p>
        <h3 className={`${poppins.className} font-medium text-[16px] text-white `}>
        <span className='border-b-2 border-customGrey'>ShopNow</span>
        </h3>
      </div>
    </div>
    <div className=' flex justify-center  items-end h-full'>
    <Image
    className=''
    src={'/Images/Arrival item1.png'}
    width={511}
    height={511}
    alt=''
    />
    </div>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-4 ">
    <div className="col-span-2 w-[390px] md:w-[605px]  h-[284px]  bg-arrivalBg relative">     
    <div className='absolute z-10 w-[242px] h-[122px] left-[24px] top-[138px]'>
      <div className='text-customText flex flex-col gap-2'>
        <h2 className={`text-[24px] ${inter.className} font-semibold w-[255px] h-[24px]`}>Women’s Collections</h2>
        <p className={`${poppins.className} text-[14px]`}>Featured woman collections that give you another vibe.</p>
        <h3 className={`${poppins.className} font-medium text-[16px] text-white `}>
        <span className='border-b-2 border-customGrey'>ShopNow</span>
        </h3>
      </div>
    </div>
      <div className='flex h-full justify-end items-center'>
    <Image 
    src={'/Images/Arrival item2.png'}
    width={432}
    height={286}
    alt=''
    />
    </div>
    </div>

    
    <div className='relative w-[180px] ml-5 md:ml-0 md:w-[270px] h-[284px]  bg-arrivalBg flex justify-center items-center'>
    <div className='absolute z-10 md:w-[242px] h-[122px] left-[10px] md:left-[24px] top-[175px]'>
      <div className='text-customText flex flex-col md:gap-2'>
        <h2 className={`text-[24px] ${inter.className} font-semibold`}>Speakers</h2>
        <p className={`${poppins.className} text-[14px]`}>Amazon wireless speakers.</p>
        <h3 className={`${poppins.className} font-medium text-[16px] text-white `}>
        <span className='border-b-2 border-customGrey'>ShopNow</span>
        </h3>
      </div>
    </div>
    <Image
    className='w-[170px] md:w-auto' 
    src={'/Images/Arrival item3.png'}
    width={190}
    height={221}
    alt=''
    />
    </div>
    <div className='ml-[50%] md:ml-0 w-[190px] md:w-[270px] h-[284px]  bg-arrivalBg flex justify-center items-center relative'>
    <div className='absolute z-10 w-[242px] h-[122px] left-[10px] md:left-[24px] top-[195px] md:top-[175px]'>
      <div className='text-customText flex flex-col md:gap-2'>
        <h2 className={`text-[24px] ${inter.className} font-semibold`}>Perfume</h2>
        <p className={`${poppins.className} text-[14px]`}>GUCCI INTENSE OUD EDP</p>
        <h3 className={`${poppins.className} font-medium text-[16px] text-white `}>
        <span className='border-b-2 border-customGrey'>ShopNow</span>
        </h3>
      </div>
    </div>
    <Image 
        className='w-[170px] md:w-auto' 
    src={'/Images/Arrival item4.png'}
    width={201}
    height={203}
    alt=''
    />
    </div>
  </div>
</div>
        </div>
        <CartHeader 
        noArrow='hidden'
        title='Featured'
        itemCategory='New Arrival'
        />
        <div className='flex flex-col md:flex-row justify-center items-center gap-[40px] md:gap-[88px]  mt-8  my-[80px] md:pt-[10px]'>
<div className='justify-center items-center flex flex-col w-[259px] h-[161px] gap-4'>
<div className='w-[80px] h-[80px] rounded-full shadow-md shadow-gray-500 md:shadow-none bg-lightWhite flex justify-center items-center'>
<div className='w-[60px] h-[60px] rounded-full bg-customBlack flex justify-center items-center'>
  <Image 
  src={'/Images/icon-delivery.png'}
  width={40}
  height={40}
  alt='delivery icon'
  />
  </div>
</div>
<h2 className={`md:w-[242px] ${poppins.className} font-semibold text-[18px] md:text-[20px]`}>FREE AND FAST DELIVERY</h2>
<h3 className={`text-[12px] md:text-[14px] ${poppins.className} md:w-[249px] -mt-3`}>Free delivery for all orders over $140</h3>

</div>
<div className='justify-center items-center flex flex-col w-[259px] h-[161px] gap-4'>
<div className='w-[80px] h-[80px] rounded-full shadow-md shadow-gray-500 md:shadow-none bg-lightWhite flex justify-center items-center'>
<div className='w-[60px] h-[60px] rounded-full bg-customBlack flex justify-center items-center'>
  <Image 
  src={'/Images/Icon-Customer service.png'}
  width={40}
  height={40}
  alt='customer sevice icon'
  />
  </div>
</div>
<h2 className={`md:w-[247px] ${poppins.className} font-semibold text-[18px] md:text-[20px]`}>24/7 CUSTOMER SERVICE</h2>
<h3 className={`text-[12px] md:text-[14px] ${poppins.className} md:w-[219px] -mt-3`}>Friendly 24/7 customer support</h3>

</div>
<div className='justify-center items-center flex flex-col w-[259px] h-[161px] gap-4'>
<div className='w-[80px] h-[80px] shadow-md shadow-gray-500 md:shadow-none rounded-full  bg-lightWhite flex justify-center items-center'>
<div className='w-[60px] h-[60px]   rounded-full bg-customBlack flex justify-center items-center'>
  <Image 
  src={'/Images/Icon-secure.png'}
  width={40}
  height={40}
  alt='secure icon'
  />
  </div>
</div>
<h2 className={`md:w-[256px] ${poppins.className} font-semibold text-[18px] md:text-[20px]`}>MONEY BACK GUARANTEE</h2>
<h3 className={`text-[12px] md:text-[14px] ${poppins.className}  -mt-3`}>We return money within 30 days</h3>

</div>
        </div>
        <div className='text-black flex justify-end mr-16 my-8'>
          <button>
          <Link href={'/'} className='bg-arrowBg shadow-lg shadow-lightWhite rounded-full h-[46px] w-[46px] flex justify-center items-center '><GoArrowUp className='text-[24px]' /></Link>
          </button>
        </div>
    </div>
  )
}

export default NewArrival