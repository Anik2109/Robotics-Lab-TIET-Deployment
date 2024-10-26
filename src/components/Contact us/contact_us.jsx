export default function ContactUs() {
    return (
        <>
      <div className="w-11/12 mx-auto my-8 py-8 space-y-14">
        <div className="contactus flex justify-center">
          <img src="/assets/Home Page/contactus.png" alt="Contact-us" className="w-full max-w-xs sm:max-w-md" />
        </div>
  
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8">
          <div className="w-full lg:w-4/12 border-2 border-gray-300 p-4 flex flex-col items-center">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/assets/Home Page/location_on.png" alt="logo" className="w-6 h-6" />
              <div>
                <h2 className="text-xl font-semibold">Office Address</h2>
                <p className="text-sm text-center lg:text-left">
                  Thapar Institute of Engineering & Technology, Patiala, Punjab
                </p>
              </div>
            </div>
            <div className="w-full flex justify-center pt-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.8498261447544!2d76.36584347578116!3d30.35521757476851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391029228943d1b5%3A0x3d1c023be8b9eaf!2sNew%20CSED%20Building!5e0!3m2!1sen!2sin!4v1729935585295!5m2!1sen!2sin"
                className="w-full sm:w-[250px] md:w-[350px] lg:w-[450px] h-[325px] md:h-[238px]"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
  
          <div className="w-full lg:w-7/12 border-2 border-gray-300 p-4">
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
                  className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full" style={{ height: '97px', backgroundColor: '#BE0B15' }} />
      </>
    );
  }
  