import { BsPersonCircle } from "react-icons/bs";
import AboutMe from "../assets/AboutMe3.png";
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
          <div className="flex justify-center">
            <div className="container border-solid text-white border-2 rounded-full h-12 flex justify-around">
              <button className="bg-red rounded-full w-full mx-1">
                Button1
              </button>
              <button className="bg-slate-600 rounded-full w-full mx-1">
                Button2
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
