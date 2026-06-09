"use client";

import { useEffect, useRef, useState } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number; // Opsi untuk delay animasi (misal: 200ms)
  className?: string; // Opsi untuk menambah class tambahan
}

export default function FadeIn({ children, delay = 0, className = "" }: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Jika elemen masuk viewport (layar)
          if (entry.isIntersecting) {
            // Set delay sedikit agar tidak kaget jika di paling atas
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            
            // Stop observe setelah muncul (agar tidak animasi ulang saat scroll naik turun)
            // Hapus baris di bawah ini jika ingin animasi berulang terus
            if (domRef.current) observer.unobserve(domRef.current);
          }
        });
      },
      { threshold: 0.1 } // Memicu saat 10% elemen terlihat
    );

    const { current } = domRef;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [delay]);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </div>
  );
}