
import FlightSearch from "@/components/FlightSearch";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ShortNav from "@/components/ShortNav";
import React from "react";

const Home = () => {
  return <>
  <ShortNav></ShortNav>
  <Navbar></Navbar>
  <Hero></Hero>
  <FlightSearch></FlightSearch>
  </>;
};

export default Home;
