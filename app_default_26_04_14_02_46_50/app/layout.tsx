import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: '--font-montserrat',
  weight: ['300', '400', '600'] 
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  variable: '--font-cormorant',
  weight: ['300', '400', '500'] 
});

export const metadata: Metadata = {
  title: "B Twelve | Ultra-Premium Wellness",
  description: "Curated energy for the modern spirit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${cormorant.variable} bg-bt-cream text-bt-charcoal antialiased`}>
        {children}
      </body>
    </html>
  );
}
