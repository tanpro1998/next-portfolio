import React from "react";

type Props = {};

export default function TopScrollButton({}: Props) {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return <button className="fixed bottom-40 right-10 p-2 border z-50 transition duration-300 hover:bg-white hover:text-black ease-in-out" onClick={goToTop}>Go To Top</button>;
}
