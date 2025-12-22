"use client";
import Link from "next/link";
import * as React from "react"
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import Image from "next/image";
import LOGO from "../app/images/travel-agency.png";
import Container from "./Container";

const Navbar = () => {
  const [currency, setCurrency] = useState("BDT");

  return (
    <nav className="bg-white shadow-md">
      <Container>
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="">
            <Link href="/">
              <Image className="h-12 w-auto" src={LOGO} alt="Logo"></Image>
            </Link>
          </div>

          {/* Menu */}
          <div className="hidden md:flex space-x-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 font-semibold hover:scale-105 transition duration-300"
            >
              Home
            </Link>
            <Link
              href="/flights"
              className="text-gray-700 hover:text-blue-600 font-semibold hover:scale-105 transition duration-300"
            >
              Flights
            </Link>
            <Link
              href="/hotels"
              className="text-gray-700 hover:text-blue-600 font-semibold hover:scale-105 transition duration-300"
            >
              Hotels
            </Link>
            <Link
              href="/tours"
              className="text-gray-700 hover:text-blue-600 font-semibold hover:scale-105 transition duration-300"
            >
              Tours
            </Link>
            <Link
              href="/visa"
              className="text-gray-700 hover:text-blue-600 font-semibold hover:scale-105 transition duration-300"
            >
              Visa
            </Link>
            <Link
              href="/umrah"
              className="text-gray-700 hover:text-blue-600 font-semibold hover:scale-105 transition duration-300"
            >
              Umrah
            </Link>
            <Link
              href="/blogs"
              className="text-gray-700 hover:text-blue-600 font-semibold hover:scale-105 transition duration-300"
            >
              Blogs
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 font-semibold hover:scale-105 transition duration-300"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-600 font-semibold hover:scale-105 transition duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Currency Selector */}
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none"
            >
              <option value="BDT">BDT</option>
              <option value="GBP">GBP</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>

            {/* Sign in/Register */}
            <Link
              href="/login"
              className="bg-blue-800 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2 hover:bg-blue-700"
            >
              <FaUser />
              Sign in/Register
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
