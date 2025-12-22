
import FlightSearch from "@/components/FlightSearch";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ShortFooter from "@/components/ShortFooter";
import ShortNav from "@/components/ShortNav";
import React from "react";

const Home = () => {
  return <>
  <ShortNav></ShortNav>
  <Navbar></Navbar>
  <Hero></Hero>
  <FlightSearch></FlightSearch>
  <Footer></Footer>
  <ShortFooter></ShortFooter>
  </>;
};

export default Home;
