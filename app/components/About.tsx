"use client";
import { Target, Users, Award, Zap } from "lucide-react";

const values = [
  {
    icon: <Target size={20} />,
    title: "Tepat Sasaran",
    desc: "CV kami dirancang khusus agar lolos filter ATS dan langsung menarik perhatian rekruter.",
  },
  {
    icon: <Users size={20} />,
    title: "Tim Profesional",
    desc: "Dikerjakan oleh tim desainer & HR profesional berpengalaman lebih dari 5 tahun.",
  },
  {
    icon: <Award size={20} />,
    title: "Kualitas Terjamin",
    desc: "Setiap CV melalui proses review ketat sebelum dikirimkan ke klien.",
  },
  {
    icon: <Zap size={20} />,
    title: "Proses Cepat",
    desc: "Pengerjaan 24 jam kerja, sehingga kamu tidak perlu menunggu lama.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Bg decoration */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-brand-teal-light/50 rotate-2" />
              <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-brand-dark to-teal-800 p-10 text-white">
                {/* Big number */}
                <div className="font-display text-[100px] font-bold leading-none text-white/10 select-none -mt-2 -ml-2">5+</div>
                <div className="font-display text-3xl font-semibold mt-2 mb-2">Tahun<br />Berpengalaman</div>
                <p className="text-white/70 text-sm leading-relaxed mb-8">
                  Melayani ribuan klien dari berbagai latar belakang profesi di seluruh Indonesia.
                </p>

                {/* Mini stats grid */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { n: "30.000+", l: "CV Selesai" },
                    { n: "60+", l: "Template" },
                    { n: "98%", l: "Klien Puas" },
                    { n: "50+", l: "Industri" },
                  ].map((s) => (
                    <div key={s.l} className="bg-white/10 rounded-2xl p-3">
                      <div className="font-display font-bold text-brand-yellow text-xl">{s.n}</div>
                      <div className="text-white/60 text-xs mt-0.5">{s.l}</div>
                    </div>
                  ))}
                </div>

                {/* Decorative dot */}
                <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-brand-yellow animate-float" />
                <div className="absolute bottom-10 right-8 w-2 h-2 rounded-full bg-brand-teal animate-float" style={{ animationDelay: "1s" }} />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-white shadow-xl rounded-2xl px-5 py-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-teal-light flex items-center justify-center text-brand-teal">
                  <Award size={18} />
                </div>
                <div>
                  <div className="font-semibold text-brand-dark text-sm">Top Rated</div>
                  <div className="text-brand-gray text-xs">4.9 ★ Review</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right text */}
          <div className="order-1 lg:order-2">
            <span className="section-tag">Tentang Kami</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-dark leading-tight mb-6">
              Kenapa Pilih{" "}
              <span className="text-brand-teal italic">Jasa CV Manja?</span>
            </h2>
            <p className="text-brand-gray text-lg leading-relaxed mb-8">
              Kami hadir untuk memastikan CV kamu bukan hanya terlihat bagus, tetapi juga{" "}
              <strong className="text-brand-dark">benar-benar bekerja</strong> — lolos ATS, menarik perhatian
              rekruter, dan meningkatkan peluang interview kamu secara signifikan.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((v) => (
                <div key={v.title} className="group flex gap-4 p-4 rounded-2xl hover:bg-brand-teal-light/50 transition-colors duration-200 cursor-default">
                  <div className="w-10 h-10 rounded-xl bg-brand-teal-light text-brand-teal flex items-center justify-center flex-shrink-0 group-hover:bg-brand-teal group-hover:text-white transition-colors duration-200">
                    {v.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-brand-dark text-sm mb-1">{v.title}</div>
                    <div className="text-brand-gray text-xs leading-relaxed">{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
