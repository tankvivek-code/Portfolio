import { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Send,
  MessageCircle,
} from "lucide-react";
import whatsappQR from "../assets/whatsapp-qr.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="max-w-5xl mx-auto px-6 py-20 relative overflow-hidden">
      <h1
        className="text-4xl sm:text-5xl font-extrabold text-center bg-gradient-to-r from-blue-600 to-purple-500 text-transparent bg-clip-text mb-8"
        data-aos="fade-down"
      >
        📬 Let’s Connect
      </h1>

      <p
        className="text-lg text-center text-gray-700 dark:text-gray-300 mb-2"
        data-aos="fade-up"
      >
        I'm <strong>Vivek Tank</strong>, a passionate developer pursuing{" "}
        <strong>BCA (Sem 5)</strong> at <strong>Atmiya University</strong> and
        learning Full Stack Web Development at{" "}
        <strong>Creative Insight IT Academic</strong>.
      </p>

      <p
        className="text-lg text-center text-gray-700 dark:text-gray-300 mb-10"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        Open to <span className="font-semibold text-blue-600">freelancing</span>
        , <span className="font-semibold text-purple-600">internships</span>,
        and <span className="font-semibold text-pink-600">part-time roles</span>
        . Reach out, let’s create something awesome!
      </p>

      <div
        className="bg-gradient-to-tr from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl shadow-lg p-6 sm:p-10 space-y-5 text-center mb-12"
        data-aos="zoom-in"
      >
        {[
          {
            icon: <Mail className="w-5 h-5" />,
            label: "tankvivek65@gmail.com",
            href: "mailto:tankvivek65@gmail.com",
          },
          {
            icon: <Github className="w-5 h-5" />,
            label: "github.com/tankvivek-code",
            href: "https://github.com/tankvivek-code",
          },
          {
            icon: <Linkedin className="w-5 h-5" />,
            label: "linkedin.com/in/vivek-tank",
            href: "https://www.linkedin.com/in/vivek-tank-1548412a9/",
          },
          {
            icon: <Phone className="w-5 h-5" />,
            label: "+91 99248 *****",
            href: "tel:+919924846727",
          },
          {
            icon: <MessageCircle className="w-5 h-5" />,
            label: "WhatsApp Me",
            href: "https://wa.me/9924846727",
            isQR: true,
          },
        ].map((item, i) => (
          <p
            key={i}
            className="flex items-center justify-center gap-3 text-gray-800 dark:text-gray-200"
          >
            {item.icon}
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline transition-all"
            >
              {item.label}
            </a>
            {item.isQR && (
              <button
                onClick={() => setShowQR(!showQR)}
                className="ml-2 text-sm underline text-gray-500 hover:text-blue-600"
              >
                {showQR ? "Hide QR" : "Show QR"}
              </button>
            )}
          </p>
        ))}

        {showQR && (
          <div className="mt-4 flex justify-center" data-aos="fade-in">
            <img
              src={whatsappQR}
              loading="lazy"
              alt="WhatsApp QR"
              className="w-40 h-40 border rounded shadow-md"
            />
          </div>
        )}
      </div>

      {/* -------- Contact Form with mailto -------- */}
      <form
        action="mailto:tankvivek65@gmail.com"
        method="POST"
        encType="text/plain"
        className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 sm:p-8 space-y-5"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            name="Name"
            placeholder="Your Name"
            required
            className="flex-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <input
            type="email"
            name="Email"
            placeholder="Your Email"
            required
            className="flex-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <textarea
          name="Message"
          placeholder="Your Message"
          rows={4}
          required
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        ></textarea>
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded shadow-md hover:scale-105 transition-transform flex items-center gap-2"
        >
          <Send className="w-4 h-4" />
          Send Message
        </button>
      </form>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/9924846727"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-all"
        data-aos="fade-left"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
      </a>
    </section>
  );
};

export default Contact;
