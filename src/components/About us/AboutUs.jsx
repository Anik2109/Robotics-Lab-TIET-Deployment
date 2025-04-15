import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import StatsCounter from './stats_counter.jsx'; 
import useScrollFadeIn from '../../Hooks/Scroll.js';

const AboutSection = () => {
  const location = useLocation();
  const aboutRef = useScrollFadeIn({ direction: 'y' });
  const statsRef = useScrollFadeIn({ direction: 'y' });
  const blurRef = useScrollFadeIn({ direction: 'y' });

  const smoothScrollTo = (targetY, duration = 1600) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percent = Math.min(progress / duration, 1);
      window.scrollTo(0, startY + distance * percent);
      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  useEffect(() => {
    if (location.hash === '#about-us') {
      const section = document.getElementById('about-us');
      if (section) {
        const y = section.getBoundingClientRect().top + window.scrollY;
        smoothScrollTo(y, 1600);
      }
    }
  }, [location]);

  return (
    <div id="about-us" className="flex flex-col items-center justify-center w-full pt-[6.67vw] px-[1vw] bg-white">
      
      <div className="flex justify-center relative">
        <div ref={blurRef} className="absolute z-0 w-[85.45vw] h-[43.5vw] bg-[#96BAFF40]/25 rounded-[1.39vw] blur-[1.39vw] p-[0.42vw] mx-auto"></div>
        {/* Main content container */}
        <div ref={aboutRef} className="w-[83vw] h-[42.38vw] bg-white rounded-[1.78vh] p-[0.56vw] z-10">
          {/* Title section */}
          <div className="flex items-center justify-center pb-[3.33vw] pt-[1.5vw]">
              <div className="w-full text-center text-[#282828] text-[3.33vw] font-semibold font-['Poppins']">ABOUT US</div>
          </div>

          {/* Paragraph */}
          <div className="w-[76.38vw] px-[3.33vw] pb-[1.39vw] mb-[0.69vw] text-justify justify-center items-center text-[#454545] text-[1.74vw] font-medium font-['Poppins'] ">
          The Autonomous Robotics Lab at Thapar Institute of Technology is a center for research and innovation in robotics and intelligent autonomous systems. Our work spans mobile robotics, AI, computer vision, embedded systems, and human-robot interaction. We aim to build smart, adaptive machines capable of operating with minimal human input in real-world environments.
          <br/>The lab provides a collaborative space for students, researchers, and faculty to explore cutting-edge technologies through hands-on projects, interdisciplinary research, and partnerships with industry. From autonomous ground vehicles to drone systems, we are driving forward the future of robotics — one breakthrough at a time.
    
          </div>
        </div>
      </div>
      {/* Stats section */}   
      <div ref={statsRef} className="w-[83.33vw] mt-[7.78vw] mb-[13.47vw]">
        <StatsCounter />
      </div>
    </div> 
  );
};

export default AboutSection;