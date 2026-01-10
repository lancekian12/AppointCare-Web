import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import type { User } from "@/types/footer";
import { FOOTER_LINKS } from "@/data/footerLinks";
import { MdMail, MdSend } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  const [storedUserData, setStoredUserData] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const raw = localStorage.getItem("userData");
    if (raw) setStoredUserData(JSON.parse(raw) as User);
  }, []);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/Contact");
  };

  return (
    <footer className="bg-[#007E85] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3">
              <img
                src="/images/logo.png"
                alt="AppointCare"
                className="w-16 h-12 object-contain"
              />
              <h2 className="text-2xl md:text-3xl font-semibold">
                AppointCare
              </h2>
            </div>
            <p className="text-sm md:text-base opacity-95">
              Copyright © {new Date().getFullYear()}. Design by: Lance Kian Flores
            </p>
            {storedUserData && (
              <p className="text-sm md:text-base">
                Signed in as <strong>{storedUserData.name}</strong>
              </p>
            )}
          </div>

          {/* Office */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3">Office</h3>
            <div className="h-1 w-16 bg-white/30 mb-3 mx-auto sm:mx-0" />
            <p className="text-sm md:text-base">PHINMA University</p>
            <p className="text-sm md:text-base">Dagupan City</p>
            <p className="text-sm md:text-base">Pangasinan, 2433</p>
            <p className="text-sm md:text-base border-b border-white/30 inline-block my-2 pb-1">
              lancekian12@gmail.com
            </p>
            <p className="text-sm md:text-base font-medium">+63-9476949382</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3">Links</h3>
            <div className="h-1 w-16 bg-white/30 mb-3 mx-auto sm:mx-0" />
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => {
                if (link.authOnly && !storedUserData) return null;
                return (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `text-sm md:text-base ${
                          isActive
                            ? "underline underline-offset-4"
                            : "opacity-95"
                        } hover:opacity-100`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Email + Social */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3">Email Us</h3>
            <div className="h-1 w-16 bg-white/30 mb-3 mx-auto sm:mx-0" />

                       <form
              onSubmit={handleSubscribe}
              className="flex gap-2 items-center border-b border-white/30 pb-2 max-w-md"
            >
              <MdMail size={24} className="flex-shrink-0 text-white" />

              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder="Enter your email here"
                className="bg-transparent placeholder-white/80 text-white outline-none w-full text-sm md:text-base p-1.5"
              />
              <button
                type="submit"
                className="bg-white text-[#007E85] rounded-full p-2.5 inline-flex items-center justify-center shadow-md"
                aria-label="Submit email"
              >
                <MdSend size={18} />
              </button>
            </form>

            <div className="mt-4 flex justify-center sm:justify-start items-center gap-3">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#007E85] border border-white/50 inline-flex items-center justify-center shadow-md"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF size={20} className="text-white" />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#007E85] border border-white/50 inline-flex items-center justify-center shadow-md"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={20} className="text-white" />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full bg-[#007E85] border border-white/50 inline-flex items-center justify-center shadow-md"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={20} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-white/30 my-6" />

        <p className="text-center text-sm md:text-base opacity-95">
          Lance Kian Flores © {new Date().getFullYear()} - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
