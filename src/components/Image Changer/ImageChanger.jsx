import React, { useState, useEffect } from 'react';

import pic1 from '/assets/Home Page/pic1.png';
import pic2 from '/assets/Home Page/pic2.png';
import pic3 from '/assets/Home Page/pic3.png';
import pic4 from '/assets/Home Page/pic4.png';

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
    <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] mb-4 flex justify-center items-center">
      <img 
        className="absolute top-0 left-0 w-full h-full object-cover" 
        alt="ERROR" 
        src={images[currentIndex]} 
      />
    </div>
  );
};

export default ImageChanger;
