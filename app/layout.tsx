import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/layout/footer/footer";
import "./globals.css";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/layout/header/header"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Template page",
  description: "Dalloweil Team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
