import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto  ">
      <h3 className="text-2xl uppercase text-gray-200 tracking-[20px] absolute top-24">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/273301925_664914081311894_2335935164305714610_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=COh7ehe-8KUAX_86Nq0&_nc_ht=scontent.fsgn8-4.fna&oh=00_AT-lqJJoSXUXC4Ae-HXqZUnH66aRHusTlCo9JLqEw1OLkQ&oe=632F3790"
        className="h-60 w-60 sm:mt-20 md:mt-0 rounded-full object-cover -mb-20 md:mb-0 flex-shrink-0 md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-xl text-blue-200">Background</h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          nobis velit unde, rem quam iure vel eveniet maxime omnis officiis
          laboriosam explicabo ipsam vero qui similique dolorum dolor earum
          placeat, at magni? Reprehenderit, cupiditate voluptas. Sequi odio eos
          perferendis. Quam, a est rem fugiat beatae, laborum non temporibus in
          repellat consequatur, nobis vitae quaerat adipisci error nam
          inventore. A praesentium fuga asperiores, nobis itaque nihil
          cupiditate modi, magni voluptas vel aperiam autem. Quod dolorem dicta
          ipsum porro facere, commodi quis quibusdam aliquam nostrum error iste
          corrupti cupiditate unde quasi autem magnam? Corporis recusandae
          tempore nemo deserunt quos animi commodi. Totam!
        </p>
      </div>
    </div>
  );
}
