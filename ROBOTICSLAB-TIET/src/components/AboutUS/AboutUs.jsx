import React from 'react';

const AboutSection = () => {
  return (
    <div
      className="relative flex flex-col items-center min-h-screen py-10"
      style={{
        backgroundImage: `url('/src/assets/Home Page/bg_about_card.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="relative z-10 w-full max-w-[1031px] h-auto bg-white bg-opacity-90 shadow-lg p-8 mb-10 pt-8">
      <div className="flex items-center justify-center">
        <div className="w-[34px] border-t-2 "style={{height: '2px',borderColor: '#ba1518'}}/>
          <h2 className="text-xl text-center text-black text-[30px] font-medium font-['Inter'] mx-4">
            ABOUT US
          </h2>
          <div className="w-[34px] border-t-2 "style={{height: '2px',borderColor: '#ba1518'}}/>
</div>
 
        <p className="text-left align-middle text-black text-xl font-medium font-['Inter'] pl-20 pr-20 pb-8">
          The general area of robotics with specific attention to mobility in challenging environments. Our current research is much more general, touching upon electrostatic and gecko-like adhesives for climbing and perching mobile robots as well as grippers for manipulator arms, localization safety for mobile robots, the intersection of robotics and urban landscape design, particle-based soft robots, and autonomous flight for UAVs in GNSS-denied environments.
          <br />
          The general area of robotics with specific attention to mobility in challenging environments. Our current research is much more general, touching upon electrostatic and gecko-like adhesives for climbing and perching mobile robots as well as grippers for manipulator arms, localization safety for mobile robots, the intersection of robotics and urban landscape design, particle-based soft robots, and autonomous flight for UAVs in GNSS-denied environments.
        </p>
      </div> 

      <div className="relative z-10 w-full max-w-[1031px] h-auto bg-white bg-opacity-90 shadow-lg pr-8 pl-8 mb-10 flex flex-col md:flex-row items-center">
        <div className="flex-1 tems-center justify-center md:mb-0 pl-8 ">
          <img src="/src/assets/Home Page/Vector_design.png" alt="Decorative" className="max-w-full w-[270px] h-[198px]" />
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 text-center pt-9 pr-10">
          <div className="flex items-start">
            <img src="/src/assets/Home Page/faculty_icon.svg" alt="Faculty Icon" className="w-16 h-14" />
            <div className="ml-8 mt-4 text-left pt-5">
              <p className="text-2xl text-center text-black text-[32px] font-['Inter']">Y</p>
              <p className="text-lg text-center text-black text-[32px] font-['Inter']">Faculty</p>
            </div>
          </div>
          <div className="flex items-start">
            <img src="/src/assets/Home Page/projects_icon.svg" alt="Project Icon" className="w-16 h-14" />
            <div className="ml-8 mt-4 text-left pt-5">
              <p className="text-2xl text-center text-black text-[32px] font-['Inter']">X</p>
              <p className="text-lg text-center text-black text-[32px] font-['Inter']">Project</p>
            </div>
          </div>
          <div className="flex items-start pb-9">
            <img src="/src/assets/Home Page/students_icon.svg" alt="Students Icon" className="w-16 h-14" />
            <div className="ml-8 mt-4 text-left pt-5">
              <p className="text-2xl text-center text-black text-[32px] font-['Inter']">1000+</p>
              <p className="text-lg text-center text-black text-[32px] font-['Inter']">Students</p>
            </div>
          </div>
          <div className="flex items-start pb-9">
            <img src="/src/assets/Home Page/publications_icon.png" alt="Publications Icon" className="w-16 h-14" />
            <div className="ml-8 mt-4 text-left pt-5">
              <p className="text-2xl text-center text-black text-[32px] font-['Inter']">Z+</p>
              <p className="text-lg text-center text-black text-[32px] font-['Inter']">Publications</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
