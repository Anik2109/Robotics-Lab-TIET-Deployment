import React from 'react';

const AboutSection = () => {
  return (
    <div
      className="relative flex flex-col items-center min-h-screen py-10 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/assets/Home Page/bg_about_card.png')`,
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Main content container aligned with navbar width */}
      <div className="relative z-10 w-full max-w-screen-lg mx-auto h-auto bg-white bg-opacity-90 shadow-lg p-6 md:p-10 mb-10">
        
        {/* Title section */}
        <div className="flex items-center justify-center mb-6">
          <div className="w-[34px] border-t-2" style={{ height: '2px', borderColor: '#ba1518' }} />
          <h2 className="text-2xl md:text-3xl text-center text-black font-medium font-['Inter'] mx-4">
            ABOUT US
          </h2>
          <div className="w-[34px] border-t-2" style={{ height: '2px', borderColor: '#ba1518' }} />
        </div>
        
        {/* Paragraph */}
        <p className="text-left text-black text-lg md:text-xl font-medium font-['Inter'] px-4 md:px-20 pb-8">
          The general area of robotics with specific attention to mobility in challenging environments. Our current research is much more general, touching upon electrostatic and gecko-like adhesives for climbing and perching mobile robots as well as grippers for manipulator arms, localization safety for mobile robots, the intersection of robotics and urban landscape design, particle-based soft robots, and autonomous flight for UAVs in GNSS-denied environments.
          <br />
          Our research is also applied to various industries, contributing to advancements in robotics and autonomous systems.
        </p>
      </div>

      {/* Info Cards Section */}
      <div className="relative z-10 w-full max-w-screen-lg mx-auto h-auto bg-white bg-opacity-90 shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center gap-6">
        {/* Decorative image */}
        <div className="flex-1 flex items-center justify-center mb-6 md:mb-0">
          <img src="/assets/Home Page/Vector_design.png" alt="Decorative" className="max-w-full w-[200px] md:w-[270px] h-auto" />
        </div>

        {/* Info grid */}
        <div className="flex-1 grid grid-cols-2 gap-4 md:gap-8 text-center">
          {/* Faculty Card */}
          <div className="flex items-center">
            <img src="/assets/Home Page/faculty_icon.svg" alt="Faculty Icon" className="w-12 h-12 md:w-16 md:h-14" />
            <div className="ml-4 md:ml-8 text-left">
              <p className="text-lg md:text-2xl font-semibold">Y</p>
              <p className="text-base md:text-lg">Faculty</p>
            </div>
          </div>

          {/* Project Card */}
          <div className="flex items-center">
            <img src="/assets/Home Page/projects_icon.svg" alt="Project Icon" className="w-12 h-12 md:w-16 md:h-14" />
            <div className="ml-4 md:ml-8 text-left">
              <p className="text-lg md:text-2xl font-semibold">X</p>
              <p className="text-base md:text-lg">Project</p>
            </div>
          </div>

          {/* Students Card */}
          <div className="flex items-center">
            <img src="/assets/Home Page/students_icon.svg" alt="Students Icon" className="w-12 h-12 md:w-16 md:h-14" />
            <div className="ml-4 md:ml-8 text-left">
              <p className="text-lg md:text-2xl font-semibold">1000+</p>
              <p className="text-base md:text-lg">Students</p>
            </div>
          </div>

          {/* Publications Card */}
          <div className="flex items-center">
            <img src="/assets/Home Page/publications_icon.png" alt="Publications Icon" className="w-12 h-12 md:w-16 md:h-14" />
            <div className="ml-4 md:ml-8 text-left">
              <p className="text-lg md:text-2xl font-semibold">Z+</p>
              <p className="text-base md:text-lg">Publications</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
