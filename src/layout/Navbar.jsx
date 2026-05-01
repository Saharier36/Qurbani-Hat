"use client";
import Link from "next/link";
import { useState } from "react";
import { Button, Avatar } from "@heroui/react";
import { Bars, PersonPlus, Xmark } from "@gravity-ui/icons";
import Image from "next/image";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = false;

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="flex h-16 items-center justify-between px-6 container mx-auto">
        <div className="flex items-center gap-3">
          <button
            className="md:hidden p-1 rounded-md hover:bg-gray-100 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <Xmark size={20} className="text-gray-700" />
            ) : (
              <Bars size={20} className="text-gray-700" />
            )}
          </button>

          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="QurbaniHat Logo" height={50} width={50} />
            <span className="text-xl font-bold text-orange-600 tracking-tight">
              Qurbani<span className="text-gray-800">Hat</span>
            </span>
          </Link>
        </div>

        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-600">
          <li>
            <Link href="/" className="hover:text-orange-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/animals" className="hover:text-orange-600">
              All Animals
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <div className="flex items-center gap-3">
              <Avatar>
                <Avatar.Image
                  src="https://xsgames.co/randomusers/avatar.php?g=male"
                  alt="user-avatar"
                />
              </Avatar>
              <Button
                className="font-semibold text-white bg-orange-600 hover:bg-orange-700"
                radius="md"
              >
                Logout
              </Button>
            </div>
          ) : (
            <>
              <Button
                as={Link}
                href="/login"
                variant="light"
                className="font-semibold text-gray-700 hover:text-orange-600"
                radius="md"
              >
                Login
              </Button>

              <Button
                as={Link}
                href="/register"
                className="font-semibold text-white bg-orange-600 hover:bg-orange-700"
                radius="md"
              >
                <span className="hidden sm:inline">Register</span>
                <PersonPlus className="sm:hidden" size={18} />
              </Button>
            </>
          )}
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white shadow">
          <ul className="flex flex-col p-4 gap-1 font-medium text-gray-700">
            <li>
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md hover:bg-orange-50 hover:text-orange-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/animals"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md hover:bg-orange-50 hover:text-orange-600"
              >
                All Animals
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
