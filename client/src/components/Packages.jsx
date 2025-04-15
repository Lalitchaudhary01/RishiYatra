import { Calendar, Users } from "lucide-react";

export default function Packages({ isVisible }) {
  const packages = [
    {
      title: "Weekend Getaway",
      price: "₹5,999",
      days: "3 Days / 2 Nights",
      students: "Min. 15 Students",
      description: "Perfect for a quick adventure break from campus life",
    },
    {
      title: "Mid-Semester Adventure",
      price: "₹9,999",
      days: "5 Days / 4 Nights",
      students: "Min. 10 Students",
      description: "Complete Rishikesh experience with all major activities",
    },
    {
      title: "Semester End Celebration",
      price: "₹14,999",
      days: "7 Days / 6 Nights",
      students: "Min. 8 Students",
      description: "Celebrate the end of exams with an extended adventure",
    },
  ];

  return (
    <section id="packages" className="py-20 bg-gray-50 animate-section">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${
            isVisible["packages"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            GLA Special Packages
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Choose the perfect adventure package for your student group
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="bg-teal-700 text-white p-6 relative">
                  <h3 className="text-2xl font-bold">{pkg.title}</h3>
                  <p className="text-3xl font-bold mt-2">{pkg.price}</p>
                  <p className="text-sm text-teal-100 mt-1">per student</p>
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Calendar size={20} className="text-orange-500 mr-2" />
                    <span>{pkg.days}</span>
                  </div>
                  <div className="flex items-center mb-6">
                    <Users size={20} className="text-orange-500 mr-2" />
                    <span>{pkg.students}</span>
                  </div>

                  <p className="text-gray-600 mb-6">{pkg.description}</p>

                  <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                    Book This Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
