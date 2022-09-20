import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import TopScrollButton from "../components/TopScrollButton";

const Home: NextPage = () => {
  const [showBtn, setShowBtn] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 400) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    return () => window.removeEventListener("scroll", handleScroll, true);
  }, []);
  console.log(showBtn);

  return (
    <div className="bg-teal-900 text-white h-full snap-y snap-mandatory overflow-y-auto  z-0">
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <div id="hero" className="snap-start">
        <Hero />
      </div>
      <div id="about" className="snap-center">
        <About />
      </div>
      <div id="experience" className="snap-center">
        <Experience />
      </div>
      <div id="skills" className="snap-center">
        <Skills />
      </div>
      <div id="projects" className="snap-start">
        <Projects />
      </div>
      <div id="contact" className="snap-start">
        <Contact />
      </div>
      <div>{showBtn && <TopScrollButton />}</div>
    </div>
  );
};

export default Home;
