import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { JoeFloatingButton } from "@/components/joe/joe-floating-button";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JWEBLY | AI Systems That Think Like Your Team",
  description: "We build AI systems that become part of your team — custom solutions trained on your data, integrated into your operations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
        <JoeFloatingButton />
      </body>
    </html>
  );
}

