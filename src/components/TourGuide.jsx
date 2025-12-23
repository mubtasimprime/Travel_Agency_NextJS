import Image from "next/image";

const guides = [
  {
    name: "Samuel Henry",
    role: "GoFly Guider",
    image: "/tourGuide1.webp",
  },
  {
    name: "David Reynolds",
    role: "GoFly Guider",
    image: "/tourGuide2.webp",
  },
  {
    name: "Thomas Mitchell",
    role: "GoFly Guider",
    image: "/tourGuide3.webp",
  },
  {
    name: "James Carter",
    role: "GoFly Guider",
    image: "/tourGuide4.webp",
  },
];

const TourGuide = () => {
  return (
    <section className="bg-blue-50 py-20">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900">Tour <span className="text-blue-700">Guided</span></h2>
        <p className="mt-4 max-w-md mx-auto text-gray-600 text-xl">
          A curated list of the most popular travel packages based on different
          destinations.
        </p>

        {/* Guides */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {guides.map((guide, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Image */}
              <div className="relative w-52 h-52 rounded-full overflow-hidden">
                <Image
                  src={guide.image}
                  alt={guide.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {guide.name}
              </h3>

              {/* Role */}
              <p className="text-gray-500 text-sm">{guide.role}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-gray-700">
            Need to Help? Don’t Hesitate Friendly Collaborate with Expertise
          </p>
          <button className="flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-sm hover:bg-blue-600 hover:text-white transition duration-300 font-medium cursor-pointer">
            Meet Our Team →
          </button>
        </div>
      </div>
    </section>
  );
};

export default TourGuide;
