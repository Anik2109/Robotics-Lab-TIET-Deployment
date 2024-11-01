import FacultyCard from "../Cards/Faculty Card/faculty_card";
import { useState, useEffect } from "react";

export default function Faculty() {
    const [maxCards, setMaxCards] = useState(4); // default to showing 4 cards

    // Update maxCards based on screen size
    useEffect(() => {
        const updateMaxCards = () => {
            if (window.innerWidth < 640) setMaxCards(2); // smaller screens show 2 cards
            else if (window.innerWidth < 768) setMaxCards(3); // medium screens show 3 cards
            else setMaxCards(4); // larger screens show 4 cards
        };

        updateMaxCards(); // initial check
        window.addEventListener("resize", updateMaxCards); // update on resize

        return () => window.removeEventListener("resize", updateMaxCards);
    }, []);

    return (
        <div className="w-11/12 mx-auto py-8 space-y-8">
            {/* Heading */}
            <div className="flex items-center gap-2">
                <div>
                    <img src="/assets/Home Page/Group.png" alt="Faculty" />
                </div>
                <div className="text-[28px] font-semibold">FACULTY</div>
            </div>

            {/* Cards */}
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {[...Array(maxCards)].map((_, index) => (
                    <div key={index} className="text-center">
                        <div className="card mx-auto w-full max-w-xs">
                            <FacultyCard />
                        </div>
                        <div className="text flex flex-col items-center justify-center my-4 text-[20px] space-y-2">
                            <div>Name</div>
                            <div>Position</div>
                            <div>Contact</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
