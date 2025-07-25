import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "Tic Tak Toe Game",
    description:
      "A fun multiplayer Tic Tak Toe game with timer and AI difficulty levels built using React.",
    tech: ["Javascript", "Tailwind", "Html5"],
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
    title: "To-Do List - JavaScript",
    description:
      "A simple and interactive To-Do list built with vanilla JavaScript. Supports task add, delete, and local storage saving.",
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
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16" id="projects">
      <h1
        className="text-3xl md:text-4xl font-bold text-blue-700 mb-12 text-center"
        data-aos="fade-down"
      >
        🚀 My Projects
      </h1>

      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-white dark:bg-gray-800 border rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6"
          >
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {project.title}
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-3">
              {project.description}
            </p>

            <p className="text-sm text-gray-500 mb-4">
              <strong>Tech:</strong> {project.tech.join(", ")}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded font-medium transition dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
              >
                🔗 GitHub
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium transition"
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
