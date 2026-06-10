import type { Metadata } from "next";
import Image from 'next/image';
import Link from 'next/link';
import FadeIn from "@/components/styles/FadeIn";
import { ArrowRight, Coffee, ShieldCheck, Clock, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: "JULU Coffee & Snacks | Fresh Brews & Toast",
  description: "Nikmati kopi terbaik dan snack favoritmu di JULU.",
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "name": "JULU Coffee & Snacks",
    "image": [
      "https://julucoffee.com/images/logo.jpg", 
      "https://julucoffee.com/images/hero-coffee.jpg"
    ],
    "@id": "https://julucoffee.com",
    "url": "https://julucoffee.com",
    "telephone": "+6287769675686", // Ganti dengan nomor WA bisnis
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Wibawa Mukti II, Jatisari, Kec. Jatiasih",
      "addressLocality": "Bekasi",
      "addressRegion": "Jawa Barat",
      "postalCode": "17426",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -6.350673465336665, // Cek Google Maps, ambil koordinat yang akurat
      "longitude": 106.94006067575161
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "10:00",
        "closes": "22:00"
      }
    ],
    "menu": "https://julucoffee.com/menu",
    "servesCuisine": "Coffee, Matcha, Dimsum, Snacks",
    "priceRange": "$$2"
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Inject Schema ke Head */}
      <script
        id="julu-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* --- HERO (Sama seperti sebelumnya, dipersingkat) --- */}
      <section className="py-5 md:py-10 lg:py-10 bg-julu-cream relative overflow-hidden">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
          
          <div className="space-y-6">
            <FadeIn delay={100}>
              <span className="text-julu-dark font-bold tracking-wide uppercase text-sm">Welcome to Julu</span>
              <h1 className="text-5xl md:text-7xl font-bold text-julu-dark leading-tight">
                Kopi? <br/><span className="text-julu-teal">Ngopi aja </span> <span className="text-julu-orange">JULU!</span>
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-lg text-gray-600 max-w-md">
                Temukan rasa pekat dan nyaman dalam setiap tegukan. Freshly brewed everyday!.
              </p>
            </FadeIn>
            
            <div className="flex gap-4">
            <FadeIn delay={300}>
              <Link href="/menu" className="bg-julu-teal text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-orange-600 transition">
                Lihat Menu
              </Link>
            </FadeIn>

            <FadeIn delay={400}>
              <Link href="/about" className="px-8 py-3 rounded-full font-bold text-julu-teal border-2 border-julu-teal hover:bg-teal-50 transition">
                  Tentang Kami
              </Link>
            </FadeIn>
            </div>
          </div>
          {/* Placeholder Image Hero */}
          <div className="relative">
             <div className="relative z-10 bg-gradient-to-tr from-julu-teal to-teal-400 rounded-[3rem] p-2 rotate-3 shadow-2xl">
                <div className="bg-gray-100 rounded-[2.5rem] overflow-hidden h-[400px] w-full flex items-center justify-center relative">
                   {/* Simulasi Gambar */}
                   <div className="text-center p-8">
                     <Coffee size={80} className="text-gray-300 mx-auto mb-4" />
                     <p className="text-gray-400 font-bold">Foto Hero Product (Kopi & Roti)</p>
                   </div>
                </div>
             </div>
             {/* Decorative Elements */}
             <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-2xl shadow-lg z-20 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="bg-julu-yellow p-2 rounded-full text-white">
                  <Star size={20} fill="white" />
                </div>
                <div>
                  <p className="font-bold text-sm">Best Seller</p>
                  <p className="text-xs text-gray-500">Palm Sugar Latte</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- VALUE PROPOSITION (New Informative Section) --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl font-bold text-julu-dark">Kenapa Harus <span className="text-julu-orange">JULU?</span></h2>
          <p className="text-gray-500 mt-2">Bukan sekadar kedai kopi biasa, ini komitmen kami.</p>
        </div>
        
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[
            { icon: <Coffee size={40}/>, title: "House Blend Lokal", desc: "Kami mendukung petani lokal dengan menggunakan biji kopi pilihan dari dataran tinggi Indonesia." },
            { icon: <ShieldCheck size={40}/>, title: "Bahan Premium & Halal", desc: "Semua bahan yang kami gunakan terjamin kualitas dan kehalalannya. Tanpa pengawet buatan." },
            { icon: <Clock size={40}/>, title: "Camilan Asik", desc: "Tersedia Dimsum, Kentang Goreng dan Iced Cream" }
          ].map((feature, idx) => (
            <FadeIn delay={400} key={idx}>
              <div key={idx * 100} className="bg-gray-50 p-8 rounded-3xl hover:bg-julu-cream hover:shadow-xl transition border border-transparent hover:border-gray-100">
                <div className="w-16 h-16 bg-julu-yellow/20 text-julu-orange rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-julu-dark text-center">{feature.title}</h3>
                <p className="text-gray-500 text-center leading-relaxed">{feature.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* --- BEST SELLER TEASER --- */}
      {/* <section className="py-20 bg-julu-teal text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-bold mb-4">Wajib Coba Bulan Ini</h2>
            <p className="text-teal-100 mb-8">Menu favorit para Julu-friends yang selalu sold out lebih awal.</p>
            <Link href="/menu" className="inline-flex items-center gap-2 text-julu-yellow font-bold hover:gap-4 transition-all">
              Lihat Semua Menu <ArrowRight size={20}/>
            </Link>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-2xl flex items-center gap-4 text-julu-dark shadow-lg transform hover:-translate-y-2 transition">
              <div className="w-20 h-20 bg-gray-200 rounded-xl shrink-0"></div>
              <div>
                <h4 className="font-bold text-lg">Aren Latte</h4>
                <p className="text-sm text-gray-500">Creamy & Strong</p>
                <p className="font-bold text-julu-orange mt-1">22K</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl flex items-center gap-4 text-julu-dark shadow-lg transform hover:-translate-y-2 transition">
              <div className="w-20 h-20 bg-gray-200 rounded-xl shrink-0"></div>
              <div>
                <h4 className="font-bold text-lg">Spicy Tuna Toast</h4>
                <p className="text-sm text-gray-500">Savory & Hot</p>
                <p className="font-bold text-julu-orange mt-1">28K</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* --- TESTIMONIALS (Social Proof) --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold mb-12 text-julu-dark">Kata Mereka</h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {[1, 2, 3].map((i) => (
               <div key={i} className="p-6 border border-gray-100 rounded-2xl text-left bg-gray-50">
                 <div className="flex text-julu-yellow mb-4"><Star fill="currentColor"/><Star fill="currentColor"/><Star fill="currentColor"/><Star fill="currentColor"/><Star fill="currentColor"/></div>
                 <p className="text-gray-600 mb-4 italic">"Tempatnya asik banget buat WFC, kopinya pas ga bikin kembung, ada Iced cream juga!"</p>
                 <div className="font-bold text-julu-dark">- Pelanggan Happy {i}</div>
               </div>
             ))}
           </div>
        </div>
      </section>
    </main>
  );
}