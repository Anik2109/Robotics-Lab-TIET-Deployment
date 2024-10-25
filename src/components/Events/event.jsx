import React, { useRef, useEffect } from "react";
import Eventcard from "../Cards/Event Card/event_card";
import upcoming_demodata from "../../Data/upcomingevent_demodata";
import { MdChevronLeft, MdOutlineChevronRight } from "react-icons/md";

export default function Upcomingevents() {
    // Reference to the slider div
    const sliderRef = useRef(null);

    // Auto-scroll functionality
    useEffect(() => {
        const slider = sliderRef.current;

        const autoScroll = setInterval(() => {
            if (slider) {
                // Scroll the slider right automatically
                slider.scrollLeft += 1;

                
                if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
                    slider.scrollLeft = 0;
                }
            }
        }, 10); 

        return () => {
            clearInterval(autoScroll); 
        };
    }, []);

    // Duplicating the event data to create the infinite scroll illusion
    const duplicatedEvents = [...upcoming_demodata, ...upcoming_demodata]; // Duplicate data

    return (
        <>
            <div className="w-11/12 mx-auto py-8 space-y-8">
                {/* Heading */}
                <div className="flex items-center gap-2">
                    <div className="hover:scale-110">
                        <img src="/assets/Home Page/Calendar.svg" alt="Calendar" />
                    </div>
                    <div className="text-[28px] font-semibold ">
                        UPCOMING EVENTS
                    </div>
                </div>

                {/* Cards */}
                <div className="relative flex items-center">
                    
                    <div
                        id="slider"
                        ref={sliderRef}
                        className="flex w-full h-full space-x-48 overflow-x-scroll whitespace-nowrap scroll-smooth p-4 scrollbar-hide"
                    >
                        {duplicatedEvents.map((event, index) => (
                            <div key={index}>
                                <Eventcard image={event.image} />
                                <div className="text flex flex-col items-center justify-center my-4 text-[20px]">
                                    <div>{event.eventname}</div>
                                    <div>{event.eventdate}</div>
                                    <div>{event.eventtime}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                </div>
            </div>
        </>
    );
}
