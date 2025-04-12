import React from 'react';
import useScrollFadeIn from '../../../Hooks/Scroll';

function Team_card({ image, name, post, mail, linkedin }) {
    const blurRef = useScrollFadeIn({ direction: 'y' });

  return (
    <div className="flex justify-center items-start">
        <div ref={blurRef} className="absolute z-0 w-[303px] h-[465px] bg-[#96BAFF40]/25 rounded-[20px] blur-[20px]"></div>
        <div className=" relative z-10 flex flex-col items mb-10 w-[286px] h-[449px] bg-white rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
            {/* Image Section */}
            <div className="w-full flex justify-center pt-4">
                <div className="w-[240px] h-[213px] rounded-[16px] overflow-hidden">
                    <img className="w-full h-full object-cover rounded-[16px]" src={image} alt="Base Img" />
                </div>
            </div>


            {/* Description Section */}
            <div className="flex flex-col items-center text-center pt-6">
                <div className="text-center justify-start">
                    <span className="text-black text-2xl font-semibold font-['Poppins'] leading-8 tracking-tight">
                        {name}
                    </span>
                    <span className="text-black text-2xl font-normal font-['Poppins'] leading-8 tracking-tight">
                        <br/>{post}
                    </span>
                </div>
            </div>  

            {/* Links Section */}
            <div className="mt-auto w-full px-6 pb-4">
              <div className="flex justify-start gap-4">
                <a href={`mailto:${mail}`} target="_blank" rel="noopener noreferrer">
                  <img src="/assets/icons/mail.svg" alt="Email Icon" className="w-6 h-6" />
                </a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                  <img src="/assets/icons/Linkedin_black.svg" alt="LinkedIn Icon" className="w-6 h-6" />
                </a>
              </div>
            </div>

        </div>
    </div>
  );
}

export default Team_card;