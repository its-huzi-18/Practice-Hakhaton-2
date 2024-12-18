import Aboutcards from "@/Components/about/aboutcards"
import Employees from "@/Components/about/employees"
import Bottombar from "@/Components/bottombar"
import Image from "next/image"
import Link from "next/link"

const AboutPage = () => {
    return (
        <div className="max-w-[1280px] m-auto min-h-[70vh] md:p-0 p-3">
                <div className={`text-customBlack text-[14px] w-[103px] h-[21px] flex gap-[16px] mt-16 -mb-12 `}>
            <Link className="opacity-[0.5]" href="/">Home</Link>/
            <Link href="/About">About</Link>
        </div>
            <div className="w-full xs:py-20 py-10 flex-wrap md:flex-nowrap flex gap-10">
                <div className=" mt-14 md:mt-auto md:w-1/2 w-full m-auto sm::px-20 xs:px-10 px-2">
                    <h1 className=" ml-3 text-5xl font-medium">Our Story</h1>
                    <p className="leading-[26px] text-sm mt-10 px-4">
                        Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.<br/><br/>
                        Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
                    </p>
                </div>
                <div className="md:w-1/2 md:block">
                    <Image src="/Images/aboutBanner.png" alt="" width={805} height={781} className="w-full h-full object-cover" />
                </div>
            </div>
            <Aboutcards />
            <Employees />
            <div className='flex justify-center pt-8'>

<div className='flex gap-[12px]'>
<div className='w-[12px] h-[12px] rounded-full bg-customBlack/30'></div>
<div className='w-[12px] h-[12px] rounded-full bg-customBlack/30'></div>
<div className='w-[12px] h-[12px] rounded-full bg-customBlack/30 relative justify-center items-center flex'>
<div className='w-[8px] h-[8px] rounded-full bg-customRed absolute'>
    
</div>
</div>
<div className='w-[12px] h-[12px] rounded-full bg-customBlack/30'></div>
<div className='w-[12px] h-[12px] rounded-full bg-customBlack/30'></div>
</div>
        </ div>
            <Bottombar />
        </div >
    )
}

export default AboutPage