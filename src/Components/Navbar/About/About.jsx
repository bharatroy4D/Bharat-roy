import React, { useState } from "react";
import { motion } from "framer-motion";
import linkedin from "../../../assets/linkedin.png";
import github from "../../../assets/github.png";
import twitter from "../../../assets/twitter.png";
import instagram from "../../../assets/instagram.png";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Message sent!");
  };

  return (
    <section className="py-20 bg-gradient-to-r from-[#FF014F] to-[#6A1B9A]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl font-extrabold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Contact Me
          </motion.h2>
          <motion.p
            className="text-lg text-white opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            I would love to hear from you! Reach out to me with any questions.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg"
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF014F] focus:border-transparent"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF014F] focus:border-transparent"
                  rows="5"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-[#FF014F] text-white font-semibold rounded-lg shadow-md hover:bg-[#FF1655] transition duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Social Media Icons */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left"
          >
            <h3 className="text-xl text-white mb-4 font-semibold">Connect with me:</h3>
            <motion.div
              className="flex justify-center lg:justify-start gap-6 mt-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.2 }}
            >
              {[{ src: linkedin, alt: "LinkedIn" }, { src: github, alt: "GitHub" }, { src: twitter, alt: "Twitter" }, { src: instagram, alt: "Instagram" }].map(({ src, alt }, index) => (
                <motion.a
                  key={index}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  className="w-10 h-10 rounded-full bg-white flex justify-center items-center transition-all duration-300 transform hover:bg-[#FF014F] shadow-md"
                >
                  <img src={src} alt={alt} className="w-6 h-6 object-contain" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
