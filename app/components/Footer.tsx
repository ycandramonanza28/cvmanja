"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-brand-dark via-teal-900 to-teal-800 p-12 text-center">
          {/* Decorative blobs */}
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-brand-teal/10 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-brand-yellow/10 translate-x-1/3 translate-y-1/3" />
          <div className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full bg-brand-teal/5 -translate-x-1/2 -translate-y-1/2" />

          <div className="relative z-10">
            <div className="inline-block bg-brand-yellow/20 text-brand-yellow text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-wide uppercase">
              ✨ Mulai Sekarang
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Siap Wujudkan CV<br />
              <span className="text-brand-teal">Impianmu?</span>
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-lg mx-auto">
              Jangan biarkan CV lama menghambat karir kamu. Upgrade sekarang dan rasakan perbedaannya.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/katalog" className="btn-primary text-sm">
                Lihat Semua Template
                <ArrowRight size={15} />
              </Link>
              <a
                href="https://wa.me/6285718326571"
                target="_blank"
                rel="noopener"
                className="btn-outline text-sm border-white/30 text-white hover:bg-white/10"
              >
                Konsultasi Gratis
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12">
                <img src="/logo.png" alt="Jasa CV MANJA" />
              </div>
              <div className="leading-tight">
                <div className="font-display font-semibold text-white text-[15px] leading-none">JASA</div>
                <div className="font-display font-bold text-white text-[15px] leading-none tracking-wide">CV MANJA</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-5">
              Membantu ribuan profesional Indonesia tampil lebih percaya diri dengan CV yang berkualitas.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/jasacv.manja?igsh=MTFkMDMwMjB0d3lmYw==" className="w-9 h-9 rounded-xl bg-white/10 hover:bg-brand-teal flex items-center justify-center transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              {/* <a href="#" className="w-9 h-9 rounded-xl bg-white/10 hover:bg-brand-teal flex items-center justify-center transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.635 5.905-5.635zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a> */}
              <a href="https://wa.me/6285718326571" target="_blank" rel="noopener" className="w-9 h-9 rounded-xl bg-white/10 hover:bg-brand-teal flex items-center justify-center transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.107 1.522 5.836L0 24l6.336-1.501A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.848 0-3.574-.505-5.061-1.383l-.363-.215-3.762.891.944-3.668-.236-.376A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="font-semibold text-white text-sm mb-4">Layanan</div>
            <div className="space-y-2.5">
              {["CV ATS", "CV Kreatif", "Review CV", "Konsultasi"].map((l) => (
                <a key={l} href="#" className="block text-white/50 text-sm hover:text-brand-teal transition-colors">{l}</a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-semibold text-white text-sm mb-4">Informasi</div>
            <div className="space-y-2.5">
              {["Tentang Kami", "Cara Order", "Testimoni", "FAQ", "Kebijakan Privasi"].map((l) => (
                <a key={l} href="#" className="block text-white/50 text-sm hover:text-brand-teal transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-white/40 text-xs">© 2024 Jasa CV Manja. All rights reserved.</div>
          <div className="text-white/40 text-xs">Made with ❤️ in Indonesia</div>
        </div>
      </div>
    </footer>
  );
}
