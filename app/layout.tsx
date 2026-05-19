import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "363 Car & Social Club | Where Passion Takes the Wheel",
  description: "Secure storage, on-demand car care and exclusive member amenities. 363 puts your automotive lifestyle in the driver's seat.",
  keywords: "luxury car storage, automotive club, car enthusiasts, vehicle storage, detailing services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        
        {children}
      </body>
    </html>
  );
}