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
  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-slate-800/60 bg-slate-900/60">
      <nav className="container-responsive flex items-center justify-between h-14">
        <Link href="/" className="font-bold tracking-tight text-slate-100">
          Vraj Patel
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={
                router.pathname === href
                  ? "text-white"
                  : "hover:text-white"
              }
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <details>
            <summary className="cursor-pointer select-none">Menu</summary>
            <div className="absolute right-4 mt-2 w-48 rounded-md border border-slate-800 bg-slate-900 p-2 flex flex-col">
              {links.map(({ href, label }) => (
                <Link key={href} href={href} className="px-2 py-1 rounded hover:bg-slate-800">
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



