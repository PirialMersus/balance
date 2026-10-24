"use client";

import { useState } from "react";
import { translations, Locale } from "@/lib/translations";

interface FaqSectionProps {
  locale: Locale;
}

export default function FaqSection({ locale }: FaqSectionProps) {
  const faqData = translations[locale].faq;
  const [expandedIndices, setExpandedIndices] = useState<number[]>([0]);

  const toggleAccordionItem = (indexToToggle: number) => {
    setExpandedIndices((currentIndices) =>
      currentIndices.includes(indexToToggle)
        ? currentIndices.filter((currentIndex) => currentIndex !== indexToToggle)
        : [...currentIndices, indexToToggle]
    );
  };

  return (
    <section className="bg-[#F5F2E9] py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <div className="w-16 h-px bg-[#B87557] mb-10" />
          <h2
            className="font-serif italic text-[#1A2019] leading-tight"
            style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
          >
            {faqData.title}
          </h2>
        </div>

        <div className="border-t border-[#293A30]/20 divide-y divide-[#293A30]/15">
          {faqData.items.map((singleFaqItem, faqItemIndex) => {
            const isItemExpanded = expandedIndices.includes(faqItemIndex);
            return (
              <div key={faqItemIndex} className="py-6 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleAccordionItem(faqItemIndex)}
                  className="w-full flex items-center justify-between text-left gap-6 group cursor-pointer bg-transparent border-0 p-0 appearance-none outline-none focus:outline-none"
                  aria-expanded={isItemExpanded}
                >
                  <span className="font-serif text-xl md:text-2xl text-[#1A2019] group-hover:text-[#B87557] transition-colors">
                    {singleFaqItem.q}
                  </span>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full border border-[#293A30]/30 flex items-center justify-center text-[#293A30] group-hover:border-[#B87557] group-hover:text-[#B87557] transition-all">
                    <span className="text-lg leading-none select-none">
                      {isItemExpanded ? "−" : "+"}
                    </span>
                  </span>
                </button>
                {isItemExpanded && (
                  <div className="pt-4 pr-12 text-[#293A30]/80 text-base leading-relaxed animate-fade-in-up">
                    <p>{singleFaqItem.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
