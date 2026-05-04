"use client";
import Link from "next/link";
import { useState } from "react";
import { Button, Avatar, Dropdown, Label } from "@heroui/react";
import { Bars, PersonPlus, Xmark } from "@gravity-ui/icons";
import Image from "next/image";
import NavLinks from "@/components/ui/NavLinks";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const userData = authClient.useSession();
  const user = userData.data?.user;

  const signOut = async () => {
    await authClient.signOut();
  };

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="flex h-16 items-center justify-between px-4 container mx-auto">
        <div className="flex items-center gap-3">
          <div className="md:hidden">
            <Dropdown onOpenChange={setIsMenuOpen}>
              <Button
                isIconOnly
                aria-label="Menu"
                variant="secondary"
                className="bg-orange-100 text-orange-600"
              >
                {isMenuOpen ? <Xmark /> : <Bars />}
              </Button>
              <Dropdown.Popover className="min-w-55">
                <Dropdown.Menu>
                  <Dropdown.Section>
                    <Dropdown.Item href="/" className="hover:bg-orange-100">
                      <Label>Home</Label>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="/animals"
                      className="hover:bg-orange-100"
                    >
                      <Label>All Animals</Label>
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="/profile"
                      className="hover:bg-orange-100"
                    >
                      <Label>Profile</Label>
                    </Dropdown.Item>
                  </Dropdown.Section>
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>
          </div>

          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="QurbaniHat Logo"
              height={35}
              width={35}
            />
            <span className="text-xl font-bold text-orange-600">
              Qurbani<span className="text-gray-800">Hat</span>
            </span>
          </Link>
        </div>

        <ul className="hidden md:flex items-center font-medium text-gray-600 border rounded-full px-2 py-1.5 gap-4 bg-[#F7F1E1] shadow-inner">
          <li>
            <NavLinks href="/">Home</NavLinks>
          </li>
          <li>
            <NavLinks href="/animals">All Animals</NavLinks>
          </li>
          <li>
            <NavLinks href="/profile">Profile</NavLinks>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          {user ? (
            <div className="flex items-center gap-3">
              <Avatar>
                <Avatar.Image
                  src={user?.image}
                  alt={user.name}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>
                  {user?.name.charAt(0).toUpperCase()}
                </Avatar.Fallback>
              </Avatar>
              <Button
                onClick={signOut}
                className="bg-orange-600 hover:bg-orange-700"
              >
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link href="/auth/login">
                <Button
                  variant="outline"
                  className="border-orange-600 hover:bg-orange-50"
                >
                  Login
                </Button>
              </Link>

              <Link href="/auth/register">
                <Button className="bg-orange-600 hover:bg-orange-700">
                  <span className="hidden sm:inline">Sign Up</span>
                  <PersonPlus className="sm:hidden" />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
