// app/layout.js
import { Inter, Montserrat, Roboto } from "next/font/google";
import "./globals.css"; // Ensure your global styles are imported correctly

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: 'swap',
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata = {
  title: "GVS",
  description: "for the pleasure of guru and gauranga",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-inter`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
