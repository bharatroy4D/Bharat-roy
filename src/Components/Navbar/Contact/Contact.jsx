import React from "react";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="bg-base-300 py-6">
      <div className="max-w-7xl px-6 md:px-12 lg:px-20 mx-auto">
        <motion.div
          className="flex flex-col md:flex-row gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left: Contact Info */}
          <motion.div
            className="w-full md:w-[45%] bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-3xl font-bold text-[#394E6A] mb-6 border-b-2 border-[#FF014F] inline-block pb-1">
                Contact Information
              </h2>

              <div className="space-y-5 mt-6">
                {/* Phone */}
                <div className="flex items-start gap-4 p-4 bg-[#f9fafb] rounded-xl hover:shadow-md transition">
                  <div className="p-3 bg-[#FF014F] text-white rounded-full">
                    <FiPhone className="text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Phone</p>
                    <h4 className="text-gray-800 font-semibold">+8801714414775</h4>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 bg-[#f9fafb] rounded-xl hover:shadow-md transition">
                  <div className="p-3 bg-[#FF014F] text-white rounded-full">
                    <FiMail className="text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Email</p>
                    <h4 className="text-gray-800 font-semibold">bharartoy1005@gmail.com</h4>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 bg-[#f9fafb] rounded-xl hover:shadow-md transition">
                  <div className="p-3 bg-[#FF014F] text-white rounded-full">
                    <FiMapPin className="text-xl" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Address</p>
                    <h4 className="text-gray-800 font-semibold">Rangpur, Dhaka (Bangladesh)</h4>
                  </div>
                </div>
              </div>          
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-[#394E6A] mb-4 border-b-2 border-[#FF014F] inline-block pb-1">
                Social Media
              </h3>
              <div className="flex gap-4 mt-4">
                {[FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10  border rounded-full text-[#394E6A] flex items-center justify-center hover:bg-[#FF014F] hover:text-white transition"
                  >
                    <Icon className="text-lg" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            className="w-full md:w-[55%]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="h-full bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between">
              <h2 className="text-3xl font-bold text-[#394E6A] mb-6 border-b-2 border-[#FF014F] inline-block pb-1">
                Get in Touch
              </h2>
              <form className="flex flex-col gap-6 flex-1 ">
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF014F] transition"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF014F] transition"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-semibold text-gray-700">Message</label>
                  <textarea
                    placeholder="Your message..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF014F] transition h-32 resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#FF014F] text-white font-bold rounded-lg hover:bg-[#e60044] transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
