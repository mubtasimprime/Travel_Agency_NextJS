"use client";
import Link from "next/link";
import { useState } from "react";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import LOGO from "../app/images/travel-agency.png";
import Container from "./Container";

const Navbar = () => {
  const [currency, setCurrency] = useState("BDT");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Flights", href: "/flights" },
    { name: "Hotels", href: "/hotels" },
    { name: "Tours", href: "/tours" },
    { name: "Visa", href: "/visa" },
    { name: "Umrah", href: "/umrah" },
    { name: "Blogs", href: "/blogs" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 px-4 lg:px-0">
      <Container>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div>
            <Link href="/">
              <Image className="h-12 w-auto" src={LOGO} alt="Logo" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-semibold hover:scale-105 transition duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Currency Selector */}
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none hidden md:block"
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

            {/* Hamburger for Mobile */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-gray-700 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 space-y-3">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-gray-700 font-semibold hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Currency Selector */}
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 text-sm w-full focus:outline-none"
            >
              <option value="BDT">BDT</option>
              <option value="GBP">GBP</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </select>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
