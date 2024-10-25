import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/all";

// Register GSAP plugins
gsap.registerPlugin(TextPlugin);

export default function Navbar({ setshowcontent }) {
    const logo = useRef();
    const rae = useRef();
    

    // State to control when to show the rest of the navbar
    const [showNavbarContent, setShowNavbarContent] = useState(false);

    useEffect(() => {
        const tl = gsap.timeline();
        // Calculate Center of Screen
        const centerX = window.innerWidth / 2 - 40;
        const centerY = window.innerHeight / 2 - 40;

        tl.fromTo(
            logo.current,
            { x: centerX, y: centerY, opacity: 0, scale: 1 },
            { x: centerX, y: centerY, opacity: 1, scale: 2, duration: 3 }
        )
        .to(logo.current, { x: 0, y: 0, scale: 1, duration: 0 })
        .then(() => {
            // After the logo returns to (0, 0), show the rest of the navbar content
            
            
            // Set showcontent to true to load the rest of the site
            setTimeout(() => {
                setShowNavbarContent(true);
                setshowcontent(true); 
            }, 1000);
        });
    }, []); // Empty array ensures it only runs once

    return (
        <>
            <div className="fixed top-0 left-0 z-20 h-20 py-6 w-full px-6 flex justify-between items-center bg-white shadow-md">
                {/* Left section: Logo and Text */}
                <div className="flex items-center gap-6">
                    <div className="logo">
                        <img 
                            src="public/assets/Home Page/logo.png" 
                            alt="Thapar University" 
                            className="max-w-[60px] h-auto object-contain" 
                            ref={logo}
                        />
                    </div>
                    {showNavbarContent && (
                        <div className="text-xl font-semibold" ref={rae}>
                            ROBOTICS ELC ACTIVITY
                        </div>
                    )}
                </div>

                {/* Right section: Navigation Links */}
                {showNavbarContent && (
                    <div className="option flex gap-6 items-center text-lg">
                        <div className="hover:text-red-600 hover:scale-110 cursor-pointer">HOME</div>
                        <div className="hover:text-red-600 hover:scale-110 cursor-pointer">ACADEMICS</div>
                        <div className="hover:text-red-600 hover:scale-110 cursor-pointer">PROJECTS</div>
                        <div className="hover:text-red-600 hover:scale-110 cursor-pointer">RESEARCH</div>
                        <div className="hover:text-red-600 hover:scale-110 cursor-pointer">EVENTS</div>
                    </div>
                )}
            </div>
        </>
    );
}
