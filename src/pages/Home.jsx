import { useEffect } from "react";
import PrimaryButton from "../components/common/PrimaryButton";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="home"
      className="relative py-28 px-6 text-center bg-gradient-to-br from-indigo-100 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Decorative background blob */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-300 opacity-30 rounded-full blur-3xl z-0"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-200 opacity-30 rounded-full blur-3xl z-0"></div>

      <div className="relative z-10" data-aos="fade-down">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-blue-800 dark:text-blue-400 leading-tight">
          Hi, I'm Vivek 👋 <br />
          <span className="text-gray-900 dark:text-white">
            A Passionate Front-End Developer
          </span>
        </h1>
      </div>

      <div className="relative z-10" data-aos="fade-up" data-aos-delay="300">
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          I specialize in crafting responsive and user-friendly websites using
          modern technologies like{" "}
          <span className="text-blue-600 font-semibold">React</span> and{" "}
          <span className="text-indigo-600 font-semibold">Tailwind CSS</span>. I
          blend design thinking and clean code to deliver smooth digital
          experiences.
        </p>
      </div>

      <div
        className="relative z-10 flex justify-center flex-wrap gap-4"
        data-aos="zoom-in"
        data-aos-delay="600"
      >
        <PrimaryButton to="/projects" className="text-lg px-6 py-3">
          🚀 View My Projects
        </PrimaryButton>
        <PrimaryButton
          to="/about"
          className="!bg-green-600 !text-white hover:!bg-green-500 border border-blue-400 text-lg px-6 py-3"
        >
          📖 Learn More About Me
        </PrimaryButton>
      </div>
    </section>
  );
};

export default Home;
