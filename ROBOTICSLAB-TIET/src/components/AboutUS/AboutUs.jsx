import React from 'react';

const AboutSection = () => {
  return (
    <div
      className="relative flex flex-col items-center min-h-screen py-10 h-[]"
      style={{
        backgroundImage: `url('/src/assets/Home Page/bg_about_card.png')`, // Replace with actual image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Semi-transparent overlay for better readability */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* About Us Section */}
      <div className="relative z-10 w-full max-w-[1031px] h-auto bg-white bg-opacity-90 shadow-lg p-8 mb-10 pt-8">
        <h2 className="text-xl text-center text-black text-[25px] font-medium font-['Inter'] mb-6">ABOUT US</h2>
        <p className="text-left align-middle text-black text-xl font-medium font-['Inter'] pl-20 pr-20 pb-8">
            The general area of robotics with specific attention to mobility in challenging environments. Our current research is much more general, touching upon electrostatic and gecko-like adhesives for climbing and perching mobile robots as well as grippers for manipulator arms, localization safety for mobile robots, the intersection of robotics and urban landscape design, particle-based soft robots, and autonomous flight for UAVs in GNSS-denied environments.
            <br />
            The general area of robotics with specific attention to mobility in challenging environments. Our current research is much more general, touching upon electrostatic and gecko-like adhesives for climbing and perching mobile robots as well as grippers for manipulator arms, localization safety for mobile robots, the intersection of robotics and urban landscape design, particle-based soft robots, and autonomous flight for UAVs in GNSS-denied environments.
        </p>
      </div>

      {/* Stats Section */}
      
    </div>
  );
};

export default AboutSection;
