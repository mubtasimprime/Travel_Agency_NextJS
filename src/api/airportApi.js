import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        apikey: process.env.NEXT_PUBLIC_API_KEY,
        secretecode: process.env.NEXT_PUBLIC_SECRET_CODE,
    },
});

export const fetchAirports = async () => {
    const response = await api.get("/tools/airport-autosuggetion-data");
    return response.data;
};
