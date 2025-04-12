import React from 'react';
import { NavLink } from 'react-router-dom';
import useScrollFadeIn from '../../Hooks/Scroll.js';
export default function Footer() {
  const leftSideRef = useScrollFadeIn({ direction: 'x+' });
  const rightSideRef1 = useScrollFadeIn({ direction: 'x-' });
  const rightSideRef2 = useScrollFadeIn({ direction: 'x-' });
  return (
    <>
      <div className="relative w-full mt-64 h-[400px]">
        <img className="absolute z-0 w-full h-full opacity-95 object-cover" src="/assets/footer_img.png" />
        <div className="absolute z-10 w-full h-full bg-gradient-to-b from-[#0E2D90]/90 to-[#0E2D90]/90 opacity-50"></div>

        <div className="absolute z-20 w-full h-full pt-14 flex text-white px-28">
          {/* Left Description */}
          <div ref={leftSideRef} className="max-w-lg space-y-4 text-lg leading-relaxed">
            <div className="flex items-center font-poppins font-medium text-xl justify-center w-[460px] h-[200px]">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div className="flex space-x-4 pt-4">
              <a href="https://www.instagram.com/tietofficial" target="_blank" rel="noopener noreferrer">
                <img src="/assets/icons/Instagram.svg" alt="Instagram" className="w-9 h-9" />
              </a>
              <a href="https://www.linkedin.com/school/tietofficial/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/icons/Linkedin.svg" alt="LinkedIn" className="w-9 h-9" />
              </a>
            </div>
          </div>

          {/* Resources */}
          <div ref={rightSideRef1} className="space-y-4 ml-[288px] mr-[72px]">
            <h2 className="text-2xl font-poppins font-semibold pb-5">Resources</h2>
            <ul className="space-y-2 text-lg pb-[7px]">
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
              <li className="flex items-center gap-3 pt-10 w-full max-w-xs">
                <img src="/assets/icons/location.svg" alt="Location_Pin" className="w-6 h-6" />
                <span className="text-left whitespace-nowrap">Office Address</span>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div ref={rightSideRef2} className="space-y-4">
            <h2 className="text-2xl font-poppins font-semibold pb-5">Information</h2>
            <ul className="space-y-2 text-lg pb-[7px]">
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