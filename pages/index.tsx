import type { NextPage } from "next";
import Head from "next/head";
import Header from "./../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "./../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "./../components/Contact";
import WIP from "./../components/WIP";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-x-hidden scroll-smooth">
      <Head>
        <title>Portfolio - Mrinal</title>
        <meta name="description" content="Created by Mrinal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WIP />
      <Header />
      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
