import { AppProvider } from "./context/AppContext";
import { Routes, Route } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import NotFoundPage from "./pages/NotFoundPage";
import Contact from "./pages/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const menu = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      offset: 100,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-gray-50 to-gray-200 text-gray-800 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-white transition-colors duration-500">
        <Header menu={menu} />

        <main className="flex-grow px-6 py-10 sm:px-10 md:px-16 lg:px-24 xl:px-32 animate-fadeIn">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
