import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white py-[20px]"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl sm:mt-20">
          Hi, I'm Olaniyi Tamilore, a Frontend Engineer with expertise in React
          and Adobe ColdFusion. With a B.Sc in Mathematics from Obafemi Awolowo
          University and over 5 years of experience in Software Engineering, I
          combine my strong analytical skills with a passion for building
          seamless web applications Frontend development often faces the
          challenge of ensuring both web performance and user experience. At
          Pennytree and Beta Inc, I tackled this by developing high-performance
          web applications and integrating frontend components with backend
          systems.
        </p>

        <br />

        <p className="text-xl">
          One of my proudest projects involved collaborating to build the
          fintech web app at Pennytree that streamlined user transactions and
          invoicing, significantly boosting user satisfaction. Currently at
          First City Monument Bank, I blend backend functionality with engaging
          interfaces, ensuring both stability and seem less user experience. I
          thrive in Agile teams, where collaboration and iterative improvements
          drive success. I am proficient in a wide stack, including React,
          Redux, Next.js, and ColdFusion, with a strong grasp of HTML5,
          CSS/Sass, and JavaScript (ES6+).
        </p>

        <br />
        <p className="text-xl">
          If you’re looking for a developer with solid technical skills and a
          collaborative mindset? Then send me a DM let’s build your dream web
          app.😉
          <br />
          You can also reach me at tamilroeolaniyi@gmail.com
        </p>
      </div>
    </div>
  );
};

export default About;
