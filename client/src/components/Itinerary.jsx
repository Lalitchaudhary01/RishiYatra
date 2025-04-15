import { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  Calendar,
  Clock,
  MapPin,
  Activity,
  Coffee,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

export default function Itinerary() {
  const [activeDay, setActiveDay] = useState(0);
  const [activeEvent, setActiveEvent] = useState(null);
  const timelineRef = useRef(null);

  const itineraryData = [
    {
      day: "Day 1",
      date: "17th May",
      title: "Arrival & Local Exploration",
      events: [
        {
          time: "6:00 AM",
          title: "Arrival in Rishikesh",
          description:
            "Check-in to your pre-booked hotel or campsite. Freshen up & enjoy breakfast.",
          icon: "arrival",
        },
        {
          time: "8:00 AM",
          title: "Visit Lakshman Jhula & Ram Jhula",
          description:
            "Stroll across these iconic suspension bridges, soaking in panoramic views of the Ganges and surrounding temples.",
          icon: "bridge",
        },
        {
          time: "10:00 AM",
          title: "Parmarth Niketan Ashram",
          description:
            "Visit one of the largest ashrams in Rishikesh, known for its serene environment and spiritual teachings.",
          icon: "spiritual",
        },
        {
          time: "12:00 PM",
          title: "The Beatles Ashram (Chaurasi Kutia)",
          description:
            "Explore the ashram where The Beatles stayed in 1968, now adorned with vibrant graffiti and murals.",
          icon: "music",
        },
        {
          time: "3:30 PM",
          title: "Local Market Exploration",
          description:
            "Browse through local markets for souvenirs, handicrafts, and spiritual items.",
          icon: "shopping",
        },
        {
          time: "6:00 PM",
          title: "Ganga Aarti at Triveni Ghat",
          description:
            "Witness the mesmerizing evening aarti, a spiritual ritual with chants, lamps, and a serene ambiance.",
          icon: "ceremony",
        },
        {
          time: "7:30 PM",
          title: "Dinner",
          description:
            "Enjoy a group dinner, sharing experiences from the day's adventures.",
          icon: "dinner",
        },
        {
          time: "9:00 PM",
          title: "Bonfire & Music Session",
          description:
            "Unwind with a bonfire, music, and group activities at your accommodation.",
          icon: "bonfire",
        },
        {
          time: "10:30 PM",
          title: "Rest",
          description:
            "Retire for the night, rejuvenating for the next day's journey.",
          icon: "rest",
        },
      ],
    },
    {
      day: "Day 2",
      date: "18th May",
      title: "Waterfall Adventures & River Rafting",
      events: [
        {
          time: "8:00 AM",
          title: "Breakfast",
          description: "Start your day with a nutritious breakfast.",
          icon: "breakfast",
        },
        {
          time: "9:00 AM",
          title: "Neer Garh Waterfall Trek",
          description:
            "Embark on a short trek to this picturesque waterfall, ideal for nature lovers and photography enthusiasts.",
          icon: "waterfall",
        },
        {
          time: "12:00 PM",
          title: "Visit Patna Waterfall",
          description:
            "Discover another beautiful waterfall, offering a serene environment and a chance to connect with nature.",
          icon: "waterfall",
        },
        {
          time: "4:00 PM",
          title: "Optional Yoga Session",
          description:
            "Participate in a calming yoga session to relax and rejuvenate.",
          icon: "yoga",
        },
        {
          time: "5:30 PM",
          title: "River Rafting in Rishikesh",
          description:
            "Experience the thrill of river rafting on the Ganges. (Cost: ₹500 per person)",
          icon: "rafting",
        },
        {
          time: "6:00 PM",
          title: "Sunset at Kunjapuri Temple",
          description:
            "Visit Kunjapuri Temple, offering panoramic views of the Himalayas and a breathtaking sunset.",
          icon: "temple",
        },
        {
          time: "9:00 PM",
          title: "Bonfire & Group Activities",
          description:
            "Engage in fun group activities and share stories around the campfire.",
          icon: "bonfire",
        },
        {
          time: "10:30 PM",
          title: "Rest",
          description: "Prepare for the next day's adventure.",
          icon: "rest",
        },
      ],
    },
    {
      day: "Day 3",
      date: "19th May",
      title: "Tehri Dam Exploration & Return",
      events: [
        {
          time: "6:00 AM",
          title: "Departure to Tehri Dam",
          description:
            "Travel Distance: Approximately 65 km, Estimated Travel Time: 1 hour 20 minutes by road",
          icon: "travel",
        },
        {
          time: "8:00 AM",
          title: "Breakfast at Prakriti Cafe",
          description:
            "Enjoy a hearty breakfast with stunning views of the lake.",
          icon: "breakfast",
        },
        {
          time: "9:00 AM",
          title: "Water Sports at Tehri Lake",
          description:
            "Engage in thrilling water sports such as jet skiing, banana boat rides, kayaking, and more.",
          icon: "watersports",
        },
        {
          time: "12:00 PM",
          title: "Visit Tehri Dam Viewpoint",
          description:
            "Explore the Tehri Dam, one of the tallest dams in India, and enjoy panoramic views of the surrounding area.",
          icon: "dam",
        },
        {
          time: "2:30 PM",
          title: "Return Journey to GLA University",
          description:
            "Travel Distance: Approximately 371 km, Estimated Travel Time: 6 to 7 hours by road",
          icon: "return",
        },
      ],
    },
  ];

  // Cost breakdown data
  const costBreakdown = [
    { item: "Round Trip Transportation", cost: "₹1,200" },
    { item: "Breakfast + Campsite Accommodation (2 days)", cost: "₹1,300" },
    { item: "River Rafting (per person)", cost: "₹500" },
    { item: "Total Cost per Person", cost: "₹3,000" },
    { item: "Total for 30 Students", cost: "₹90,000" },
  ];

  useEffect(() => {
    if (timelineRef.current && activeEvent !== null) {
      const eventElement = timelineRef.current.children[activeEvent];
      if (eventElement) {
        eventElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  }, [activeEvent]);

  // Function to render appropriate icon based on event type
  const renderIcon = (iconType) => {
    switch (iconType) {
      case "arrival":
        return <MapPin className="text-blue-500" />;
      case "bridge":
      case "dam":
        return <Activity className="text-blue-500" />;
      case "spiritual":
      case "temple":
      case "ceremony":
        return <div className="text-orange-500">🕉️</div>;
      case "music":
        return <div className="text-purple-500">🎵</div>;
      case "shopping":
        return <div className="text-green-500">🛍️</div>;
      case "dinner":
        return <div className="text-red-500">🍽️</div>;
      case "bonfire":
        return <div className="text-orange-500">🔥</div>;
      case "rest":
        return <div className="text-blue-500">🛏️</div>;
      case "breakfast":
        return <Coffee className="text-brown-500" />;
      case "waterfall":
        return <div className="text-blue-500">💦</div>;
      case "yoga":
        return <div className="text-purple-500">🧘</div>;
      case "rafting":
        return <div className="text-blue-500">🚣</div>;
      case "travel":
        return <div className="text-gray-500">🚌</div>;
      case "watersports":
        return <div className="text-blue-500">🏄</div>;
      case "return":
        return <div className="text-gray-500">🏠</div>;
      default:
        return <Clock className="text-gray-500" />;
    }
  };

  return (
    <section
      id="itinerary"
      className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-16"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Rishikesh Adventure Itinerary
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Specially curated for GLA University students
          </p>
          <p className="text-md text-teal-600 font-medium">May 17-19, 2025</p>
        </div>

        {/* Day Selection Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full shadow-lg inline-flex p-1">
            {itineraryData.map((day, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveDay(index);
                  setActiveEvent(null);
                }}
                className={`py-2 px-6 rounded-full transition-all duration-300 font-medium ${
                  activeDay === index
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-blue-100"
                }`}
              >
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>{day.day}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Itinerary Section with Animation */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Timeline */}
          <div className="w-full lg:w-1/3 bg-white rounded-xl shadow-lg p-6 overflow-hidden">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Calendar className="mr-2 text-blue-500" size={20} />
              {itineraryData[activeDay].date}
              <span className="ml-2 text-blue-500">•</span>
              <span className="ml-2 text-lg font-medium">
                {itineraryData[activeDay].title}
              </span>
            </h3>

            <div
              className="space-y-4 max-h-96 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-100"
              ref={timelineRef}
            >
              {itineraryData[activeDay].events.map((event, eventIndex) => (
                <div
                  key={eventIndex}
                  onClick={() => setActiveEvent(eventIndex)}
                  className={`relative flex p-4 border-l-4 ${
                    activeEvent === eventIndex
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                  } rounded-r-lg cursor-pointer transition-all duration-300`}
                >
                  <div className="absolute -left-3 top-5 w-6 h-6 rounded-full bg-white flex items-center justify-center border-2 border-gray-200">
                    {renderIcon(event.icon)}
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-blue-500">
                      {event.time}
                    </p>
                    <h4 className="text-lg font-semibold text-gray-800 mt-1">
                      {event.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Event Details */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-xl shadow-lg h-full overflow-hidden">
              {activeEvent !== null ? (
                <div className="p-6 h-full flex flex-col">
                  <div className="flex justify-between items-center mb-6">
                    <button
                      onClick={() =>
                        setActiveEvent(
                          activeEvent > 0
                            ? activeEvent - 1
                            : itineraryData[activeDay].events.length - 1
                        )
                      }
                      className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors"
                    >
                      <ArrowLeft size={20} className="text-gray-600" />
                    </button>

                    <h3 className="text-2xl font-bold text-center text-gray-800">
                      {itineraryData[activeDay].events[activeEvent].title}
                    </h3>

                    <button
                      onClick={() =>
                        setActiveEvent(
                          (activeEvent + 1) %
                            itineraryData[activeDay].events.length
                        )
                      }
                      className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors"
                    >
                      <ArrowRight size={20} className="text-gray-600" />
                    </button>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 mb-6 flex items-center">
                    <Clock size={20} className="text-blue-500 mr-3" />
                    <span className="font-medium">
                      {itineraryData[activeDay].events[activeEvent].time}
                    </span>
                  </div>

                  <p className="text-lg text-gray-700 flex-grow">
                    {itineraryData[activeDay].events[activeEvent].description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>Day {activeDay + 1} of 3</span>
                      <span>
                        Activity {activeEvent + 1} of{" "}
                        {itineraryData[activeDay].events.length}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col">
                  <div className="bg-blue-500 text-white p-6">
                    <h3 className="text-2xl font-bold">
                      {itineraryData[activeDay].day}:{" "}
                      {itineraryData[activeDay].title}
                    </h3>
                    <p className="text-blue-100 text-lg mt-2">
                      {itineraryData[activeDay].date}
                    </p>
                  </div>

                  <div className="p-6 flex-grow">
                    <p className="text-lg text-gray-700 mb-6">
                      Select an activity from the timeline to view details.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {itineraryData[activeDay].events.map((event, idx) => (
                        <div
                          key={idx}
                          onClick={() => setActiveEvent(idx)}
                          className="p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 cursor-pointer transition-all duration-300"
                        >
                          <div className="flex items-center mb-2">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                              {renderIcon(event.icon)}
                            </div>
                            <h4 className="font-medium">{event.time}</h4>
                          </div>
                          <p className="font-semibold text-gray-800">
                            {event.title}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Cost Section */}
        {/* <div className="mt-16 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Cost Breakdown
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-500 text-white">
                <tr>
                  <th className="py-3 px-4 text-left rounded-tl-lg">Item</th>
                  <th className="py-3 px-4 text-right rounded-tr-lg">Cost</th>
                </tr>
              </thead>
              <tbody>
                {costBreakdown.map((item, index) => (
                  <tr
                    key={index}
                    className={`${
                      index === costBreakdown.length - 1
                        ? "bg-blue-50 font-bold"
                        : index === costBreakdown.length - 2
                        ? "bg-gray-100"
                        : index % 2 === 0
                        ? "bg-gray-50"
                        : "bg-white"
                    }`}
                  >
                    <td className="py-3 px-4 border-t border-gray-200">
                      {item.item}
                    </td>
                    <td className="py-3 px-4 text-right border-t border-gray-200">
                      {item.cost}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div> */}

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 flex items-center mx-auto shadow-lg">
            Book Your Rishikesh Adventure
            <ArrowRight className="ml-2" size={18} />
          </button>

          <p className="mt-4 text-gray-600">
            Limited spots available for students!
          </p>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="mt-16 text-center text-gray-600">
        <p className="text-sm font-medium mb-2">Explore More Details</p>
        <ChevronDown size={24} className="animate-bounce mx-auto" />
      </div>
    </section>
  );
}
