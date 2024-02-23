import React from 'react'
import { FaRegHeart,FaSearch  } from "react-icons/fa";

function DesktopNavBar() {
  return (
    <div className='border-b border-gray-500 text-white pt-5 hidden lg1:block'>
    <nav className='  mx-auto flex items-center justify-evenly'>
      <div className='flex items-center gap-16'>
        <img className='w-[170px] cursor-pointer' src="http://ezitech.org/wp-content/uploads/2024/02/EZITECH-LOGO-white.png" alt="" />
        <ul className='text-[14px] font-[700] flex items-center gap-5'>
            <li className='hover:text-[#20a9cc]'>HOME</li>
            <li className='hover:text-[#20a9cc]'>ABOUT US</li>
            <li className='hover:text-[#20a9cc]'>CERTIFICATIONS</li>
            <li className='hover:text-[#20a9cc]'>INTERNSHIPS</li>
            <li className='hover:text-[#20a9cc]'>SEMINARS</li>
            <li className='hover:text-[#20a9cc]'>INTERN PORTAL</li>
        </ul>

      </div>
      <div className='text-white '>
        <div className='flex items-center gap-3 border-l border-gray-500 pl-3'>
            <FaRegHeart className='text-[24px] cursor-pointer'/>
            <div className='p-2 border-[3px] cursor-pointer '>
                <FaSearch />
            </div>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default DesktopNavBar
