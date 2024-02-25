import React, { useState,useRef } from "react";
import { FaRegHeart, FaSearch } from "react-icons/fa";

function DesktopNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);
  const closeModal = () => {
    setIsOpen(false);
   
  };
  const openModal = () => {
    setIsOpen(true);
   
  };
  const handleModalClick = (e) => {
  
    if (e.target !== searchRef.current) {
      closeModal();
    }
  };
  
  return (
    <div className="border-b border-gray-500 text-white pt-5 hidden lg1:block">
      <nav className="  mx-auto flex items-center justify-evenly">
        <div className="flex items-center gap-16">
          <img
            className="w-[170px] cursor-pointer"
            src="http://ezitech.org/wp-content/uploads/2024/02/EZITECH-LOGO-white.png"
            alt=""
          />
          <ul className="text-[14px] font-[700] flex items-center gap-5">
            <li className="hover:text-[#20a9cc]">HOME</li>
            <li className="hover:text-[#20a9cc]">ABOUT US</li>
            <li className="hover:text-[#20a9cc]">CERTIFICATIONS</li>
            <li className="hover:text-[#20a9cc]">INTERNSHIPS</li>
            <li className="hover:text-[#20a9cc]">SEMINARS</li>
            <li className="hover:text-[#20a9cc]">INTERN PORTAL</li>
          </ul>
        </div>
        <div className="text-white ">
          <div className="flex items-center gap-3 border-l border-gray-500 pl-3">
            <FaRegHeart className="text-[24px] cursor-pointer" />
            <div
              onClick={openModal}
              className="p-2  cursor-pointer  search-btn"
            >
              <FaSearch />
            </div>
            {isOpen && (
              <div
                // onClick={closeModal}
                onClick={handleModalClick} 
                className="fixed top-0 inset-0 z-50 flex items-center justify-center bg-black bg-opacity-85 backdrop-filter backdrop-blur-md animate__animated animate__fadeIn animate__slow"
              >
               
                <div  
                 className="w-[700px]">
                  <h3 className="text-[20px] font-[700]">SEARCH</h3>
                  <div class="relative w-full rounded-lg"
                 
                  >
                    <input
                      ref={searchRef}
                      type="search"
                      id="location-search"
                      className="block pl-10 py-5  w-full z-20 text-[20px] font-[400] rounded-lg text-gray-900 bg-gray-50 outline-none border border-gray-300 placeholder:text-[#555555] placeholder:font-bold"
                      placeholder="Search..."
                      required
                    />
                    <button
                      onClick={()=>console.log('running')}
                      type="submit"
                      class="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white bg-blue-700  border rounded-e-lg   border-blue-700 "
                    >
                      <svg
                        className="w-10 h-4 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="4"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
               
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default DesktopNavBar;
