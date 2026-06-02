"use client";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const stats = [
  { value: "30.000+", label: "CV Dibuat" },
  { value: "98%", label: "Klien Puas" },
  { value: "24 Jam", label: "Pengerjaan Cepat" },
  { value: "4.9★", label: "Rating Rata-rata" },
];

const badges = ["ATS-Friendly", "Desain Elegan", "Revisi Gratis"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-off-white pt-24 pb-16">
      {/* Background decorations */}
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-brand-teal-light/60 to-transparent -translate-y-1/4 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-brand-yellow-light/50 to-transparent translate-y-1/4 -translate-x-1/4 pointer-events-none" />

      {/* Floating blobs */}
      <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-brand-yellow animate-float opacity-70" style={{ animationDelay: "0.5s" }} />
      <div className="absolute top-1/4 left-1/3 w-2 h-2 rounded-full bg-brand-teal animate-float opacity-50" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-1/3 right-1/3 w-4 h-4 rounded-full bg-brand-teal-light border-2 border-brand-teal animate-float opacity-60" style={{ animationDelay: "1.5s" }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div>
            <div className="section-tag hero-reveal" style={{ animationDelay: "0s" }}>
              <Sparkles size={12} />
              Profesional & Terpercaya
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-[64px] font-bold text-brand-dark leading-[1.1] mt-4 mb-6 hero-reveal" style={{ animationDelay: "0.1s" }}>
              CV Kamu{" "}
              <span className="italic font-normal text-brand-teal">Tampil</span>
              <br />
              Lebih{" "}
              <span className="shimmer-text">Profesional</span>
            </h1>

            <p className="text-brand-gray text-lg leading-relaxed mb-6 max-w-lg hero-reveal" style={{ animationDelay: "0.2s" }}>
              Dapatkan CV berkualitas tinggi yang lolos sistem ATS dan memikat HR.
              Dibuat oleh tim profesional berpengalaman dengan desain yang elegan dan modern.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-8 hero-reveal" style={{ animationDelay: "0.3s" }}>
              {badges.map((b) => (
                <span
                  key={b}
                  className="flex items-center gap-1.5 text-sm text-brand-teal bg-brand-teal-light px-3 py-1.5 rounded-full font-medium"
                >
                  <CheckCircle2 size={13} />
                  {b}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mb-12 hero-reveal" style={{ animationDelay: "0.4s" }}>
              <Link href="/katalog" className="btn-primary">
                Lihat Katalog
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/6285718326571"
                target="_blank"
                rel="noopener"
                className="btn-outline"
              >
                Konsultasi Gratis
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 pt-6 border-t border-brand-light-gray hero-reveal" style={{ animationDelay: "0.5s" }}>
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display font-bold text-brand-dark text-2xl">{s.value}</div>
                  <div className="text-brand-gray text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Visual card mock */}
          <div className="relative flex justify-center hero-reveal" style={{ animationDelay: "0.3s" }}>
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 rounded-3xl bg-brand-teal-light rotate-3 translate-x-4 translate-y-4" />
              <div className="absolute inset-0 rounded-3xl bg-brand-yellow/20 -rotate-2 -translate-x-2 translate-y-6" />

              <div className="relative rounded-3xl bg-white shadow-2xl overflow-hidden border border-white p-7">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-teal to-brand-teal-dark flex items-center justify-center text-white font-display font-bold text-xl shadow-md">
                    A
                  </div>
                  <div>
                    <div className="font-display font-bold text-brand-dark text-lg leading-tight">Andi Pratama</div>
                    <div className="text-brand-teal text-sm font-medium">UI/UX Designer</div>
                    <div className="text-brand-gray text-xs mt-0.5">Jakarta, Indonesia</div>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-brand-teal/30 to-transparent mb-5" />

                <div className="mb-5">
                  <div className="text-[11px] font-semibold text-brand-gray uppercase tracking-widest mb-2">Keahlian</div>
                  <div className="flex flex-wrap gap-1.5">
                    {["Figma", "React", "Tailwind", "Framer"].map((sk) => (
                      <span key={sk} className="text-xs bg-brand-teal-light text-brand-teal px-2.5 py-1 rounded-full font-medium">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-[11px] font-semibold text-brand-gray uppercase tracking-widest mb-2">Pengalaman</div>
                  <div className="space-y-2">
                    {[
                      { company: "Tech Corp", role: "Sr. Designer", year: "2022–kini" },
                      { company: "Startup X", role: "UI Designer", year: "2020–22" },
                    ].map((exp) => (
                      <div key={exp.company} className="flex items-center justify-between bg-brand-light-gray rounded-xl px-3 py-2">
                        <div>
                          <div className="text-xs font-semibold text-brand-dark">{exp.company}</div>
                          <div className="text-[11px] text-brand-gray">{exp.role}</div>
                        </div>
                        <span className="text-[11px] text-brand-teal font-medium">{exp.year}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-brand-teal to-teal-500 rounded-xl p-3 flex items-center justify-between">
                  <div className="text-white">
                    <div className="text-[10px] uppercase tracking-widest opacity-80">ATS Score</div>
                    <div className="font-display font-bold text-xl">98 / 100</div>
                  </div>
                  <div className="w-10 h-10 rounded-full border-4 border-white/30 flex items-center justify-center">
                    <CheckCircle2 className="text-white" size={18} />
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-brand-yellow text-brand-dark px-4 py-2 rounded-2xl shadow-lg text-sm font-semibold">
                ✨ ATS Ready
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }} />
    </section>
  );
}
