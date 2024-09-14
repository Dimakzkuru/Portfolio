import project1 from "../assets/projects/todolistapp.jpg";
import project2 from "../assets/projects/djobwebsite.jpg";
import project3 from "../assets/projects/portfolio.jpg";

export const HERO_CONTENT = `I'm a self-taught front-end developer with a passion for building engaging and user-friendly web applications. My curiosity drives me to create intuitive and visually appealing interfaces that enhance user experiences.`;

export const ABOUT_TEXT =
  "I am a dedicated and versatile self-taught web developer who transitioned from Electronics Engineering to pursue a passion for creating efficient and user-friendly web applications. Although I have no professional experience yet, I have honed my skills in HTML, CSS, JavaScript, and React through personal projects and continuous learning. My journey in web development began with a deep curiosity for technology, and it has evolved into a commitment to mastering front-end development. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I stay active, explore new technologies, and contribute to open-source projects.";

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "ToDoList App",
    image: project1,
    description:
      "A simple ToDoList Application built using React and styled with Tailwind CSS. It allows users to create, edit, and delete tasks, as well as mark tasks as completed.",
    technologies: ["HTML", "React", "Tailwind"],
  },
  {
    title: "D-Job Website",
    image: project2,
    description:
      "This is a website project built to help job seekers connect with potential employers by providing a platform for job listings, applications, and related services.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "React", "Tailwind", "Framer Motion"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
