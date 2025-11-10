import { useCallback } from 'react';

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const handleNav = useCallback((e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => handleNav(e, 'home')}
          className="text-sm tracking-widest uppercase text-violet-200/80 hover:text-white transition-colors"
        >
          Portfolio
        </a>
        <ul className="flex items-center gap-8">
          {LINKS.map((l) => (
            <li key={l.id} className="group">
              <a
                href={`#${l.id}`}
                onClick={(e) => handleNav(e, l.id)}
                className="relative text-sm text-zinc-200 hover:text-white transition-colors pb-1"
              >
                {l.label}
                <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-violet-300 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
