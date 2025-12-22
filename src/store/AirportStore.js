// store/AirportStore.js
import { fetchAirports } from "@/api/airportApi";
import { Store } from "pullstate";

export const AirportStore = new Store({
  airports: [],
  filteredAirports: [],
  selectedAirport: null,
  loading: false,
});

export const loadAirports = async () => {
  AirportStore.update((s) => {
    s.loading = true;
  });

  try {
    const data = await fetchAirports();

    AirportStore.update((s) => {
      s.airports = data?.data || data || [];
      s.loading = false;
    });
  } catch (error) {
    console.error("Airport fetch failed", error);
    AirportStore.update((s) => {
      s.loading = false;
    });
  }
};
