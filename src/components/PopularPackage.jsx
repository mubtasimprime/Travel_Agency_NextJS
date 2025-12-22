import Image from "next/image";
import React from "react";
import { MapPin, Clock, Star, CheckCircle } from "lucide-react";

const PopularPackage = () => {
  const featuredTours = [
    {
      id: 1,
      title: "Solo Tour",
      subtitle: "Culture & Cuisine Discovery",
      location: "Saudi Arabia",
      duration: "02 Hours",
      price: 65.0,
      type: "Featured",
      image: "/tour1.webp",
    },
    {
      id: 2,
      title: "Art, Music & Heritage Tour",
      subtitle: "Culture & Cuisine Discovery",
      location: "Arab Emirates",
      duration: "03 Hours",
      price: 69.0,
      type: "Featured",
      image: "/tour2.webp",
    },
    {
      id: 3,
      title: "Eco-Friendly City Ride",
      subtitle: "Culture & Cuisine Discovery",
      location: "Tokyo, Japan",
      duration: "05 Hours",
      price: 120.0,
      type: "Featured",
      image: "/tour3.webp",
    },
    {
      id: 4,
      title: "Family Tour",
      subtitle: "Culture & Cuisine Discovery",
      location: "Multiple Destinations",
      duration: "04 Hours",
      price: 89.0,
      type: "Featured",
      image: "/tour4.webp",
    },
    {
      id: 5,
      title: "Adventure Tour",
      subtitle: "Culture & Cuisine Discovery",
      location: "Various Locations",
      duration: "06 Hours",
      price: 95.0,
      type: "Featured",
      image: "/tour5.webp",
    },
    {
      id: 6,
      title: "Cultural Heritage Tour",
      subtitle: "Culture & Cuisine Discovery",
      location: "Europe",
      duration: "04 Hours",
      price: 85.0,
      type: "Featured",
      image: "/tour1.webp",
    },
  ];

  return (
    <main className="bg-gray-50 px-4 py-12">
      <div className="text-center">
        <h1 className="font-bold text-4xl">Popular Travel Packages</h1>
        <p className="text-gray-600 mt-4 text-xl max-w-lg mx-auto">
          A curated list of the most popular travel packages based on different
          destinations.
        </p>
      </div>
      <section className="py-12 max-w-7xl mx-auto">
        <div className="container mx-auto px-4">
          {/* Tours Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTours.map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Tour Image */}
                <div className="relative h-48 w-full">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Featured Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-md text-xs font-semibold">
                      {tour.type}
                    </span>
                  </div>
                </div>

                {/* Tour Content */}
                <div className="p-5">
                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {tour.title}
                  </h3>
                  {tour.subtitle && (
                    <p className="text-gray-600 text-sm mb-4">
                      {tour.subtitle}
                    </p>
                  )}

                  {/* Location & Duration */}
                  <div className="flex items-center text-gray-700 mb-3">
                    <div className="flex items-center mr-4">
                      <MapPin className="w-4 h-4 mr-1 text-gray-500" />
                      <span className="text-sm">{tour.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1 text-gray-500" />
                      <span className="text-sm">{tour.duration}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-1" />
                      <span className="text-sm text-gray-600">Experience</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-purple-600 mr-1" />
                      <span className="text-sm text-gray-600">Inclusion</span>
                    </div>
                  </div>

                  {/* Price & Book Now */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-sm text-gray-500">From</span>
                      <p className="text-2xl font-bold text-gray-900">
                        ${tour.price.toFixed(2)}
                      </p>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-md transition-colors duration-300">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default PopularPackage;
