import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/all";
import { Link, NavLink } from 'react-router-dom';

// Register GSAP plugins
gsap.registerPlugin(TextPlugin);

export default function Navbar({ setshowcontent }) {
    const logo = useRef();
    const rae = useRef();
    const options = useRef();
    const tl = gsap.timeline();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const hasAnimated = sessionStorage.getItem("navbarAnimated");
    
        if (!hasAnimated) {
            const logoRect = logo.current.getBoundingClientRect();
            const centerX = window.innerWidth / 2 - logoRect.width / 2;
            const centerY = window.innerHeight / 2 - logoRect.height / 2;
    
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
            .then(() => {
                sessionStorage.setItem("navbarAnimated", "true");
                setshowcontent(true); // Show full content first

                const tlShow = gsap.timeline();
                tlShow.to(options.current, { opacity: 1, y: 0, duration: 0.5 })
                      .to(rae.current, { opacity: 1, y: 0, duration: 0.5 }, "<");
            });
        } else {
            // Skip animation and show content instantly
            gsap.set(logo.current, { opacity: 1, x: 0, y: 0, scale: 1 });
            gsap.set(rae.current, { opacity: 1, y: 0 });
            gsap.set(options.current, { opacity: 1, y: 0 });
            setshowcontent(true);
        }
    }, []);

    return (
        <>
            <div className="fixed top-0 left-0 z-50 opacity-80 w-full px-[1.64vw] py-[1.096vw] bg-white">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center">
                        <div className="logo">
                            <img 
                                src="/assets/lab_logo.jpeg" 
                                alt="Thapar University" 
                                className="w-[4.11vw] h-auto object-contain rounded-full" 
                                ref={logo}
                            />
                        </div>
                        <div ref={rae} className="opacity-0 w-[26.3vw] text-center justify-center text-[#282828] text-[2.05vw] leading-[2.46vw] font-medium font-poppins tracking-tight">ROBOTICS LAB, CSED, TIET</div>
                    </Link>

                    {/* Mobile Menu Toggle
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                        className="text-gray-600 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button> */}

                    {/* Developer-only button to replay animation */}
                    {/* <button
                        onClick={() => {
                        sessionStorage.removeItem("navbarAnimated");
                        window.location.reload();
                      }}
                      className="px-[0.82vw] py-[0.274] text-[0.96vw] leading-[1.37vw] bg-blue-600 opacity-0 hover:opacity-100 rounded"
                    >
                      Replay Animation (Dev)                        
                    </button> */}

                    {/* Navigation Links */}
                    <div ref={options} className="option opacity-0 flex gap-[1.92vw] items-center font-poppins text-[1.23vw] leading-[1.92vw] font-medium text-color-[#282828]">
                        <div className="hover:text-[#0A3796] hover:scale-110 cursor-pointer ">
                            <NavLink to="/" className={({isActive})=>isActive?"text-[#0A3796]":""}>HOME</NavLink>
                        </div>
                        <div className="hover:text-[#0A3796] hover:scale-110 cursor-pointer">
                            <NavLink to="/academics" className={({isActive})=>isActive?"text-[#0A3796]":""}>ACADEMICS</NavLink>
                        </div>
                        <div className="hover:text-[#0A3796] hover:scale-110 cursor-pointer">
                            <NavLink to="/projects" className={({isActive})=>isActive?"text-[#0A3796]":""}>PROJECTS</NavLink>
                        </div>
                        <div className="hover:text-[#0A3796] hover:scale-110 cursor-pointer">
                            <NavLink to="/research" className={({isActive})=>isActive?"text-[#0A3796]":""}>RESEARCH</NavLink>
                        </div>
                        <div className="hover:text-[#0A3796] hover:scale-110 cursor-pointer">
                            <NavLink to="/#events">EVENTS</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
