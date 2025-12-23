import Image from "next/image";
import { MousePointerClick, BadgePercent } from "lucide-react";

export default function TrustPartner() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      {/* TOP OFFER IMAGES */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Image
          src="/offer-img1.webp"
          alt="Offer 1"
          width={600}
          height={320}
          className="rounded-2xl w-full object-cover"
        />
        <Image
          src="/offer-img2.webp"
          alt="Offer 2"
          width={600}
          height={320}
          className="rounded-2xl w-full object-cover"
        />
      </section>

      {/* BOTTOM BACKGROUND SECTION */}
      <section className="relative h-[240px] rounded-3xl overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <Image
          src="/service-bg.webp"
          alt="Background"
          fill
          className="object-cover bg-blue-600"
        />
        <div className="absolute inset-0 bg-white/80"></div>

        {/* CONTENT */}
        <div className="absolute inset-0 z-10 flex items-center px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
            {/* LEFT TEXT */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-black leading-snug">
                To Go Your Desire Place <br />
                Through <span className="text-blue-700">GoFly</span>
              </h2>
            </div>

            {/* ONE CLICK BOOKING */}
            <div className="flex gap-6">
              <div className="w-12 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                <MousePointerClick className="text-orange-500" size={22} />
              </div>
              <div>
                <h4 className="font-semibold text-xl mb-1">
                  One Click Booking
                </h4>
                <p className="text-gray-700 text-md">
                  Hassle-free and fast tour & travel package booking.
                </p>
              </div>
            </div>

            {/* DEALS & DISCOUNTS */}
            <div className="flex gap-4">
              <div className="w-12 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <BadgePercent className="text-blue-500" size={22} />
              </div>
              <div>
                <h4 className="font-semibold text-xl mb-1">
                  Deals & Discounts
                </h4>
                <p className="text-gray-700 text-md">
                  Special discounts on flights, hotels & packages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
