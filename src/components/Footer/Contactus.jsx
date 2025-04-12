import React from 'react'
import useScrollFadeIn from '../../Hooks/Scroll'

function Contactus() {
  const leftSideRef = useScrollFadeIn({ direction: 'x+' });
  const rightSideRef = useScrollFadeIn({ direction: 'x-' });
  return (
    <div className="relative w-full flex justify-center mt-56">
      <div className="absolute z-0 w-[1050px] h-[910px] bg-blue-300/25 rounded-[20px] blur-[20px]"></div>
      <div className="relative z-10 w-[1030px] h-[895px] bg-white rounded-[20px] p-10 pl-6 flex flex-col md:flex-row justify-between items-center">
        <div ref={leftSideRef} className="w-full  mb-10">

          <div className="w-96 justify-start bg-radial-custom bg-clip-text text-transparent text-7xl font-medium font-['Poppins'] leading-[80px]">Connect with us</div>

          <p className="text-[#040479F0]/95 w-[420px] pl-4 text-lg mt-9">"Have a question or feedback? Share your thoughts — our team is ready to assist you."</p>
          <form className="space-y-4 mt-7 pl-4">
            <input
              type="text"
              placeholder="Name"
              className="w-[420px] h-[68px] border-2 border-[#04047966]/40 rounded-[20px] px-4 py-2 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-[420px] h-[68px] border-2 border-[#04047966]/40 rounded-[20px] px-4 py-2 focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Mobile"
              className="w-[420px] h-[68px] border-2 border-[#04047966]/40 rounded-[20px] px-4 py-2 focus:outline-none"
            />
            <textarea
              placeholder="Your Thought"
              className="w-[420px] h-[125px] border-2 border-[#04047966]/40  rounded-[20px] px-4 py-2 resize-none focus:outline-none"
            />
            <div className="" />
            <button
              type="submit"    
              className="w-[420px] h-[66px] bg-[#031F59F7]/95 font-inter text-white rounded-[20px] py-2 font-bold"
            >
              Submit
            </button>
          </form>
        </div>
        <div ref={rightSideRef} className="w-[406px] h-[720px] object-cover flex-shrink-0">
          <img
            src="/assets/Home_Page/Contact_us_img.png"
            alt="Team working"
            className="rounded-[20px] object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Contactus