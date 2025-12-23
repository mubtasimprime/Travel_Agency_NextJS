import FlightSearch from "@/components/FlightSearch";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MarqueePartner from "@/components/MarqueePartner";
import Navbar from "@/components/Navbar";
import PopularPackage from "@/components/PopularPackage";
import ShortFooter from "@/components/ShortFooter";
import ShortNav from "@/components/ShortNav";
import TourGuide from "@/components/TourGuide";
import TrustPartner from "@/components/TrustPartner";
import React from "react";

const Home = () => {
  return (
    <>
      <ShortNav></ShortNav>
      <Navbar></Navbar>
      <Hero></Hero>
      <FlightSearch></FlightSearch>
      <TrustPartner></TrustPartner>
      <PopularPackage></PopularPackage>
      <MarqueePartner></MarqueePartner>
      <TourGuide></TourGuide>
      <Footer></Footer>
      <ShortFooter></ShortFooter>
    </>
  );
};

export default Home;
