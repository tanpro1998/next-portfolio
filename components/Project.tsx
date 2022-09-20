import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Project({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="w-full h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44"
    >
      <motion.img
        initial={{
          y: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 100 }}
        src="https://images.viblo.asia/a7b4a81f-999c-478a-9f44-da71d9446fa8.jpg"
        className="w-[150px] h-[150px] md:w-[180px] md:h-[180px] lg:w-[400px] lg:h-[400px] "
      />
      <div className="space-y-10 px-0 md:px-10 max-w-6xl">
        <h4 className="text-2xl text-center font-semibold">
          <span className="underline">Case Study: </span>
          UPS clone
        </h4>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          mollitia recusandae, quaerat tenetur est at, aliquam cumque nulla sunt
          quae perferendis possimus sed illum nam quod eos ex temporibus
          doloribus porro? Ducimus ad, culpa provident fuga debitis dolor a
          molestiae nemo. Dolor molestias quasi quisquam consequatur
          repudiandae! Tempora similique quod animi repellendus! Quos animi
          laudantium ut beatae consectetur optio eaque officia fuga maiores
          laborum quasi quas porro assumenda ea, neque obcaecati magnam ipsa
          sed! Enim impedit explicabo quo illo placeat ea iste animi, quibusdam
          deserunt magnam laudantium libero vel, autem magni rem ipsa adipisci
          itaque culpa, quod provident voluptatem quos.
        </p>
      </div>
    </motion.div>
  );
}
