export default function CTA() {
  // Function to handle booking button click - opens Google Form
  const handleBookingClick = () => {
    // Replace this URL with your actual Google Form URL
    window.open("https://forms.gle/GfFYPMBfHCSwJNCd8", "_blank");
  };

  // Function to handle contact button click - opens WhatsApp
  const handleContactClick = () => {
    window.open("https://wa.me/918445646300", "_blank");
  };

  return (
    <section className="py-16 bg-teal-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready for Your Adventure?
        </h2>
        <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
          Book your Rishikesh experience today and create memories that will
          last throughout your college years
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
            onClick={handleBookingClick}
          >
            Book For Your Class
          </button>
          <button
            className="bg-transparent border-2 border-white hover:bg-white hover:text-teal-800 text-white font-bold py-3 px-8 rounded-full transition duration-300"
            onClick={handleContactClick}
          >
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
}
