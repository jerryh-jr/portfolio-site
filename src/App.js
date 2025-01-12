import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

export default function App() {
  return (
      <div className="text-gray-50 bg-mainColor font-serif">
        <Hero/>
        <section className="h-auto mx-auto text-center pt-10 text-black sm:text-xl lg:text-2xl">
          <Projects />
        </section>
        <About />
        <Contact />
      </div>
  )
};
