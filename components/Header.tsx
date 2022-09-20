import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="flex items-center justify-between sticky p-4 top-0 max-w-7xl mx-auto z-20">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <div>
          <SocialIcon
            url="https://facebook.com/in/jaketrent"
            fgColor="gray"
            bgColor="transparent"
            className="hover:scale-150 transition-all duration-300"
          />
          <SocialIcon
            url="https://youtube.com/in/jaketrent"
            fgColor="gray"
            bgColor="transparent"
            className="hover:scale-150 transition-all duration-300"
          />
          <SocialIcon
            url="https://instagram.com/in/jaketrent"
            fgColor="gray"
            bgColor="transparent"
            className="hover:scale-150 transition-all duration-300"
          />
          <SocialIcon
            url="https://twitter.com/in/jaketrent"
            fgColor="gray"
            bgColor="transparent"
            className="hover:scale-150 transition-all duration-300"
          />
        </div>
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <div className="flex items-center cursor-pointer">
          <SocialIcon fgColor="gray" bgColor="transparent" network="email" />
          <p className="capitalize hidden md:inline-flex text-sm text-gray-400">
            get in touch
          </p>
        </div>
      </motion.div>
    </header>
  );
}
