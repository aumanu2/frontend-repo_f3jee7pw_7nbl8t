import { useRef, useState } from 'react';

function ProjectCard({ title, description, fileUrl, onFileChange }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 transition-all duration-300 hover:bg-white/[0.08]">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h4 className="font-serif text-2xl text-white transition-transform duration-300 group-hover:translate-x-1">{title}</h4>
          <p className="mt-2 text-zinc-300 text-sm leading-relaxed">{description}</p>
        </div>
        {fileUrl ? (
          <a href={fileUrl} target="_blank" rel="noreferrer" className="text-violet-200 underline underline-offset-4">Open</a>
        ) : (
          <span className="text-zinc-400 text-xs">No file</span>
        )}
      </div>
      <div className="mt-5">
        <label className="inline-flex items-center gap-3 text-sm text-zinc-200 cursor-pointer">
          <input type="file" className="hidden" onChange={onFileChange} />
          <span className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors">Upload image/PDF</span>
        </label>
      </div>
    </div>
  );
}

export default function Projects() {
  const [files, setFiles] = useState({});
  const handleChange = (idx) => (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setFiles((prev) => ({ ...prev, [idx]: url }));
  };

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-white">5 Most Recent Works</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <ProjectCard
              key={i}
              title={`Project ${i + 1}`}
              description="A concise description of the project highlighting purpose and role."
              fileUrl={files[i]}
              onFileChange={handleChange(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
