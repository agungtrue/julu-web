import Link from "next/link";
import { Menu, X, Coffee, Croissant, MapPin, Instagram, Mail, ArrowRight, Star } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-julu-teal text-gray-300 py-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-3xl font-bold text-white mb-4">JULU</h3>
            <p className="text-sm leading-relaxed text-julu-cream">
              Teman terbaik untuk memulai harimu. Coffee, Snacks, and Good Vibes.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/menu" className="hover:text-julu-orange transition">Coffee Series</Link></li>
              <li><Link href="/menu" className="hover:text-julu-orange transition">Non-Coffee</Link></li>
              <li><Link href="/menu" className="hover:text-julu-orange transition">Signature Toast</Link></li>
              <li><Link href="/menu" className="hover:text-julu-orange transition">Bundling Promo</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/menu" className="hover:text-julu-orange transition">Menu</Link></li>
              <li><Link href="/promo" className="hover:text-julu-orange transition">Promo</Link></li>
              <li><Link href="/karir" className="hover:text-julu-orange transition">Karir</Link></li>
              <li><Link href="/about" className="hover:text-julu-orange transition">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Visit Us</h4>
            <div className="space-y-3 text-sm">
              {/* Maps Link */}
              <a 
                href="https://maps.google.com/?q=Julu+Coffee" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-white transition group"
              >
                <MapPin size={18} className="text-julu-orange mt-1 shrink-0 group-hover:animate-bounce"/>
                <span>Jl. Wibawa Mukti II, Jatisari, Kec. Jatiasih, <br/>Bekasi, Jawa Barat 17426</span>
              </a>

              {/* Email Link */}
              <a 
                href="mailto:hello@julucoffee.com" 
                className="flex items-center gap-3 hover:text-white transition"
              >
                <Mail size={18} className="text-julu-orange shrink-0"/>
                <span>hello@julucoffee.com</span>
              </a>

              {/* Instagram Link (FIXED) */}
              <div className="flex gap-4 mt-4">
                <a 
                  href="https://instagram.com/julu.outlet" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full hover:bg-julu-orange text-white transition cursor-pointer shadow-lg"
                  aria-label="Visit Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-julu-cream">
          &copy; {new Date().getFullYear()} JULU Coffee & Snacks. All rights reserved.
        </div>
      </div>
    </footer>
  );
}