import { Mail } from 'lucide-react';
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import FadeIn from "@/components/styles/FadeIn";

export const metadata: Metadata = {
  title: "JULU Coffee & Snacks | Fresh Brews",
  description: "Karir di JULU.",
};

export default function CareerPage() {
  return (
    <main className="min-h-screen pt-15 pb-10 bg-white">
      <PageHeader 
        title="Bergabung dengan Tim JULU" 
        description="Kami selalu mencari individu yang bersemangat, ramah, dan mencintai dunia F&B. 
        Apakah itu kamu?" 
      />
      <div className="container mx-auto px-4 md:px-8 max-w-4xl pt-5">
        {/* Culture Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-julu-teal mb-3">Tumbuh Bersama</h3>
              <p className="text-gray-600 text-sm">Di JULU, kami tidak hanya bekerja, tapi belajar. Kami menyediakan training barista dan kitchen untuk meningkatkan skillmu.</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-julu-teal mb-3">Lingkungan Positif</h3>
              <p className="text-gray-600 text-sm">Kami mengutamakan rasa kekeluargaan dan saling support antar anggota tim. No toxic workplace here!</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-julu-dark mb-6">Lowongan Tersedia</h2>
        
        {/* Job Listing */}
        <div className="space-y-4">
          {[
            { role: "Full-time Barista", loc: "Bekasi Timur", type: "Full Time", exp: "Min. 1 Tahun" },
            { role: "Kitchen Crew", loc: "Bekasi Timur", type: "Full Time/Part Time", exp: "Tanpa Pengalaman OK" },
            { role: "Social Media Intern", loc: "Remote / Hybrid", type: "Internship", exp: "Mahasiswa Akhir" }
          ].map((job, idx) => (
            <FadeIn delay={idx * 100} key={idx}>
              <div key={idx} className="border border-gray-200 p-6 rounded-2xl flex flex-col md:flex-row justify-between items-center hover:border-julu-teal transition bg-white shadow-sm">
                <div className="mb-4 md:mb-0 text-center md:text-left">
                    <h3 className="font-bold text-lg text-julu-dark">{job.role}</h3>
                    <div className="flex gap-3 text-sm text-gray-500 mt-1 justify-center md:justify-start">
                      <span>{job.loc}</span> • <span>{job.exp}</span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold uppercase">{job.type}</span>
                    <button className="bg-julu-dark text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-julu-orange transition">
                      Apply
                    </button>
                </div>
              </div>
            </FadeIn>
            
          ))}
        </div>

        {/* CTA General Application */}
        {/* <div className="mt-16 text-center bg-julu-teal/5 p-8 rounded-3xl border border-julu-teal/20">
          <h3 className="font-bold text-lg mb-2">Posisi yang kamu cari tidak ada?</h3>
          <p className="text-gray-600 mb-6 text-sm">Kirim CV kamu ke database kami, kami akan menghubungi jika ada lowongan yang cocok.</p>
          <a href="mailto:hrd@julu.id" className="inline-flex items-center gap-2 text-julu-teal font-bold hover:underline">
            <Mail size={18}/> Kirim ke hrd@julu.id
          </a>
        </div> */}

      </div>
    </main>
  );
}