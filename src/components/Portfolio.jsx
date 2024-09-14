import React from "react";
import huddle from "../assets/portfolio/huddle.png";
import atlantic from '../assets/portfolio/atlantic-city.png'
import insure from '../assets/portfolio/insurevault.png'
import pennyweb from '../assets/portfolio/pennyweb.png'
import pennApp from '../assets/portfolio/penwebApp.png'
import trabaye from '../assets/portfolio/trabaye.png'

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: huddle,
      link: 'https://huddlesitetam.netlify.app/'
    },
    {
      id: 2,
      src: atlantic,
      link: 'https://atlanticapital.netlify.app/'
    },
    {
      id: 3,
      src: insure,
      link: 'https://insurevault.netlify.app/'
    },
    {
      id: 4,
      src: pennyweb,
      link: 'https://www.mypennytree.com/'
    },
    {
      id: 5,
      src: trabaye,
      link: 'https://trabayee.netlify.app/'
    },
    {
      id: 6,
      src: pennApp,
      link: 'https://web.mypennytree.com/'
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-auto"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto py-[20px]">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={link}>View</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
