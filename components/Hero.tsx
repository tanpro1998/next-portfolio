/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
  const [text, setText] = useTypewriter({
    words: ["Hi, My name is Tan", "I'm front end developer", "24 years old"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/273301925_664914081311894_2335935164305714610_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=COh7ehe-8KUAX_86Nq0&_nc_ht=scontent.fsgn8-4.fna&oh=00_AT-lqJJoSXUXC4Ae-HXqZUnH66aRHusTlCo9JLqEw1OLkQ&oe=632F3790"
        alt=""
        className="relative rounded-full w-32 h-32 object-cover mx-auto"
      />
      <div className="z-20">
        <h1 className="text-2xl lg:text-3xl px-10">
          <p className="text-gray-500 uppercase  pb-2 tracking-[15px] font-bold">
            Software Developer
          </p>
          <span className="text-red-400">{text}</span>
          <Cursor cursorColor="teal" />
        </h1>
        <div className="pt-2">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
