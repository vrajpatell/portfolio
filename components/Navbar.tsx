import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const router = useRouter();
  const isActive = (href: string) => {
    if (href === "/") return router.pathname === "/";
    return router.pathname.startsWith(href);
  };
  return (
    <header className="sticky top-0 z-40">
      <nav aria-label="Primary" className="container-responsive liquid-surface flex items-center justify-between h-14 rounded-b-2xl px-4 transition-[backdrop-filter,height] duration-300 supports-[backdrop-filter]:backdrop-blur-md will-change-transform">
        <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <Link href="/" className="font-bold tracking-tight text-slate-100">
            Vraj Patel
          </Link>
        </motion.div>
        <motion.div className="hidden md:flex items-center gap-6 text-sm text-slate-200" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.4 }}>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={isActive(href) ? "page" : undefined}
              className={isActive(href) ? "text-white" : "hover:text-white"}
            >
              {label}
            </Link>
          ))}
        </motion.div>
        <div className="md:hidden">
          <details>
            <summary className="cursor-pointer select-none">Menu</summary>
            <div className="absolute right-4 mt-2 w-48 rounded-md glass p-2 flex flex-col">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  aria-current={isActive(href) ? "page" : undefined}
                  className={`px-2 py-1 rounded ${isActive(href) ? "bg-slate-800 text-white" : "hover:bg-slate-800"}`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}


