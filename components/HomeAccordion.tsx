// components/HomeAccordion.tsx
"use client";

import { useState, ReactNode } from "react";
import { themeTokens } from "@/theme/tokens";

type HomeAccordionItem = {
  id: string;
  title: string;
  content: ReactNode;
};

export default function HomeAccordion({
  items,
  defaultId,
}: {
  items: HomeAccordionItem[];
  defaultId: string;
}) {
  const [openId, setOpenId] = useState(defaultId);

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = item.id === openId;
        return (
          <div
            key={item.id}
            className={`rounded-3xl ${themeTokens.cardBorder} ${themeTokens.cardBg} overflow-hidden transition-colors`}
          >
            <button
              type="button"
              onClick={() => setOpenId(item.id)}
              className="flex w-full items-center justify-between px-5 py-3 text-left"
            >
              <span className="text-sm font-semibold text-[var(--foreground)]">
                {item.title}
              </span>
              <span
                className={`inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--background)]/30 text-xs text-[var(--foreground)] transition-transform ${
                  isOpen ? "rotate-90" : ""
                }`}
              >
                ›
              </span>
            </button>

            {isOpen ? (
              <div className="px-5 pb-5 pt-1 text-sm text-[var(--foreground)]/90 space-y-3">
                {item.content}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
