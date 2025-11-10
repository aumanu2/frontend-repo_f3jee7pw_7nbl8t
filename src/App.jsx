import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#1f1b24] text-white font-sans">
      {/* Background gradient wash to match dark gray / lavender tone */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#2B2730] via-[#2b2433] to-[#6E5A8C] opacity-60 pointer-events-none" />

      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
