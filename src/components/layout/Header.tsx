"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Menu', href: '/menu' },
    { name: 'Promo', href: '/promo' },
    { name: 'Karir', href: '/karir' },
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 h-20 flex items-center">
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between w-full">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-3xl font-extrabold tracking-tighter text-julu-orange">JULU</span>
          <span className="text-sm font-semibold text-julu-teal hidden sm:block">COFFEE & SNACKS</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 font-medium">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`transition hover:text-julu-orange ${pathname === link.href ? 'text-julu-orange font-bold' : 'text-gray-600'}`}
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-julu-orange text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition shadow-lg shadow-orange-200">
            Order Now
          </button>
        </div>

        {/* Mobile Button */}
        <button className="md:hidden text-julu-dark" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-b shadow-lg flex flex-col p-4 space-y-4 md:hidden">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 font-medium hover:text-julu-orange"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}