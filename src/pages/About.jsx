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

const skills = [
  { icon: htmlLogo, label: "HTML" },
  { icon: cssLogo, label: "CSS" },
  { icon: jsLogo, label: "JavaScript" },
  { icon: reactLogo, label: "React" },
  { icon: tailwindLogo, label: "Tailwind" },
  { icon: bootstrapLogo, label: "Bootstrap" },
  { icon: gitLogo, label: "Git" },
  { icon: githubLogo, label: "GitHub" },
];

const timelineData = [
  {
    title: "🎓 BCA - Atmiya University",
    date: "2022 - Present (Semester 5)",
    description:
      "Currently pursuing core computer science with hands-on web dev practice.",
  },
  {
    title: "🧠 Full Stack Training - Creative Insight IT Academy",
    date: "2025 - Present",
    description:
      "Learning React, Node, Tailwind, MongoDB, and building live full-stack projects.",
  },
  {
    title: "🌱 Freelance & Personal Projects",
    date: "2025 - Present",
    description:
      "Developed portfolio websites, student portals, dashboards, and small business landing pages.",
  },
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20 px-6" id="about">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl font-bold text-center text-blue-700 mb-12"
          data-aos="fade-down"
        >
          👋 About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div
            className="text-gray-800 dark:text-gray-200"
            data-aos="fade-right"
          >
            <img
              src={profilePic}
              alt="My Profile"
              className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-blue-500 shadow-md mb-6"
            />
            <p className="text-lg mb-4 text-center">
              Hi, I'm <span className="font-semibold">Vivek</span>, a BCA (Sem
              5) student at{" "}
              <span className="font-semibold">Atmiya University</span>. I'm
              passionate about front-end development and currently learning
              full-stack development at{" "}
              <strong>Creative Insight IT Academy</strong>.
            </p>
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              🚀 I build responsive, clean, and user-friendly web apps.
            </p>
          </div>

          <div className="space-y-6" data-aos="fade-left">
            <div className="bg-white dark:bg-gray-800 shadow-xl p-6 rounded-xl hover:shadow-2xl transition">
              <h3 className="text-xl font-bold text-blue-600 mb-2">
                📅 Experience
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>6+ months</strong> of continuous practice, building
                real-world projects, responsive layouts, and reusable components
                using HTML, CSS, JavaScript, and React.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 shadow-xl p-6 rounded-xl hover:shadow-2xl transition">
              <h3 className="text-xl font-bold text-blue-600 mb-4">🛠 Skills</h3>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-full hover:scale-105 transition-transform"
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
          </div>
        </div>

        <div className="mt-16" data-aos="fade-up">
          <h3 className="text-3xl font-bold text-blue-600 mb-10 text-center">
            📘 Journey
          </h3>
          <div className="relative">
            <div className="absolute left-2.5 top-0 w-1 h-full bg-blue-500 rounded-full hidden md:block"></div>
            <ul className="space-y-10 pl-0 md:pl-10">
              {timelineData.map((item, index) => (
                <li key={index} className="relative">
                  <div className="md:absolute left-0 top-1.5 w-5 h-5 bg-blue-600 border-2 border-white dark:border-gray-900 rounded-full z-10 hidden md:block"></div>
                  <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-5">
                    <h4 className="text-xl font-semibold text-blue-700 mb-1">
                      {item.title}
                    </h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {item.date}
                    </span>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
