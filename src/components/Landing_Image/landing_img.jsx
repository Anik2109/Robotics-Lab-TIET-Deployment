import React from 'react';
import { useState, useEffect } from 'react';
import useScrollFadeIn from '../../Hooks/Scroll.js';

import pic1 from '/assets/Home_Page/backdrop_img1.png';
import pic2 from '/assets/Home_Page/backdrop_img2.png';
import pic3 from '/assets/Home_Page/backdrop_img3.png';
import pic4 from '/assets/Home_Page/backdrop_img4.png';

const Landing_img = () => {
  const fadeRef = useScrollFadeIn();
  const images = [pic1, pic2, pic3, pic4];
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [prevImage, setPrevImage] = useState(null);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFading(true);
      setPrevImage(currentImage);
      const nextIndex = (images.indexOf(currentImage) + 1) % images.length;
      const nextImage = images[nextIndex];

      setTimeout(() => {
        setCurrentImage(nextImage);
        setIsFading(false);
      }, 500);
    }, 2500);

    return () => clearInterval(intervalId);
  }, [currentImage, images]);

  return (
    <div ref={fadeRef} className="relative rounded-[20px] overflow-hidden mt-12 mx-auto w-[83vw] h-[29vw] flex items-center justify-center">
      {prevImage && (
        <img
          src={prevImage}
          alt="Previous"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-0'}`}
          style={{ zIndex: 10 }}
        />
      )}
      <img
        src={currentImage}
        alt="Current"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isFading ? 'opacity-100' : 'opacity-100'}`}
        style={{ zIndex: 0 }}
      />
      {/* Overlay */}
      <div
        className="absolute inset-0 z-20 "
        style={{
            background: 'linear-gradient(to right, rgba(3, 31, 89, 0.5), rgba(10, 36, 73, 0.5))',
        }}
      />

      {/* Content */}
      <div className="relative z-30 flex items-center w-full">
        {/* Robot Image */}
        <img
          src="/assets/Home_Page/lab_logo_nobg.png"
          alt="Robot Icon"
          className="w-[21vw] h-[21vw] object-contain"
        />

        {/* Text */}
        <div className="text-white w-[61vw] h-[12vw] ">
          <h1 className="text-[4vw] font-semibold font-['Poppins']">
            Lorem ipsum dolor sit amet
          </h1>
            <p className="text-[2vw] lg:leading-[6.6vh] md:leading-[5vh] sm:leading-[3vh] xs:leading-[1vh]  text-center font-medium font-['Poppins'] mt-[1.7vh] drop-shadow">
              Sed do eiusmod tempor incididunt ut labore
            </p>
        </div>
      </div>
    </div>
  );
};

export default Landing_img;