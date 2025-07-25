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
    <section className="max-w-4xl mx-auto px-6 py-16 relative">
      <h1
        className="text-4xl font-bold text-center text-blue-700 mb-8"
        data-aos="fade-down"
      >
        📬 Contact Me
      </h1>

      <p className="text-lg text-center text-gray-700 mb-2" data-aos="fade-up">
        I'm currently pursuing <strong>BCA (Sem 5)</strong> at{" "}
        <strong>Atmiya University</strong> and learning Full Stack Development
        at <strong>Creative Insight IT Academic</strong>.
      </p>

      <p
        className="text-lg text-center text-gray-700 mb-8"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Open to <strong>freelance projects</strong>,{" "}
        <strong>internships</strong>, and <strong>part-time work</strong>. Let’s
        connect!
      </p>

      <div
        className="bg-gray-50 dark:bg-gray-900 rounded-lg shadow p-6 space-y-4 text-center mb-10"
        data-aos="zoom-in"
      >
        <p className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-200">
          <Mail className="w-5 h-5" />
          <a
            href="mailto:tankvivek65@gmail.com"
            className="text-blue-600 hover:underline"
          >
            tankvivek65@gmail.com
          </a>
        </p>

        <p className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-200">
          <Github className="w-5 h-5" />
          <a
            href="https://github.com/tankvivek-code"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            github.com/tankvivek-code
          </a>
        </p>

        <p className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-200">
          <Linkedin className="w-5 h-5" />
          <a
            href="https://www.linkedin.com/in/vivek-tank-1548412a9/"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            linkedin.com/in/vivek-tank
          </a>
        </p>

        <p className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-200">
          <Phone className="w-5 h-5" />
          <a href="tel:+919924846727" className="text-blue-600 hover:underline">
            +91 99248 *****
          </a>
        </p>

        <p className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-200">
          <MessageCircle className="w-5 h-5" />
          <a
            href="https://wa.me/9924846727"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            WhatsApp Me
          </a>
          <button
            onClick={() => setShowQR(!showQR)}
            className="ml-2 text-sm text-gray-500 underline hover:text-blue-600"
          >
            {showQR ? "Hide QR" : "Show QR"}
          </button>
        </p>

        {showQR && (
          <div className="mt-4 flex justify-center" data-aos="fade-in">
            <img
              src={whatsappQR}
              loading="lazy"
              alt="WhatsApp QR"
              className="w-40 h-40 border rounded"
            />
          </div>
        )}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("✅ Thank you! Your message has been sent.");
        }}
        className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 space-y-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <input
          type="text"
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 flex items-center gap-2"
        >
          <Send className="w-4 h-4" />
          Send Message
        </button>
      </form>

      <a
        href="https://wa.me/9924846727"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg"
        data-aos="fade-left"
      >
        <MessageCircle className="w-5 h-5" />
      </a>
    </section>
  );
};

export default Contact;
