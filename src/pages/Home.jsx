import { useEffect } from "react";
import PrimaryButton from "../components/common/PrimaryButton";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const handleMouseMove = (e) => {
      const blob1 = document.getElementById("blob1");
      const blob2 = document.getElementById("blob2");
      const moveX = e.clientX / 100;
      const moveY = e.clientY / 100;
      blob1.style.transform = `translate(${moveX}px, ${moveY}px)`;
      blob2.style.transform = `translate(-${moveX}px, -${moveY}px)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative py-32 px-6 text-center overflow-hidden bg-gradient-to-br from-indigo-100 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="absolute animate-bounce-slow left-6 top-6 text-4xl opacity-20">
        🚀
      </div>
      <div className="absolute animate-spin-slow right-8 bottom-10 text-4xl opacity-20">
        💻
      </div>

      <div
        id="blob1"
        className="absolute top-[-100px] left-[-100px] w-80 h-80 bg-pink-400 opacity-20 rounded-full blur-3xl transition-transform duration-300"
      ></div>
      <div
        id="blob2"
        className="absolute bottom-[-100px] right-[-100px] w-80 h-80 bg-cyan-300 opacity-20 rounded-full blur-3xl transition-transform duration-300"
      ></div>

      <div className="relative z-10" data-aos="fade-down">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 animate-text">
          Hi, I'm Vivek 👋
        </h1>
        <p className="text-xl md:text-2xl text-gray-800 dark:text-white font-mono animate-fade-in">
          Front-End Developer & React Developer & Clean Code Advocate 💻
        </p>
      </div>

      <div
        className="relative z-10 mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-700 dark:text-gray-300"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="backdrop-blur-md bg-white/20 dark:bg-gray-800/30 rounded-xl p-6 shadow-md border border-white/20">
          I build interactive and delightful web experiences using{" "}
          <span className="font-bold text-blue-600">React</span>,{" "}
          <span className="font-bold text-indigo-500">Tailwind CSS</span>, and
          modern tools. I focus on clean code, accessibility, and a great user
          experience.
        </div>
      </div>

      <div
        className="relative z-10 mt-10 flex justify-center gap-4 flex-wrap"
        data-aos="zoom-in"
        data-aos-delay="600"
      >
        <PrimaryButton
          to="/projects"
          className="text-lg px-6 py-3 hover:scale-105 transition-transform hover:shadow-lg"
        >
          🌟 Explore Projects
        </PrimaryButton>
        <PrimaryButton
          to="/contact"
          className="!bg-rose-600 !text-white hover:!bg-rose-500 text-lg px-6 py-3 hover:scale-105 transition-transform hover:shadow-lg"
        >
          📩 Contact Me
        </PrimaryButton>
      </div>
    </section>
  );
};

export default Home;
