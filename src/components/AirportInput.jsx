"use client";

import { AirportStore, loadAirports } from "@/store/AirportStore";
import { useEffect, useState } from "react";
import { PlaneTakeoff } from "lucide-react";

export default function AirportInput({ label, type }) {
  const [input, setInput] = useState("");
  const [filteredAirports, setFilteredAirports] = useState([]);

  const allAirports = AirportStore.useState((s) => s.airports);

  useEffect(() => {
    if (AirportStore.getRawState().airports.length === 0) {
      loadAirports();
    }
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (value.length < 2) {
      setFilteredAirports([]);
      return;
    }

    const results = allAirports.filter((a) =>
      a.search_contents.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredAirports(results.slice(0, 20));
  };

  const selectAirport = (airport) => {
    setInput(airport.search_contents);
    setFilteredAirports([]);

    AirportStore.update((s) => {
      if (type === "from") s.fromAirport = airport;
      if (type === "to") s.toAirport = airport;
    });
  };

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>

      <div className="relative">
        <PlaneTakeoff
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="City or Airport"
          className="w-full rounded-lg border border-gray-300 pl-10 pr-3 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {filteredAirports.length > 0 && (
        <ul className="absolute z-50 mt-1 w-full rounded-lg border bg-white shadow-lg max-h-72 overflow-y-auto">
          {filteredAirports.map((airport) => (
            <li
              key={airport.code}
              onClick={() => selectAirport(airport)}
              className="cursor-pointer px-4 py-3 hover:bg-blue-50"
            >
              <div className="flex justify-between font-medium">
                <span>
                  {airport.city_name}, {airport.country_name}
                </span>
                <span className="text-gray-500">{airport.code}</span>
              </div>
              <div className="text-sm text-gray-500">
                {airport.airport_name}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
