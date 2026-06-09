"use client";

import React, { useState } from 'react';
import { Calendar, Clock, Copy, Tag, Info, Check, ChevronDown, ChevronUp } from 'lucide-react';
import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/styles/FadeIn";

// --- TIPE DATA PROMO ---
type Promo = {
  id: number;
  title: string;
  desc: string;
  code: string; // Kosongkan jika tanpa kode (otomatis)
  startDate: string;
  endDate: string;
  imageColor: string; // Untuk variasi warna background icon
  tags: string[]; // e.g., "Dine-in", "Gofood", "Grabfood"
  terms: string[];
};

// --- DATA DUMMY ---
const PROMOS: Promo[] = [
  {
    id: 1,
    title: "Buy 2 Get 1 Free",
    desc: "Beli Signature Toast varian apa saja, gratis 1 Aren Latte ukuran Regular.",
    code: "JULUHEMAT",
    startDate: "1 Des 2025",
    endDate: "31 Des 2025",
    imageColor: "bg-julu-orange",
    tags: ["Dine-in", "Takeaway"],
    terms: [
      "Berlaku setiap hari Senin - Jumat.",
      "Tidak dapat digabung dengan promo lain.",
      "Maksimal 1x transaksi per user per hari."
    ]
  },
  {
    id: 2,
    title: "Diskon Kopi 2K",
    desc: "Diskon khusus untuk semua menu kopi sebelum jam 10 pagi.",
    code: "MORNINGVIBE",
    startDate: "10 Des 2025",
    endDate: "20 Des 2025",
    imageColor: "bg-julu-teal",
    tags: ["Dine-in", "Apps"],
    terms: [
      "Berlaku jam 07:00 - 10:00 WIB.",
      "Hanya untuk varian Coffee Series.",
      "Tanpa minimum pembelian."
    ]
  },
  {
    id: 3,
    title: "Diskon Kopi 3K",
    desc: "Paket hemat: 1 Kopi + 1 Toast + Free Wifi 3 Jam (High Speed).",
    code: "JULUJERSEY", // Tanpa kode
    startDate: "1 Des 2025",
    // endDate: "Permanent",
    endDate: "20 Des 2025",
    imageColor: "bg-julu-yellow",
    tags: ["Dine-in Only"],
    terms: [
      "Langsung pesan di kasir.",
      "Pilihan kopi: Americano / Latte.",
      "Pilihan toast: Chocolate / Srikaya."
    ]
  }
];

export default function PromoPage() {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleCopy = (code: string, id: number) => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000); // Reset setelah 2 detik
  };

  const toggleTerms = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <main className="min-h-screen pt-24 pb-20 bg-gray-50">
      <PageHeader 
        title="Promo & Diskon" 
        description="Nikmati jajanan favoritmu dengan harga lebih hemat. Cek promo yang sedang aktif di bawah ini!" 
      />
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        {/* --- PROMO LIST --- */}
        <div className="grid gap-6 pt-5">
          {PROMOS.map((promo, idx) => (
            <FadeIn delay={idx * 100} key={idx}>
              <div key={promo.id} className="group bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row relative">
                {/* Left Side: Visual/Icon */}
                <div className={`md:w-1/4 ${promo.imageColor} p-8 flex flex-col items-center justify-center text-white relative overflow-hidden`}>
                    {/* Decorative Circles for Ticket Effect */}
                    <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-gray-50 rounded-full z-10 hidden md:block"></div>
                    
                    <Tag size={48} className="mb-4 drop-shadow-md" />
                    <div className="font-bold text-center text-lg leading-tight opacity-90">{promo.tags.join(" • ")}</div>
                </div>

                {/* Right Side: Content */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                    <div className="flex flex-col md:flex-row justify-between md:items-start gap-2 mb-2">
                        <h3 className="text-2xl font-bold text-julu-dark">{promo.title}</h3>
                        {/* Date Badge */}
                        <div className="flex items-center gap-1.5 text-xs font-semibold bg-gray-100 text-gray-600 px-3 py-1 rounded-full w-fit">
                        <Clock size={14} />
                        <span>{promo.startDate} - {promo.endDate}</span>
                        </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{promo.desc}</p>
                    </div>

                    {/* Footer Action */}
                    <div className="bg-gray-50 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 border border-gray-100 border-dashed">
                    
                    {/* Code Area */}
                    {promo.code ? (
                        <div className="flex items-center gap-3 w-full sm:w-auto">
                        <div className="flex-1 sm:flex-none">
                            <span className="text-xs text-gray-400 block mb-1">Kode Promo</span>
                            <code className="text-julu-teal font-bold text-lg tracking-wide">{promo.code}</code>
                        </div>
                        <button 
                            onClick={() => handleCopy(promo.code, promo.id)}
                            className="p-2 rounded-lg hover:bg-white hover:shadow-sm transition text-gray-500 active:scale-95"
                            title="Copy Code"
                        >
                            {copiedId === promo.id ? <Check size={20} className="text-green-500"/> : <Copy size={20}/>}
                        </button>
                        </div>
                    ) : (
                        <div className="text-sm font-bold text-gray-400 italic">
                        *Tidak perlu kode promo
                        </div>
                    )}

                    {/* Toggle T&C */}
                    <button 
                        onClick={() => toggleTerms(promo.id)}
                        className="flex items-center gap-1 text-sm font-semibold text-julu-orange hover:underline w-full sm:w-auto justify-center sm:justify-end"
                    >
                        Syarat & Ketentuan
                        {expandedId === promo.id ? <ChevronUp size={16}/> : <ChevronDown size={16}/>}
                    </button>
                    </div>

                    {/* Expanded T&C */}
                    {expandedId === promo.id && (
                    <div className="mt-4 pt-4 border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-300">
                        <h4 className="text-sm font-bold text-julu-dark mb-2 flex items-center gap-2">
                        <Info size={14}/> Detail Syarat:
                        </h4>
                        <ul className="space-y-1">
                        {promo.terms.map((term, idx) => (
                            <li key={idx} className="text-sm text-gray-500 flex items-start gap-2">
                            <span className="block w-1 h-1 bg-gray-400 rounded-full mt-2 shrink-0"></span>
                            {term}
                            </li>
                        ))}
                        </ul>
                    </div>
                    )}

                </div>
              </div>
            </FadeIn>
            
          ))}
        </div>

        {/* --- NEWSLETTER / ALERT --- */}
        <div className="mt-16 bg-julu-dark rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
           <div className="relative z-10">
             <h2 className="text-2xl md:text-3xl font-bold mb-4">Jangan Sampai Kelewatan!</h2>
             <p className="text-gray-300 mb-8 max-w-lg mx-auto">
               Promo flash sale sering muncul tiba-tiba. Follow Instagram kami agar selalu update info terbaru.
             </p>
             <a href="#" className="inline-flex items-center gap-2 bg-julu-orange text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition shadow-lg shadow-orange-900/20">
               Follow @julucode
             </a>
           </div>
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-julu-dark to-julu-dark opacity-50"></div>
        </div>

      </div>
    </main>
  );
}