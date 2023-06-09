import React from "react";
import { ReactComponent as PlayButton } from "../icons/play-button.svg";
function Hero() {
  return (
    <>
      <div className="flex flex-col-reverse items-center md:flex-row lg:items-end">
        <div className="pt-24 pr-8 pb-24 text-center md:pb-12 md:w-1/2 md:text-left">
          <h1 className="relative z-10 text-5xl font-bold md:text-6xl font-display">
            Get the{" "}
            <span className="relative after:content-[url(/img/decoration.svg)] after:absolute after:-bottom-2 after:-right-8 after:-z-1">
              productive
            </span>
            ways for staying active{" "}
            {/* <span className="relative after:content-[url(/img/decoration.svg)] after:absolute after:-bottom-2 after:-right-8 after:-z-1">
              productive
            </span> */}
          </h1>
          <p className="pt-8 text-lg leading-relaxed text-gray-500 md:max-w-md md:text-xl">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <div className="flex justify-center items-center pt-12 space-x-6 md:justify-start">
            <button className="flex justify-center items-center py-4 px-8 font-bold tracking-wide leading-7 text-white bg-pink-600 rounded-xl hover:shadow-xl">
              Get Started
            </button>
            <button className="flex items-center">
              <PlayButton className="drop-shadow-lg hover:drop-shadow-xl" />
              <span className="pl-4 font-bold tracking-wide">Learn More</span>
            </button>
          </div>
        </div>
        <div className="flex items-end w-1/2 border-b border-gray-400">
          <img src="/img/testsketch.svg" alt="" />
        </div>
      </div>
    </>
  );
}

export default Hero;
