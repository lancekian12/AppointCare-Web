import React from "react";
import ServiceProvider from "../../components/reusecomponent/ServiceProvider";
import FAQ from "../../components/reusecomponent/FAQ";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <main className="mt-5 md:mt-20 mb-20">
      <section className="mb-10 md:mb-25">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 leading-tight text-left">
                Providing Quality{" "}
                <span className="text-[#007E85]">HealthCare</span> for A{" "}
                <span className="text-[#6EAB36]">Brighter</span> and{" "}
                <span className="text-[#6EAB36]">Healthy</span> Future
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-left text-gray-700">
                At our AppointCare, we are dedicated to providing exceptional
                medical care to our patients and their families. Our experienced
                team of medical professionals, cutting-edge technology, and
                compassionate approach make us a leader in the healthcare
                industry.
              </p>

              <div className="mt-6 flex flex-row items-center gap-4 flex-wrap">
                <Link to="/TopDoctors" className="block">
                  <button
                    type="button"
                    className="min-w-35 md:min-w-100 px-6 h-12 rounded-md bg-[#007E85] text-white text-lg font-medium"
                  >
                    Appointments
                  </button>
                </Link>

                <Link
                  to="/TopDoctors"
                  className="flex items-center gap-3 no-underline text-black"
                >
                  <button
                    type="button"
                    className="w-12 h-12 rounded-full bg-[#007E85] text-white flex items-center justify-center text-xl"
                    aria-label="Find a doctor"
                  >
                    <i className="fa-solid fa-magnifying-glass" />
                  </button>
                  <h3 className="text-base sm:text-lg font-semibold">
                    Find a Doctor
                  </h3>
                </Link>
              </div>
            </div>

            {/* Right / images */}
            <div className="w-full md:w-1/2 relative flex justify-center items-start mt-8 md:mt-0">
              <img
                src="/images/Vector.png"
                alt="decorative vector"
                className="
                  absolute
                  top-12
                  left-1/2
                  -translate-x-1/2
                  w-64
                  md:right-20 md:left-auto md:translate-x-0 md:w-auto
                  z-0
                "
              />
              <img
                src="/images/doctor3.png"
                alt="doctor"
                className="relative w-64 sm:w-72 md:w-105 z-10"
              />
            </div>
          </div>
        </div>
      </section>

      <ServiceProvider />
      <FAQ />
    </main>
  );
};

export default Home;
