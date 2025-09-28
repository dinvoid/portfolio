  "use client";

  import { useState, useEffect } from "react";
  import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
  import { useRouter } from "next/navigation";

  export default function HeroSection() {
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();

    // Auto-close mobile menu on resize
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 768) {
          setMenuOpen(false);
        }
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (

      <section id="about" className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-100 px-6">
  
        {/* Navbar */}
        <header className="w-full max-w-6xl mx-auto flex justify-between items-center py-6">
          {/* Left: Nav Links */}
          <nav className="hidden md:flex gap-6 text-gray-700 font-medium text-sm">
            <a href="#about" className="hover:text-blue-600 transition">About</a>
            <a href="#experience" className="hover:text-blue-600 transition">Experience</a>
            <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
            <a href="#service" className="hover:text-blue-600 transition">Services</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded hover:bg-gray-200 transition text-blue-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>

          {/* Right: Developer Button */}
          <button
            onClick={() => router.push("/developer")}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition transform hover:-translate-y-1"
          >
            Developer
          </button>
        </header>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-white z-40 flex flex-col items-center justify-center transition-transform duration-500 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {["About", "Experience", "Projects","Skills", "Contact"].map((item) => (
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

        {/* Hero + About */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center py-12">
          {/* Left: Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
                Hello, I'm <span className="text-blue-600">Eldin</span>
              </h1>
              <p className="text-xl text-gray-700 font-light">
                Backend Developer focused on scalable systems, clean architecture, and performance.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 flex-wrap">
              <a
                href="/EldinCV.pdf"
                download
                className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition transform hover:-translate-y-1"
              >
                📄 Download CV
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition transform hover:-translate-y-1"
              >
                📬 Contact Info
              </a>
            </div>

            {/* Embedded About Me */}

            <div id="abouts" className="mt-8 scroll-mt-24 space-y-4 text-gray-700 text-base leading-relaxed">

              <p>
                I'm a backend developer focused on building fast, secure, and maintainable APIs. I actively integrate AI tools into my workflow to automate boring tasks, streamline development.
              </p>
              <p>I'm passionate about optimizing workflows through automation and problem-solving.</p>
              <p>
                I care deeply about clean code, modular architecture, and delivering seamless user experiences. Outside of work, I enjoy playing chess, drawing and sketching, and sipping good coffee ☕.
              </p>
              <p>
                I'm always learning, collaborating, and pushing boundaries to build systems that make a real impact.
              </p>
              <p>
                I build systems that scale with or without AI. But let’s be honest that those who use it are playing a smarter game.
              </p>

            </div>
          </div>

          {/* Right: Visual */}
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-white/30 backdrop-blur-md rounded-full shadow-xl flex items-center justify-center">
              <span className="text-6xl">👨‍💻</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
