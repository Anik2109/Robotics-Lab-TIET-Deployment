export default function FacultyCard() {
    return (
       <>
        <div className="flex flex-col items-center mb-6 w-[372px] h-[772px] bg-white rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-8">
            {/* Image Section */}
            <div className="w-full h-[292px] bg-gray-200 rounded-2xl overflow-hidden">
                <img className="w-full h-full object-cover rounded-2xl" src="/assets/Home_Page/f.png" alt="Base Img" />
            </div>

            <div className="flex flex-col items-center mt-4 text-center">
                <span className="text-black text-2xl font-semibold font-['Poppins'] leading-snug">
                    Dr. Sachin Kansal
                </span>
                <span className="text-black text-base font-medium font-['Poppins'] leading-snug">
                    Assistant Professor of
                </span>
                <span className="text-black text-base font-medium font-['Poppins']">
                    Computer Science Department
                </span>
            </div>
        </div>
       </>
    );
}
