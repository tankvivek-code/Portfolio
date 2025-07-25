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

AOS.init();

const menu = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "contact" },
];

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col bg-white text-black">
        <Header menu={menu} />
        <main className="flex-grow p-6">
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
