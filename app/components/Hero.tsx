"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { templates } from "../data/templates";

const stats = [
  { value: "30K+", label: "CV Dibuat" },
  { value: "98%", label: "Puas" },
  { value: "24H", label: "Cepat" },
  { value: "4.9★", label: "Rating" },
];

export default function Hero() {
  // Get popular template or first template
  const featuredTemplate = templates.find((t) => t.popular) || templates[0];

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-gradient-to-b from-brand-off-white via-white to-brand-off-white pt-24">
      {/* Minimal background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-teal/5 -translate-y-1/4 translate-x-1/3 pointer-events-none blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-yellow/5 translate-y-1/3 -translate-x-1/4 pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-teal/10 border border-brand-teal/20 w-fit">
              <Sparkles size={14} className="text-brand-teal" />
              <span className="text-sm font-medium text-brand-teal">Solusi CV Profesional</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="font-display text-6xl lg:text-7xl font-bold text-brand-dark leading-[1.15] tracking-tight">
                CV Anda{" "}
                <span className="relative">
                  <span className="text-brand-teal">Bersinar</span>
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-teal/30" viewBox="0 0 200 20" preserveAspectRatio="none">
                    <path d="M 0 10 Q 50 5, 100 10 T 200 10" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </span>
              </h1>
              <p className="text-lg text-brand-gray leading-relaxed max-w-xl font-light">
                Tingkatkan peluang karir dengan CV yang profesional, elegan, dan lolos sistem ATS. Desain premium yang membuat Anda menonjol.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link 
                href="/katalog" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-teal text-white rounded-full font-semibold hover:bg-brand-teal-dark transition-all duration-300 hover:shadow-lg hover:shadow-brand-teal/30"
              >
                Lihat Katalog
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/6285718326571"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-brand-teal text-brand-teal rounded-full font-semibold hover:bg-brand-teal/10 transition-all duration-300"
              >
                Konsultasi Gratis
              </a>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {stats.map((s, idx) => (
                <div key={idx} className="group">
                  <div className="text-2xl lg:text-3xl font-display font-bold text-brand-teal mb-1">{s.value}</div>
                  <div className="text-sm text-brand-gray font-medium group-hover:text-brand-dark transition-colors">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Template Preview */}
          <div className="relative hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-sm">
              {/* Subtle glow background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-teal/20 to-brand-teal/5 blur-2xl opacity-40" />
              
              {/* Main card */}
              <div className="relative group">
                {/* Subtle border glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-teal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
                
                {/* Template image card */}
                <div className="relative rounded-2xl overflow-hidden bg-white shadow-xl border border-brand-teal/10 group-hover:shadow-2xl group-hover:shadow-brand-teal/20 transition-all duration-500">
                  <div className="relative aspect-[220/280] w-full overflow-hidden">
                    <Image
                      src={featuredTemplate.image}
                      alt={`${featuredTemplate.name} template preview`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                    {/* Overlay gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>

                {/* Status badge */}
                <div className="absolute top-4 right-4 bg-white shadow-lg rounded-full px-4 py-2 flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal"></span>
                  </span>
                  <span className="text-xs font-semibold text-brand-dark">{featuredTemplate.badge || "Premium"}</span>
                </div>

                {/* Template info below */}
                <div className="mt-4 space-y-1">
                  <p className="text-xs text-brand-gray font-medium uppercase tracking-wide">Pilihan Template</p>
                  <h3 className="text-lg font-display font-bold text-brand-dark">{featuredTemplate.name}</h3>
                  <p className="text-sm text-brand-gray leading-relaxed">{featuredTemplate.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/50 to-transparent pointer-events-none" />
    </section>
  );
}
