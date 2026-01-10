import React from "react";
import WelcomeDesign from "../../components/reusecomponent/WelcomeDesign";
import { NavLink } from "react-router-dom";

const Signup: React.FC = () => {
  return (
    <section className="mt-12 mb-24">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center px-4">
        {/* Welcome Section */}
        <WelcomeDesign />

        {/* Full-width divider */}
        <hr className="my-6 w-full border-t-2 border-gray-300" />

        {/* Register Buttons */}
        <div className="flex flex-col items-center gap-6 w-full sm:w-1/2">
          <NavLink
            to="/PatientSignup"
            className="block w-full py-5 text-lg font-semibold text-black bg-white border-2 border-[#007E85] rounded-lg hover:bg-[#007E85] hover:text-white transition"
          >
            Register as Patient
          </NavLink>

          <NavLink
            to="/DoctorSignup"
            className="block w-full py-5 text-lg font-semibold text-black bg-white border-2 border-[#007E85] rounded-lg hover:bg-[#007E85] hover:text-white transition"
          >
            Register as Doctor
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Signup;