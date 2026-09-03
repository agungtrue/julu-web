"use client";
import React, { useState } from 'react';
// import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/styles/FadeIn";

// Data bisa dipindah ke file terpisah / database nanti
const MENU_ITEMS = [
  { id: 1, name: "Aren Latte", category: "Coffee", price: "22K", desc: "Espresso, gula aren asli, fresh milk.", image: "/path/img" },
  { id: 2, name: "Caramel Latte", category: "Coffee", price: "28K", desc: "Vanilla syrup, steamed milk, espresso, caramel.", image: "/path/img" },
  { id: 3, name: "Americano", category: "Coffee", price: "18K", desc: "Espresso shot dengan air mineral segar.", image: "/path/img" },
  { id: 4, name: "Matcha Latte", category: "Non-Coffee", price: "25K", desc: "Premium matcha dengan sedikit sentuhan espresso.", image: "/path/img" },
  { id: 5, name: "Chocolate Signature", category: "Non-Coffee", price: "24K", desc: "Dark chocolate ganache dengan fresh milk.", image: "/path/img" },
  { id: 8, name: "French Fries", category: "Snacks", price: "20K", desc: "Kentang goreng renyah dengan bumbu spesial.", image: "/path/img" },
];

const CATEGORIES = ["All", "Coffee", "Non-Coffee", "Snacks"];

// export const metadata: Metadata = {
//   title: "JULU Coffee & Snacks | Fresh Brews & Toast",
//   description: "Menu kopi terbaik dan snack favoritmu di JULU.",
// };

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredMenu = activeCategory === "All" 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <main className="min-h-screen pt-15 pb-20 bg-gray-50">
      <PageHeader 
          title="Menu Kami" 
          description="Setiap resep diracik dengan presisi untuk menghasilkan rasa yang konsisten. Temukan favorit barumu di sini." 
        />
      <div className="container mx-auto px-4 md:px-8">
        {/* Filter Tabs */}
        <div className="sticky top-20 bg-gray-50/95 backdrop-blur py-4 z-30 mb-8 flex justify-center">
          <div className="flex flex-wrap justify-center gap-3 bg-white p-2 rounded-full shadow-sm border border-gray-100">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === cat 
                  ? 'bg-julu-teal text-white shadow-md' 
                  : 'text-gray-500 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMenu.map((item, idx) => (
            <FadeIn delay={idx * 100} key={idx}>
              <div key={item.id} className="bg-white rounded-3xl p-4 border border-gray-100 hover:border-julu-orange/50 hover:shadow-xl transition-all group">
                <div className="h-40 bg-gray-100 rounded-2xl mb-4 overflow-hidden relative">
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">Image</div>
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-julu-teal text-lg group-hover:text-julu-orange transition">{item.name}</h3>
                  <span className="font-bold text-julu-teal bg-teal-50 px-2 py-1 rounded-lg text-sm">{item.price}</span>
                </div>
                <p className="text-xs text-gray-500 mb-4 h-10">{item.desc}</p>
                {/* <button className="w-full py-2 rounded-xl bg-julu-orange text-white font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Pesan Sekarang
                </button> */}
              </div>
            </FadeIn>
            
          ))}
        </div>
      </div>
    </main>
  );
}