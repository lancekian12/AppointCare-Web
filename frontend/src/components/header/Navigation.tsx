import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export interface NavigationProps {
  userData?: {
    name?: string;
    avatarUrl?: string | null;
  } | null;
}

const Navigation: React.FC<NavigationProps> = ({ userData = null }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

const activeClass = "text-[#008081] font-bold";
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`w-full border-b border-slate-100 dark:border-slate-800 sticky top-0 z-50 backdrop-blur-md transition-colors duration-300 ${
        scrolled ? "bg-white/90 shadow-sm" : "bg-white/80"
      } dark:${scrolled ? "bg-slate-900/90" : "bg-slate-900/80"}`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-around items-center h-20">
          {/* Brand */}
          <a href="/" className="flex items-center justify-center">
            <span
              className="material-icons text-[#008081]"
              style={{ fontSize: "35px" }}
            >
              eco
            </span>
            <span className="text-2xl font-bold text-slate-800 dark:text-white">
              Appoint<span className="text-[#81B641]">Care</span>
            </span>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `text-slate-600  hover:text-primary transition-colors ${
                  isActive ? "text-[#008081] font-bold" : ""
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/TopDoctors"
              end
              className={({ isActive }) =>
                `text-slate-600 dark:text-slate-300 hover:text-primary transition-colors ${
                  isActive ? activeClass : ""
                }`
              }
            >
              Find Doctor
            </NavLink>

            <NavLink
              to="/Contact"
              end
              className={({ isActive }) =>
                `text-slate-600 dark:text-slate-300 hover:text-primary transition-colors ${
                  isActive ? activeClass : ""
                }`
              }
            >
              Contact Us
            </NavLink>
          </nav>

          {/* Right actions (desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink
              to="/Signup"
              className="text-[#81B641] font-semibold hover:opacity-80 transition-opacity"
            >
              Sign Up
            </NavLink>
            <NavLink
              to="/Login"
              className="bg-[#81B641] text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-md"
            >
              Login
            </NavLink>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#008081]"
            >
              <svg
                className="w-7 h-7 text-slate-700 dark:text-slate-200"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
            menuOpen ? "max-h-[420px] mt-2 pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-3 mt-2 pb-2 border-t border-slate-100 dark:border-slate-800 px-2">
            <NavLink
              to="/"
              end
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block w-full text-left px-4 py-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-white/50 hover:dark:bg-slate-800 transition ${
                  isActive ? `bg-white/60 dark:bg-slate-800 ${activeClass}` : ""
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/TopDoctors"
              end
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block w-full text-left px-4 py-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-white/50 hover:dark:bg-slate-800 transition ${
                  isActive ? `bg-white/60 dark:bg-slate-800 ${activeClass}` : ""
                }`
              }
            >
              Find Doctor
            </NavLink>

            <NavLink
              to="/Contact"
              end
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block w-full text-left px-4 py-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-white/50 hover:dark:bg-slate-800 transition ${
                  isActive ? `bg-white/60 dark:bg-slate-800 ${activeClass}` : ""
                }`
              }
            >
              Contact Us
            </NavLink>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 mt-2">
              <NavLink
                to="/Signup"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-left px-4 py-2 rounded-lg text-[#81B641] font-semibold hover:opacity-90"
              >
                Sign Up
              </NavLink>

              <NavLink
                to="/Login"
                onClick={() => setMenuOpen(false)}
                className="mt-2 block w-full text-left px-4 py-2 rounded-lg bg-[#81B641] text-white font-semibold"
              >
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <style>{`/* purely tailwind-based; no extra CSS needed */`}</style>
    </header>
  );
};

export default Navigation;
