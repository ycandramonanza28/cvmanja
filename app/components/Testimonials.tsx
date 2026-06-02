"use client";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rizky Pratama",
    role: "Software Engineer @ Tokopedia",
    avatar: "R",
    color: "#1DB8A6",
    rating: 5,
    text: "CV ATS dari Jasa CV Manja benar-benar membantu. Dalam 2 minggu setelah pakai CV baru, saya langsung dapat 3 panggilan interview dari perusahaan top!",
    template: "Template Clarity ATS",
  },
  {
    name: "Sania Dewi",
    role: "Graphic Designer @ Studio Kreatif",
    avatar: "S",
    color: "#F5C842",
    rating: 5,
    text: "Template Vivid yang saya pilih keren banget! Banyak rekruter yang bilang CV saya beda dari yang lain. Proses pembuatannya juga cepat dan responsif.",
    template: "Template Vivid Kreatif",
  },
  {
    name: "Bagas Firmansyah",
    role: "Finance Analyst @ Bank BCA",
    avatar: "B",
    color: "#0d9488",
    rating: 5,
    text: "Profesional banget! Tim Jasa CV Manja sangat memahami kebutuhan industri keuangan. CV saya sekarang terlihat sangat bobot dan terpercaya.",
    template: "Template Finance ATS",
  },
  {
    name: "Putri Handayani",
    role: "Marketing Manager @ Shopee",
    avatar: "P",
    color: "#1DB8A6",
    rating: 5,
    text: "Sudah 3x order di sini karena selalu puas! Revisinya cepat, hasilnya selalu melebihi ekspektasi. Highly recommended untuk yang serius cari kerja.",
    template: "Template Marketing Pro",
  },
  {
    name: "Dimas Cahyo",
    role: "Product Manager @ Gojek",
    avatar: "D",
    color: "#F5C842",
    rating: 5,
    text: "Worth every penny! CV baru saya langsung lolos ATS di hampir semua perusahaan yang saya lamar. Terima kasih Jasa CV Manja!",
    template: "Template Executive ATS",
  },
  {
    name: "Anisa Rahmawati",
    role: "Fresh Graduate @ ITB",
    avatar: "A",
    color: "#0d9488",
    rating: 5,
    text: "Sebagai fresh graduate, saya sempat bingung buat CV. Jasa CV Manja membantu saya tampil profesional meskipun belum banyak pengalaman. Terima kasih!",
    template: "Template Minimal Pro",
  },
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-24 bg-brand-off-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="section-tag">Testimoni</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-dark leading-tight">
            Cerita Sukses{" "}
            <span className="text-brand-teal italic">Klien Kami</span>
          </h2>
          <p className="text-brand-gray mt-4">
            Ribuan orang telah berhasil mendapat pekerjaan impian mereka dengan bantuan Jasa CV Manja.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="bg-white rounded-3xl p-6 border border-gray-100 card-hover"
              style={{ boxShadow: "0 2px 16px rgba(13, 148, 136, 0.05)" }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={13} fill="#F5C842" color="#F5C842" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-brand-dark text-sm leading-relaxed mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Template used */}
              <div className="inline-block bg-brand-teal-light text-brand-teal text-[11px] font-medium px-3 py-1 rounded-full mb-4">
                {t.template}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-brand-light-gray">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-display font-bold text-sm flex-shrink-0"
                  style={{ background: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-brand-dark text-sm">{t.name}</div>
                  <div className="text-brand-gray text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-6 py-4 border border-brand-light-gray shadow-sm">
            <div className="flex -space-x-2">
              {["R", "S", "B", "D"].map((l, i) => (
                <div
                  key={l}
                  className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: ["#1DB8A6", "#F5C842", "#0d9488", "#0A2E2B"][i] }}
                >
                  {l}
                </div>
              ))}
            </div>
            <div className="text-sm text-brand-dark">
              <span className="font-bold">2.400+ klien</span> sudah mempercayakan CV mereka ke kami
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
