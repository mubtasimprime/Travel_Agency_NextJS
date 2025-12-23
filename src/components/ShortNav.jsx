import { FaLocationDot } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { BsTelephoneFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram, FaYoutube } from "react-icons/fa6";
import Link from "next/link";
import Container from "./Container";

const ShortNav = () => {
  return (
    <section className="bg-blue-700 text-white py-2 px-4 lg:px-0">
      <Container>
        <div className="flex justify-between">
          {/* Left Side */}
          <div className="flex gap-6">
            {/* Location */}
            <div
              className="lg:flex hidden gap-2 text-[10px] md:text-[12px] lg:text-[14px] items-center"
              aria-label="Our location"
            >
              <FaLocationDot className="animate-pulse" size={18} />
              17/3/B-2, Tolarbag, Mirpur-1, Dhaka-1216
            </div>

            {/* Time */}
            <div
              className="flex gap-2 items-center text-[10px] md:text-[12px] lg:text-[14px]"
              aria-label="Our working hours"
            >
              <IoMdTime className="animate-pulse" size={20} />
              Sun - Thu : 09:00 AM - 05:00PM
            </div>
          </div>

          {/* Right Side */}
          <div className="flex gap-6">
            {/* Telephone */}
            <div className="flex">
              <Link
                href="/"
                //   target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us via WhatsApp"
                className="flex gap-2 items-center text-[10px] md:text-[12px] lg:text-[14px]"
              >
                <BsTelephoneFill size={18} className="animate-pulse" />
                +880 1989 133 132
              </Link>
            </div>

            {/* Social Icons */}
            <div className="lg:flex gap-4 items-center hidden">
              {/* Facebook */}
              <div className="social-shortNav">
                <Link
                  href="/"
                  aria-label="Visit our Facebook page"
                  // target="_blank"
                >
                  <FaFacebookF size={15} className="hover:text-[#17319F]" />
                </Link>
              </div>

              {/* LinkedIn */}
              <div className="social-shortNav">
                <Link
                  href="/"
                  aria-label="Visit our LinkedIn page"
                  // target="_blank"
                >
                  <FaLinkedinIn size={15} className="hover:text-[#17319F]" />
                </Link>
              </div>

              {/* Instagram */}
              <div className="hover:bg-gradient-to-r hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 hover:border-blue-600 p-1.5 rounded-full border cursor-pointer duration-300">
                <Link
                  href="/"
                  aria-label="Visit our Instagram profile"
                  // target="_blank"
                >
                  <FaInstagram size={15} />
                </Link>
              </div>

              {/* X */}
              <div className="hover:bg-black hover:border-transparent p-1.5 rounded-full border cursor-pointer duration-300">
                <Link
                  href="/"
                  aria-label="Visit our Twitter/X profile"
                  // target="_blank"
                >
                  <FaXTwitter size={15} />
                </Link>
              </div>

              {/* YouTube */}
              <div className="hover:bg-red-500 hover:border-transparent p-1.5 rounded-full border cursor-pointer duration-300">
                <Link
                  href="/"
                  aria-label="Visit our YouTube channel"
                  // target="_blank"
                >
                  <FaYoutube size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ShortNav;
