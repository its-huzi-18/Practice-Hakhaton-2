import React from 'react'

import HeroSection from '@/app/(pages)/(homePage)/(sections)/HeroSection/HeroSection'
import CartContainer from '../app/(pages)/(homePage)/(sections)/FlashSales_Section/CartContainer'
import Categories from '../app/(pages)/(homePage)/(sections)/Categories_Section/Categories'
import BestProducts from '../app/(pages)/(homePage)/(sections)/BestProducts_Section/BestProducts'
import OurProducts from '../app/(pages)/(homePage)/(sections)/OurProducts_Section/OurProducts'
import NewArrival from '../app/(pages)/(homePage)/(sections)/newArrival_Section/NewArrival'



function page() {
  return (
    <div>
      <HeroSection />
      <CartContainer />
      <Categories />
      <BestProducts />
      <OurProducts />
      <NewArrival />
    </div>
  )
}

export default page