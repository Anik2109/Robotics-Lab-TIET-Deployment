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
    <div id="about-us" className="flex flex-col items-center justify-center w-full pt-24 px-14 bg-white">
      
      <div className="flex justify-center relative">
        <div ref={blurRef} className="absolute z-0 w-[1245px] h-[660px] bg-[#96BAFF40]/25 rounded-[20px] blur-[20px] p-6 mx-auto"></div>
        {/* Main content container */}
        <div ref={aboutRef} className="w-[1210px] h-[625px] bg-white rounded-2xl p-8 z-10">
          {/* Title section */}
          <div className="flex items-center justify-center pb-12">
              <div className="w-full text-center justify-start text-[#282828] text-5xl font-semibold font-['Poppins']">ABOUT US</div>
          </div>

          {/* Paragraph */}
          <div className="w-[1099px] px-12 pb-20 mb-10 text-justify justify-center text-[#454545] text-[25px] font-medium font-['Poppins'] leading-10">
          The Autonomous Robotics Lab at Thapar Institute of Technology is a center for research and innovation in robotics and intelligent autonomous systems. Our work spans mobile robotics, AI, computer vision, embedded systems, and human-robot interaction. We aim to build smart, adaptive machines capable of operating with minimal human input in real-world environments.
          <br/>The lab provides a collaborative space for students, researchers, and faculty to explore cutting-edge technologies through hands-on projects, interdisciplinary research, and partnerships with industry. From autonomous ground vehicles to drone systems, we are driving forward the future of robotics — one breakthrough at a time.
    
          </div>
        </div>
      </div>
      {/* Stats section */}   
      <div ref={statsRef} className="w-[1200px] mt-28 mb-[194px]">
        <StatsCounter />
      </div>
    </div>
  );
};

export default AboutSection;