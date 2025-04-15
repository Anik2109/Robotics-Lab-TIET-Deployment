import React from 'react'
import FacultyCard from '../Cards/Faculty Card/faculty_card'
import useScrollFadeIn from '../../Hooks/Scroll'

function Faculty() {
  const titleRef = useScrollFadeIn({ direction: 'y' });
  const facultyCardRef = useScrollFadeIn({ direction: 'y'}) 
  const blurRef = useScrollFadeIn({ direction: 'y' });

  return (
    <>
        <div ref={titleRef} className="flex items-center justify-center mb-[1.54vw] mt-[13.89vw]">
            <div className="w-full h-auto text-center justify-start text-[#282828] text-[4.167vw] font-semibold font-['Poppins']">FACULTY</div>
        </div>
        <div className="relative flex justify-center mt-[5.56vw]">
          <div ref={blurRef} className="absolute z-0 w-[27.43vw] h-[55.56vw] bg-[#96BAFF40]/25 rounded-[1.39vw] blur-[1.39vw]"></div>
          <div ref={facultyCardRef} className="relative z-10 flex flex-wrap justify-center gap-20 px-4">
            <FacultyCard/>
          </div>
        </div>
        <div ref={titleRef} className="flex items-center justify-center mt-[12.22vw]">
            <div className="w-full h-[4.44vw] text-center justify-start text-[#282828] text-[4.167vw] font-semibold font-['Poppins']">OUR PROJECTS</div>
        </div>
    </>
  )
}

export default Faculty