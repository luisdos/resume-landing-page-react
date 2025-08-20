import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react"

export default function App() {
  return (
    <div
      className="
      min-h-screen
      bg-white text-slate-900
      dark:text-slate-100
      dark:[background:radial-gradient(1200px_600px_at_80%_-10%,rgba(124,156,255,.15),transparent_60%),_radial-gradient(1000px_600px_at_-10%_20%,rgba(109,240,194,.10),transparent_60%),_#0b0f17]
      pt-20 md:pt-24"
    >
      <a href="#contacto" className="sr-only">
        Skip to contact
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}
