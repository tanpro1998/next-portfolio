import Image from "next/image";
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
        src="https://occ-0-1380-2164.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABe6zfwssiZgXm8vKzBuLG9tnODSn6mfMGjP4oJcGIfrGhK2m09jCgou4x3wQk2G0lrNQm6uYMbdILnFpk5PlDhhDTAZrAfC3-0Dr.jpg?r=1d1"
        alt=""
        className="relative rounded-full w-32 h-32 object-cover mx-auto"
      />
      <div>
        <h1>
          <span>{text}</span>
          <Cursor cursorColor="teal" />
        </h1>
      </div>
    </div>
  );
}
