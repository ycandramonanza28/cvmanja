"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Template } from "../data/templates";
import { CheckCircle2, X } from "lucide-react";

type Props = {
  template: Template;
};

export default function TemplateCard({ template }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [open]);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-gray-100 card-hover flex flex-col"
        style={{ boxShadow: "0 2px 16px rgba(13, 148, 136, 0.06)" }}
      >
        <div className="relative bg-brand-light-gray p-5 pb-3 overflow-hidden">
          <div className="absolute inset-0 dot-pattern opacity-60" />

          <div className="relative mx-auto w-full" style={{ maxWidth: 160 }}>
            <div className="relative aspect-[220/280] overflow-hidden rounded-xl shadow-lg border border-gray-100 bg-white">
              <Image
                src={template.image}
                alt={`${template.name} preview`}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="absolute top-4 left-4 flex flex-col gap-1.5">
            {template.badge && (
              <span className="bg-brand-yellow text-brand-dark text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                {template.badge}
              </span>
            )}
            <span
              className="text-[10px] font-semibold px-2 py-0.5 rounded-full shadow"
              style={{
                background: template.category === "ats" ? "#E0FAF6" : "#FEF9E7",
                color: template.category === "ats" ? "#0d9488" : "#D4A00A",
              }}
            >
              {template.category === "ats" ? "ATS" : "Kreatif"}
            </span>
          </div>
        </div>

        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-display font-bold text-brand-dark text-lg leading-tight">
                {template.name}
              </h3>
              <div className="flex flex-wrap gap-1 mt-1.5">
                {template.tags.slice(0, 2).map((t) => (
                  <span key={t} className="text-[10px] text-brand-gray bg-brand-light-gray px-2 py-0.5 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="text-brand-gray text-xs leading-relaxed mb-4 flex-1">
            {template.description}
          </p>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-md sm:max-w-2xl lg:max-w-3xl rounded-2xl sm:rounded-[32px] bg-white shadow-2xl overflow-hidden my-auto"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute right-2 top-2 sm:right-4 sm:top-4 z-10 inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white text-brand-dark shadow-md transition hover:bg-brand-light-gray hover:scale-110"
              aria-label="Close detail popup"
            >
              <X size={18} className="sm:w-5 sm:h-5" />
            </button>

            <div className="w-full overflow-hidden">
              <div className="relative w-full" style={{ paddingTop: "140%" }}>
                <Image
                  src={template.image}
                  alt={`${template.name} preview`}
                  fill
                  className="absolute inset-0 object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
