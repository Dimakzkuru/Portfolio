import { HERO_CONTENT } from "../constants/index.js";
import Type from "./Type.jsx";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-medium tracking-tight lg:mt-16 lg:text-8xl">
              Michael Dimakiling
            </h1>
            <span>
              <Type className="text-red-800" />
            </span>
            <p>{HERO_CONTENT}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
