import { MdOutlineWatchLater } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { FaUserTie } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

import { FaBehance, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

import DesktopNavBar from "./components/DesktopNavBar";
import MobileNavBar from "./components/MobileNavBar";
import TopHeader from "./components/TopHeader";

function App() {
  return (
    <>
      <div className="bg-white select-none">
        <TopHeader />

        {/* MOBILE NAVBAR / NAVBAR FOR SMALL SCREENS */}
        <MobileNavBar />

        {/* HERO SECTION */}
        <div
          className="max-h-max   w-screen bg-img   "
          style={{
            backgroundImage:
              'url("https://ezitech.org/wp-content/uploads/2024/02/111.jpg")',
          }}
        >
          <div className="w-full h-full  bg-[rgba(30,64,175,0.4)] pb-16 ">
            <DesktopNavBar />

            <div>
              <h1 className="text-white text-[48px] font-[700] w-[80%] lg:w-[60%] mx-auto pt-32  text-center">
                Learn the fundamentals with our experts in
                <span className="text-[#2575ed] text-[48px] font-[700]">
                  <Typewriter
                    words={[
                      " Programming",
                      " Web Design",
                      " Social Skills",
                      " Marketing",
                    ]}
                    loop={false}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>
              <p className="text-white text-[24px] font-[400] text-center mt-5 hidden lg1:block">
                Utilize Effective Training to Reach Your Potential!
              </p>

              <div class="relative w-[30%] mx-auto mt-10 lg1:block hidden ">
                <input
                  type="search"
                  id="location-search"
                  className="block pl-5 py-5 w-full z-20 text-lg text-black bg-gray-50 rounded-lg focus:outline-none text- "
                  placeholder="Search Courses..."
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 end-0 h-full pr-5 py-5 text-lg hover:text-xl font-bold text-gray-500 rounded-e-lg "
                >
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span class="sr-only">Search</span>
                </button>
              </div>

              <p className="text-center text-white text-[20px] font-[400] mt-10 lg1:block hidden">
                Explore our more useful products
              </p>

              <div className="w-[50%] mx-auto lg1:flex items-center justify-center gap-5 hidden relative">
                <img
                  className="w-[250px] h-auto"
                  style={{ objectFit: "contain" }}
                  src="https://ezitech.org/wp-content/uploads/2023/10/EZIBLOGS-DG.png"
                  alt=""
                />
                <img
                  className="w-[170px] h-auto "
                  style={{ objectFit: "contain" }}
                  src="https://ezitech.org/wp-content/uploads/2023/11/white-ezipos.png"
                  alt=""
                />
                <img
                  className="w-[300px] h-auto mb-5 "
                  style={{ objectFit:"cover" }}
                  src="https://ezitech.org/wp-content/uploads/2023/10/white-lgooo-01.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        {/* BEST IT SERVICES AWARD */}

        <section className="mt-20">
          {/* BEST IT SERVICES AWARD */}
          <h1 className="text-[33px] font-[700] text-center">
            Best IT Services Award 2023
          </h1>
          <div className="flex md:flex-row flex-col items-center md:items-baseline  gap-16 md:w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[70%] mx-auto mt-5">
            <img
              className="md:w-[40%] w-[80%] h-auto "
              src="https://ezitech.org/wp-content/uploads/2024/02/President-of-pakistan-259x299.png"
              alt=""
            />

            <div className="w-[70%] self-center ">
              <p className="font-[400] text-center md:text-start">
                <span className="font-bold">Ezitech Is affiliated With</span>{" "}
                <span className="text-blue-500 font-bold cursor-pointer">
                  Eziline Software House
                </span>
                . Eziline has been awarded the prestigious Best Software House
                in IT sector award by the President of Pakistan. This is an
                incredible achievement and a testament to the hard work and
                dedication of the entire team at Eziline Software House. The
                award is a great recognition of the company’s achievements in
                the field of IT and serves as a major milestone in its journey
                towards success.
              </p>
              <p className=" font-[400] mt-10 text-center md:text-start">
                This award is a huge source of motivation and inspiration for
                the entire team at Eziline Software House.{" "}
                <span className="font-bold">
                  {" "}
                  It is a validation of the company’s commitment to innovation,
                  excellence, and customer satisfaction
                </span>
                . The award acknowledges the hard work and dedication of every
                member of the team who has contributed to the success of the
                company.
              </p>
              <p className=" font-[400] mt-10 text-center md:text-start">
                <span className="text-black font-bold ">
                  {" "}
                  Ismail Shah, the CEO of Eziline Software House Pvt Ltd
                </span>
                , received the Best Services Award in the IT sector from the
                President of
                <span className="text-black font-bold ">
                  {" "}
                  Pakistan, Dr. Arif Alvi
                </span>
                , in recognition of his remarkable contributions to the
                country’s technology industry.
              </p>
              <div className="text-center md:text-start">
                <button className="text-white px-6 py-2 bg-blue-700 hover:bg-blue-900 font-[600] mt-10 ">
                  Eziline Profile
                </button>
              </div>
            </div>
          </div>

          {/* HOW IT WORKS */}
          <h1 className="text-[36px] font-[400] text-center mt-20">
            How it works?
          </h1>

          {/* NEW TRENDS AND TECHNOLOGIES */}

          <h1 className="text-[36px] font-[400] text-center mt-20 w-[65%] mx-auto">
            What new trends and technologies will you discover?
          </h1>

          <p className="text-[16px] text-[#273044] font-[400] text-center mt-10 w-[65%] mx-auto">
            Today's technology is developing quickly, and our new technological
            trends are enabling and advancing, speeding up the pace of
            development.
          </p>

          <div className="  grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 w-[80%] gap-10  mx-auto mt-10">
            <div className="py-2 bg-white rounded-xl cursor-pointer hover:-translate-y-3 transition-all duration-250 ease-linear delay-100 shadow-2xl">
              <img
                className="w-[69px] h-[69px] mx-auto"
                src="https://ezitech.org/wp-content/uploads/2022/05/artificial-intelligence-3-69x69.png"
                alt=""
              />
              <p className="text-center font-bold mt-3 py-3 turncate">ML & AI</p>
            </div>
            <div className="py-2 bg-white rounded-xl shadow-2xl hover:-translate-y-3 transition-all duration-250 ease-linear delay-100 cursor-pointer">
              <img
                className="w-[69px] h-[69px] mx-auto"
                src="https://ezitech.org/wp-content/uploads/2022/05/blockchain-69x69.png"
                alt=""
              />
              <p className="text-center font-bold mt-3 py-3 truncate">Block Chain</p>
            </div>
            <div className="py-2 bg-white rounded-xl shadow-2xl hover:-translate-y-3 transition-all duration-250 ease-linear delay-100 cursor-pointer">
              <img
                className="w-[69px] h-[69px] mx-auto"
                src="https://ezitech.org/wp-content/uploads/2022/05/aaaa-69x69.png"
                alt=""
              />
              <p className="text-center font-bold mt-3 py-3 truncate">Amazon</p>
            </div>
            <div className="py-2 bg-white rounded-xl shadow-2xl hover:-translate-y-3 transition-all duration-250 ease-linear delay-100 cursor-pointer">
              <img
                className="py-2 w-[69px] h-[69px] mx-auto"
                src="https://ezitech.org/wp-content/uploads/2022/05/cccccc-69x69.png"
                alt=""
              />
              <p className="text-center font-bold mt-3 py-3 truncate">Cyber Security</p>
            </div>
            <div className="py-2 bg-white rounded-xl shadow-2xl hover:-translate-y-3 transition-all duration-250 ease-linear delay-100 cursor-pointer">
              <img
                className="w-[69px] h-[69px] mx-auto"
                src="https://ezitech.org/wp-content/uploads/2022/05/ffff-69x69.png"
                alt=""
              />
              <p className="text-center font-bold mt-3 py-3 truncate">Development</p>
            </div>
            <div className="py-2 bg-white rounded-xl shadow-2xl hover:-translate-y-3 transition-all duration-250 ease-linear delay-100 cursor-pointer">
              <img
                className="w-[69px] h-[69px] mx-auto"
                src="https://ezitech.org/wp-content/uploads/2022/05/www-69x69.png"
                alt=""
              />
              <p className="text-center font-bold mt-3 py-3 truncate">Designing</p>
            </div>
            <div className="py-2 bg-white rounded-xl shadow-2xl hover:-translate-y-3 transition-all duration-250 ease-linear delay-100 cursor-pointer">
              <img
                className="w-[69px] h-[69px] mx-auto"
                src="https://ezitech.org/wp-content/uploads/2022/05/vvvv-69x69.png"
                alt=""
              />
              <p className="text-center font-bold mt-3 py-3 truncate">Gaming</p>
            </div>
            <div className="py-2 bg-white rounded-xl shadow-2xl hover:-translate-y-3 transition-all duration-250 ease-linear delay-100 cursor-pointer">
              <img
                className="w-[69px] h-[69px] mx-auto"
                src="https://ezitech.org/wp-content/uploads/2022/05/ssss-69x69.png"
                alt=""
              />
              <p className="text-center font-bold mt-3 py-3 truncate">Architecture</p>
            </div>
            <div className="py-2 bg-white rounded-xl shadow-2xl hover:-translate-y-3 transition-all duration-250 ease-linear delay-100 cursor-pointer">
              <img
                className="w-[69px] h-[69px] mx-auto"
                src="https://ezitech.org/wp-content/uploads/2022/05/aaaaaaaaaaaaaaaaaaaaaa-69x69.png"
                alt=""
              />
              <p className="text-center font-bold mt-3 py-3 truncate">IOS & AND</p>
            </div>
            <div className="py-2 bg-white rounded-xl shadow-2xl hover:-translate-y-3 transition-all duration-250 ease-linear delay-100 cursor-pointer">
              <img
                className="w-[69px] h-[69px] mx-auto"
                src="https://ezitech.org/wp-content/uploads/2022/10/social-media-1-63x63.png"
                alt=""
              />
              <p className="text-center font-bold mt-3 py-3 truncate">Marketing</p>
            </div>
            <div className="py-2 bg-white rounded-xl shadow-2xl hover:-translate-y-3 transition-all duration-250 ease-linear delay-100 cursor-pointer">
              <img
                className="w-[69px] h-[69px] mx-auto"
                src="https://ezitech.org/wp-content/uploads/2023/03/3d-68x68.png"
                alt=""
              />
              <p className="text-center font-bold mt-3 py-3 truncate">3D</p>
            </div>
            <div className="py-2 bg-white rounded-xl shadow-2xl hover:-translate-y-3 transition-all duration-250 ease-linear delay-100 cursor-pointer">
              <img
                className="w-[69px] h-[69px] mx-auto"
                src="https://ezitech.org/wp-content/uploads/2023/03/animation-68x68.png"
                alt=""
              />
              <p className="text-center font-bold mt-3 py-3 truncate">Annimation</p>
            </div>
          </div>
        </section>

        {/* RECOMMENDED COURSES */}
        <section>
          <h1 className="text-[36px] font-[700] text-[#273044] text-center mt-32">
            Recommended Course's
          </h1>
          <section className="mt-10 px-5 grid-cols-1 md:grid-cols-3 grid lg:grid-cols-5">
            {/* card */}
            <div className="group p-5 course-card">
              <div>
                <img
                  className="w-full grop-hover:h-[140px]"
                  // style={{ maxHeight: "160px" }}
                  src="https://ezitech.org/wp-content/uploads/2022/10/linkedin-search-300x225.webp"
                  alt=""
                />
                {/* course info */}
                <div className="px-2">
                  <p className="text-[#4D5E6F] text-[13px] font-[400] mt-3">
                    Free Courses
                  </p>
                  <p className="text-[#001931] text-[15px] font-[500] mt-2">
                    LinkedIn Orientation
                  </p>
                  <div className="mt-8 border-b border-gray-300 pb-4">
                    <div className="bg-[#eef1f7] px-3 py-2 rounded-md  flex items-center justify-between ">
                      <div className="flex gap-2 items-center">
                        <MdOutlineWatchLater className="text-[#4D5E6F]" />
                        <p className="text-[#4D5E6F] text-[14px] font-[400]">
                          2h 12m
                        </p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <IoEyeOutline className="text-[#4D5E6F]" />
                        <p className="text-[#4D5E6F] text-[14px] font-[400]">
                          724
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between items-start">
                    <div className="flex items-center">
                      <CiStar />
                      <CiStar />
                      <CiStar />
                      <CiStar />
                      <CiStar />

                      <p className="text-[#4D5E6F] text-[13px] font-[400]">
                        0.0
                      </p>
                    </div>
                    <p className="text-black text-[15px] font-bold mt-2">
                      Free
                    </p>
                  </div>

                  <button className="w-full mt-5 rounded-lg text-white bg-blue-600 text-[14px] font-[400] px-5 py-3 hidden group-hover:block">
                    Preview the course
                  </button>
                </div>
              </div>
            </div>
            {/* card2 */}
            <div className="group p-5 course-card">
              <div>
                <img
                  className="w-full"
                  // style={{ maxHeight: "160px" }}
                  src="http://ezitech.org/wp-content/uploads/2022/10/post-3-300x225.jpg"
                  alt=""
                />
                {/* course info */}
                <div className="px-2">
                  <p className="text-[#4D5E6F] text-[13px] font-[400] mt-3">
                    Free Courses
                  </p>
                  <p className="text-[#001931] text-[15px] font-[500] mt-2">
                    Search Engine Optimization (SE0)
                  </p>
                  <div className="mt-8 border-b border-gray-300 pb-4">
                    <div className="bg-[#eef1f7] px-3 py-2 rounded-md  flex items-center justify-between ">
                      <div className="flex gap-2 items-center">
                        <MdOutlineWatchLater className="text-[#4D5E6F]" />
                        <p className="text-[#4D5E6F] text-[14px] font-[400]">
                          15h 34m
                        </p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <IoEyeOutline className="text-[#4D5E6F]" />
                        <p className="text-[#4D5E6F] text-[14px] font-[400]">
                          681
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between items-start">
                    <div className="flex items-center">
                      <CiStar />
                      <CiStar />
                      <CiStar />
                      <CiStar />
                      <CiStar />

                      <p className="text-[#4D5E6F] text-[13px] font-[400]">
                        0.0
                      </p>
                    </div>
                    <p className="text-black text-[15px] font-bold mt-2">
                      Free
                    </p>
                  </div>

                  <button className="w-full mt-5 rounded-lg text-white bg-blue-600 text-[14px] font-[400] px-5 py-3 hidden group-hover:block">
                    Preview the course
                  </button>
                </div>
              </div>
            </div>
            {/* card 3 */}
            <div className="group p-5 course-card">
              <div>
                <img
                  className="w-full"
                  // style={{ maxHeight: "160px" }}
                  src="http://ezitech.org/wp-content/uploads/2022/10/Instagram-vs-Facebook-Which-is-Better-for-Video-Marketing-300x225.png"
                  alt=""
                />
                {/* course info */}
                <div className="px-2">
                  <p className="text-[#4D5E6F] text-[13px] font-[400] mt-3">
                    Free Courses
                  </p>
                  <p className="text-[#001931] text-[15px] font-[500] mt-2">
                    Ads on Instagram, Facebook & Twitter
                  </p>
                  <div className="mt-8 border-b border-gray-300 pb-4">
                    <div className="bg-[#eef1f7] px-3 py-2 rounded-md  flex items-center justify-between ">
                      <div className="flex gap-2 items-center">
                        <MdOutlineWatchLater className="text-[#4D5E6F]" />
                        <p className="text-[#4D5E6F] text-[14px] font-[400]">
                          3h 42m
                        </p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <IoEyeOutline className="text-[#4D5E6F]" />
                        <p className="text-[#4D5E6F] text-[14px] font-[400]">
                          676
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between items-start">
                    <div className="flex items-center">
                      <CiStar />
                      <CiStar />
                      <CiStar />
                      <CiStar />
                      <CiStar />

                      <p className="text-[#4D5E6F] text-[13px] font-[400]">
                        0.0
                      </p>
                    </div>
                    <p className="text-black text-[15px] font-bold mt-2">
                      Free
                    </p>
                  </div>

                  <button className="w-full mt-5 rounded-lg text-white bg-blue-600 text-[14px] font-[400] px-5 py-3 hidden group-hover:block">
                    Preview the course
                  </button>
                </div>
              </div>
            </div>
            {/* card 4 */}
            <div className="group p-5 course-card">
              <div>
                <img
                  className="w-full"
                  // style={{ maxHeight: "160px" }}
                  src="http://ezitech.org/wp-content/uploads/2022/10/What-is-a-digital-marketing-agency-300x225.webp"
                  alt=""
                />
                {/* course info */}
                <div className="px-2">
                  <p className="text-[#4D5E6F] text-[13px] font-[400] mt-3">
                    Free Courses
                  </p>
                  <p className="text-[#001931] text-[15px] font-[500] mt-2">
                    Definition For Digital Marketing
                  </p>
                  <div className="mt-8 border-b border-gray-300 pb-4">
                    <div className="bg-[#eef1f7] px-3 py-2 rounded-md  flex items-center justify-between ">
                      <div className="flex gap-2 items-center">
                        <MdOutlineWatchLater className="text-[#4D5E6F]" />
                        <p className="text-[#4D5E6F] text-[14px] font-[400]">
                          3h 42m
                        </p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <IoEyeOutline className="text-[#4D5E6F]" />
                        <p className="text-[#4D5E6F] text-[14px] font-[400]">
                          632
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between items-start">
                    <div className="flex items-center">
                      <CiStar />
                      <CiStar />
                      <CiStar />
                      <CiStar />
                      <CiStar />

                      <p className="text-[#4D5E6F] text-[13px] font-[400]">
                        0.0
                      </p>
                    </div>
                    <p className="text-black text-[15px] font-bold mt-2">
                      Free
                    </p>
                  </div>

                  <button className="w-full mt-5 rounded-lg text-white bg-blue-600 text-[14px] font-[400] px-5 py-3 hidden group-hover:block">
                    Preview the course
                  </button>
                </div>
              </div>
            </div>
            {/* card 5 */}
            <div className="group p-5 course-card">
              <div>
                <img
                  className="w-full"
                  // style={{ maxHeight: "160px" }}
                  src="http://ezitech.org/wp-content/uploads/2023/03/7-tips-to-manage-amazon-virtual-assistants-and-boost-productivity-1-300x225.webp"
                  alt=""
                />
                {/* course info */}
                <div className="px-2">
                  <p className="text-[#4D5E6F] text-[13px] font-[400] mt-3">
                    Free Courses
                  </p>
                  <p className="text-[#001931] text-[15px] font-bold mt-2">
                    Vitual Assitant Training, a Complete Guide: Work From Home
                  </p>
                  <div className="mt-8 border-b border-gray-300 pb-4">
                    <div className="bg-[#eef1f7] px-3 py-2 rounded-md  flex items-center justify-between ">
                      <div className="flex gap-2 items-center">
                        <MdOutlineWatchLater className="text-[#4D5E6F]" />
                        <p className="text-[#4D5E6F] text-[14px] font-[400]">
                          3 Months
                        </p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <IoEyeOutline className="text-[#4D5E6F]" />
                        <p className="text-[#4D5E6F] text-[14px] font-[400]">
                          414
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between items-start">
                    <div className="flex items-center">
                      <CiStar />
                      <CiStar />
                      <CiStar />
                      <CiStar />
                      <CiStar />

                      <p className="text-[#4D5E6F] text-[13px] font-[400]">
                        0.0
                      </p>
                    </div>
                    <p className="text-black text-[15px] font-bold mt-2">
                      Free
                    </p>
                  </div>

                  <button className="w-full mt-5 rounded-lg text-white bg-blue-600 text-[14px] font-[400] px-5 py-3 hidden group-hover:block">
                    Preview the course
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* pagination */}
          <div className="flex justify-center items-center mt-20  ">
            <ul className="flex flex-wrap items-center gap-5 text-blue-600 text-[14px] font-[400]">
              <li className="bg-[#e8f1ff] px-5 py-3 rounded-md">Prev</li>
              <li className="bg-blue-600 text-white px-5 py-3 rounded-md">1</li>
              <li className="bg-[#e8f1ff] px-5 py-3 rounded-md">2</li>
              <li className="bg-[#e8f1ff] px-5 py-3 rounded-md">3</li>
              <li className="bg-[#e8f1ff] px-5 py-3 rounded-md">4</li>
              <li className="bg-[#e8f1ff] px-5 py-3 rounded-md">Next</li>
            </ul>
          </div>
        </section>

        {/* BEST INTERNSHIPS FOR YOU */}
        <section className="mt-16">
          <h1 className="text-[36px] font-[700] text-[#273044] text-center mt-32">
            Best Internship's For You
          </h1>

          <div className="2xl:w-[75%] xl:w-[85%] w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {/* card 1 */}
            <div className="intern-card shadow-lg rounded-bl-xl rounded-br-xl transition-transform duration-300 transform  hover:scale-105">
              <div className="text-white bg-blue-700 px-5 pt-5 pb-3 rounded-tl-xl rounded-tr-xl">
                <div className="flex sm:flex-row flex-col justify-between items-center ">
                  <h1 className="text-[25px]  font-[700] pb-2 pr-7 border-b border-gray-300 leading-none sm:mt-0 mt-3 order-2">
                    HTML/CSS <br className="sm:visible hidden"/> Javascript
                  </h1>
                  <img
                    className="w-[80px] order-1"
                    src="https://ezitech.org/wp-content/uploads/2024/02/web-design-511x511.png"
                    alt=""
                  />
                </div>
                <p className="text-[14px] font-[400] text-center sm:text-start  text-center sm:text-start">Ezitech Institute</p>
              </div>
              <div className="px-7 pt-10">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#e8f1ff] rounded-full p-3">
                      <FaUserTie className="text-[#042d89]" />
                    </div>
                    <h1 className="text-[15px] text-[#273044] font-[500]">
                      Employment-
                    </h1>
                  </div>
                  <p className="text-[15px] text-[#273044] font-[400] bg-[#e8f1ff]">
                    Hybrid
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#e8f1ff] rounded-full p-3">
                      <FaLocationArrow className="text-[#042d89]" />
                    </div>
                    <h1 className="text-[15px] text-[#273044] font-[500]">
                      Location-
                    </h1>
                  </div>
                  <p className="text-[15px] text-[#273044] font-[400] bg-[#e8f1ff]">
                    Rawalpindi
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#e8f1ff] rounded-full p-3">
                      <FaBagShopping className="text-[#042d89]" />
                    </div>
                    <h1 className="text-[15px] text-[#273044] font-[500]">
                      Job Type-
                    </h1>
                  </div>
                  <p className="text-[15px] text-[#273044] font-[400] bg-[#e8f1ff]">
                    Full Time
                  </p>
                  <p className="text-[15px] text-[#273044] font-[400] bg-[#e8f1ff]">
                    Part Time
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center my-5">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-sm hover:bg-blue-900">
                  Read More
                </button>
              </div>
            </div>
            {/* card 2 */}
            <div className="intern-card shadow-lg rounded-bl-xl rounded-br-xl transition-transform duration-300 transform  hover:scale-105">
              <div className="text-white bg-blue-700 px-5 pt-5 pb-3 rounded-tl-xl rounded-tr-xl">
                <div className="flex sm:flex-row flex-col justify-between items-center ">
                  <h1 className="text-[25px] font-[700] pb-2 pr-7 border-b border-gray-300 leading-none sm:mt-0 mt-3 order-2">
                    GRAPHIC <br className="sm:visible hidden"/> DESIGNING
                  </h1>
                  <img
                    className="w-[80px] order-1"
                    src="https://ezitech.org/wp-content/uploads/2024/02/development-511x511.png"
                    alt=""
                  />
                </div>
                <p className="text-[14px] font-[400] text-center sm:text-start">Ezitech Institute</p>
              </div>
              <div className="px-7 pt-10">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#e8f1ff] rounded-full p-3">
                      <FaUserTie className="text-[#042d89]" />
                    </div>
                    <h1 className="text-[15px] text-[#273044] font-[500]">
                      Employment-
                    </h1>
                  </div>
                  <p className="text-[15px] text-[#273044] font-[400] bg-[#e8f1ff]">
                    Hybrid
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#e8f1ff] rounded-full p-3">
                      <FaLocationArrow className="text-[#042d89]" />
                    </div>
                    <h1 className="text-[15px] text-[#273044] font-[500]">
                      Location-
                    </h1>
                  </div>
                  <p className="text-[15px] text-[#273044] font-[400] bg-[#e8f1ff]">
                    Rawalpindi
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#e8f1ff] rounded-full p-3">
                      <FaBagShopping className="text-[#042d89]" />
                    </div>
                    <h1 className="text-[15px] text-[#273044] font-[500]">
                      Job Type-
                    </h1>
                  </div>
                  <p className="text-[15px] text-[#273044] font-[400] bg-[#e8f1ff]">
                    Full Time
                  </p>
                  <p className="text-[15px] text-[#273044] font-[400] bg-[#e8f1ff]">
                    Part Time
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center my-5">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-sm hover:bg-blue-900">
                  Read More
                </button>
              </div>
            </div>
            {/* card-3 */}
            <div className="intern-card shadow-lg rounded-bl-xl rounded-br-xl transition-transform duration-300 transform  hover:scale-105">
              <div className="text-white bg-blue-700 px-5 pt-5 pb-3 rounded-tl-xl rounded-tr-xl">
                <div className="flex sm:flex-row flex-col justify-between items-center ">
                  <h1 className="text-[25px] font-[700] pb-2 pr-7 border-b border-gray-300 leading-none sm:mt-0 mt-3 order-2">
                    DIGITAL <br className="sm:visible hidden"/> MARKETING
                  </h1>
                  <img
                    className="w-[80px] order-1"
                    src="https://ezitech.org/wp-content/uploads/2024/02/digital-marketing-511x511.png"
                    alt=""
                  />
                </div>
                <p className="text-[14px] font-[400] text-center sm:text-start">Ezitech Institute</p>
              </div>
              <div className="px-7 pt-10">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#e8f1ff] rounded-full p-3">
                      <FaUserTie className="text-[#042d89]" />
                    </div>
                    <h1 className="text-[15px] text-[#273044] font-[500]">
                      Employment-
                    </h1>
                  </div>
                  <p className="text-[15px] text-[#273044] font-[400] bg-[#e8f1ff]">
                    Hybrid
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#e8f1ff] rounded-full p-3">
                      <FaLocationArrow className="text-[#042d89]" />
                    </div>
                    <h1 className="text-[15px] text-[#273044] font-[500]">
                      Location-
                    </h1>
                  </div>
                  <p className="text-[15px] text-[#273044] font-[400] bg-[#e8f1ff]">
                    Rawalpindi
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#e8f1ff] rounded-full p-3">
                      <FaBagShopping className="text-[#042d89]" />
                    </div>
                    <h1 className="text-[15px] text-[#273044] font-[500]">
                      Job Type-
                    </h1>
                  </div>
                  <p className="text-[15px] text-[#273044] font-[400] bg-[#e8f1ff]">
                    Full Time
                  </p>
                  <p className="text-[15px] text-[#273044] font-[400] bg-[#e8f1ff]">
                    Part Time
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center my-5">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-sm hover:bg-blue-900">
                  Read More
                </button>
              </div>
            </div>
            {/* card -4 */}
            <div className="intern-card shadow-lg rounded-bl-xl rounded-br-xl transition-transform duration-300 transform  hover:scale-105">
              <div className="text-white bg-blue-700 px-5 pt-5 pb-3 rounded-tl-xl rounded-tr-xl">
                <div className="flex sm:flex-row flex-col justify-between items-center ">
                  <h1 className="text-[25px] font-[700] pb-2 pr-7 border-b border-gray-300 leading-none sm:mt-0 mt-3 order-2">
                    FLUTTER <br className="sm:visible hidden"/> DEVELOPMENT
                  </h1>
                  <img
                    className="w-[80px] order-1"
                    src="https://ezitech.org/wp-content/uploads/2024/02/app-development-511x511.png"
                    alt=""
                  />
                </div>
                <p className="text-[14px] font-[400] text-center sm:text-start">Ezitech Institute</p>
              </div>
              <div className="px-7 pt-10">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#e8f1ff] rounded-full p-3">
                      <FaUserTie className="text-[#042d89]" />
                    </div>
                    <h1 className="text-[15px] text-[#273044] font-[500]">
                      Employment-
                    </h1>
                  </div>
                  <p className="text-[15px] text-[#273044] font-[400] bg-[#e8f1ff]">
                    Hybrid
                  </p>
                </div> 

                <div className="flex flex-wrap items-center gap-3 mt-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#e8f1ff] rounded-full p-3">
                      <FaLocationArrow className="text-[#042d89]" />
                    </div>
                    <h1 className="text-[15px] text-[#273044] font-[500]">
                      Location-
                    </h1>
                  </div>
                  <p className="text-[15px] text-[#273044] font-[400] bg-[#e8f1ff]">
                    Rawalpindi
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#e8f1ff] rounded-full p-3">
                      <FaBagShopping className="text-[#042d89]" />
                    </div>
                    <h1 className="text-[15px] text-[#273044] font-[500]">
                      Job Type-
                    </h1>
                  </div>
                  <p className="text-[15px] text-[#273044] font-[400] bg-[#e8f1ff]">
                    Full Time
                  </p>
                  <p className="text-[15px] text-[#273044] font-[400] bg-[#e8f1ff]">
                    Part Time
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center my-5">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-sm hover:bg-blue-900">
                  Read More
                </button>
              </div>
            </div>
            {/* card 5 */}
            <div className="intern-card shadow-lg rounded-bl-xl rounded-br-xl transition-transform duration-300 transform  hover:scale-105">
              <div className="text-white bg-blue-700 px-5 pt-5 pb-3 rounded-tl-xl rounded-tr-xl">
                <div className="flex sm:flex-row flex-col justify-between items-center ">
                  <h1 className="text-[25px] font-[700] pb-2 pr-7 border-b border-gray-300 leading-none sm:mt-0 mt-3 order-2">
                    MACHINE <br className="sm:visible hidden"/> LEARNING
                  </h1>
                  <img
                    className="w-[80px] order-1"
                    src="https://ezitech.org/wp-content/uploads/2024/02/web-services-511x511.png"
                    alt=""
                  />
                </div>
                <p className="text-[14px] font-[400] text-center sm:text-start">Ezitech Institute</p>
              </div>
              <div className="px-7 pt-10">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#e8f1ff] rounded-full p-3">
                      <FaUserTie className="text-[#042d89]" />
                    </div>
                    <h1 className="text-[15px] text-[#273044] font-[500]">
                      Employment-
                    </h1>
                  </div>
                  <p className="text-[15px] text-[#273044] font-[400] bg-[#e8f1ff]">
                    Hybrid
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#e8f1ff] rounded-full p-3">
                      <FaLocationArrow className="text-[#042d89]" />
                    </div>
                    <h1 className="text-[15px] text-[#273044] font-[500]">
                      Location-
                    </h1>
                  </div>
                  <p className="text-[15px] text-[#273044] font-[400] bg-[#e8f1ff]">
                    Rawalpindi
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#e8f1ff] rounded-full p-3">
                      <FaBagShopping className="text-[#042d89]" />
                    </div>
                    <h1 className="text-[15px] text-[#273044] font-[500]">
                      Job Type-
                    </h1>
                  </div>
                  <p className="text-[15px] text-[#273044] font-[400] bg-[#e8f1ff]">
                    Full Time
                  </p>
                  <p className="text-[15px] text-[#273044] font-[400] bg-[#e8f1ff]">
                    Part Time
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center my-5">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-sm hover:bg-blue-900">
                  Read More
                </button>
              </div>
            </div>
            {/* card -6
             */}
            <div className="intern-card shadow-lg rounded-bl-xl rounded-br-xl transition-transform duration-300 transform  hover:scale-105 ">
              <div className="text-white bg-blue-700 px-5 pt-5 pb-3 rounded-tl-xl rounded-tr-xl">
                <div className="flex sm:flex-row flex-col justify-between items-center ">
                  <h1 className="text-[25px] font-[700] pb-2 pr-7 border-b border-gray-300 leading-none sm:mt-0 mt-3 order-2">
                    MERN <br className="sm:visible hidden"/> DEVELOPMENT
                  </h1>
                  <img
                    className="w-[80px] order-1"
                    src="https://ezitech.org/wp-content/uploads/2024/02/clean-code-511x511.png"
                    alt=""
                  />
                </div>
                <p className="text-[14px] font-[400] text-center sm:text-start">Ezitech Institute</p>
              </div>
              <div className="px-7 pt-10">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#e8f1ff] rounded-full p-3">
                      <FaUserTie className="text-[#042d89]" />
                    </div>
                    <h1 className="text-[15px] text-[#273044] font-[500]">
                      Employment-
                    </h1>
                  </div>
                  <p className="text-[15px] text-[#273044] font-[400] bg-[#e8f1ff]">
                    Hybrid
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#e8f1ff] rounded-full p-3">
                      <FaLocationArrow className="text-[#042d89]" />
                    </div>
                    <h1 className="text-[15px] text-[#273044] font-[500]">
                      Location-
                    </h1>
                  </div>
                  <p className="text-[15px] text-[#273044] font-[400] bg-[#e8f1ff]">
                    Rawalpindi
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#e8f1ff] rounded-full p-3">
                      <FaBagShopping className="text-[#042d89]" />
                    </div>
                    <h1 className="text-[15px] text-[#273044] font-[500]">
                      Job Type-
                    </h1>
                  </div>
                  <p className="text-[15px] text-[#273044] font-[400] bg-[#e8f1ff]">
                    Full Time
                  </p>
                  <p className="text-[15px] text-[#273044] font-[400] bg-[#e8f1ff]">
                    Part Time
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center my-5">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-sm hover:bg-blue-900">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-10">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-sm hover:bg-blue-900">
              Load More
            </button>
          </div>
        </section>
        {/* LEARNING ANYTIME */}
        <section className="sm:mt-40 mt-20">
          <div className="w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[75%] mx-auto flex gap-10 justify-center lg:justify-between ">
            <div className=" sm:flex justify-center hidden  ">
              <div className="bg-[#385bce] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] 2xl:w-[500px] 2xl:h-[500px] rounded-full relative">
                <img
                  className="absolute -top-10 left-5 w-[70%]"
                  src="https://ezitech.org/wp-content/uploads/2022/11/phone-copy.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="w-[80%] sm:w-[40%] sm:justify-self-end">
              <h1 className="text-[#273044] text-center text-[35px] sm:text-[25px] md:text-[35px] xl:text-[40px] 2xl:text-[46px] font-[700] ">
                Learn <span className="text-[#2575ed]">anytime</span> from
                anywhere
              </h1>
              <p className="text-[#273044] md:text-[12px] xl:text-[16px] font-[400] leading-loose mt-5 hidden md:block">
                Increase the mobility level with Eziline Technologies LMS App.
                Take your courses in your pocket and access them whenever you
                want without any limits. Make your learning more engaging and
                productive using modern LMS app.
              </p>

              <div className="mt-7 flex gap-5 sm:gap-2 md:gap-5 justify-center">
                <img 
                  className="cursor-pointer w-[50%] sm:w-[100px] md:w-full "
                  src="https://ezitech.org/wp-content/uploads/2022/11/appstore-copy.webp"
                  alt=""
                />
                <img
                  className="cursor-pointer w-[50%] sm:w-[100px] md:w-full"
                  src="https://stylemixthemes.com/masterstudy/tech/wp-content/uploads/sites/21/2021/02/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_22.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <section className="footer py-10 mt-10">
          <h1 className="text-white text-[36px] font-[700] text-center w-[40%] mx-auto">
            It’s time to <span className="text-blue-500">start</span> investing
            in yourself
          </h1>
          <img
            className="w-100% mx-auto px-10 mt-10"
            src="https://ezitech.org/wp-content/uploads/2023/03/8-3-1441x555-copy-1438x554.webp"
            alt=""
          />

          <div className="mt-20 w-[90%] xl:w-[85%] 2xl:w-[75%] px-5 sm:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-white">
            <div>
              <h1 className="text-[18px] font-[700]">ABOUT</h1>
              <p className="text-[13px] font-[400] mt-5">
                Ezitech Institute provides a platform for newcomers to launch
                their IT and freelancing careers. Our emphasis on practical
                information technology courses that are career and work oriented
                makes us the top computer institute in Rawalpindi, Islamabad,
                Pakistan.
              </p>
            </div>
            <div>
              <h1 className="text-[18px] font-[700]">POPULAR COURSES</h1>
              <div className="flex gap-5 mt-5">
                <img
                  className="w-[50px] h-[50px]"
                  src="https://ezitech.org/wp-content/uploads/2023/03/shutterstock_1936430215-_FILEminimizer_-75x75.webp"
                  alt=""
                />
                <div>
                  <h1 className="text-[14px] font-[700]">
                    Online Arbitrage Mastermind 2.0 [R...
                  </h1>
                  <span className="text-[#AAAAAA] text-[12px] font-[400]">
                    By Husnain Ali
                  </span>
                </div>
              </div>
              <div className="flex gap-5 mt-5">
                <img
                  className="w-[50px] h-[50px]"
                  src="https://ezitech.org/wp-content/uploads/2023/07/5167842_cafe-75x75.webp"
                  alt=""
                />
                <div className="">
                  <h1 className="text-[14px] font-[700]">
                    Adobe Illustrator Course With Project...
                  </h1>
                  <span className="text-[#AAAAAA] text-[12px] font-[400]">
                    By Husnain Ali
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-[18px] font-[700]">PAGES</h1>
              <ul className="list-disc mt-5 flex flex-col gap-3 pl-3">
                <li className="text-[12px] font-[400] ">CONTACT US</li>
                <li className="text-[12px] font-[400]">SHOP</li>
                <li className="text-[12px] font-[400]">INTERNSHIP</li>
                <li className="text-[12px] font-[400]">CODELAB</li>
              </ul>
            </div>
            <div>
              <h1 className="text-[18px] font-[700]">CONTACT</h1>
              <ul className=" mt-5 flex flex-col gap-3">
                <li className="text-[12px] font-[400] ">
                  <div className="flex gap-5 ">
                    <FaLocationDot className="text-3xl text-[#2575ed]" />
                    <span>
                      Office #304-B Amna Plaza, near Radio Pakistan, Rawalpindi,
                      Punjab 46000
                    </span>
                  </div>
                </li>
                <li className="text-[12px] font-[400]">
                  <div className="flex gap-5 ">
                    <FaPhone className="text-[16px] text-[#2575ed]" />
                    <span>+923455555396</span>
                  </div>
                </li>
                <li className="text-[12px] font-[400]">
                  <div className="flex gap-5 ">
                    <IoMail className="text-xl text-[#2575ed]" />
                    <span className="hover:text-[#2525ed]">
                      info@ezitech.org
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-white text-[14px] font-[400] text-center mt-20">
            Copyright © 2024 Ezitech Institute | Design & Develop by{" "}
            <span className="cursor-pointer hover:text-[#2575ed]">
              Eziline Software House
            </span>
          </p>

          <div className="w-[80%] mx-auto flex gap-5 justify-end ">
            <FaFacebook className="text-white hover:text-[#2525ed] cursor-pointer" />
            <FaBehance className="text-white hover:text-[#2525ed] cursor-pointer" />
            <FaLinkedinIn className="text-white hover:text-[#2525ed] cursor-pointer" />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
