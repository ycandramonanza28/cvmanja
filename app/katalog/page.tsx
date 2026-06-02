"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import TemplateCard from "../components/TemplateCard";
import { templates } from "../data/templates";
import { Search, SlidersHorizontal, X } from "lucide-react";

type Category = "semua" | "ats" | "kreatif";
type Sort = "default";

function KatalogContent() {
  const searchParams = useSearchParams();
  const [category, setCategory] = useState<Category>("semua");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<Sort>("default");
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    const cat = searchParams.get("kategori");
    if (cat === "ats" || cat === "kreatif") setCategory(cat);
  }, [searchParams]);

  let filtered = templates;

  // Filter by category
  if (category !== "semua") {
    filtered = filtered.filter((t) => t.category === category);
  }

  // Filter by search
  if (search.trim()) {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.tags.some((tag) => tag.toLowerCase().includes(q)) ||
        t.description.toLowerCase().includes(q)
    );
  }

  // Sort

  const atsCount = templates.filter((t) => t.category === "ats").length;
  const kreatifCount = templates.filter((t) => t.category === "kreatif").length;

  return (
    <main className="min-h-screen bg-brand-off-white grain">
      <Navbar />

      {/* Page header */}
      <div className="bg-white border-b border-brand-light-gray pt-28 pb-10">
        <div className="max-w-6xl mx-auto px-6">
          <span className="section-tag">Katalog Lengkap</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-brand-dark mt-2 mb-3">
            Template CV{" "}
            <span className="text-brand-teal italic">Premium</span>
          </h1>
          <p className="text-brand-gray text-lg max-w-xl">
            Temukan template CV yang cocok untuk kamu dari koleksi kami.
            Semua tersedia dalam format PDF dan DOCX.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Filters toolbar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-start md:items-center">
          {/* Category tabs */}
          <div className="flex gap-2 bg-white p-1.5 rounded-2xl border border-brand-light-gray">
            {([
              { key: "semua", label: `Semua (${templates.length})` },
              { key: "ats", label: `CV ATS (${atsCount})` },
              { key: "kreatif", label: `CV Kreatif (${kreatifCount})` },
            ] as { key: Category; label: string }[]).map((c) => (
              <button
                key={c.key}
                onClick={() => setCategory(c.key)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                  category === c.key
                    ? "bg-brand-teal text-white shadow-sm"
                    : "text-brand-gray hover:text-brand-dark"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Search & sort */}
          <div className="flex gap-3 md:ml-auto w-full md:w-auto">
            <div className="relative flex-1 md:w-56">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-gray" />
              <input
                type="text"
                placeholder="Cari template..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-8 py-2.5 rounded-xl border border-brand-light-gray text-sm bg-white focus:outline-none focus:border-brand-teal transition-colors"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-gray hover:text-brand-dark">
                  <X size={13} />
                </button>
              )}
            </div>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              className="px-4 py-2.5 rounded-xl border border-brand-light-gray text-sm bg-white focus:outline-none focus:border-brand-teal transition-colors text-brand-dark cursor-pointer"
            >
              <option value="default">Urutkan</option>
            </select>
          </div>
        </div>

        {/* Results count */}
        <div className="text-sm text-brand-gray mb-6">
          Menampilkan <span className="font-semibold text-brand-dark">{filtered.length}</span> template
          {search && <> untuk &quot;<span className="text-brand-teal">{search}</span>&quot;</>}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((t) => (
              <TemplateCard key={t.id} template={t} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-16 h-16 rounded-2xl bg-brand-teal-light flex items-center justify-center mx-auto mb-4">
              <Search size={24} className="text-brand-teal" />
            </div>
            <h3 className="font-display font-bold text-brand-dark text-xl mb-2">Template tidak ditemukan</h3>
            <p className="text-brand-gray text-sm mb-4">Coba kata kunci yang berbeda atau ubah filter kategori.</p>
            <button
              onClick={() => { setSearch(""); setCategory("semua"); }}
              className="btn-primary text-sm"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}

export default function KatalogPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-brand-teal">Loading...</div></div>}>
      <KatalogContent />
    </Suspense>
  );
}
