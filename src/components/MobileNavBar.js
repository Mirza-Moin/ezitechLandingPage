import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdKeyboardArrowRight,MdKeyboardArrowDown } from "react-icons/md";

function MobileNavBar() {
    const [showNav, setShowNav] = useState(false)
    const [showDropDown, setShowDropDown] = useState(false)
  return (
    <div className='px-3 lg1:hidden'>
      <nav className='flex items-center justify-between mt-10  '>
        <img className="w-[170px]" src="http://ezitech.org/wp-content/uploads/2024/02/EZITECH-LOGO-.jpg" alt="" />
        <GiHamburgerMenu onClick={()=>setShowNav(!showNav)} className='text-[#3275db] text-4xl cursor-pointer'/>  
      </nav>
      {/* mbile navigation menu */}

   { showNav &&  <div className='bg-[#f0f2f5] w-full pb-5'>
        <ul className='text-[16px] font-[700] text-[#555555]'>
            <li className='pl-10 py-5 border-t border-gray-300'>HOME</li>
            <li className='pl-10 py-5 border-t border-gray-300'>ABOUT US</li>

            <li className={`pl-10 pr-5 py-5 border-t border-gray-300 ${showDropDown?"bg-[#2575ed] text-white":""}`}>
                <div className='flex justify-between'>
                    <span>CERTIFICATIONS</span>
                    {showDropDown ?   <MdKeyboardArrowDown onClick={()=>setShowDropDown(!showDropDown)} className='text-2xl'/> : 
                    <MdKeyboardArrowRight onClick={()=>setShowDropDown(!showDropDown)} className='text-2xl'/>}
                    </div>
                   
                </li>
            { showDropDown &&  <ul className='text-black bg-white pl-20 py-3 list-disc select-none'>
                        <li className='py-2'>Free Courses</li>
                        <li className='py-2'>Onsite Courses</li>
                    </ul>}
            <li className='pl-10 py-5 border-t border-gray-300'>INTERNSHIPS</li>
            <li className='pl-10 py-5 border-t border-gray-300'>SEMINARS</li>
            <li className='pl-10 py-5 border-t border-gray-300'>INTERN PORTAL</li>
        </ul>
        <div class="relative w-full">
            <input type="search" id="location-search" className="block pl-10 py-5  w-full z-20 text-lg text-gray-900 bg-gray-50 outline-none border border-gray-300 placeholder:text-[#555555] placeholder:font-bold" placeholder="Search..." required />
            <button type="submit" class="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white bg-blue-700  border border-blue-700 ">
                <svg className="w-10 h-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                
            </button>
        </div>
        
      </div> }

    </div>
  )
}

export default MobileNavBar
