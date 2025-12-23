// components/WhyWeAreBestAgency.tsx
import React from "react";
import { Star, Plane, Shield, Heart } from "lucide-react";
import Image from "next/image";

const WhyWeAreBestAgency = () => {
  return (
    <section className="relative bg-blue-50 py-16 px-4 sm:px-6 lg:py-24 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main container - Image Left, Content Right */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Column - Image/Visual */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-lg">
                <div className="aspect-[4/4] relative">
                  {/* Actual Image */}
                  <Image
                    src="/about-img.webp"
                    alt="Agency"
                    fill
                    className="object-cover"

                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="w-full lg:w-1/2">
            {/* Main heading */}
            <div className="mb-10">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Trusted Travel Partner
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Why We&apos;re The Best Travel Agency
              </h1>

              <div className="space-y-4">
                <p className="text-xl text-blue-600 font-semibold">
                  Welcome to Prime Travel Agency – Your Gateway to Unforgettable
                  Journeys!
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  At Prime Travel Agency, we are passionate about creating
                  exceptional travel experiences. Whether you&apos;re looking
                  for a relaxing beach vacation, an adventurous trek, a
                  luxurious getaway, or a cultural expedition.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full border-t-2 border-blue-100 mb-8"></div>

            {/* Ratings section */}
            <div className="">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <span className="text-3xl font-bold text-blue-600">
                        4.5
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        Trustpilot
                      </h3>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-blue-500 text-blue-500"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl text-blue-600 font-bold mb-1">
                      ★★★★★
                    </p>
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                      TrustScore 4.5
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeAreBestAgency;