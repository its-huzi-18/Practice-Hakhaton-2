import Image from "next/image"
import { Poppins,Inter} from 'next/font/google';

const inter = Inter({
  subsets: ['latin'], // Load only required subsets
  variable: '--font-inter', // Optional: Add a custom CSS variable
});

const data = [
    {
        icon: "/Images/icon_shop.png",
        number: "10.5k",
        text: "Sellers active our site"
    },
    {
        icon: "/Images/Icon-Sale.png",
        number: "33k",
        text: "Monthly Product Sale"
    },
    {
        icon: "/Images/Icon-Shopping bag.png",
        number: "45.5k",
        text: "Customer active in our site"
    },
    {
        icon: "/Images/Icon-Moneybag.png",
        number: "25k",
        text: "Anual gross sale in our site"
    },
]
const Aboutcards = () => {
  return (
    <div className="w-fit py-10 flex items-center flex-wrap md:gap-10 xs:gap-5 gap-4 mx-auto justify-center">
        {data.map((data, index)=> {
            return(
                <div className="shadow-black/40 shadow-md md:shadow-none md:gap-2 sm:w-56 sm:h-56 xs:w-48 xs:h-48 w-36 h-36 border border-zinc-400 flex flex-col justify-center items-center group hover:bg-customRed hover:text-white transition-all rounded-sm" key={index}>
                    <div className=" xs:w-20 xs:h-12 md:w-[80px] md:h-[83px] group-hover:invert transition-all">
                    <div className='w-[70px] h-[70px] md:w-[80px] md:h-[80px] rounded-full bg-lightWhite flex justify-center items-center'>
<div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full bg-customBlack flex justify-center items-center">
                        <Image src={data.icon} alt={data.icon} width={40} height={40}/>
</div>
                        </div>
                    </div>
                    <h3 className={`mt-1 md:mt-0 ${inter.className}text-[22px] md:text-2xl font-semibold xs:my-1`}>{data.number}</h3>
                    <span className="xs:text-sm text-xs px-3 text-center leading-3">{data.text}</span>
                </div>
            )
        })}
    </div>
  )
}

export default Aboutcards