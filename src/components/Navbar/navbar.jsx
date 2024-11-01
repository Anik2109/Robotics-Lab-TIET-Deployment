import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/all";
import { Link, NavLink } from 'react-router-dom';

// Register GSAP plugins
gsap.registerPlugin(TextPlugin);

export default function Navbar({ setshowcontent }) {
    const logo = useRef();
    const rae = useRef();
    const tl = gsap.timeline();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        // Calculate Center of Screen
        const centerX = window.innerWidth / 2 - 40;
        const centerY = window.innerHeight / 2 - 40;

        // Select Options
        const options = gsap.utils.toArray('.option');

        tl.fromTo(logo.current, 
            { x: centerX, y: centerY, opacity: 0, scale: 1 }, 
            { x: centerX, y: centerY, opacity: 1, scale: 2, duration: 3 }
        )
        .fromTo(logo.current, 
            { x: centerX, y: centerY, scale: 2 }, 
            { x: centerX, y: centerY, opacity: 0, duration: 1 }
        )
        .to(logo.current, { x: 0, y: 0, opacity: 0, scale: 1 })
        .to(logo.current, { x: 0, y: 0, opacity: 1, duration: 1 })
        .from([rae.current, options], { opacity: 0, y: -20, stagger: 0.3, duration: 1 })
        .then(() => {
            // Setting Showcontent to true to load rest site
            setTimeout(() => {
                setshowcontent(true); 
            }, 400);
        });
    }, []);

    return (
        <>
            <div className="fixed top-0 left-0 z-20 w-full px-6 py-4 bg-white shadow-md">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <div className="logo">
                            <img 
                                src="/assets/Home Page/lab_logo.jpeg" 
                                alt="Thapar University" 
                                className="max-w-[50px] h-auto object-contain" 
                                ref={logo}
                            />
                        </div>
                        <div className="text-xl font-semibold" ref={rae}>
                            CSED | AUTONOMOUS ROBOTICS LAB
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                        className="text-gray-600 md:hidden focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>

                    {/* Navigation Links */}
                    <div className={`option flex-col gap-4 items-center text-lg absolute top-20 left-0 w-full bg-white shadow-md md:static md:flex md:flex-row md:gap-6 md:ml-auto md:justify-end md:shadow-none ${isMobileMenuOpen ? 'flex' : 'hidden'}`}>
                        <div className="hover:text-red-600 hover:scale-110 cursor-pointer">
                            <NavLink to="/">HOME</NavLink>
                        </div>
                        <div className="hover:text-red-600 hover:scale-110 cursor-pointer">
                            <NavLink to="/academics">ACADEMICS</NavLink>
                        </div>
                        <div className="hover:text-red-600 hover:scale-110 cursor-pointer">
                            <NavLink to="/projects">PROJECTS</NavLink>
                        </div>
                        <div className="hover:text-red-600 hover:scale-110 cursor-pointer">
                            <NavLink to="/research">RESEARCH</NavLink>
                        </div>
                        <div className="hover:text-red-600 hover:scale-110 cursor-pointer">
                            <NavLink to="/events">EVENTS</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
