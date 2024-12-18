import React from 'react';
import Image from 'next/image';
import { Poppins, Inter } from "next/font/google";
import Link from 'next/link';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const CheckOutPage = () => {
    return (
        <div className='mb-28'>
            <div className="flex gap-1 text-[16px] mt-12 mb-6 ml-8 md:ml-20">
                <div className='text-customBlack/30'>Account / My Account / Product / <Link href={'/Cart'} >View Cart /</Link> </div> <span>CheckOut</span> 
            </div>
            <div className="flex flex-wrap lg:flex-nowrap items-start justify-center lg:justify-between mt-12 px-6 lg:px-24 gap-12">
                {/* Billing Details Section */}
                <div className="flex flex-col w-full lg:w-1/2">
                    <h1 className={`font-medium text-[28px] md:text-[36px] mb-10 ${inter.className}`}>Billing Details</h1>
                    <div className="space-y-7">
                        {[
                            { label: 'First Name*', placeholder: 'Enter your first name' },
                            { label: 'Company Name', placeholder: 'Enter your company name' },
                            { label: 'Street Address*', placeholder: 'Enter your street address' },
                            { label: 'Apartment, floor, etc. (optional)', placeholder: 'Enter additional address info' },
                            { label: 'Town/City*', placeholder: 'Enter your city' },
                            { label: 'Phone Number*', placeholder: 'Enter your phone number' },
                            { label: 'Email Address*', placeholder: 'Enter your email address' },
                        ].map((input, index) => (
                            <div key={index}>
                                <label className="text-black/50 block mb-3 text-[16px] font-medium">{input.label}</label>
                                <input
                                    type="text"
                                    placeholder={input.placeholder}
                                    className="bg-[#F5F5F5] p-4 w-full h-[50px] rounded-md focus:outline-none"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center mt-7 gap-2">
                        <Image
                            src="/Images/checkbox.png"
                            width={24}
                            height={24}
                            alt="checkbox-img"
                        />
                        <span>Save this information for faster check-out next time</span>
                    </div>
                </div>

                {/* Order Summary Section */}
                <div className="flex flex-col mt-[6rem] w-full lg:w-1/2 p-6 rounded-md">
                    <div className="space-y-4">
                        {[
                            { image: '/Images/lcd.png', name: 'LCD Monitor', price: '$650' },
                            { image: '/Images/controler.png', name: 'H1 Gamepad', price: '$650' },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between bg-white p-4 rounded-md shadow-sm"
                            >
                                <div className="flex items-center gap-4">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={54}
                                        height={54}
                                    />
                                    <h3 className="text-base">{item.name}</h3>
                                </div>
                                <span className="text-base font-semibold">{item.price}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 space-y-4 text-sm">
                        <div className="flex justify-between border-b border-gray-300 pb-4">
                            <h3>Subtotal:</h3>
                            <span>$1750</span>
                        </div>
                        <div className="flex justify-between">
                            <h3>Shipping:</h3>
                            <span>Free</span>
                        </div>
                        <div className="flex justify-between border-t border-gray-300 pt-4">
                            <h3>Total:</h3>
                            <span className="font-semibold text-lg">$1750</span>
                        </div>
                    </div>
                    <div className="mt-8 space-y-6">
                        <div className="flex  justify-between w-[527px] items-center ">
                            <div className='flex gap-4 items-center'>
                            <div className="w-[24px] h-[24px] border border-black rounded-full"> 
                            </div>
                            <div>Bank</div>
                            </div>
                          
                            <Image
                                src="/Images/logos.png"
                                alt="logos"
                                width={192}
                                height={28}
                            />
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-[24px] h-[24px] border flex justify-center items-center border-black rounded-full">
                                <div className='bg-black w-[16px] h-[16px] rounded-full'></div>
                            </div>
                            <span>Cash On Delivery</span>
                        </div>
                        <div className="flex gap-4">
                            <button className="flex-1 h-[56px] border border-black rounded-md">
                                Coupon Code
                            </button>
                            <button className="w-1/2 h-[56px] bg-[#DB4444] text-white rounded-md">
                                Apply Coupon
                            </button>
                        </div>
                        <button className="w-[190px] h-[56px] bg-[#DB4444] text-white rounded-md">
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOutPage;