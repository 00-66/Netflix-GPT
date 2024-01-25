import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-20 absolute text-white bg-gradient-to-r from-black">

      <h1 className="text-2xl md:text-5xl font-bold">{title}</h1>

      <p className="hidden md:inline-block py-6 w-1/4">{overview}</p>

      <div className="flex my-2 md:my-4 ">

        <button className="bg-white text-black pl-3 pr-4 md:pr-8 md:pl-6 rounded-md flex items-center hover:bg-gray-200">
          <BsFillPlayFill className="text-lg md:text-4xl md:mx-1" />
          <span className="font-semibold text-sm md:text-lg">Play</span>
        </button>

        <button className="bg-gray-700 ml-2 md:ml-4 py-1 md:py-2 md:px-8 px-3 rounded-md flex items-center hover:bg-gray-600">
          <AiOutlineInfoCircle className="text-lg md:text-2xl md:mx-1 text-white" />{" "}
          <span className="font-normal md:font-bold mx-1 text-sm md:text-base">
            More Info
          </span>
        </button>

      </div>
    </div>
  );
};

export default VideoTitle;