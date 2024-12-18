import React from 'react'
import Link from 'next/link'
import { Poppins, Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const ErrorPage = () => {
  return (
    <div className='mb-28'>
      <div className="text-sm lg:text-base w-full lg:w-auto mt-8 lg:mt-16 ml-8 lg:ml-28">
     <Link className='text-black/30' href='/'> Home / </Link> <span>404 Error</span> 
      </div>
      <div className="flex flex-col items-center justify-center gap-5 mt-12 lg:mt-24 px-4 text-center">
        <h1 className={`font-medium text-[60px] lg:text-[110px] leading-tight ${inter.className}`}>
          404 Not Found
        </h1>
        <p className="text-sm lg:text-base max-w-md">
        Your visited page not found. You may go home page.        </p>
        <Link href="/">
          <button className="w-full max-w-[250px] h-12 lg:h-[56px] lg:w-[250px] p-4 rounded-md bg-[#DB4444] text-white mt-8">
            Back to Home Page
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage