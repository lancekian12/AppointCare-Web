import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import type { NavigationProps } from "../../types/navigation.types";

const Navigation: React.FC<NavigationProps> = ({ userData }) => {
  const storedUserData = userData;

  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-300 bg-white ${
        scrolled ? "shadow-md border-b border-gray-200" : "shadow-none border-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a href="/" className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="AppointCare"
              className="w-14 h-12 object-contain"
            />
            <h1 className="text-2xl font-semibold text-[#007E85] leading-tight">
              Appoint
              <span className="text-[#6EAB36]">Care</span>
            </h1>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? "bg-[#007E85] text-white px-4 py-2 rounded-full text-lg"
                  : "text-[#6EAB36] text-lg px-3 py-2 rounded-full hover:bg-[#007E85] hover:text-white transition"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/TopDoctors"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#007E85] text-white px-4 py-2 rounded-full text-lg"
                  : "text-[#6EAB36] text-lg px-3 py-2 rounded-full hover:bg-[#007E85] hover:text-white transition"
              }
            >
              Find Doctor
            </NavLink>
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#007E85] text-white px-4 py-2 rounded-full text-lg"
                  : "text-[#6EAB36] text-lg px-3 py-2 rounded-full hover:bg-[#007E85] hover:text-white transition"
              }
            >
              Contact Us
            </NavLink>
          </nav>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-[#6EAB36] focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop auth / user */}
          {storedUserData ? (
            <NavLink
              to="/ProfileLayout"
              className="hidden md:flex items-center gap-3 text-[#6EAB36] text-lg"
            >
              <span className="capitalize">{storedUserData.name}</span>
              <img
                src={
                  storedUserData.avatarUrl ||
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                }
                alt="patient-image"
                className="w-12 h-12 rounded-full object-cover border border-[#6EAB36]"
              />
            </NavLink>
          ) : (
            <div className="hidden md:flex items-center gap-3">
              <NavLink
                to="/Signup"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#007E85] text-white px-6 py-2 rounded-full text-lg"
                    : "text-[#6EAB36] text-lg px-4 py-2 rounded-full hover:bg-[#007E85] hover:text-white transition"
                }
              >
                Sign Up
              </NavLink>
              <NavLink
                to="/Login"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#005e61] text-white px-5 py-2 rounded-full text-lg"
                    : "bg-[#6EAB36] text-white px-5 py-2 rounded-full text-lg hover:bg-[#007E85] transition"
                }
              >
                Login
              </NavLink>
            </div>
          )}
        </div>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-2 pb-4 border-t border-gray-200 flex flex-col gap-2">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? "bg-[#007E85] text-white px-4 py-2 rounded-full text-lg"
                  : "text-[#6EAB36] text-lg px-3 py-2 rounded-full hover:bg-[#007E85] hover:text-white transition"
              }
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/TopDoctors"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#007E85] text-white px-4 py-2 rounded-full text-lg"
                  : "text-[#6EAB36] text-lg px-3 py-2 rounded-full hover:bg-[#007E85] hover:text-white transition"
              }
              onClick={() => setMenuOpen(false)}
            >
              Find Doctor
            </NavLink>
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#007E85] text-white px-4 py-2 rounded-full text-lg"
                  : "text-[#6EAB36] text-lg px-3 py-2 rounded-full hover:bg-[#007E85] hover:text-white transition"
              }
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </NavLink>

            {/* Auth buttons in mobile */}
            {storedUserData ? (
              <NavLink
                to="/ProfileLayout"
                className="flex items-center gap-3 text-[#6EAB36] text-lg mt-2"
                onClick={() => setMenuOpen(false)}
              >
                <span className="capitalize">{storedUserData.name}</span>
                <img
                  src={
                    storedUserData.avatarUrl ||
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  }
                  alt="patient-image"
                  className="w-12 h-12 rounded-full object-cover border border-[#6EAB36]"
                />
              </NavLink>
            ) : (
              <div className="flex flex-col gap-2 mt-2">
                <NavLink
                  to="/Signup"
                  className="text-[#6EAB36] text-lg px-4 py-2 rounded-full hover:bg-[#007E85] hover:text-white transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign Up
                </NavLink>
                <NavLink
                  to="/Login"
                  className="bg-[#6EAB36] text-white px-4 py-2 rounded-full text-lg hover:bg-[#007E85] transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </NavLink>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
