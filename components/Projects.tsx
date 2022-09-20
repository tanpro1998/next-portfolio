import React from "react";
import Project from "./Project";

type Props = {};

export default function Projects({}: Props) {
  return (
    <div className="h-screen flex flex-col md:flex-row text-left relative justify-evenly items-center overflow-hidden mx-auto z-0 max-w-full ">
      <h3 className="absolute top-24 tracking-[20px] uppercase text-gray-200 text-2xl ">
        Projects
      </h3>
      <div className="w-full relative flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 ">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}
