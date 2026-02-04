import React, { useState } from "react";
import type { FAQItem } from "../../types/faq.types";
import { FAQS } from "../../data/faqs";

const FAQ: React.FC = () => {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-[#007E85]">
          Frequently Asked Questions
        </h2>

        <div className="mt-6 space-y-3">
          {FAQS.map((item: FAQItem) => {
            const isOpen = openIds.has(item.id);
            return (
              <div
                key={item.id}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`${item.id}-panel`}
                  id={`${item.id}-header`}
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-center justify-between px-4 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-medium text-gray-800">
                    {item.question}
                  </span>

                  <svg
                    className={`w-5 h-5 text-[#007E85] transform transition-transform duration-200 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      d="M6 8L10 12L14 8"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div
                  id={`${item.id}-panel`}
                  role="region"
                  aria-labelledby={`${item.id}-header`}
                  className={`px-4 pb-4 text-sm text-gray-700 ${
                    isOpen ? "block" : "hidden"
                  }`}
                >
                  <p className="pt-1">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
