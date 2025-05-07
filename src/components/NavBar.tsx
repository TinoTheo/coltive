"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function FullscreenNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Logo */}
      <div className="fixed top-6 left-6 z-50">
        <Image
          src="/images/primary-coloured-logo-11.png"
          alt="logo"
          width={48}
          height={48}
          className="rounded-full"
        />
      </div>

      {/* Hamburger/X button */}
      <button
        className="fixed top-6 right-6 z-50 flex flex-col justify-center items-center w-10 h-10 group bg-secondary"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
            menuOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-white my-1 transition-opacity duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </button>

      {/* Fullscreen Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-transform duration-500 ease-in-out flex ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Left Side: Nav Links */}
        <div className="w-1/2 flex flex-col justify-center items-start pl-20 space-y-8 text-white text-6xl font-bold uppercase tracking-wider">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="hover:text-secondary transition duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side: Fullscreen Image */}
        <div className="w-1/2 h-full relative">
          <Image
            src="/images/mockup-7.png" // Use your own fullscreen image
            alt="Menu Visual"
            layout="fill"
            objectFit="cover"
            className="opacity-90"
            priority
          />
        </div>
      </div>
    </>
  );
}
