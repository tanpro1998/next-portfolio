import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

export default function Skills({}: Props) {
  return (
    <div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0 justify-center items-center mx-auto">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-gray-200 ">
        Skills
      </h3>
      <h4 className="absolute top-36 text-gray-300 text-sm tracking-[5px] uppercase">
        Over All Skills
      </h4>
      <div className="grid grid-cols-4 gap-5">
        <Skill
          rate="100%"
          src="https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw"
          directionTop={true}
        />
        <Skill
          rate="80%"
          src="https://play-lh.googleusercontent.com/RTAZb9E639F4JBcuBRTPEk9_92I-kaKgBMw4LFxTGhdCQeqWukXh74rTngbQpBVGxqo"
          directionTop={true}
        />
        <Skill
          rate="70%"
          src="https://techvccloud.mediacdn.vn/2018/11/23/js-15429579443112042672363-crop-1542957949936317424252.png"
          directionTop={true}
        />
        <Skill
          rate="50%"
          src="https://techblog.istyle.co.jp/wp-content/uploads/2021/12/typescript.png"
          directionTop={true}
        />
        <Skill
          rate="60%"
          src="https://static.frontendmasters.com/resources/TBA-tailwind-css/thumb.webp"
        />
        <Skill rate="80%" src="https://reactjs.org/logo-og.png" />
        <Skill rate="60%" src="https://mui.com/static/logo.png" />
        <Skill
          rate="60%"
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
        />
      </div>
    </div>
  );
}
