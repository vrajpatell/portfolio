import Link from "next/link";
import { useRouter } from "next/router";

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
      <nav aria-label="Primary" className="container-responsive liquid-surface flex items-center justify-between h-14 rounded-b-2xl px-4 animate-fadeIn transition-[backdrop-filter,height] duration-300 supports-[backdrop-filter]:backdrop-blur-md will-change-transform">
        <Link href="/" className="font-bold tracking-tight text-slate-100">
          Vraj Patel
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm text-slate-200">
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
        </div>
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


