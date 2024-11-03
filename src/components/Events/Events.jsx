import React, { useEffect, useState } from "react";
import EventCard from "../Cards/Event Card/Event_Card.jsx";
import eventsData from '../../Data/eventsData';

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

    return (
        <div
            className="relative flex flex-col items-center min-h-screen pt-10 mt-[80px]"
            style={{
                backgroundImage: `url('/assets/Events_Page/bg_events_page.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '50vh'
            }}
        >
            <div className="flex items-center justify-center mb-6">
                <div className="w-[34px] border-t-2" style={{ height: '2px', borderColor: '#ba1518' }} />
                <h2 className="text-2xl md:text-3xl text-center text-black font-medium font-['Inter'] mx-4">
                    EVENTS
                </h2>
                <div className="w-[34px] border-t-2" style={{ height: '2px', borderColor: '#ba1518' }} />
            </div>

            <div className="w-full flex justify-center mt-5 space-x-0 md:space-x-5">
                <div className="hidden sm:block w-[30%] overflow-hidden relative transition duration-500 ease-in-out opacity-50">
                    <div className="absolute left-1/5 transform -translate-x-[20%] w-full scale-95">
                        <EventCard
                            image={eventsData[prevIndex].image}
                            title={eventsData[prevIndex].title}
                            description={eventsData[prevIndex].description}
                        />
                    </div>
                </div>

                <div className="w-[100%] sm:w-[50%] transition duration-500 ease-in-out opacity-100 px-10 sm:px-0">
                    <EventCard
                        image={eventsData[currentIndex].image}
                        title={eventsData[currentIndex].title}
                        description={eventsData[currentIndex].description}
                        className="event-card sm:scale-110"
                    />
                </div>

                <div className="hidden sm:block w-[30%] overflow-hidden relative transition duration-500 ease-in-out opacity-50">
                    <div className="absolute right-1/5 transform translate-x-[20%] w-full scale-95">
                        <EventCard
                            image={eventsData[nextIndex].image}
                            title={eventsData[nextIndex].title}
                            description={eventsData[nextIndex].description}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Event;
