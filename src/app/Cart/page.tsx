import Cartlist from "@/Components/cartThings/cartlist"
import { arr } from "@/utils/productdata"
import Link from "next/link"
import { Poppins,Inter } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'], // Load only the required subsets
    weight: ['400', '500', '700'], // Specify the font weights you need
    variable: '--font-poppins', // Optional: Add a custom CSS variable
  });

const Cart = () => {
  return (
    <div className="min-h-[80vh] max-w-[1280px] m-auto p-3 py-20">
        <div className={`text-customBlack ${poppins.className} text-[14px] w-[103px] h-[21px] flex gap-[16px] mb-16 -mt-5`}>
            <Link className="opacity-[0.5]" href="/">Home</Link>/
            <Link href="/Pages/Cart">Cart</Link>
        </div>
      <div className="shadow-black/50 shadow-sm md:shadow-none grid grid-cols-4 w-full border-2 border-border py-6 mb-6">
        <span className="text-base m-auto">Product</span>
        <span className="text-base m-auto">Price</span>
        <span className="text-base m-auto">Quantity</span>
        <span className="text-base m-auto">Subtotal</span>
      </div>
      <div className="sm:space-y-6 space-y-4 ">
        <Cartlist arr={arr} />
      </div>

      <div className="w-full flex justify-between items-center py-12">
        <button className="xs:px-10 xs:py-3 px-6 py-3 border-[1px] font-medium xs:text-base text-sm rounded-sm border-zinc-500 text-nowrap shadow-black shadow-sm md:shadow-none">Return To Shop</button>
        <button className="xs:px-10 xs:py-3 px-6 py-3 border-[1px] font-medium xs:text-base text-sm rounded-sm border-zinc-500 text-nowrap shadow-black shadow-sm md:shadow-none">Update Cart</button>
      </div>

      <div className="w-full flex justify-between items-start py-10 sm:flex-row flex-col gap-4">
        <div className="flex items-center gap-2">
          <input type="text" className="shadow-black shadow-sm md:shadow-none sm:px-6 xs:w-fit w-[60%] px-4 py-2 focus:outline-none rounded-[4px] border border-zinc-500" placeholder="Coupon Code" />
          <button className="shadow-black shadow-sm md:shadow-none sm:px-6 px-3 sm:py-3 py-[14px] bg-customRed rounded-[4px] text-white sm:text-sm text-xs">Apply Coupon</button>
        </div>

        <div className="shadow-black mt-5 md:mt-auto shadow-md md:shadow-sm border-2 border-zinc-600 sm:w-96 w-full p-6 rounded-md">
          <h2 className="text-xl font-medium mb-2">Cart Total</h2>
          <div className="w-full flex justify-between items-center border-b border-zinc-400 py-3">
            <span>Subtotal:</span>
            <span>$1750</span>
          </div>
          <div className="w-full flex justify-between items-center border-b border-zinc-400 py-3">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="w-full flex justify-between items-center py-3">
            <span>Subtotal:</span>
            <span>$1750</span>
          </div>
          <div className="w-full flex justify-center py-2">
            <Link href={'/checkout'}>
            <button className="shadow-black shadow-sm md:shadow-none px-10 mt-2 py-3 bg-customRed rounded-sm text-white text-sm">Procees to checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart