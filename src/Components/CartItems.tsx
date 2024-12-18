import React from "react";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar, FaStarHalfAlt, FaRegStar, FaRegTrashAlt } from "react-icons/fa";
import { Icon } from "@iconify/react";
import { Poppins, Inter } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

interface Props {
  id: string | number;
  ImagesSrc: string;
  newPrice: number;
  title: string;
  discount?: number;
  oldPrice?: number;
  itemNum: number;
  rating: number;
  width?: number;
  height?: number;
  noDiscount?: string;
  containerHeight?: string;
  noOldPrice?: string;
  newProduct?: string;
  noShowColor?: string;
  circleColor?: string;
  hoverEffect?: string;
  Heart?: string;
  cartIcon?: string;
  binIcon?: boolean;
  noRating?: string;
  alt: string;
}

const CartItems: React.FC<Props> = ({
  width,
  height,
  ImagesSrc,
  discount,
  title,
  oldPrice,
  newPrice,
  noOldPrice,
  itemNum,
  rating,
  noDiscount,
  containerHeight = "h-[350px]",
  newProduct = "hidden",
  noShowColor = "hidden",
  circleColor,
  hoverEffect = "translate-y-full",
  Heart,
  cartIcon = "hidden",
  binIcon = false,
  noRating,
  alt,
}) => {
  const fullStars = Math.floor(rating); // Full stars
  const halfStars = rating % 1 >= 0.5 ? 1 : 0; // Half star (if there's a remainder)
  const emptyStars = 5 - fullStars - halfStars; // Remaining empty stars

  const SelectedIcon = binIcon === false ? IoEyeOutline : FaRegTrashAlt;

  return (
    <div className={`${poppins.className} md:${containerHeight}  md:w-[270px] flex flex-col`}>
      <div className="transition-transform overflow-hidden group  md:w-[270px] w-[250px] h-[220px] md:h-[250px] bg-inpBg relative rounded-sm p-3 flex  justify-center items-center ]">
        <Image
          className={`absolute `}
          src={ImagesSrc}
          width={width}
          height={height}
          alt={alt}
        />
        <span
          className={`${poppins.className} p-[4px_10px] text-[12px] text-customText rounded-md absolute bg-customRed top-3 left-3 ${noDiscount}`}
        >
          -{discount}%
        </span>
        <span
          className={`p-[4px_10px] flex justify-center items-center text-[12px] text-customText rounded-md absolute bg-customGreen top-3 left-3 w-[51px] h-[26px] ${newProduct}`}
        >
          NEW
        </span>
        <div className="w-[34px] h-[76px] flex flex-col gap-[8px] absolute right-3 top-3">
          <i
            className={` ${Heart} bg-white rounded-full w-[34px] h-[34px] flex justify-center items-center`}
          >
            <CiHeart className="text-[24px]" />
          </i>
          <i className="bg-white rounded-full w-[34px] h-[34px] flex justify-center items-center">
            <SelectedIcon className={`text-[${binIcon === false ? "24px" : "20px"}]`} />
          </i>
        </div>
        <div
          className={`group-hover:translate-y-0 transition-all duration-500 bg-customBlack text-center text-white absolute bottom-0 w-full ${hoverEffect}`}
        >
          <div className="flex gap-[8px] justify-center items-center h-[41px]">
            <Icon
              icon="mdi-light:cart"
              width="32"
              height="32"
              className={cartIcon}
            />
            <h3>Add To Cart</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[7px] my-3">
        <p>{title}</p>
        <div className="flex gap-[12px] w-[85px] h-[24px]">
          
          <span className="text-customRed text-[16px] font-medium">${newPrice}</span>
          <span className={`text-customBlack/50 line-through ${noOldPrice}`}>
            ${oldPrice}
          </span>
        </div>
        <div>
<div className={`flex gap-1 ${noRating}`}>
  {[...Array(fullStars)].map((_, i) => (
    <FaStar key={`full-${i}`} className="text-yellow-500 text-[14px]" />
  ))}
  {[...Array(halfStars)].map((_, i) => (
    <FaStarHalfAlt key={`half-${i}`} className="text-yellow-500 text-[14px]" />
  ))}
  {[...Array(emptyStars)].map((_, i) => (
    <FaRegStar key={`empty-${i}`} className="text-yellow-500 text-[14px]" />
  ))}
  <p className="text-[16px] text-customBlack/50 ml-1">({itemNum})</p>
</div>

          <div className={`flex gap-[8px] ${noShowColor}`}>
            <div className="w-[20px] h-[20px] bg-customRed rounded-full mt-1"></div>
            <div className="flex justify-center items-center w-[20px] h-[20px] border-2 border-customBlack rounded-full mt-1">
              <div className={`${circleColor} w-[12px] h-[12px] rounded-full`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
