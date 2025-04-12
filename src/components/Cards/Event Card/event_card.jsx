import React from 'react';

function Event_Card({ image, title, description }) {
    return ( 
        <div 
            className="rounded-lg overflow-hidden w-full sm:max-w-sm md:max-w-md lg:max-w-[620px]"
            style={{ boxShadow: 'none', backgroundColor: 'transparent' }}
        >
            <img
                src={image}
                alt="Event"
                className="w-full h-[240px] sm:h-[180px] md:h-[240px] lg:h-[289px] object-cover object-center rounded-2xl"
            />
            <div className="p-4 sm:p-4 md:p-5">
                <div className="text-[#031F59] text-lg sm:text-lg md:text-xl lg:text-2xl font-medium font-['Inter']">
                    {title}
                </div>
                <div className="mt-2">
                    <span className="text-black text-base sm:text-base md:text-lg lg:text-xl font-normal font-['Inter'] whitespace-normal">
                        {description}
                    </span>
                    <span className="text-[#353535] text-base sm:text-base md:text-lg lg:text-xl font-normal font-['Inter'] ml-1">
                        ...Read more
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Event_Card;
