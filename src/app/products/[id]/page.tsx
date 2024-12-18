import PageIntro from "@/Components/pageintro";
import Image from "next/image";
import { arr } from "@/utils/productdata";
import Details from "@/Components/productdet/details";
import React from "react";
import Card from "@/Components/Card";
const foryou = [
    {
        id: 6,
        image: "/Images/kidsCar.png",
        price: 960,
        oldPrice:840,
        title: "Kids Electric Car",
        alt:'kidsCar',
        rating:5,

    },
    {
        title: "Jr. Zoom Soccer Cleats",
        image: "/Images/shoes.png",
        price: 1160,
        oldPrice:960,
        id: 7,
        rating:5,
        alt:'shoes',
    },
    {
        title: "GP11 Shooter USB Gamepad",
        image: "/Images/controler.png",
        price: 660,
        oldPrice:160,
        id: 2,
        rating:5,
        alt:'controler'
    },
    {
        title: "Quilted Satin Jacket",
        image: "/Images/jacket.png",
        price: 600,
        oldPrice:400,
        rating:4.5,
        id: 8,
        alt:'jacket'
    },
]

const ProdDetails = ({ params }: { params: { id: string } }) => {

    const product = arr.find((data) => data.id.toString() === params.id)
    if(product)

    return (
        <div className="max-w-[1280px] min-h-[80vh] p-3 m-auto">
            
            <div className="w-full flex md:flex-row flex-col md:py-12">
                <div className="md:w-3/5 w-full md:flex gap-6">
                    <div className="w-full md:hidden block p-6 bg-[#F5F5F5] mb-3">

                        <Image src={product?.image} alt={product.alt} width={600} height={600} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 gap-3">
                        <span className="w-34 md:h-28 bg-[#F5F5F5] p-4">
                            <Image src={product?.image} alt={product.alt} width={600} height={600} className="rotate-x-45 w-[102px] h-[77px] " />
                        </span>
                        <span className="w-34 md:h-28 bg-[#F5F5F5] p-4">
                            <Image src={product?.image} alt={product.alt} width={600} height={600} className="rotate-y-45 w-[102px] h-[77px] " />
                        </span>
                        <span className="w-34 md:h-28 bg-[#F5F5F5] p-4">
                            <Image src={product?.image} alt={product.alt} width={600} height={600}  className="rotate-z-90 w-[102px] h-[77px] " />
                        </span>
                        <span className="w-34 md:h-28 bg-[#F5F5F5] p-4">
                            <Image src={product?.image} alt={product.alt} width={600} height={600} className=" w-[102px] h-[77px] rotate-z-45 " />
                        </span>
                    </div>
                    <div className="md:w-[500px] md:flex justify-center items-center
                    hidden p-6 bg-[#F5F5F5]">
                        <Image src={product?.image} alt={product.alt}
                       objectFit="cover" 
                        layout="responsive"
                        width={400} height={400} 
                        quality={100}
                       />
                    </div>
                </div>

                <Details product={product} />
            </div>

            <PageIntro intro="Related Item" nav="none"></PageIntro>
            <div className="w-full flex flex-wrap sm:gap-6 gap-3 justify-center my-8 mb-20">
                <Card arr={foryou} />
            </div>
        </div>
    )
}

export default ProdDetails