import React from "react";
import type { Service } from "../../types/service.types";
import { SERVICES } from "@/data/service";

const ServiceProvider: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#007E85]">
            Services we Provide
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Our services include diagnosing fractures and injuries, X-ray
            checkups, specialist consultations, eye care, and various
            treatments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((s: Service) => (
            <article
              key={s.id}
              className="flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="w-full">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-44 sm:h-52 object-cover"
                />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-[#007E85]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 flex-1">
                  {s.description}
                </p>

                <a
                  href={s.href || "#"}
                  className="mt-4 inline-flex items-center gap-2 self-start text-[#007E85] border border-[#007E85] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#007E85] hover:text-white transition"
                  aria-label={`Learn more about ${s.title}`}
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProvider;
