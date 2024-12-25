import project1 from "../assets/projects/todolistapp.jpg";
import project2 from "../assets/projects/djobwebsite.jpg";
import project3 from "../assets/projects/portfolio.jpg";

export const INTRODUCTION = `Hi, I'm Michael Dy Dimakiling, a career shifter with a
background in Electronics Engineering. Since October 2023,
I've been immersed in web development, focusing on building
responsive, user-friendly websites. I'm passionate about
continuous learning and eager to grow as a developer, honing
my skills in technologies like React, Tailwind CSS, and
JavaScript. I'm also planning to dive into backend
technologies to become a full-stack developer.`;
export const HERO_CONTENT = `I'm a self-taught front-end developer with a passion for building engaging and user-friendly web applications. My curiosity drives me to create intuitive and visually appealing interfaces that enhance user experiences.`;

export const ABOUT_TEXT =
  "I am a dedicated and versatile self-taught web developer who transitioned from Electronics Engineering to pursue a passion for creating efficient and user-friendly web applications. Although I have no professional experience yet, I have honed my skills in HTML, CSS, JavaScript, and React through personal projects and continuous learning. My journey in web development began with a deep curiosity for technology, and it has evolved into a commitment to mastering front-end development. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I stay active, explore new technologies, and contribute to open-source projects.";

export const PROJECTS = [
  {
    title: "ToDoList App",
    image: project1,
    description:
      "A simple ToDoList Application built using React and styled with Tailwind CSS. It allows users to create, edit, and delete tasks, as well as mark tasks as completed.",
    technologies: ["HTML", "React", "Tailwind", "React Router"],
    githubUrl: "https://github.com/Dimakzkuru/ToDoApp",
    demoUrl: "https://dimakzkuru.github.io/ToDoApp/",
  },

  {
    title: "D-Job Website",
    image: project2,
    description:
      "This is a website project built to help job seekers connect with potential employers by providing a platform for job listings, applications, and related services.",
    technologies: ["HTML", "CSS", "Javascript"],
    githubUrl: "https://github.com/Dimakzkuru/D-Job-Website",
    demoUrl: "https://dimakzkuru.github.io/D-Job-Website/",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information. Developed with React and Vite, styled using Tailwind CSS, and enhanced with Framer Motion for animations.",
    technologies: ["HTML", "React", "Tailwind", "Framer Motion"],
    githubUrl: "https://github.com/Dimakzkuru/Portfolio",
    demoUrl: "https://dimakzkuru.github.io/",
  },
];

export const CONTACT = {
  address: "Brgy. Balud, Calbayog City Western Samar Philippines ",
  phoneNo: "09971441145",
  email: "michaeldimakilingece@gmail.com",
};
