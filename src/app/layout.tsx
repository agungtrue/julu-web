import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "@/app/globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: "JULU Coffee & Snacks | Fresh Brews",
  description: "Nikmati kopi terbaik dan snack favoritmu di JULU.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${poppins.variable} font-sans bg-gray-50 text-julu-dark flex flex-col min-h-screen`}>
        {/* <Header/> */}
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}