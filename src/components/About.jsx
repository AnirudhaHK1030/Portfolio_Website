import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi. I'm Anirudha Kyathsandra, nice to meet you. Please take a
                look around.
              </p>
            </div>
            <div>
              <p>
                {" "}
                I am an aspiring software engineer looking to take on the big tech
                challenges posed by the world. I am looking for full stack developer positions
                and love working with react, spring boot, flutter and firebase. I'm also
                really interested in sports-basketball, football, soccer, and sports analytics 
                and would love to work in that sphere in the near future. I also intend to get 
                a Masters' degree in Computer Science in the near future to get a better grip
                of how technology can impact this world. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;