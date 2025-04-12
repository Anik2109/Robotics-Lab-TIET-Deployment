import React from 'react'
import FacultyCard from '../Cards/Faculty Card/faculty_card'
import useScrollFadeIn from '../../Hooks/Scroll'

function Faculty() {
  const titleRef = useScrollFadeIn({ direction: 'y' });
  const facultyCardRef = useScrollFadeIn({ direction: 'y'}) 
  const blurRef = useScrollFadeIn({ direction: 'y' });

  return (
    <>
        <div ref={titleRef} className="flex items-center justify-center mb-5 mt-[200px]">
            <div className="w-full h-12 text-center justify-start text-[#282828] text-6xl font-semibold font-['Poppins']">FACULTY</div>
        </div>
        <div className="relative flex justify-center mt-20">
          <div ref={blurRef} className="absolute z-0 w-[395px] h-[800px] bg-[#96BAFF40]/25 rounded-[20px] blur-[20px]"></div>
          <div ref={facultyCardRef} className="relative z-10 flex flex-wrap justify-center gap-20 px-4">
            <FacultyCard/>
          </div>
        </div>
        <div ref={titleRef} className="flex items-center justify-center mt-44">
            <div className="w-full h-16 text-center justify-start text-[#282828] text-6xl font-semibold font-['Poppins']">OUR PROJECTS</div>
        </div>
    </>
  )
}

export default Faculty