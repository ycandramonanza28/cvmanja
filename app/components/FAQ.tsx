"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Berapa lama proses pembuatan CV?",
    a: "Proses pengerjaan CV kami adalah 24 jam kerja setelah data lengkap diterima. Untuk request urgent, kami juga menyediakan layanan fast track 12 jam dengan biaya tambahan.",
  },
  {
    q: "Format file apa saja yang akan saya terima?",
    a: "Setiap order akan mendapatkan file PDF (siap cetak dan kirim) dan DOCX (untuk keperluan edit mandiri). Beberapa template premium juga disertai file Canva atau Figma.",
  },
  {
    q: "Apakah CV benar-benar lolos ATS?",
    a: "Ya! Semua template CV ATS kami telah diuji menggunakan berbagai ATS tools dan mendapatkan skor di atas 95%. Kami juga memastikan keyword relevan sesuai bidang pekerjaan kamu.",
  },
  {
    q: "Berapa kali saya bisa revisi?",
    a: "Jumlah revisi tergantung paket yang dipilih: Minimal Pro (1x), Clarity & Swift (2x), Executive & Finance (3x), Portfolio & Artisan (4x). Revisi tambahan dikenakan biaya Rp 25.000 per sesi.",
  },
  {
    q: "Bagaimana cara ordernya?",
    a: "Sangat mudah! Pilih template yang kamu suka, klik tombol 'Order via WhatsApp', lalu kirimkan data dirimu ke kami. Tim kami akan langsung merespons dan memandu prosesnya.",
  },
  {
    q: "Apakah ada garansi kepuasan?",
    a: "Tentu! Jika hasil akhir tidak sesuai dengan brief yang sudah disepakati, kami akan melakukan revisi hingga kamu puas dalam batas jumlah revisi yang tertera di paket.",
  },
  {
    q: "Bisa custom template yang belum ada di katalog?",
    a: "Bisa! Kami menerima pesanan custom design sesuai kebutuhan dan referensi kamu. Hubungi kami via WhatsApp untuk diskusi lebih lanjut mengenai harga dan timeline.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-tag">FAQ</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-dark leading-tight">
            Pertanyaan{" "}
            <span className="text-brand-teal italic">Umum</span>
          </h2>
          <p className="text-brand-gray mt-4">
            Semua yang perlu kamu tahu tentang layanan kami.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                open === i
                  ? "border-brand-teal bg-brand-teal-light/30"
                  : "border-gray-100 bg-white hover:border-brand-teal/30"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
              >
                <span className="font-semibold text-brand-dark text-sm leading-snug">{faq.q}</span>
                <ChevronDown
                  size={16}
                  className={`text-brand-teal flex-shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-brand-gray text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-10 text-center bg-brand-off-white rounded-3xl p-7">
          <p className="text-brand-gray text-sm mb-3">Masih ada pertanyaan lain?</p>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener"
            className="btn-primary"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.107 1.522 5.836L0 24l6.336-1.501A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.848 0-3.574-.505-5.061-1.383l-.363-.215-3.762.891.944-3.668-.236-.376A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            Chat WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
