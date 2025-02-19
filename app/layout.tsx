import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "../components/main/StarBackground";
import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reem Gbr",
  description: "This is my portfolio",
  icons: {
    icon: "/74b6ee33-725e-4e09-87ed-d3c23bff61d3.jpeg", // المسار إلى الصورة الجديدة
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}