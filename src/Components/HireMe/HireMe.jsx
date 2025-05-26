import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

const HireMe = () => {
  return (
    <motion.div
      className="bg-base-100 min-h-[420px] px-8 py-14 md:py-20 rounded-2xl shadow-2xl text-center max-w-2xl mx-auto my-16 flex flex-col justify-center items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-4xl font-extrabold text-[#FF014F] mb-4 tracking-tight">
        Hire Me
      </h2>
      <p className="text-gray-600 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
        I’m open for freelance projects and full-time roles. Let's collaborate and bring your ideas to life with quality code and design!
      </p>
      <a
        href="mailto:your.email@example.com"
        className="inline-flex items-center gap-3 px-7 py-3 rounded-full border border-[#FF014F] text-[#FF014F] hover:bg-[#FF014F] hover:text-white transition-colors duration-300 text-lg font-semibold"
      >
        Let’s Talk <FaPaperPlane className="text-base" />
      </a>
    </motion.div>
  );
};

export default HireMe;
