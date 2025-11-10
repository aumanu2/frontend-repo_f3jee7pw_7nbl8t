export default function Contact() {
  return (
    <footer id="contact" className="relative py-16 md:py-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
          <div className="text-left w-full">
            <h3 className="font-serif text-2xl text-white">Let's Connect</h3>
            <p className="mt-2 text-zinc-400">Open for collaborations and new opportunities.</p>
          </div>
          <ul className="flex items-center gap-6 md:gap-8 w-full md:w-auto justify-end">
            <li>
              <a href="mailto:your.email@gmail.com" className="text-zinc-300 hover:text-white border-b border-transparent hover:border-violet-300 transition-colors">Gmail</a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-white border-b border-transparent hover:border-violet-300 transition-colors">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-white border-b border-transparent hover:border-violet-300 transition-colors">GitHub</a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-white border-b border-transparent hover:border-violet-300 transition-colors">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
