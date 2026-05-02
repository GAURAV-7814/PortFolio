import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { About } from "@/components/portfolio/About";
import { Work } from "@/components/portfolio/Work";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { useReveal } from "@/hooks/useReveal";
import { useEffect } from "react";

const Index = () => {
  useReveal();
  useEffect(() => {
    document.title = "Gaurav Garg - Software Engineer · Full Stack, Data & AI";
    const meta = document.querySelector('meta[name="description"]') ?? document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute(
      "content",
      "Portfolio of Gaurav Garg - Software Engineer building scalable full-stack systems, data pipelines, and AI products with React, Databricks, and LangChain."
    );
    document.head.appendChild(meta);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Work />
      <Experience />
      <Contact />
    </main>
  );
};

export default Index;
