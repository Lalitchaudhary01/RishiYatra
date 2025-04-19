import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle booking button click - opens Google Form
  const handleBookNowClick = () => {
    // Replace this URL with your actual Google Form URL
    window.open("https://forms.gle/GfFYPMBfHCSwJNCd8", "_blank");
  };

  return (
    <nav className="bg-white bg-opacity-90 fixed w-full z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-teal-600 font-bold text-2xl">RishiYatra</div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a
            href="#home"
            className="text-teal-800 hover:text-teal-600 font-medium"
          >
            Home
          </a>
          <a
            href="#activities"
            className="text-teal-800 hover:text-teal-600 font-medium"
          >
            Activities
          </a>
          <a
            href="#itinerary"
            className="text-teal-800 hover:text-teal-600 font-medium"
          >
            Itinerary
          </a>
          <a
            href="#gallery"
            className="text-teal-800 hover:text-teal-600 font-medium"
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="text-teal-800 hover:text-teal-600 font-medium"
          >
            Contact
          </a>
        </div>

        {/* Book Now Button */}
        <div className="hidden md:block">
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 transform hover:scale-105"
            onClick={handleBookNowClick}
          >
            Book Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-teal-800"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <a
              href="#home"
              className="text-teal-800 hover:text-teal-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#activities"
              className="text-teal-800 hover:text-teal-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Activities
            </a>
            <a
              href="#itinerary"
              className="text-teal-800 hover:text-teal-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Itinerary
            </a>
            <a
              href="#gallery"
              className="text-teal-800 hover:text-teal-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="text-teal-800 hover:text-teal-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition duration-300"
              onClick={handleBookNowClick}
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
