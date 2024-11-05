import React, { useState, useEffect } from 'react';

const EventSlider = ({ eventsData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevIndex = (currentIndex - 1 + eventsData.length) % eventsData.length;
  const nextIndex = (currentIndex + 1) % eventsData.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % eventsData.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, [currentIndex, eventsData.length]);

  return (
    <div className="w-full flex justify-center mt-5 space-x-0 md:space-x-5">
      <div className="hidden sm:block w-[30%] overflow-hidden relative transition duration-500 ease-in-out transform opacity-70 scale-95">
        <div
          className="absolute left-1/5 transform -translate-x-[20%] w-full transition-all duration-700 ease-in-out opacity-0 sm:opacity-70 sm:hover:opacity-80 sm:hover:scale-100"
          key={prevIndex}
        >
          <EventCard
            image={eventsData[prevIndex].image}
            title={eventsData[prevIndex].title}
            description={eventsData[prevIndex].description}
          />
        </div>
      </div>

      <div className="w-full sm:w-[50%] transition-transform transform duration-700 ease-in-out opacity-100 px-10 sm:px-0 scale-105">
        <div
          className="transition-all duration-700 ease-in-out transform opacity-100 hover:scale-105"
          key={currentIndex}
        >
          <EventCard
            image={eventsData[currentIndex].image}
            title={eventsData[currentIndex].title}
            description={eventsData[currentIndex].description}
            className="event-card"
          />
        </div>
      </div>

      <div className="hidden sm:block w-[30%] overflow-hidden relative transition duration-500 ease-in-out transform opacity-70 scale-95">
        <div
          className="absolute right-1/5 transform translate-x-[20%] w-full transition-all duration-700 ease-in-out opacity-0 sm:opacity-70 sm:hover:opacity-80 sm:hover:scale-100"
          key={nextIndex}
        >
          <EventCard
            image={eventsData[nextIndex].image}
            title={eventsData[nextIndex].title}
            description={eventsData[nextIndex].description}
          />
        </div>
      </div>
    </div>
  );
};

export default EventSlider;
