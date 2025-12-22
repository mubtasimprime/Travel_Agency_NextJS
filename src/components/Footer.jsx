import React from "react";
import Image from "next/image";
import LOGO from "../app/images/travel-agency.png";

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-10 w-full">
      <div className="max-w-[1440px] mx-auto flex flex-wrap justify-between gap-6 px-4">
        <aside className="flex flex-col gap-4">
          <Image
            src={LOGO}
            alt="Prime Flight Agency Logo"
            width={80}
            height={80}
            className="object-contain"
            priority
          />

          <p>
            <span className="text-[20px] font-bold uppercase">Prime Flight Agency.</span>
            <br />
           <span className="text-[16px]"> Providing reliable support since 2001</span>
          </p>
        </aside>

        <nav className="flex flex-col gap-2">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>

        <nav className="flex flex-col gap-2">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>

        <nav className="flex flex-col gap-2">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
