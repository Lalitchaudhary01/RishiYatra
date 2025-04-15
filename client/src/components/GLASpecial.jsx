export default function GLASpecial({ isVisible }) {
  return (
    <section
      className="py-20 bg-gradient-to-r from-teal-800 to-emerald-700 text-white animate-section"
      id="gla-special"
    >
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${
            isVisible["gla-special"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className="bg-white bg-opacity-10 p-6 rounded-lg border border-white border-opacity-20 backdrop-blur-sm">
                <h2 className="text-3xl font-bold mb-4">
                  Exclusive for GLA University
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-orange-500 rounded-full p-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span>Special student discounts on all packages</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-orange-500 rounded-full p-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span>
                      Professional photography included for campus magazines
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-orange-500 rounded-full p-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span>
                      Customized itineraries for different college departments
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-orange-500 rounded-full p-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <span>
                      Educational components that can earn extra credits
                    </span>
                  </li>
                </ul>
                <button className="mt-8 bg-white text-teal-800 font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 hover:bg-orange-500 hover:text-white">
                  Get University Package
                </button>
              </div>
            </div>

            <div className="w-full md:w-1/2 md:pl-12">
              <h3 className="text-2xl font-bold mb-6">
                Why GLA Students Love Us
              </h3>
              <div className="space-y-6">
                <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                  <p className="italic">
                    "The perfect break from campus life. Our entire computer
                    science department had the best time rafting and camping!"
                  </p>
                  <p className="mt-2 font-medium">
                    - Aarav Kumar, CSE Department
                  </p>
                </div>
                <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                  <p className="italic">
                    "The yoga retreat was exactly what we needed before finals.
                    The Himalayan views were incredible."
                  </p>
                  <p className="mt-2 font-medium">- Priya Singh, Engineering</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
