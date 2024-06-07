// app/layout.js
import { Inter } from "next/font/google";
import "./globals.css"; // Ensure your global styles are imported correctly
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GVS",
  description: "for the pleasure of guru and gauranga",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       
        <main>{children}</main>
        
      </body>
    </html>
  );
}
