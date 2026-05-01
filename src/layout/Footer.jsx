"use client";
import Link from "next/link";

import { Envelope, Handset, MapPin } from "@gravity-ui/icons";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#3D280F] text-gray-300 border-t-4 border-orange-600">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">QurbaniHat</h2>
            <p className="text-sm">
              Bangladesh&apos;s most trusted online Qurbani marketplace. Find
              your preferred livestock easily and securely.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 space-y-2 text-sm">
              <Link href="#" className="hover:text-white hover:underline">
                Services
              </Link>
              <Link href="#" className="hover:text-white hover:underline">
                About us
              </Link>
              <Link href="#" className="hover:text-white hover:underline">
                Terms of use
              </Link>
              <Link href="#" className="hover:text-white hover:underline">
                Privacy policy
              </Link>
              <Link href="#" className="hover:text-white hover:underline">
                Cookie policy
              </Link>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <MapPin className="text-orange-500" />
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Handset className="text-orange-500" />
                <span>+880 1700-000000</span>
              </li>
              <li className="flex items-center gap-3">
                <Envelope className="text-orange-500" />
                <span>support@qurbanihat.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="my-8 h-px w-full bg-gray-500" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} QurbaniHat. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <p className="text-xs font-semibold">SOCIAL LINKS</p>
            <Link href="#" className="hover:text-white">
              <FaFacebook />
            </Link>
            <Link href="#" className="hover:text-white">
              <FaTwitter />
            </Link>
            <Link href="#" className="hover:text-white">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
