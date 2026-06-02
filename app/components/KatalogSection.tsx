"use client";
import { useState } from "react";
import { templates } from "../data/templates";
import TemplateCard from "./TemplateCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Category = "semua" | "ats" | "kreatif";

export default function KatalogSection() {
  const [active, setActive] = useState<Category>("semua");

  const filtered = active === "semua" ? templates : templates.filter((t) => t.category === active);
  const displayed = filtered.slice(0, 6); // Tampilkan hanya 6 template

  return (
    <section id="katalog" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="section-tag">Katalog Template</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-dark leading-tight">
              Pilih Template{" "}
              <span className="text-brand-teal italic">Favoritmu</span>
            </h2>
            <p className="text-brand-gray mt-3 max-w-lg">
              Koleksi template premium yang siap digunakan. Semua bisa dikustomisasi sesuai kebutuhan.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-2 bg-brand-light-gray p-1.5 rounded-2xl self-start md:self-auto">
            {(["semua", "ats", "kreatif"] as Category[]).map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 capitalize ${
                  active === c
                    ? "bg-white text-brand-teal shadow-sm"
                    : "text-brand-gray hover:text-brand-dark"
                }`}
              >
                {c === "semua" ? "Semua" : c === "ats" ? "CV ATS" : "CV Kreatif"}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {displayed.map((t) => (
            <TemplateCard key={t.id} template={t} />
          ))}
        </div>

        {/* Link to full katalog */}
        <div className="text-center">
          <Link
            href="/katalog"
            className="btn-outline inline-flex items-center gap-2 group"
          >
            Lihat Selengkapnya
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
