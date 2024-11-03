import React from 'react';
import '../../Events/events.css'

function Event_Card({ image, title, description }) {
    return ( 
        <div className="rounded-lg overflow-hidden mx-auto w-[587px] md:w-[500px] sm:w-[350px] xs:w-full" style={{ boxShadow: 'none', backgroundColor: 'transparent' }}>
            <img
                src={image}
                alt="Event"
                className="w-full h-[289px] md:h-[240px] sm:h-[180px] object-cover object-center rounded-t-lg"
            />
            <div className="p-5">
                <div className="text-[#c61013] text-[22px] md:text-[20px] sm:text-[18px] font-medium font-['Inter']">
                    {title}
                </div>
                <div className="mt-2">
                    <span className="text-black text-lg md:text-base sm:text-sm font-normal font-['Inter'] whitespace-normal">
                        {description}
                    </span>
                    <span className="text-[#353535] text-lg md:text-base sm:text-sm font-normal font-['Inter'] ml-1">
                        ...Read more
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Event_Card;
