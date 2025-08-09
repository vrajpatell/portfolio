export default function Footer() {
  return (
    <footer className="mt-16">
      <div className="container-responsive liquid-surface rounded-t-2xl py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-300 animate-fadeIn">
        <p>© {new Date().getFullYear()} Vraj Patel. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/vrajpatell0712/" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
          <a href="https://github.com/vrajpatell" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
        </div>
      </div>
    </footer>
  );
}


