import Link from 'next/link';
import React from 'react';

const AccountPage = () => {
  return (
    <div className='mb-28'>
      {/* Top Section Aligned Left */}
      <div className="flex flex-col items-start mx-6 md:mx-16 lg:mx-24 mt-10 md:mt-16">
        <div className='flex w-full justify-between'>
        <div className='flex gap-2'> 
        <Link href={'/'} className="text-sm text-gray-500">Home /</Link> <span>My Account</span>
        </div>
        <div className='text-black/90'>Welcome! <span className='text-customRed'>Huzaifa</span></div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row justify-between px-6 md:px-16 lg:px-24 mt-8 md:mt-12 gap-8">
        {/* Left Section: Manage Account */}
        <div className="flex flex-col gap-8 w-full lg:w-1/3">
          {/* Manage My Account */}
          <div className="flex flex-col items-start">
            <h1 className="md:-ml-8 -ml-4 text-[16px] font-medium text-customBlack/90 mb-3">Manage My Account</h1>
            <div className="flex flex-col gap-2">
              <h3 className="text-base font-medium text-red-600 cursor-pointer">My Profile</h3>
              <span className="text-sm text-gray-600 cursor-pointer">Address Book</span>
              <span className="text-sm text-gray-600 cursor-pointer">My Payment Options</span>
            </div>
          </div>

          {/* My Orders */}
          <div className="flex flex-col items-start">
            <h1 className="md:-ml-8 -ml-4 text-[16px] font-medium text-customBlack/90 mb-3">My Orders</h1>
            <div className="flex flex-col gap-2">
              <h3 className="text-base  text-gray-600 cursor-pointer">My Returns</h3>
              <span className="text-sm text-gray-600 cursor-pointer">My Cancellations</span>
            </div>
          </div>

          {/* My Wishlist */}
          <div className="flex flex-col items-start">
            <h1 className="md:-ml-8 -ml-4 text-[16px] font-medium text-customBlack/90">My Wishlist</h1>
          </div>
        </div>

        {/* Right Section: Edit Profile */}
        <div className="w-full lg:w-2/3 bg-white p-6 md:p-8 rounded-lg shadow-black shadow-sm ">
          <h1 className="text-xl font-medium text-customRed mb-6">Edit Your Profile</h1>

          {/* Name Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div>
              <label className="block text-customBlack/90 text-[16px] mb-2">First Name</label>
              <input
                type="text"
                placeholder="Huzaifa"
                className="bg-gray-100 p-3 w-full rounded-md border focus:outline-none focus:ring-2 focus:ring-red-300"
              />
            </div>
            <div>
              <label className="block text-customBlack/90 text-[16px]  mb-2">Last Name</label>
              <input
                type="text"
                placeholder="Wahab"
                className="bg-gray-100 p-3 w-full rounded-md border focus:outline-none focus:ring-2 focus:ring-red-300"
              />
            </div>
          </div>

          {/* Email and Address Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div>
              <label className="block text-customBlack/90 text-[16px]  mb-2">Email</label>
              <input
                type="email"
                placeholder="huzaifawahab2005@gmail.com"
                className="bg-gray-100 p-3 w-full rounded-md border focus:outline-none focus:ring-2 focus:ring-red-300"
              />
            </div>
            <div>
              <label className="block text-customBlack/90 text-[16px]  mb-2">Address</label>
              <input
                type="text"
                placeholder="Karachi, Pakistan"
                className="bg-gray-100 p-3 w-full rounded-md border focus:outline-none focus:ring-2 focus:ring-red-300"
              />
            </div>
          </div>

          {/* Password Inputs */}
          <div className="mb-6">
            <label className="block text-customBlack/90 text-[16px]  mb-2">Password Changes</label>
            <input
              type="password"
              placeholder="Current Password"
              className="bg-gray-100 p-3 w-full rounded-md border mb-4 focus:outline-none focus:ring-2 focus:ring-red-300"
            />
            <input
              type="password"
              placeholder="New Password"
              className="bg-gray-100 p-3 w-full rounded-md border mb-4 focus:outline-none focus:ring-2 focus:ring-red-300"
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              className="bg-gray-100 p-3 w-full rounded-md border focus:outline-none focus:ring-2 focus:ring-red-300"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-4">
            <button className="shadow-sm shadow-black px-6 py-3 bg-gray-200 rounded-md text-customBlack/90 hover:bg-gray-300 w-full sm:w-auto">
              Cancel
            </button>
            <button className="shadow-sm shadow-black px-6 py-3 bg-[#DB4444] text-white rounded-md hover:bg-red-700 w-full sm:w-auto">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;