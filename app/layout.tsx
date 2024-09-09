import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/layout/footer/footer";
import "./global.css";
import dynamic from "next/dynamic";
import ThemeProvider from "@/components/theme-provider";

const Header = dynamic(() => import("@/components/layout/header/header"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dalloweil front-end template",
  description: "Dalloweil Team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
