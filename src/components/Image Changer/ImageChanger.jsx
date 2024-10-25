import React, { useState, useEffect } from 'react';


import pic1 from '../../../public/assets/Home Page/pic1.png';
import pic2 from '../../../public/assets/Home Page/pic2.png';
import pic3 from '../../../public/assets/Home Page/pic3.png';
import pic4 from '../../../public/assets/Home Page/pic4.png';

const ImageChanger = () => {
  const images = [pic1, pic2, pic3, pic4];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="relative w-full h-[424px] mb-4 justify-end items-start gap-20 inline-flex ">
      <img 
        className="absolute top-0 left-0 w-full h-[424px] object-cover" 
        alt="ERROR" 
        src={images[currentIndex]} 
      />
    </div>
  );
};

export default ImageChanger;
