import React from 'react';
import { Hero } from './components/Hero';
import { TechMarquee } from './components/TechMarquee';
import { Projects } from './components/Projects';
import { Journey } from './components/Journey';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-midnight w-full overflow-x-hidden">
      <Hero />
      <TechMarquee />
      <Projects />
      <Journey />
      <Footer />
    </main>
  );
};

export default App;