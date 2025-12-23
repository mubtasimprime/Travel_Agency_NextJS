"use client";

import { useState } from "react";
import { ArrowLeftRight, Calendar, Search } from "lucide-react";
import AirportInput from "./AirportInput";

export default function FlightSearch() {
  const [departureDate, setDepartureDate] = useState("");

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="relative -mt-24 z-30">
      <div className="mx-auto max-w-6xl rounded-2xl bg-white shadow-xl p-6">

        {/* Trip Type */}
        <div className="mb-6 flex items-center gap-3">
          <span className="rounded-full border border-blue-600 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
            One Way
          </span>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_48px_1fr_1fr] gap-4 items-end">

          {/* Leaving From */}
          <AirportInput label="Leaving From" type="from" />

          {/* Swap Arrow */}
          <div className="hidden md:flex justify-center items-center">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white">
              <ArrowLeftRight size={16} />
            </div>
          </div>

          {/* Going To */}
          <AirportInput label="Going To" type="to" />

          {/* Departure Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Departure Date
            </label>
            <div className="relative">
              <Calendar
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="date"
                min={today}
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="w-full rounded-lg border border-gray-300 pl-10 pr-3 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>
        </div>

        {/* Search Button */}
        <div className="mt-6 flex justify-center">
          <button className="flex items-center gap-2 rounded-lg bg-blue-700 px-12 py-3 text-white font-semibold hover:bg-blue-800 transition">
            <Search size={18} />
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
