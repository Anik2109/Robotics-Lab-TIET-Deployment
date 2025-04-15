export default function FacultyCard() {
    const mail = "anik.kaushesh@gmail.com";

    return (
        <>
            <div className="flex flex-col items-center mb-[1.67vw] w-[25.83vw] h-[53.61vw] bg-white rounded-[1.11vw] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-[2.22vw]">
                {/* Image Section */}
                <div className="w-full h-[20.28vw] bg-gray-200 rounded-[1.11vw] overflow-hidden">
                    <img className="w-full h-full object-cover rounded-[1.11vw]" src="/assets/Home_Page/f.png" alt="Base Img" />
                </div>

                <div className="flex flex-col items-center mt-[1.11vw] text-center">
                    <span className="text-black text-[1.67vw] font-semibold font-['Poppins'] leading-snug">
                        Dr. Sachin Kansal
                    </span>
                    <span className="text-black text-[1.11vw] font-medium font-['Poppins'] leading-snug">
                        Assistant Professor of
                    </span>
                    <span className="text-black text-[1.11vw] font-medium font-['Poppins']">
                        Computer Science Department
                    </span>
                </div>

                <div className="mt-auto pt-[1.67vw]">
                    <div className="flex justify-center">
                        <a href={`mailto:${mail}`} target="_blank" rel="noopener noreferrer">
                            <img src="/assets/icons/mail.svg" alt="Email Icon" className="w-[1.67vw] h-[1.67vw]" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
