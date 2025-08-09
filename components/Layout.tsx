import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main" className="sr-only focus:not-sr-only fixed top-2 left-2 z-50 bg-black/80 text-white px-3 py-2 rounded">Skip to main content</a>
      <Navbar />
      <main id="main" tabIndex={-1} className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}


