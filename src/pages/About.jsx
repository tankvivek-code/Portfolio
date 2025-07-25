import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import profilePic from "../assets/profile.png";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/js.png";
import reactLogo from "../assets/react.png";
import tailwindLogo from "../assets/tailwind.png";
import gitLogo from "../assets/git.png";
import githubLogo from "../assets/github.png";
import bootstrapLogo from "../assets/bootstrap.png";

const techStack = [
  { icon: htmlLogo, label: "HTML" },
  { icon: cssLogo, label: "CSS" },
  { icon: jsLogo, label: "JavaScript" },
  { icon: reactLogo, label: "React" },
  { icon: tailwindLogo, label: "Tailwind" },
  { icon: bootstrapLogo, label: "Bootstrap" },
];

const tools = [
  { icon: gitLogo, label: "Git" },
  { icon: githubLogo, label: "GitHub" },
];

const timelineData = [
  {
    title: "🎓 BCA - Atmiya University",
    date: "2023 - Present (Sem 5)",
    description:
      "Pursuing core Computer Science and building a strong foundation in frontend and problem-solving.",
  },
  {
    title: "💻 Full Stack Training - CI Academy",
    date: "2025 - Present",
    description:
      "Learning real-world technologies: React, Node.js, MongoDB, Tailwind CSS, and Git. Built multiple full-stack projects.",
  },
  {
    title: "🌟 Freelance & Personal Projects",
    date: "2025 - Present",
    description:
      "Developed client websites and personal portfolios. Specialized in responsive design, clean UI/UX, and fast performance.",
  },
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="about"
      className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <h1
          className="text-4xl sm:text-5xl font-extrabold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4"
          data-aos="fade-down"
        >
          👋 Hey I Am Vivek
        </h1>
        <p
          className="text-lg sm:text-xl text-center text-gray-700 dark:text-gray-300 mb-12"
          data-aos="fade-up"
        >
          Full Stack Developer • BCA (Sem 5) • Passionate Learner
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            data-aos="fade-right"
            className="text-gray-800 dark:text-gray-200"
          >
            <img
              src={profilePic}
              alt="Vivek Tank"
              className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-blue-500 shadow-xl mb-6 hover:scale-105 transition"
            />
            <p className="text-lg text-center leading-relaxed px-4">
              Hello! I’m <strong>Vivek Tank</strong>, a passionate{" "}
              <span className="text-blue-700 dark:text-blue-400">
                BCA student
              </span>{" "}
              at <strong>Atmiya University</strong> and a full-stack developer
              in training. I love designing clean UI, building responsive web
              apps, and solving real-world problems through code.
            </p>
            <p className="text-sm text-center mt-4 text-gray-500 dark:text-gray-400">
              🚀 Let's innovate and create impactful web experiences!
            </p>
          </div>

          <div data-aos="fade-left" className="space-y-8">
            <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                🧠 Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full hover:scale-105 transition"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.label}
                      className="w-5 h-5"
                    />
                    <span className="text-sm font-medium text-blue-700 dark:text-blue-100">
                      {skill.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-6 hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold text-purple-600 mb-3">
                🛠 Tools I Use
              </h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-1 bg-purple-100 dark:bg-purple-900 rounded-full hover:scale-105 transition"
                  >
                    <img src={tool.icon} alt={tool.label} className="w-5 h-5" />
                    <span className="text-sm font-medium text-purple-700 dark:text-purple-100">
                      {tool.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-blue-600">
            📘 My Learning Journey
          </h2>

          <div className="space-y-6 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            <div
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-blue-500"
              data-aos="fade-right"
            >
              <h3 className="text-xl font-semibold text-blue-600">
                🎓 Shubham School
              </h3>
              <p>12th Passed (Science Stream) – April 2023</p>
            </div>

            <div
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-purple-500"
              data-aos="fade-left"
            >
              <h3 className="text-xl font-semibold text-purple-600">
                💻 Atmiya University
              </h3>
              <p>BCA (Semester 5) – Currently Pursuing</p>
            </div>

            <div
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-l-4 border-green-500"
              data-aos="fade-right"
            >
              <h3 className="text-xl font-semibold text-green-600">
                🚀 Creative Insight IT Academy
              </h3>
              <p>Learning Full Stack Web Development – React, Tailwind, JS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
