import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

type User = {
  name?: string;
  avatarUrl?: string | null;
} | null;

const Footer: React.FC = () => {
  const [storedUserData, setStoredUserData] = useState<User>(null);

  useEffect(() => {
    const raw = localStorage.getItem("userData");
    if (raw) {
      try {
        setStoredUserData(JSON.parse(raw));
      } catch {
        setStoredUserData(null);
      }
    }
  }, []);

  return (
    <footer className="py-12 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-around items-center gap-6 md:gap-0">
          {/* Brand */}
          <div className="flex items-center gap-2">
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
          </div>

          {/* Center links (wrap on small screens) */}
          <div className="flex gap-8 text-sm font-medium text-slate-500 dark:text-slate-400 md:order-none order-3">
            <NavLink
              to="/privacy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </NavLink>

            <NavLink
              to="/terms"
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </NavLink>

            <NavLink
              to="/cookies"
              className="hover:text-primary transition-colors"
            >
              Cookies
            </NavLink>
          </div>

          {/* Copyright / optional user info */}
          <div className="text-sm text-slate-500 dark:text-slate-400 md:text-right">
            {storedUserData ? (
              <div className="space-y-1">
                <div>
                  Signed in as{" "}
                  <span className="font-semibold text-slate-800 dark:text-white">
                    {storedUserData.name}
                  </span>
                </div>
                <div>
                  © {new Date().getFullYear()} AppointCare. All rights reserved.
                </div>
              </div>
            ) : (
              <div>
                © {new Date().getFullYear()} AppointCare. All rights reserved.
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
