import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  const startYear = 2019;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col items-center justify-center h-full">
        <h2 className="text-4xl sm:text-7xl font-bold text-white mb-[30px] text-center">
            My Name is Olaniyi Tamilore
          </h2>
          <h2 className="text-2xl sm:text-4xl font-bold text-white text-center">
            I'm a Front-end Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-[600px] text-center text-[20px] px-[5px]">
            I have {yearsOfExperience} years of experience building and desgining pixel perfect User interfaces
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS and Redux.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        {/* <div>
          <img
            src={Heroimg}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
