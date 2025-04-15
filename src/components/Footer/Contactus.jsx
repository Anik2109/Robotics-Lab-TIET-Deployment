import React from 'react'
import useScrollFadeIn from '../../Hooks/Scroll'

function Contactus() {
  const leftSideRef = useScrollFadeIn({ direction: 'x+' });
  const rightSideRef = useScrollFadeIn({ direction: 'x-' });
  return (
    <div className="relative w-full flex justify-center mt-[15.56vw]">
      <div className="absolute z-0 w-[71.9vw] h-[62.3vw] bg-blue-300/25 rounded-[1.37vw] blur-[1.37vw]"></div>
      <div className="relative z-10 w-[70.55vw] h-[60.95vw] bg-white rounded-[1.37vw] p-[2.74vw] pl-[1.64vw] flex flex-row justify-between items-center">
        <div ref={leftSideRef} className="w-full mb-[2.74vw]">

          <div className="w-[26.3vw] justify-start bg-radial-custom bg-clip-text text-transparent text-[4.93vw] font-medium font-['Poppins'] leading-[5.48vw]">Connect with us</div>

          <p className="text-[#040479F0]/95 w-[28.76vw] pl-[1.09vw] text-[1.23vw] mt-[2.465vw]">"Have a question or feedback? Share your thoughts — our team is ready to assist you."</p>
          <form className="space-y-[1.096vw] mt-[1.92vw] pl-[1.1vw]">
            <input
              type="text"
              placeholder="Name"
              className="w-[28.77vw] text-[1.096vw] h-[4.66vw] border-[0.137vw] border-[#04047966]/40 rounded-[1.37vw] px-[1.1vw] py-[0.548vw] focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-[28.77vw] text-[1.096vw] h-[4.66vw] border-[0.137vw] border-[#04047966]/40 rounded-[1.37vw] px-[1.1vw] py-[0.548vw] focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Mobile"
              className="w-[28.77vw] text-[1.096vw] h-[4.66vw] border-[0.137vw] border-[#04047966]/40 rounded-[1.37vw] px-[1.1vw] py-[0.548vw] focus:outline-none"
            />
            <textarea
              placeholder="Your Thought"
              className="w-[28.77vw] text-[1.096vw] h-[8.65vw] border-[0.137vw] border-[#04047966]/40  rounded-[1.37vw] px-[1.1vw] py-[0.548vw] resize-none focus:outline-none"
            />
            <div className="" />
            <button
              type="submit"    
              className="w-[28.77vw] text-[1.096vw] h-[4.52vw] bg-[#031F59F7]/95 font-inter text-white rounded-[1.37vw] py-[0.548vw] font-bold"
            >
              Submit
            </button>
          </form>
        </div>
        <div ref={rightSideRef} className="w-[27.8vw] h-[49.315vw] object-cover flex-shrink-0">
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