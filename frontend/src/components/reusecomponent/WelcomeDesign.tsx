import React from "react";

const WelcomeDesign: React.FC = () => {
  return (
    <div className="text-center px-4 py-6">
      <h3 className="font-semibold text-[20px] text-black mb-4">
        WELCOME TO
      </h3>

      {/* Logo Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
        <img
          src="/images/logo.png"
          alt="logo"
          className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] sm:mr-5 mb-3 sm:mb-0 object-cover"
        />
        <h2 className="text-xl sm:text-2xl font-extrabold tracking-[5px] text-center sm:text-left">
          APPOINT <span className="text-[#007E85]">CARE</span>
        </h2>
      </div>

      {/* Three Features */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Book */}
          <div className="flex justify-center md:justify-start">
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
              <img
                src="/images/schedule.png"
                alt="schedule"
                className="w-14 h-14 sm:w-16 sm:h-16 mb-2 sm:mb-0 sm:mr-5 object-contain"
              />
              <div>
                <h4 className="text-lg font-semibold">Book</h4>
                <p className="mt-2 text-sm text-gray-600">
                  Easily connect with your doctors
                </p>
              </div>
            </div>
          </div>

          {/* Consult */}
          <div className="flex justify-center md:justify-start">
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
              <img
                src="/images/consult.png"
                alt="consult"
                className="w-14 h-14 sm:w-16 sm:h-16 mb-2 sm:mb-0 sm:mr-5 object-contain"
              />
              <div>
                <h4 className="text-lg font-semibold">Consult</h4>
                <p className="mt-2 text-sm text-gray-600">
                  Visit your doctor or consult online
                </p>
              </div>
            </div>
          </div>

          {/* Prescription */}
          <div className="flex justify-center md:justify-start">
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
              <img
                src="/images/takeyourmedicine.png"
                alt="take your medicine"
                className="w-14 h-14 sm:w-16 sm:h-16 mb-2 sm:mb-0 sm:mr-5 object-contain"
              />
              <div>
                <h4 className="text-lg font-semibold">Prescription</h4>
                <p className="mt-2 text-sm text-gray-600">
                  You can take your medicine or prescription
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeDesign;
