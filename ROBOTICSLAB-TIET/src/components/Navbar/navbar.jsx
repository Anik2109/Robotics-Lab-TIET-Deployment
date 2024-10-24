import React, { useRef, useEffect } from "react";
import { gsap } from "gsap/gsap-core";
import { TextPlugin } from "gsap/all";

// Register GSAP plugins
gsap.registerPlugin(TextPlugin);

export default function Navbar({setshowcontent}) {
    const logo = useRef();
    const rae = useRef();
    const tl = gsap.timeline();

    useEffect(() => {
        // Calculate Center of Screen
        const centerX = window.innerWidth / 2 - 40;
        const centerY = window.innerHeight / 2 - 40;
    
        // Select Options
        const options = gsap.utils.toArray('.option');
    
        tl.fromTo(logo.current, 
            { x: centerX, y: centerY, opacity: 0,scale:1 }, 
            { x: centerX, y: centerY, opacity: 1,scale:2, duration: 3 }
        )
        .fromTo(logo.current, 
            { x: centerX, y: centerY,scale:2 }, 
            { x: 0, y: 0,scale:1, duration: 3 }
        )
        .to(rae.current, { text: "ROBOTICS ELC ACTIVITY", duration: 1.5 })
        .from(options, { opacity: 0, y: -20, stagger: 0.3, duration: 1 })
        .then(()=>{
            // Setting Showcontent to true to load the rest of the site
            setTimeout(() => {
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
                            src="/src/assets/Home Page/logo.png" 
                            alt="Thapar University" 
                            className="max-w-[60px] h-auto object-contain" 
                            ref={logo}
                        />
                    </div>
                    <div className="text-xl font-semibold" ref={rae}>
                        {/* Text will be animated */}
                    </div>
                </div>

                {/* Right section: Navigation Links */}
                <div className="option flex gap-6 items-center text-lg">
                    <div className="hover:text-red-600 hover:scale-110 cursor-pointer">HOME</div>
                    <div className="hover:text-red-600 hover:scale-110 cursor-pointer">ACADEMICS</div>
                    <div className="hover:text-red-600 hover:scale-110 cursor-pointer">PROJECTS</div>
                    <div className="hover:text-red-600 hover:scale-110 cursor-pointer">RESEARCH</div>
                    <div className="hover:text-red-600 hover:scale-110 cursor-pointer">EVENTS</div>
                </div>
            </div>
        </>
    );
}
