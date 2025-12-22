"use client";
import { AirportStore, loadAirports } from "@/store/AirportStore";
import { useEffect, useState } from "react";

export default function FlightSearch({ label }) {
  const [input, setInput] = useState("");

  const allAirports = AirportStore.useState((s) => s.airports);
  const filteredAirports = AirportStore.useState((s) => s.filteredAirports);

  useEffect(() => {
    if (AirportStore.getRawState().airports.length === 0) {
      loadAirports();
    }
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (value.length < 2) {
      AirportStore.update((s) => {
        s.filteredAirports = [];
      });
      return;
    }

    const results = allAirports.filter((a) =>
      a.search_contents.toLowerCase().includes(value.toLowerCase())
    );

    AirportStore.update((s) => {
      s.filteredAirports = results.slice(0, 10);
    });
  };

  const selectAirport = (airport) => {
    setInput(airport.search_contents);

    AirportStore.update((s) => {
      s.selectedAirport = airport;
      s.filteredAirports = [];
    });
  };

  return (
    <div className="relative w-full max-w-md mx-auto mb-6 -mt-8 z-90 bg-white rounded-md">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>

      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="City or Airport"
        className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 outline-none"
      />

      {filteredAirports.length > 0 && (
        <ul className="absolute z-20 bg-white border border-gray-300 w-full mt-1 rounded-md shadow-lg max-h-64 overflow-y-auto">
          {filteredAirports.map((airport) => (
            <li
              key={airport.code}
              onClick={() => selectAirport(airport)}
              className="px-4 py-3 hover:bg-blue-50 cursor-pointer"
            >
              <div className="font-medium">
                {airport.code} – {airport.airport_name}
              </div>
              <div className="text-sm text-gray-500">
                {airport.city_name}, {airport.country_name}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
