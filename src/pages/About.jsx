import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import profilePic from "../assets/profile.jpg";
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
    date: "2022 - Present",
    description:
      "Pursuing core Computer Science. Strong foundation in frontend and logical thinking.",
  },
  {
    title: "💻 Full Stack Training - CI Academy",
    date: "2025 - Present",
    description:
      "Focused training in React, MongoDB, Node.js, Tailwind, and Git. Built live projects.",
  },
  {
    title: "🌟 Personal & Freelance Projects",
    date: "2025 - Present",
    description:
      "Crafted real-world websites: portfolios, dashboards, and client projects with responsive design.",
  },
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-700 dark:text-white mb-16" data-aos="fade-down">
          👋 Meet Vivek
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right" className="text-gray-800 dark:text-gray-200">
            <img
              src={profilePic}
              alt="Profile"
              className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-blue-500 shadow-lg mb-6 hover:scale-105 transition"
            />
            <p className="text-lg text-center leading-relaxed px-4">
              Hello! I'm <strong>Vivek</strong>, a dedicated <span className="text-blue-700 dark:text-blue-400">BCA student</span> at <strong>Atmiya University</strong>.
              <br />
              I'm passionate about <span className="font-medium">front-end design</span>, crafting smooth, responsive UI, and exploring full-stack development at{" "}
              <strong>Creative Insight Academy</strong>.
            </p>
            <p className="text-sm text-center mt-4 text-gray-500 dark:text-gray-400">🚀 Let’s build beautiful web experiences together!</p>
          </div>

          <div data-aos="fade-left" className="space-y-6">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 transition hover:shadow-2xl">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">💼 Experience</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Over <strong>6 months</strong> of hands-on learning, creating <span className="text-blue-600 font-medium">real-world projects</span>, and mastering modern frontend technologies.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 transition hover:shadow-2xl">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">🧠 Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full hover:scale-105 transition">
                    <img src={skill.icon} alt={skill.label} className="w-5 h-5" />
                    <span className="text-sm font-medium text-blue-700 dark:text-blue-100">{skill.label}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold text-blue-600 mt-6 mb-2">🛠 Tools</h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, i) => (
                  <div key={i} className="flex items-center gap-2 px-3 py-1 bg-purple-100 dark:bg-purple-900 rounded-full hover:scale-105 transition">
                    <img src={tool.icon} alt={tool.label} className="w-5 h-5" />
                    <span className="text-sm font-medium text-purple-700 dark:text-purple-100">{tool.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20" data-aos="fade-up">
          <h3 className="text-3xl font-bold text-center text-blue-700 dark:text-white mb-10">📘 My Journey</h3>
          <div className="relative border-l-4 border-blue-600 pl-6 ml-2 space-y-10">
            {timelineData.map((item, index) => (
              <div key={index} className="relative bg-white dark:bg-gray-800 shadow-md rounded-xl p-5">
                <span className="absolute -left-3 top-2 w-5 h-5 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></span>
                <h4 className="text-xl font-semibold text-blue-700 mb-1">{item.title}</h4>
                <span className="text-sm text-gray-500 dark:text-gray-400">{item.date}</span>
                <p className="text-gray-700 dark:text-gray-300 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
