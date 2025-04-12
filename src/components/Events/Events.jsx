import React, { useEffect, useState } from "react";
import EventCard from "../Cards/Event Card/event_card.jsx";
import eventsData from '../../Data/eventsData.json';

function Event() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % eventsData.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const prevIndex = (currentIndex - 1 + eventsData.length) % eventsData.length;
    const nextIndex = (currentIndex + 1) % eventsData.length;

    if (!eventsData || eventsData.length === 0) return null;

    return (
        <div className="relative flex flex-col items-center min-h-[500px] mt-5 bg-white overflow-hidden">
            <div className="flex items-center justify-center pb-7">
                <div className="w-[53px] border-t-4" style={{ height: '4px', borderColor: '#031F59' }} />
                <div className="w-52 h-12 text-center justify-start text-zinc-600 text-4xl font-semibold font-['Poppins']">EVENTS</div>
                <div className="w-[53px] border-t-4" style={{ height: '4px', borderColor: '#031F59' }} />
            </div>

            <div className="w-full flex justify-center pt-7 md:space-x-5 relative">
                {/* Previous Button */}
                <button
                    onClick={() => setCurrentIndex((currentIndex - 1 + eventsData.length) % eventsData.length)}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 shadow-lg rounded-full p-3 z-10 hover:bg-gray-100"
                >
                    &#8592;
                </button>

                {/* Next Button */}
                <button
                    onClick={() => setCurrentIndex((currentIndex + 1) % eventsData.length)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 shadow-lg rounded-full p-3 z-10 hover:bg-gray-100"
                >
                    &#8594;
                </button>

                <div className="w-full flex justify-center items-center transition-all duration-700 ease-in-out">
                    <div className="w-[100%] sm:w-[30%] min-h-[500px] overflow-hidden relative transform transition duration-700 ease-in-out opacity-70 scale-100">
                        <div className="absolute transform -left-1/4 -translate-x-[1%] w-full">
                            <EventCard
                                image={eventsData[prevIndex].image}
                                title={eventsData[prevIndex].title}
                                description={eventsData[prevIndex].description}
                            />
                        </div>
                    </div>

                    <div className="w-[100%] sm:w-[50%] min-h-[500px] transition-opacity transform duration-700 ease-in-out opacity-100 sm:px-0 scale-110">
                        <EventCard
                            image={eventsData[currentIndex].image}
                            title={eventsData[currentIndex].title}
                            description={eventsData[currentIndex].description}
                            className="event-card sm:scale-110 transition-opacity duration-700 ease-in-out transform"
                        />
                    </div>

                    <div className="w-[100%] sm:w-[30%] min-h-[500px] overflow-hidden relative transform transition duration-700 ease-in-out opacity-70 scale-90">
                        <div className="absolute transform left-1/4 translate-x-[1%] w-full">
                            <EventCard
                                image={eventsData[nextIndex].image}
                                title={eventsData[nextIndex].title}
                                description={eventsData[nextIndex].description}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Event;