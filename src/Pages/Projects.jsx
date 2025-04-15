import React from 'react';
import Projects from '../components/Projects/Projects';
import useScrollFadeIn from '../Hooks/Scroll.js';
import backgroundImage from '/assets/Projects_Page/banner.png'; 


function Project() {
  const fadeRef = useScrollFadeIn({ fadeOnly: true, delay: 0.4 });

    return ( 
        <>
          <div
            ref={fadeRef}
            className="z-0 w-full h-[20.27vw] mt-[6.51vw] relative overflow-hidden text-white font-sans"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="z-10 absolute inset-0 bg-gradient-to-b from-blue-900/40 to-blue-900/40" />
            <div className="relative z-20 w-full h-full flex flex-col justify-center items-center text-center gap-[1.096vw">
              <h1 className="text-white text-[6.58vw] leading-none font-medium font-['Poppins']">PROJECTS</h1>
              <div className="w-[20.96vw] h-0 outline outline-2  outline-white"></div>
            </div>
          </div>
          <Projects/>  
        </>
     );
}

export default Project;