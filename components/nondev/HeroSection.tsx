"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import router from "next/router";

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen flex flex-col items-center px-6">

      {/* Top Navbar */}
      <div className="w-full max-w-6xl flex justify-between items-center mt-6 mb-24 relative z-50">

        {/* Left: Navbar (desktop) or hamburger (mobile) */}
        <div className="flex items-center gap-4">
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-gray-700 font-medium text-sm">
            <a href="#about" className="hover:text-blue-600 transition-colors duration-300">About</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors duration-300">Experience</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors duration-300">Projects</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors duration-300">Contact</a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded hover:bg-gray-200 transition text-blue-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>

        {/* Right: Developer Button */}
        <button  onClick={() => router.push("/developer")} className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition transform hover:-translate-y-1">
          Developer
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-40 flex flex-col items-center justify-center transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {["About", "Experience", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-3xl font-semibold mb-6 hover:text-blue-600 transition"
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ))}
      </div>

      {/* Hero Text */}
      <div className="text-center space-y-4 relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900">Hello, I'm Eldin</h1>
        <p className="text-xl md:text-2xl text-blue-600 font-medium">Backend Developer</p>

        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <a
            href="/EldinCV.pdf"
            download
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition transform hover:-translate-y-1"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition transform hover:-translate-y-1"
          >
            Contact Info
          </a>
        </div>
      </div>
    </section>
  );
}
