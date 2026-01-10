import React from "react";
import { NavLink } from "react-router-dom";

/**
 * Navigation (Tailwind version)
 * - Logic with localStorage/useEffect is intentionally disabled for refactor.
 * - To re-enable, uncomment the block below and restore the state/logic.
 */

const Navigation = ({ userData }) => {
  // ===============================
  // DISABLED LOGIC (refactor mode)
  // ===============================
  // const [storedUserData, setStoredUserData] = useState(null);
  // useEffect(() => {
  //   const stored = localStorage.getItem("userData");
  //   if (stored) setStoredUserData(JSON.parse(stored));
  // }, []);
  //
  // For now we always show Sign Up / Login (no storedUserData)
  const storedUserData = null;
  // ===============================

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="AppointCare"
                id="appointcare-logo"
                className="w-14 h-12 object-contain"
              />
              <div className="leading-tight">
                <h1 id="LogoTitle" className="text-2xl font-semibold text-[#007E85]">
                  Appoint<span id="LogoSubTitle" className="text-[#6EAB36]">Care</span>
                </h1>
              </div>
            </a>
          </div>

          {/* Nav links (hidden on small screens) */}
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

            {/* Example of links that would be conditional when logic is re-enabled */}
            {false && storedUserData && (
              <>
                <NavLink
                  to="/PatienAppointment"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#007E85] text-white px-4 py-2 rounded-full text-lg"
                      : "text-[#6EAB36] text-lg px-3 py-2 rounded-full hover:bg-[#007E85] hover:text-white transition"
                  }
                >
                  My Bookings
                </NavLink>

                <NavLink
                  to="/PatientConsultation"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#007E85] text-white px-4 py-2 rounded-full text-lg"
                      : "text-[#6EAB36] text-lg px-3 py-2 rounded-full hover:bg-[#007E85] hover:text-white transition"
                  }
                >
                  Consultation
                </NavLink>
              </>
            )}

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

          {/* Right side: user / auth actions */}
          <div className="flex items-center gap-3">
            {/* If user is logged in, show avatar/name. For now logic is disabled so it always shows Sign Up / Login */}
            {storedUserData ? (
              <NavLink to="/ProfileLayout" className="flex items-center gap-3 text-[#6EAB36] text-lg">
                <span className="capitalize">{/* {storedUserData.Fname} {storedUserData.Lname} */}User</span>
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  alt="patient-image"
                  className="w-12 h-12 rounded-full object-cover border border-[#6EAB36]"
                />
              </NavLink>
            ) : (
              <div className="flex items-center gap-3">
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
        </div>
      </div>
    </header>
  );
};

export default Navigation;
