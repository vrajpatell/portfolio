export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-800/60">
      <div className="container-responsive py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
        <p>© {new Date().getFullYear()} Vraj Patel. All rights reserved.</p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/vrajpatell0712/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/vrajpatell"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}


