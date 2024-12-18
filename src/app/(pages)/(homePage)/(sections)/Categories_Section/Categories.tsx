import React from 'react'
import CartHeader from '@/Components/CartHeader'
import CategoriesItems from './CategoriesItems'



function Categories() {
  return (
    <div>
        <CartHeader
        title='Categories'
        itemCategory='Browse By Category'
        />
        <div className=' flex justify-center md:justify-normal flex-wrap  md:ml-[80px] mt-[50px] gap-[20px] md:gap-[30px] '>
        <CategoriesItems 
        itemName='Phone'
        itemSrc={'/Images/Category-CellPhone.png'}
        />
        <CategoriesItems 
        itemName='Computer'
        itemSrc={'/Images/Category-Computer.png'}
        />
        <CategoriesItems 
        itemName='Watch'
        itemSrc={'/Images/Category-SmartWatch.png'}
        />
        <CategoriesItems 
        itemName='Camera'
        itemSrc={'/Images/Category-Camera.png'}
        cameraBg='bg-customRed border-none'
        cameraText='text-white'
        />
             <CategoriesItems 
        itemName='HeadPhones'
        itemSrc={'/Images/Category-Headphone.png'}
        />
             <CategoriesItems 
        itemName='Gaming'
        itemSrc={'/Images/Category-Gamepad.png'}
        />
        </div>
    </div>
  )
}

export default Categories