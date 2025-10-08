"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import Image from "next/image";
import Button from "../Button/index";
import { CiMenuFries } from "react-icons/ci";
import NavLink from "./NavLinks";
import { TfiClose } from "react-icons/tfi";
import links from "../../data/links.json";

type LinkType = {
  name: string;
  href: string;
};

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const BCC_BASE_URL = "https://bccfilkom.ub.ac.id/";
  const handleClick = () => {
    router.push(`https://docs.google.com/forms/d/e/1FAIpQLSfrYhzfidJe7IktQKQjDJbgG39XwlvLuzQBfi-NjYMpwYguWA/viewform`);
    setTimeout(() => {
      return;
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 flex items-center justify-between gap-12 p-4 px-10 transition-colors duration-300 lg:px-24 z-20 ${isScrolled ? "bg-dark_blue bg-opacity-90" : "bg-dark_blue"
        }`}
    >
      <Image src="/images/BCC.svg" alt="BCC Logo" width={117} height={48} />

      <div className="mx-2 hidden space-x-2 lg:flex">
        {links.map((link: LinkType) => (
          <NavLink
            key={link.name}
            href={`${BCC_BASE_URL}${link.href}`}
            isActive={link.href === pathname}
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      <div className="hidden lg:block">
        <Button onClick={handleClick} className="border-none px-4 py-3 text-xs" variant="primary">
          Request as Client
        </Button>
      </div>

      <button
        type="button"
        className="lg:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <TfiClose size={24} color="white" />
        ) : (
          <CiMenuFries size={24} color="white" />
        )}
      </button>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-dark_blue bg-opacity-50 lg:hidden"
          onClick={() => setMenuOpen(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setMenuOpen(false);
          }}
          tabIndex={0}
          role="button"
        />
      )}

      <div
        className={`fixed left-0 top-0 h-full w-3/4 bg-dark_blue px-10 shadow-lg transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="flex items-center justify-between py-4">
          <Image src="/images/BCC.svg" alt="BCC Logo" width={117} height={48} />
        </div>

        <ul className="flex flex-col space-y-4 py-4 text-sm text-white">
          {links.map((link: LinkType) => (
            <li key={link.name}>
              <NavLink
                href={`${BCC_BASE_URL}${link.href}`}
                isActive={link.href === pathname}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li>
            <Button onClick={handleClick} className="border-none" variant="primary">
              Request as Client
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;