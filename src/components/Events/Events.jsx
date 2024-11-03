import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import EventCard from '../Cards/Event Card/Event_Card';
import eventsData from '../../data/eventsData';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import './events.css'

const swiperSettings = {
    modules: [Navigation, Pagination, Autoplay, EffectCoverflow],
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 20,
    initialSlide: 1,
    autoHeight: false,
    grabCursor: true,
    loop: true,
    effect: 'coverflow',
    coverflowEffect: {
      depth:  0,
      rotate: 0,
      scale: 0.8,
      stretch: -60,
      modifier: 1,
    },
    speed: 800, // Smoother transition speed
    navigation: false,
    pagination: false,
};

function Event() {
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
            {/* TITLE */}
            <div className="flex items-center justify-center mb-6">
                <div className="w-[34px] border-t-2" style={{ height: '2px', borderColor: '#ba1518' }} />
                <h2 className="text-2xl md:text-3xl text-center text-black font-medium font-['Inter'] mx-4">
                    EVENTS
                </h2>
                <div className="w-[34px] border-t-2" style={{ height: '2px', borderColor: '#ba1518' }} />
            </div>

            {/* SWIPER */}
            <div className="w-full px-4 md:px-10 lg:px-20">
                <Swiper {...swiperSettings} autoplay={{ delay: 2000, disableOnInteraction: false }} loop={true}>
                    {eventsData.map((eventData, index) => (
                        <SwiperSlide
                            key={eventData.id}
                            style={{ width: '300px' }}
                            className={`transition-transform duration-500 ease-in-out
                                ${index === 1 ? 'opacity-100 scale-105' : 'opacity-50 scale-95'}
                            `}
                        >
                            <EventCard
                                image={eventData.image}
                                title={eventData.title}
                                description={eventData.description}
                                className="event-card"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Event;
