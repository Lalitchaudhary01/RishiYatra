import { ArrowRight } from "lucide-react";

export default function Activities({ isVisible }) {
  const activities = [
    {
      title: "River Rafting",
      description:
        "Experience the thrill of Ganga's rapids with professional guides",
      image: "rafting",
    },
    {
      title: "Yoga Retreats",
      description: "Begin your day with yoga sessions by the riverside",
      image: "yoga",
    },
    {
      title: "Himalayan Trekking",
      description: "Explore scenic trails with breathtaking mountain views",
      image: "trekking",
    },
    {
      title: "Camping",
      description: "Overnight stays under the stars with bonfire and music",
      image: "camping",
    },
  ];

  return (
    <section id="activities" className="py-20 bg-white animate-section">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${
            isVisible["activities"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            Adventures Await
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Discover the perfect blend of thrill and tranquility designed
            specifically for GLA University students
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Activity Image Placeholder */}
                <div className="h-48 bg-teal-600 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-opacity-50">
                    [{activity.image}]
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-teal-800 mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600">{activity.description}</p>
                  <button className="mt-4 text-orange-500 font-medium flex items-center hover:text-orange-600 transition-colors">
                    Learn more <ArrowRight size={16} className="ml-1" />
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
