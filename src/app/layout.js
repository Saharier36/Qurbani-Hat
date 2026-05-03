import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/layout/Navbar";
import Footer from "@/layout/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "QurbaniHat - Your trusted Qurbani marketplace",
  description: "Your trusted Qurbani marketplace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className={`${inter.className} min-h-full flex flex-col bg-[#F7F1E1]`}
      >
        <Toaster position="top-center" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
