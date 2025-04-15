import React from 'react';
import { NavLink } from 'react-router-dom';
import useScrollFadeIn from '../../Hooks/Scroll.js';
export default function Footer() {
  const leftSideRef = useScrollFadeIn({ direction: 'x+' });
  const rightSideRef1 = useScrollFadeIn({ direction: 'x-' });
  const rightSideRef2 = useScrollFadeIn({ direction: 'x-' });
  return (
    <>
      <div className="relative w-full mt-[15.53vw] h-[27.4vw]">
        <img className="absolute z-0 w-full h-full opacity-95 object-cover" src="/assets/footer_img.png" />
        <div className="absolute z-10 w-full h-full bg-gradient-to-b from-[#0E2D90]/90 to-[#0E2D90]/90 opacity-50"></div>

        <div className="absolute z-20 w-full h-full pt-[3.84vw] flex text-white px-[7.67vw]">
          
          {/* Left Description */}
          <div ref={leftSideRef} className="max-w-lg space-y-[1.096vw] text-[1.37vw] leading-[1.9vw]">
            <div className="flex items-center font-poppins font-medium justify-center w-[31.5vw] h-[13.7vw]">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div className="flex space-x-[1.096vw] pt-[1.096vw]">
              <a href="https://www.instagram.com/tietofficial" target="_blank" rel="noopener noreferrer">
                <img src="/assets/icons/Instagram.svg" alt="Instagram" className="w-[2.46vw] h-[2.46vw]" />
              </a>
              <a href="https://www.linkedin.com/school/tietofficial/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/icons/Linkedin.svg" alt="LinkedIn" className="w-[2.46vw]9 h-[2.46vw]" />
              </a>
            </div>
          </div>

          {/* Resources */}
          <div ref={rightSideRef1} className="space-y-[1.096vw] ml-[19.73vw] mr-[4.93vw]">
            <h2 className="text-[1.64vw] leading-[2.19vw] font-poppins font-semibold pb-[1.37vw]">Resources</h2>
            <ul className="space-y-[0.55vw] text-[1.23vw] leading-[1.92vw] pb-[0.48vw]">
              <li>
                <span
                  onClick={() => {
                    const section = document.getElementById('about-us');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="hover:underline cursor-pointer"
                >
                  About Us
                </span>
              </li>
              <li>
                <NavLink to="/team" className="hover:underline">Our Team</NavLink>
              </li>
              <li>
              <span
                  onClick={() => {
                    const section = document.getElementById('contact-us');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="hover:underline cursor-pointer"
                >
                  Contact Us
                </span>
              </li>
              <li className="flex items-center gap-[0.82vw] pt-[2.74vw] w-full">
                <img src="/assets/icons/location.svg" alt="Location_Pin" className="w-[1.64vw] h-[1.64vw]" />
                <span className="text-left whitespace-nowrap">Office Address</span>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div ref={rightSideRef2} className="space-y-[1.096vw]">
            <h2 className="text-[1.64vw] leading-[2.192vw] font-poppins font-semibold pb-[1.37vw]">Information</h2>
            <ul className="space-y-[0.55vw] text-[1.233vw] leading-[1.92vw] pb-[0.48vw]">
              <li>
                Privacy Policy
              </li>
              <li>
                Terms And Condition
              </li>
              <li>
                Cookie Policy
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}