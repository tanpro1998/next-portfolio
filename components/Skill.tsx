import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionTop?: boolean;
  src: string;
  rate: string;
};

export default function Skill({ directionTop, src, rate }: Props) {
  return (
    <div className="relative group flex cursor-pointer">
      <motion.img
        initial={{
          y: directionTop ? 200 : -200,
          opacity: 0,
        }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        src={src}
        className="w-24 h-24 md:w-28 md:h-28 rounded-full xl:w-32 xl:h-32 filter border border-gray-500 group-hover:grayscale transition duration-300 ease-in-out object-cover "
      />
      <div className="absolute w-24 h-24 rounded-full opacity-0 group-hover:opacity-80 md:-h-28 md:w-28 xl:h-32 xl:w-32 transition duration-300 ease-in-out group-hover:bg-white z-0 ">
        <div className="h-full flex items-center justify-center">
          <p className="text-black font-bold text-3xl opacity-100">{rate}</p>
        </div>
      </div>
    </div>
  );
}
