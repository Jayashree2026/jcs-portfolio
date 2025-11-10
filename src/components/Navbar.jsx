import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react';
import { HashLink } from 'react-router-hash-link';


const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#internship" },
  { name: "Contact", href: "#contact" },

];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "bg-black py-3 shadow-md" : "py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between md:justify-around flex-wrap">



        {/* Desktop Navigation */}
        <div className="hidden gap-12 ml-6 text-xl md:flex space-x-8 justify-around">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          <div className="flex flex-row ml-[14px] space-x-[6px] gap-2">
            <div className="flex flex-row ml-[14px] space-x-[6px] gap-2">
              {/* GitHub */}
              <a
                href="https://github.com/Jayashree2026"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[42px] h-[42px] bg-[rgba(217,217,217,0.1)] inline-flex items-center justify-center rounded-full border border-[rgba(255,255,255,0.5)] transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_4px_rgba(255,255,255,0.5)] hover:border-[#0077ff]"
              >
                <IconBrandGithub
                  stroke={2}
                  className="text-white transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/jayashreecs/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[42px] h-[42px] bg-[rgba(217,217,217,0.1)] inline-flex items-center justify-center rounded-full border border-[rgba(255,255,255,0.5)] transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_4px_rgba(0,119,255,0.6)] hover:border-[#0077ff]"
              >
                <IconBrandLinkedin
                  stroke={2}
                  className="text-white transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </a>

              {/* Email */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=jayashreecs2026@gmail.com&su=Hello%20Jayashree&body=I%20just%20visited%20your%20portfolio%20and%20wanted%20to%20connect!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[42px] h-[42px] bg-[rgba(217,217,217,0.1)] inline-flex items-center justify-center rounded-full border border-[rgba(255,255,255,0.5)] transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_4px_rgba(255,0,102,0.6)] hover:border-[#0077ff]"
              >
                <IconMail
                  stroke={2}
                  className="text-white transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </a>
            </div>
            <HashLink to="#contact">
              <button className="relative ml-3 mt -5 px-6 py-2 border border-white text-white overflow-hidden group rounded-md transition-all duration-300">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                  Let’s Connect
                </span>
                <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
              </button>
            </HashLink>
          </div>



        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-white z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-black/90 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-white hover:text-blue-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
