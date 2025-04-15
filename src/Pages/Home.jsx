import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Landing_img from '../components/Landing_Image/landing_img.jsx'
import AboutSection from '../components/About us/AboutUs'
import Projects from '../components/Projects/Projects';
import Faculty from '../components/Faculty/faculty'
import ContactUs from '../components/Footer/Contactus.jsx'
import Carousel from '../components/Events/Carousel.jsx'
import useScrollFadeIn from '../Hooks/Scroll.js';

export default function Home(){
    const fadeInRef = useScrollFadeIn();

    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#events') {
            const element = document.getElementById('events');
            if (element) {
                window.scrollTo({
                    top: element.offsetTop - 200,
                    behavior: 'auto',
                });
            }
        }
    }, [location]);

    return <div className="pt-[4.48vw]">
        <div className="fade-on-scroll" ref={fadeInRef}><Landing_img /></div>
        <div id="about-us" className="fade-on-scroll" ref={fadeInRef}><AboutSection /></div>
        <div id="events" className="fade-on-scroll" ref={fadeInRef}><Carousel slides={[]} options={{ loop: true }} /></div>
        <div className="fade-on-scroll" ref={fadeInRef}><Faculty /></div>
        <div className="fade-on-scroll" ref={fadeInRef}><Projects /></div>
        <div id="contact-us" className="fade-on-scroll" ref={fadeInRef}><ContactUs /></div>
    </div>
}