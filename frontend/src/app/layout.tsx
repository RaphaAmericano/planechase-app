import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StyledComponentsRegistry from "@/lib/registry";
import Toast from "@/components/Toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Planechase App",
  description: "Planechase App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="cyberpunk">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Navbar />
          {children}
          <Toast />
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
