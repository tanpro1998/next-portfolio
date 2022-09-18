import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className="bg-black text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <div id="hero" className="snap-center">
        <Hero />
      </div>
    </div>
  );
};

export default Home;
