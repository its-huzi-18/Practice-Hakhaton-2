import Image from "next/image"

const Bottombar = () => {
    return (
        <div className='flex justify-center items-center gap-[88px] mb-[30px]  mt-[70px]'>
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
<h2 className={`md:w-[242px]  font-semibold text-[18px] md:text-[20px]`}>FREE AND FAST DELIVERY</h2>
<h3 className={`text-[12px] md:text-[14px]  md:w-[249px] -mt-3`}>Free delivery for all orders over $140</h3>

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
<h2 className={`md:w-[247px]  font-semibold text-[18px] md:text-[20px]`}>24/7 CUSTOMER SERVICE</h2>
<h3 className={`text-[12px] md:text-[14px]  md:w-[219px] -mt-3`}>Friendly 24/7 customer support</h3>

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
<h2 className={`md:w-[256px]  font-semibold text-[18px] md:text-[20px]`}>MONEY BACK GUARANTEE</h2>
<h3 className={`text-[12px] md:text-[14px]  -mt-3`}>We return money within 30 days</h3>

</div>
        </div>
                </div>
    )
}

export default Bottombar