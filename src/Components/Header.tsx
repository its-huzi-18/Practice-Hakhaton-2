'use client'
import React, { useState } from "react";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import { IoSearchOutline, IoStarOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { GoPerson } from "react-icons/go";
import { LuShoppingBag } from "react-icons/lu";
import { MdOutlineCancel } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { FaBars } from "react-icons/fa";

const inter = Inter({
  subsets: ["latin"], // Load only required subsets
  variable: "--font-inter", // Optional: Add a custom CSS variable
});

const poppins = Poppins({
  subsets: ["latin"], // Load only the required subsets
  weight: ["400", "500", "700"], // Specify the font weights you need
  variable: "--font-poppins", // Optional: Add a custom CSS variable
});
const navLinks = [
  { name: "Home", link: "/" },
  { name: "Contact", link: "/Contact" },
  { name: "About", link: "/About" },
  { name: "Sign Up", link: "/SignUp" },
];

function Header() {
    const [isDropdownVisible, setDropdownVisible] = useState(false); // State for dropdown
    const [isMenuVisible, setIsMenuVisible] = useState(false); // State for dropdown

    const toggleDropdown = () => {
      setDropdownVisible((prev) => !prev); // Toggle dropdown visibility
    };
    const menuDropdown = () => {
      setIsMenuVisible((prev) => !prev); // Toggle dropdown visibility
    };

    
  return (
    <>
      <div
        className={`h-[38px]  md:w-[1170px] ${poppins.className}  flex md:gap-[148px] justify-around md:justify-between mt-[30px] md:ml-[85px] mb-3`}
      >
        <div className="md:w-[675px] h-[24px] flex items-center justify-between">
          <button 
  onClick={menuDropdown}
  className="flex border-none relative  md:hidden justify-center items-center w-[32px] h-[32px]  rounded-full"
>

  <FaBars className=" text-[24px] hover:opacity-90 border-none" />
  {isMenuVisible && (
    <div
      className={`w-[190px] h-[208px] absolute z-20 backdrop-blur-md shadow-lg  shadow-black bg-white top-9 left-0  rounded-[4px] transition-transform  duration-300 ease-out transform ${
        isMenuVisible ? "translate-y-0" : "translate-y-[20px] opacity-0"
      }`}
    >
      <div className="w-[140px] h-[180px] mt-4 absolute left-[20px] top-[18px] flex flex-col gap-[13px] text-customBlack ">
      <ul className=" flex flex-col  gap-4 text-[16px] ">
            {navLinks.map((items, i: number) => (
              <li key={i}>
                <Link
                  className="hover:border-b-2 active:border-b-2 border-b-2 border-transparent hover:border-customBlack/50 flex shadow-lg shadow-black justify-center active:border-customBlack/50"
                  href={`${items.link}`}
                >
                  {items.name}
                </Link>
              </li>
            ))}
          </ul>
      </div>
    </div>
  )}
</button>
       {/* Put the button here  */}
          <h3
            className={`text-[24px] font-bold text-customBlack mx-6 ${inter.className}`}
          >
            Exclusive
          </h3>
          <ul className=" hidden md:flex gap-[48px] text-[16px] font-normal">
            {navLinks.map((items, i: number) => (
              <li key={i}>
                <Link
                  className="hover:border-b-2 active:border-b-2 border-b-2 border-transparent hover:border-customBlack/50 active:border-customBlack/50"
                  href={`${items.link}`}
                >
                  {items.name}
                </Link>
              </li>
            ))}
          </ul>
          
        </div>
        <div className="md:w-[347px] h-[38px] flex justify-center gap-[24px]">
          <div className=" hidden bg-inpBg gap-[10px] py-[7px] pr-[12px] pl-[20px] w-[243px] h-[38px] md:flex items-center rounded-sm">
            <input
              type="text"
              className=" w-[211px] h-[24px] opacity-[0.5] bg-transparent text-[12px]"
              placeholder="What are you looking for?"
            />
            <div>
              <IoSearchOutline className="w-[24px] h-[24px]" />
            </div>
          </div>
          <div className="w-[138px] h-[32px] flex items-center gap-[16px] justify-around">
          <Link href={'/wishlist'}>
            <CiHeart className="w-[32px] h-[32px]" />
          </Link>
            <div className="relative cart-active:hidden">
                <Link href={'/Cart'}>
            <Icon icon="mdi-light:cart" width="32" height="32" 
            />
            </Link>
            <div className="cart w-[16px] h-[16px] absolute bg-customRed rounded-full text-white -top-1 right-0 text-[12px] text-center">2</div>
            </div>
            <button 
  onClick={toggleDropdown}
  className="border-none relative flex justify-center items-center w-[32px] h-[32px] bg-customRed rounded-full"
>

  <GoPerson className="text-[24px] text-customText hover:opacity-90" />
  {isDropdownVisible && (
    <div
      className={`w-[224px] h-[208px] absolute  bg-menuBg top-9 right-[4%] z-10 rounded-[4px] backdrop-blur-[75px] transition-transform  duration-300 ease-out transform ${
        isDropdownVisible ? "translate-y-0" : "translate-y-[20px] opacity-0"
      }`}
    >
      <div className="w-[192px] h-[180px] absolute left-[20px] top-[18px] flex flex-col gap-[13px] text-customText">
        <div className="flex gap-4 text-[14px] text-center">
          <GoPerson className="text-[24px]" />
          <Link href={'/account'}>Manage My Account</Link>
        </div>
        <div className="flex gap-4 text-[14px] text-center">
          <LuShoppingBag className="text-[24px]" />
          <div>My Order</div>
        </div>
        <div className="flex gap-4 text-[14px] text-center">
          <MdOutlineCancel className="text-[24px]" />
          <div>My Cancellations</div>
        </div>
        <div className="flex gap-4 text-[14px] text-center">
          <IoStarOutline className="text-[24px]" />
          <div>My Reviews</div>
        </div>
        <div className="flex gap-4 text-[14px] text-center">
          <BiLogOut className="text-[24px]" />
          <div>Logout</div>
        </div>
      </div>
    </div>
  )}
</button>

          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Header;
