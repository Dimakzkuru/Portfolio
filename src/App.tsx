import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Projects from "./components/Projects.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import SocialMedia from "./components/SocialMedia.tsx";
import ContactForm from "./components/ContactForm";
import { useState, useEffect } from "react";
const App = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });
  useEffect(() => {
    // Set theme class on htmlelement based on state
    const htmlElement = document.documentElement;
    if (isDark) {
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prevTheme) => !prevTheme);
  };
  return (
    <div className={`${isDark ? "dark" : ""}`}>
      <div className="overflow-x-hidden overflow-y-auto dark:text-white text-black w-screen">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="relative h-full w-full dark:bg-slate-950 bg-white transition duration-500 ease-in-out">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          </div>
        </div>
        <Navbar className="z-1000" toggleTheme={toggleTheme} isDark={isDark} />
        <div className="container mx-auto px-8 z-10">
          <div id="home" className="lg:pt-40 pt-20 pb-40">
            <Hero />
          </div>
          <div id="about" className="lg:pt-40 pt-20 pb-40">
            <About />
          </div>
          <div id="projects" className="lg:pt-40 pt-20">
            <Projects />
          </div>
          <div id="contact" className="lg:pt-16 pt-10 pb-40">
            <ContactForm />
          </div>
          <div>
            <ScrollToTop />
          </div>
          <div>{/* <SocialMedia /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
