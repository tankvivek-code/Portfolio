import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "Tic Tak Toe Game",
    description:
      "A fun multiplayer Tic Tak Toe game with timer and AI difficulty levels built using React.",
    tech: ["JavaScript", "Tailwind", "HTML5"],
    link: "https://github.com/tankvivek-code/tic-tac-toe",
    demo: "https://tankvivek-code.github.io/tic-tac-toe/",
  },
  {
    title: "Bootstrap 5 Starter Website",
    description:
      "My first responsive web project built using Bootstrap 5. It includes sections like hero, services, and contact with clean layout and mobile-friendly design.",
    tech: ["HTML", "CSS", "Bootstrap 5"],
    link: "https://github.com/tankvivek-code/dwello",
    demo: "https://tankvivek-code.github.io/dwello/",
  },
  {
    title: "Bootstrap 5 Website",
    description:
      "A responsive Bootstrap 5 website with multi-page layout and mobile-first responsive styling.",
    tech: ["HTML", "CSS", "Bootstrap 5"],
    link: "https://github.com/tankvivek-code/Furniro",
    demo: "https://tankvivek-code.github.io/Furniro/",
  },
  {
    title: "To-Do List - JavaScript",
    description:
      "A simple and interactive To-Do list built with JavaScript. Supports task add, delete, and local storage saving.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/tankvivek-code/Todo_list",
    demo: "https://tankvivek-code.github.io/Todo_list/",
  },
  {
    title: "To-Do List - React",
    description:
      "A React-based To-Do list application with reusable components, useState for task management, and a responsive layout.",
    tech: ["React", "Tailwind CSS"],
    link: "https://github.com/tankvivek-code/Todo_manager",
    demo: "https://todo-manager-rust.vercel.app/",
  },
  {
    title: "Calculator App",
    description:
      "A responsive calculator built using JavaScript and Tailwind CSS. Includes basic arithmetic functionality and modern UI.",
    tech: ["JavaScript", "Tailwind CSS"],
    link: "https://github.com/tankvivek-code/calculator",
    demo: "https://tankvivek-code.github.io/calculator/",
  },
  {
    title: "React Portfolio",
    description:
      "This very portfolio website, showcasing dynamic routing, Tailwind styling, responsive layout, and modular React components.",
    tech: ["React", "Tailwind CSS", "Vite"],
    link: "https://github.com/tankvivek-code/react-portfolio",
    demo: "https://portfolio-iota-sage-zuwa85246e.vercel.app/",
  },
  {
    title: "Hydra",
    description: "Advanced CSS animated UI concept inspired by Figma mockup designs.",
    tech: ["HTML", "CSS", "Bootstrap 5"],
    link: "https://github.com/tankvivek-code/Hydra",
    demo: "https://tankvivek-code.github.io/Hydra/",
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20" id="projects">
      <h1
        className="text-3xl md:text-5xl font-extrabold text-center text-blue-700 dark:text-blue-400 mb-16"
        data-aos="fade-down"
      >
        🚀 My Projects
      </h1>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="zoom-in-up"
            data-aos-delay={index * 100}
            className="group relative bg-white/30 dark:bg-gray-800/30 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-xl rounded-xl p-6 transition-all duration-300 hover:scale-[1.02]"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              🔧 {project.title}
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4 min-h-[60px]">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-white px-2 py-1 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold inline-flex items-center gap-1 px-4 py-2 border border-gray-400 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                🔗 GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold inline-flex items-center gap-1 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-500/50 transition"
                >
                  🚀 Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
