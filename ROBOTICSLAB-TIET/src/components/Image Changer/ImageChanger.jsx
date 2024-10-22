import React, { useState, useEffect } from 'react';

// Import images directly
import pic1 from '../../assets/Home Page/pic1.png';
import pic2 from '../../assets/Home Page/pic2.png';
import pic3 from '../../assets/Home Page/pic3.png';

const ImageChanger = () => {
  const images = [pic1,
                    // pic2,
                    // pic3
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <div className="w-full h-[424px] mb-4 justify-end items-start gap-20 inline-flex">
        <img 
            className="absolute top-0 left-0 w-full h-[424px] object-cover" 
            alt="ERROR" 
            src={images[currentIndex]} 
        />
    </div>

  );
};

export default ImageChanger;
