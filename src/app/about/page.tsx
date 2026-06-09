import { Coffee } from 'lucide-react';
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/styles/FadeIn";

export const metadata: Metadata = {
  title: "JULU Coffee & Snacks | Fresh Brews & Toast",
  description: "Tetang JULU Coffee",
};

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen pt-15">
        {/* Header Image / Title */}
        <PageHeader 
          title="Tentang Kami" 
          description="Kami membantu bisnis Anda berkembang dengan teknologi tepat guna." 
        />

        {/* Story Section */}
        <section className="py-15">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">

              <FadeIn delay={100}>
                <h2 className="text-3xl font-bold text-julu-teal mb-6">Lebih dari Sekadar Kopi</h2>
              </FadeIn>
              <FadeIn delay={200}>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Perjalanan JULU dimulai pada tahun 2023 di sebuah garasi kecil di Bekasi. Kami menyadari bahwa orang-orang membutuhkan tempat persinggahan yang tidak hanya menyajikan kafein, tetapi juga "comfort food" yang praktis.
                </p>
              </FadeIn>
              <FadeIn delay={300}>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Kombinasi Kopi Susu Aren kami yang khas dan Roti Panggang (Toast) tebal menjadi favorit warga lokal. Kami percaya kualitas tidak harus mahal, dan kenyamanan adalah hak segala bangsa.
                </p>
              </FadeIn>
            </div>
            <div className="order-1 md:order-2 bg-gray-200 h-[400px] rounded-3xl rotate-3 hover:rotate-0 transition duration-500 shadow-xl flex items-center justify-center">
                <span className="text-gray-400 font-bold">Foto Interior / Owner</span>
            </div>
          </div>
        </section>

        {/* Stats / Fun Facts */}
        <section className="py-16 bg-julu-cream">
          <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { num: "15+", label: "Varian Menu" },
                { num: "5000+", label: "Cup Terjual" },
                { num: "2", label: "Lokasi Cabang" },
                { num: "100%", label: "Senyum Pelanggan" },
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="text-4xl font-extrabold text-julu-teal mb-2">{stat.num}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
          </div>
        </section>
      </main>
    </>
  );
}