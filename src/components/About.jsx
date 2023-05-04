import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I am a software developer with 3 years Experience building user friendly Web applications and websites. My skills range from taking designs to development, ensuring that every component is pixel perfect and responsive across all devices, implementing complex functions, consuming data from api and working with databases
        </p>

        <br />

        <p className="text-xl">
          I am a very passionate and dedicated person, i enusre i put in my best in everything i do, i am a tem player, i have collaborated with team members both phyiscally and in remote situations. I understand user journey and user experience. my core strengths lie in my front end development.
        </p>
      </div>
    </div>
  );
};

export default About;
