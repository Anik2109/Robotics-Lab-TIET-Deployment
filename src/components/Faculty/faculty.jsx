import FacultyCard from "../Cards/Faculty Card/faculty_card";

export default function Faculty(){

    return<>
        <div className="w-11/12  mx-auto py-8 space-y-8 ">
        {/*Heading*/}
        <div className="flex items-center gap-2">
            <div className="">
                <img src="/assets/Home Page/Group.png" alt="Faculty" />
            </div>
            <div className="text-[28px] font-semibold ">
                FACULTY
            </div>
        </div>
        {/*Cards*/}
        <div className="flex justify-between">
            <div>
                <div className="card">
                    <FacultyCard />
                </div>
                <div className="text flex flex-col  items-center justify-center my-4 text-[20px]">
                    <div>Name</div>
                    <div>Position</div>
                    <div>Contact</div>
                </div>
            </div>
            <div>
            <div className="card">
                    <FacultyCard />
                </div>
                <div className="text flex flex-col  items-center justify-center my-4 text-[20px]">
                    <div>Name</div>
                    <div>Position</div>
                    <div>Contact</div>
                </div>
            </div>
            <div>
            <div className="card">
                    <FacultyCard />
                </div>
                <div className="text flex flex-col  items-center justify-center my-4 text-[20px]">
                    <div>Name</div>
                    <div>Position</div>
                    <div>Contact</div>
                </div>
            </div>
            <div>
            <div className="card">
                    <FacultyCard />
                </div>
                <div className="text flex flex-col  items-center justify-center my-4 text-[20px]">
                    <div>Name</div>
                    <div>Position</div>
                    <div>Contact</div>
                </div>
            </div>
        </div>
    </div>
    </>
}