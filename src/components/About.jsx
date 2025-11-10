export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-gradient-to-b from-transparent to-[#2B2730]">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl text-white">About Myself</h2>
        </div>
        <div className="md:col-span-2">
          <p className="text-zinc-300 leading-relaxed">
            I am a multidisciplinary creative with a passion for elegant, minimal design and performant web applications. My work focuses on the intersection of visuals and engineering—building experiences that feel effortless and refined.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm tracking-wider uppercase text-violet-200/90">Education</h3>
              <ul className="mt-3 space-y-2 text-zinc-300">
                <li>B.S. in Computer Science — Design Systems</li>
                <li>Certifications in UI/UX, 3D Web, and Accessibility</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm tracking-wider uppercase text-violet-200/90">Skills</h3>
              <ul className="mt-3 space-y-2 text-zinc-300">
                <li>React, TypeScript, Tailwind CSS</li>
                <li>Three.js / Spline, Framer Motion</li>
                <li>Design Systems, Prototyping, Accessibility</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
