import { HERO_CONTENT } from "../constants/index.js";
import Type from "./Type.jsx";
import heroPhoto from "../assets/HeroPhoto.png";
import { useSpring, animated } from "@react-spring/web";

const Hero = () => {
  // Animation for the heading
  const headingAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(-50px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 280, friction: 60 },
    delay: 200,
  });

  // Animation for the Type component
  const typeAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { tension: 280, friction: 60 },
    delay: 400,
  });

  // Animation for the paragraph
  const paragraphAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { tension: 280, friction: 60 },
    delay: 600,
  });

  // Animation for the image
  const imageAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 280, friction: 60 },
    delay: 800,
  });

  return (
    <div className="border-b dark:border-neutral-900 border-white pb-28 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <animated.span style={typeAnimation}>
              <Type className="text-red-800" />
            </animated.span>
            <animated.h1
              className="pb-2 text-5xl font-bold tracking-tight lg:text-5xl"
              style={headingAnimation}
            >
              Hello, My Name is
              <br />
              <span className="bg-gradient-to-r from-red via-slate-700 to-red text-transparent bg-clip-text">
                Michael Dimakiling
              </span>
            </animated.h1>

            <animated.p style={paragraphAnimation} className="mt-16 text-lg">
              {HERO_CONTENT}
            </animated.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <animated.div className="flex justify-center" style={imageAnimation}>
            <img src={heroPhoto} alt="profilePic" className="size-9/12 top-2" />
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
