import React from 'react'
import useScrollFadeIn from '../../../Hooks/Scroll'
 

function Project_details({image, title, description, students, publications, team, isEven }) { 
  const projectCardRef = useScrollFadeIn({ direction: 'y'}) 
  const projectdetails = useScrollFadeIn({ fadeOnly: true, delay: 0.4 });
  return (
    <>
      <div ref={projectCardRef} className={`w-full h-[682px] ${isEven ? 'bg-white' : 'bg-indigo-50'} flex flex-col items-center`}>
        
        {/* Title div */}
        <div className="w-full h-6 mt-16 text-center justify-center text-[#09245D] text-[40px] font-normal font-['Poppins']">
          {title}
        </div>
        {/* Content Box */}
        <div className="flex flex-row items-start justify-between mt-24 px-16 gap-[46px]">
          {/* Image Section */}
          <div className="w-[561px] h-[385px] bg-white mr-10 rounded-[16px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex justify-center items-center">
            <div className="w-[508px] h-[328px] ">
              <img src={image} alt={title} className="w-full h-full object-contain" />
            </div>
          </div>
          {/* Description Text */}
          <div className="flex flex-col justify-center w-[570px]">
            <div className="text-[#282828] opacity-60 text-2xl mt-2">
              <p>{description}</p>
            </div>
            <div className="flex justify-between items-end w-[561px] mt-8 text-[#282828] opacity-60 text-base">
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-2">
                  <img src="/assets/icons/people.svg" alt="Students Icon" className="w-8 h-8" />
                  <div className="flex flex-col">
                    <span className="font-bold text-[#8D8A8A] text-[15px]">Students</span>
                    <span className="text-black text-[15px] font-bold">{students}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-2">
                  <img src="/assets/icons/book.svg" alt="Publications Icon" className="w-10=6 h-12" />
                  <div className="flex flex-col">
                    <span className="font-bold text-[#8D8A8A] text-[15px]">Publications</span>
                    <span className="text-black text-[15px] font-['Inter'] font-bold">{publications}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-2">
                  <img src="/assets/icons/team.svg" alt="Team Size Icon" className="w-10 h-10" />
                  <div className="flex flex-col">
                    <span className="font-bold text-[#8D8A8A] text-[15px]">Team Size</span>
                    <span className="text-black text-[15px] font-bold">{team}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
    </>
  )
}

export default Project_details