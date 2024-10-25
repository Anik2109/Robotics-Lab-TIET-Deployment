export default function ContactUs() {
    return (
        <>
            <div className="w-11/12 mx-auto my-8 py-8 space-y-14">
                <div className="contactus flex justify-center">
                    <img src="/public/assets/Home Page/contactus.png" alt="Contact-us" />
                </div>
                <div className="flex space-x-[6%]">
                    <div className="w-4/12 h-[238px] border-2 border-gray-300 p-4">
                        <div className="flex items-center space-x-3">
                            <div className="">
                                <img src="/public/assets/Home Page/location_on.png" alt="logo" />
                            </div>
                            <div className="text-[15px]">OFFICE ADDRESS</div>
                        </div>
                    </div>
                    <div className="w-4/6 border-2 border-gray-300 p-4">
                        <form className="space-y-4">
                            <div>
                                <label className="block mb-2 text-sm font-medium">Name</label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 p-2 rounded"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium">Email</label>
                                <input
                                    type="email"
                                    className="w-full border border-gray-300 p-2 rounded"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium">Subject</label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 p-2 rounded"
                                    placeholder="Subject"
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium">Message</label>
                                <textarea
                                    className="w-full border border-gray-300 p-2 rounded"
                                    rows="4"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>
                            <div className="flex justify-center">
                                    <button
                                        type="submit"
                                        className=" bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                                    >
                                        Send Message
                                    </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
