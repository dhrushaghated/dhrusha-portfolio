import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Capabilities from './components/Capabilities';
import Path from './components/Path';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <main className="bg-[var(--color-bg)] min-h-screen text-[var(--color-ink)]">
      <Navbar />
      <Hero />
      <Work />
      <Capabilities />
      <Path />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
