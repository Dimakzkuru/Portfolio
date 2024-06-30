import { BsPersonCircle } from "react-icons/bs";
import AboutMe from "../assets/AboutMe3.png";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <div className="border-b border-white dark:border-neutral-900 pb-4">
      <h2
        className="my-20 flex items-center justify-center
       text-2xl font-semibold"
      >
        <BsPersonCircle className="mr-2" />
        About&nbsp;
        <span className="text-neutral-300 dark:text-black"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="">
            <img src={AboutMe} alt="aboutMe" className="" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center flex-col text-white dark:text-slate-600">
            <div className="container border-solid font-bold border-4 rounded-full h-12 flex justify-around">
              <button className="bg-rose-300 rounded-full w-full p-2">
                Skills and Technologies
              </button>
              <button className="bg-green-400 rounded-full w-full p-2">
                Personal Information
              </button>
            </div>
            <div className="flex flex-wrap mt-12 items-start justify-around gap-16 ">
              <div className="rounded-2xl border-4 p-2 border-neutral-600 bg-white">
                <FaHtml5 className="text-5xl text-orange-600" />
              </div>
              <div className="rounded-2xl border-4 p-2 border-neutral-600 bg-white">
                <FaCss3Alt className="text-5xl text-blue-600" />
              </div>
              <div className="rounded-2xl border-4 p-2 border-neutral-600 bg-white">
                <IoLogoJavascript className="text-5xl text-yellow-400" />
              </div>
              <div className="rounded-2xl border-4 p-2 border-neutral-600 bg-white">
                <RiTailwindCssFill className="text-5xl text-sky-300" />
              </div>
              <div className="rounded-2xl border-4 p-2 border-neutral-600 bg-white">
                <FaGithub className="text-5xl text-black" />
              </div>
              <div className="rounded-2xl border-4 p-2 border-neutral-600">
                <FaReact className="text-5xl text-sky-300" />
              </div>
              <div className="rounded-2xl border-4 p-2 border-neutral-600">
                <FaReact className="text-5xl text-sky-300" />
              </div>
              <div className="rounded-2xl border-4 p-2 border-neutral-600">
                <FaReact className="text-5xl text-sky-300" />
              </div>
              <div className="rounded-2xl border-4 p-2 border-neutral-600">
                <FaReact className="text-5xl text-sky-300" />
              </div>
              <div className="rounded-2xl border-4 p-2 border-neutral-600">
                <FaReact className="text-5xl text-sky-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
