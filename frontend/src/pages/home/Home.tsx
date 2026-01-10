import React from "react";
import ServiceProvider from "../../components/reusecomponent/ServiceProvider";
import FAQ from "../../components/reusecomponent/FAQ";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="mt-12 mb-40">
      <section>
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8">
            {/* Left / text */}
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-semibold mb-6 leading-tight text-left">
                Providing Quality{" "}
                <span className="text-[#007E85]">HealthCare</span> for A{" "}
                <span className="text-[#6EAB36]">Brighter</span> and{" "}
                <span className="text-[#6EAB36]">Healthy</span> Future
              </h2>

              <p className="text-lg md:text-xl text-left text-gray-700">
                At our AppointCare, we are dedicated to providing exceptional
                medical care to our patients and their families. Our experienced
                team of medical professionals, cutting-edge technology, and
                compassionate approach make us a leader in the healthcare
                industry.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
                <Link to="/TopDoctors" className="block">
                  <button
                    type="button"
                    className="w-[250px] h-[50px] rounded-md bg-[#007E85] text-white text-lg font-medium"
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
                    className="w-[50px] h-[50px] rounded-full bg-[#007E85] text-white flex items-center justify-center text-xl"
                    aria-label="Find a doctor"
                  >
                    <i className="fa-solid fa-magnifying-glass" />
                  </button>
                  <h3 className="text-lg font-semibold">Find a Doctor</h3>
                </Link>
              </div>
            </div>

            {/* Right / images */}
            <div className="md:w-1/2 relative flex justify-center items-start">
              {/* Vector - absolute behind */}
              <img
                src="/images/Vector.png"
                alt="decorative vector"
                className="absolute -left-6 translate-y-24 w-64 md:w-auto opacity-95"
              />

              {/* Doctor image in front */}
              <img
                src="/images/doctor3.png"
                alt="doctor"
                className="relative w-72 md:w-[420px] z-10"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <FindDoctor /> */}
      <ServiceProvider />
      <FAQ />
    </main>
  );
};

export default Home;
