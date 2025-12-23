"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import Container from "./Container";

const partners = [
  "/partner1.png",
  "/partner2.png",
  "/partner3.png",
  "/partner4.png",
  "/partner5.png",
  "/partner2.png",
];

const MarqueePartner = () => {
  return (
    <Container>
      {" "}
      <div className="bg-white py-10">
        <Marquee speed={80} pauseOnHover gradient={false}>
          {partners.map((logo, index) => (
            <div key={index} className="mx-12 flex items-center justify-center">
              <Image
                src={logo}
                alt="Partner Logo"
                width={150}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </Container>
  );
};

export default MarqueePartner;
