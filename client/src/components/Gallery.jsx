import React, { useState } from "react";

const Gallery = () => {
  // Updated gallery images for Rishikesh trip including dams and lakes
  const images = [
    {
      id: 1,
      title: "Ganga Aarti",
      description: "Beautiful evening ceremony at Triveni Ghat",
      thumbnail: "https://ik.imagekit.io/icrguob6c/ganga%20arti.jpeg",
    },
    {
      id: 2,
      title: "Laxman Jhula",
      description: "Famous suspension bridge across the Ganges",
      thumbnail: "https://ik.imagekit.io/icrguob6c/laxman.jpeg",
    },
    {
      id: 3,
      title: "River Rafting",
      description: "Exciting adventure on the Ganges rapids",
      thumbnail: "https://ik.imagekit.io/icrguob6c/raftingg.jpeg",
    },
    {
      id: 4,
      title: "Tehri Dam",
      description: "Asia's tallest dam with breathtaking views",
      thumbnail: "https://ik.imagekit.io/icrguob6c/dam.jpeg",
    },
    {
      id: 5,
      title: "Tehri Lake",
      description: "Beautiful reservoir with water sports activities",
      thumbnail: "https://ik.imagekit.io/icrguob6c/lake.jpeg",
    },
    {
      id: 6,
      title: "Yoga by the Ganges",
      description: "Morning yoga session with riverside view",
      thumbnail: "https://ik.imagekit.io/icrguob6c/yoga%202.jpeg",
    },
    {
      id: 7,
      title: "Koti Banal",
      description: "Ancient architecture near Tehri Lake",
      thumbnail: "https://ik.imagekit.io/icrguob6c/koti.jpeg",
    },
    {
      id: 8,
      title: "Shivpuri Beach",
      description: "Popular spot for camping by the river",
      thumbnail: "https://ik.imagekit.io/icrguob6c/shivpuri.jpeg",
    },
    {
      id: 9,
      title: "Neer Garh Waterfall",
      description: "Refreshing waterfall with natural pools",
      thumbnail: "https://ik.imagekit.io/icrguob6c/neer.jpeg?",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  // Function to open the modal with the selected image
  const openModal = (image) => {
    setSelectedImage(image);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  // Categories for filtering
  const categories = {
    all: "All Places",
    water: "Lakes & Dams",
    spiritual: "Spiritual Sites",
    adventure: "Adventure Spots",
  };

  // Filter images based on active category
  const filteredImages =
    activeCategory === "all"
      ? images
      : activeCategory === "water"
      ? images.filter((img) =>
          ["Tehri Dam", "Tehri Lake", "Neer Garh Waterfall"].includes(img.title)
        )
      : activeCategory === "spiritual"
      ? images.filter((img) =>
          ["Ganga Aarti", "Yoga by the Ganges", "Koti Banal"].includes(
            img.title
          )
        )
      : images.filter((img) =>
          ["River Rafting", "Laxman Jhula", "Shivpuri Beach"].includes(
            img.title
          )
        );

  return (
    <div className="bg-gradient-to-r from-blue-50 to-green-50 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-center text-blue-800">
          Rishikesh Trip Gallery
        </h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          Exploring the yoga capital, stunning dams and lakes
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.entries(categories).map(([key, value]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeCategory === key
                  ? "bg-blue-600 text-white"
                  : "bg-white text-blue-600 hover:bg-blue-100"
              }`}
            >
              {value}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:scale-105 transition-transform"
              onClick={() => openModal(image)}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={image.thumbnail}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {image.title}
                </h3>
                <p className="text-gray-600 mt-1">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image Viewer Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-800 hover:text-gray-600 text-2xl font-bold"
              >
                ×
              </button>
              <div className="p-2">
                <img
                  src={selectedImage.thumbnail}
                  alt={selectedImage.title}
                  className="w-full h-96 object-contain"
                />
                <div className="p-4">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-600 mt-2">
                    {selectedImage.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Trip Info Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Rishikesh Trip Highlights
          </h2>
          <p className="text-gray-700 mb-4">
            Our journey through Rishikesh and surrounding areas includes
            spiritual experiences, adventure activities, and exploration of
            magnificent dams and lakes in the region.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-800">Spiritual Experience</h3>
              <p className="text-gray-600">
                Temple visits, Ganga Aarti, and meditation sessions
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-green-800">Adventure Activities</h3>
              <p className="text-gray-600">
                White water rafting, cliff jumping, and trekking
              </p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-bold text-yellow-800">Dam & Lake Tours</h3>
              <p className="text-gray-600">
                Tehri Dam visit, boating in Tehri Lake, and water sports
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-bold text-purple-800">Nature Exploration</h3>
              <p className="text-gray-600">
                Waterfalls, beaches, and scenic Himalayan views
              </p>
            </div>
          </div>
        </div>

        {/* Dam and Lake Information */}
        <div className="mt-8 bg-blue-100 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Dam & Lake Attractions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold text-blue-700">Tehri Dam</h3>
              <p className="text-gray-700 mt-2">
                One of the tallest dams in Asia, Tehri Dam is an engineering
                marvel offering spectacular panoramic views. The dam creates a
                massive reservoir and provides hydroelectric power to the
                region.
              </p>
              <div className="mt-4 text-blue-600 font-medium">
                Activities: Sightseeing, Photography
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold text-blue-700">Tehri Lake</h3>
              <p className="text-gray-700 mt-2">
                Formed by the Tehri Dam, this beautiful artificial lake offers
                various water sports and recreational activities. Surrounded by
                mountains, it provides a serene escape with stunning views.
              </p>
              <div className="mt-4 text-blue-600 font-medium">
                Activities: Boating, Jet Skiing, Kayaking
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
