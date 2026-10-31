"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

export type AccordionItem = {
  question: string;
  answer: string;
};

export function Accordion({ items }: { items: AccordionItem[] }) {
  const instanceId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-navy-800/10 rounded-xs border border-navy-800/10 bg-parchment-100 shadow-card">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${instanceId}-panel-${index}`;
        const buttonId = `${instanceId}-button-${index}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex min-h-[56px] w-full items-center justify-between gap-4 px-5 py-4 text-left text-lg font-bold text-navy-800"
              >
                {item.question}
                <ChevronDown
                  aria-hidden="true"
                  className={`h-4 w-4 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
            </h3>
            {isOpen ? (
              <div id={panelId} role="region" aria-labelledby={buttonId} className="prose-body px-5 pb-5 text-[17px]">
                {item.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
