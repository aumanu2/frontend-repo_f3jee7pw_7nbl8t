import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2B2730]/80 via-[#3a3344]/50 to-[#6E5A8C]/40 pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="py-24 md:py-32">
          <h1 className="font-serif text-5xl md:text-7xl leading-tight text-white">
            Your Name
          </h1>
          <p className="mt-6 text-zinc-200/90 max-w-xl leading-relaxed font-sans">
            Creative Developer & Designer blending technology and aesthetics to craft modern, minimalist digital experiences. Focused on performant frontends, 3D visuals, and thoughtful micro-interactions.
          </p>
          <p className="mt-6 text-sm tracking-wider uppercase text-violet-200/80">
            By hard work & determination
          </p>
        </div>
        <div className="relative hidden md:block">
          {/* Portrait placeholder area - users can replace with their own image */}
          <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
              alt="Portrait"
              className="w-full h-full object-cover grayscale contrast-110 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
