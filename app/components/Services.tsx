"use client";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    emoji: "🎯",
    title: "CV ATS",
    subtitle: "Lolos Filter Otomatis",
    desc: "CV dirancang dengan format yang dioptimalkan untuk Applicant Tracking System (ATS). Struktur bersih, keyword tepat, format yang ramah algoritma rekrutmen.",
    features: [
      "Keyword optimization",
      "Format ATS-friendly",
      "Section terstruktur rapi",
      "Font & spacing optimal",
      "Mudah dibaca mesin & manusia",
    ],
    color: "brand-teal",
    bg: "brand-teal-light",
    popular: true,
    link: "/katalog?kategori=ats",
  },
  {
    emoji: "🎨",
    title: "CV Kreatif",
    subtitle: "Stand Out dari Kerumunan",
    desc: "CV dengan desain visual yang memukau dan berkarakter. Cocok untuk industri kreatif, startup, dan posisi yang menghargai kreativitas dan personal branding.",
    features: [
      "Desain unik & personal",
      "Infografis visual menarik",
      "Warna & tipografi premium",
      "Layout dinamis & modern",
      "Personal branding kuat",
    ],
    color: "brand-yellow",
    bg: "brand-yellow-light",
    popular: false,
    link: "/katalog?kategori=kreatif",
  },
];

export default function Services() {
  return (
    <section id="layanan" className="py-24 bg-brand-off-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="section-tag">Layanan Kami</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-dark leading-tight">
            Pilih Jenis CV{" "}
            <span className="text-brand-teal italic">Kamu</span>
          </h2>
          <p className="text-brand-gray mt-4 leading-relaxed">
            Dua pilihan layanan yang dirancang untuk memenuhi kebutuhan berbeda dalam perjalanan kariermu.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {services.map((svc) => (
            <div
              key={svc.title}
              className={`relative rounded-3xl bg-white border-2 overflow-hidden card-hover ${
                svc.popular ? "border-brand-teal" : "border-transparent"
              }`}
              style={{ boxShadow: "0 4px 24px rgba(13, 148, 136, 0.06)" }}
            >
              {svc.popular && (
                <div className="absolute top-5 right-5 bg-brand-teal text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Populer
                </div>
              )}

              <div className="p-8">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 bg-${svc.bg}`}
                  style={{ background: svc.popular ? '#E0FAF6' : '#FEF9E7' }}>
                  {svc.emoji}
                </div>

                {/* Title */}
                <div className="mb-2">
                  <h3 className="font-display font-bold text-brand-dark text-2xl">{svc.title}</h3>
                  <span className="text-sm font-medium" style={{ color: svc.popular ? '#1DB8A6' : '#D4A00A' }}>
                    {svc.subtitle}
                  </span>
                </div>

                <p className="text-brand-gray text-sm leading-relaxed mb-6">{svc.desc}</p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-brand-dark">
                      <CheckCircle2
                        size={15}
                        style={{ color: svc.popular ? '#1DB8A6' : '#D4A00A', flexShrink: 0 }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={svc.link}
                  className="flex items-center gap-2 font-semibold text-sm group"
                  style={{ color: svc.popular ? '#1DB8A6' : '#D4A00A' }}
                >
                  Lihat Template
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Bottom accent line */}
              <div
                className="h-1 w-full"
                style={{
                  background: svc.popular
                    ? 'linear-gradient(to right, #1DB8A6, #5eead4)'
                    : 'linear-gradient(to right, #F5C842, #fde68a)',
                }}
              />
            </div>
          ))}
        </div>

        {/* Process steps */}
        <div className="bg-white rounded-3xl p-8 border border-brand-light-gray">
          <h3 className="font-display font-bold text-brand-dark text-xl mb-6 text-center">
            Cara Order yang Mudah
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { n: "01", title: "Pilih Template", desc: "Pilih template yang sesuai kebutuhan kamu" },
              { n: "02", title: "Kirim Data", desc: "Kirim data diri & pengalaman via WhatsApp" },
              { n: "03", title: "Proses 24 Jam", desc: "Tim kami mengerjakan CV kamu" },
              { n: "04", title: "Terima CV", desc: "CV siap pakai dikirim dalam format PDF & DOCX" },
            ].map((step, i) => (
              <div key={step.n} className="relative text-center">
                <div className="w-12 h-12 rounded-2xl bg-brand-teal-light text-brand-teal font-display font-bold text-sm flex items-center justify-center mx-auto mb-3">
                  {step.n}
                </div>
                <div className="font-semibold text-brand-dark text-sm mb-1">{step.title}</div>
                <div className="text-brand-gray text-xs leading-relaxed">{step.desc}</div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-6 right-0 w-full h-px bg-brand-light-gray translate-x-1/2 z-0" style={{ width: "calc(100% - 3rem)", left: "calc(50% + 1.5rem)" }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
