import React from "react";
import { Send } from "lucide-react";
import Container from "./Container";

const Newsletter = () => {
  return (
    <Container className="py-15 px-4 lg:px-0">
      <section className="relative rounded-3xl bg-blue-100 px-6 py-16 text-center">

        {/* Content */}
        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Join to Newsletter.
          </h2>

          {/* Input */}
          <div className="relative">
            <input
              type="email"
              placeholder="Type Your Email Address"
              className="w-full rounded-full px-6 py-5 pr-16 text-gray-700 outline-none shadow-sm focus:ring-2 focus:ring-blue-500 bg-white"
            />

            {/* Send Button */}
            <button className="absolute right-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
              <Send size={18} />
            </button>
          </div>

          {/* Subtitle */}
          <p className="mt-6 text-gray-700">
            To get monthly upto <span className="font-semibold">10%</span> best
            offer in all package.
          </p>
        </div>
      </section>
    </Container>
  );
};

export default Newsletter;
