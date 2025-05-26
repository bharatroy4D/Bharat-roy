import React, { useEffect, useState } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const LoadingDots = () => (
  <div className="min-h-screen flex justify-center items-center bg-base-300">
    <div className="flex gap-3">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="w-3 h-12 rounded-full bg-[#FF014F]"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  </div>
);

const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingDots />;
  }

  return (
    <section id="contact" className="bg-base-300 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <motion.div
          className="flex flex-col md:flex-row gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left - Contact Info */}
          <motion.div
            className="w-full md:w-1/2 bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#394E6A] mb-6 border-b-2 border-[#FF014F] inline-block pb-1">
                Contact Information
              </h2>

              <div className="space-y-5">
                {[ 
                  { icon: <FiPhone className="text-xl" />, label: "Phone", value: "+8801714414775" },
                  { icon: <FiMail className="text-xl" />, label: "Email", value: "bharartoy1005@gmail.com" },
                  { icon: <FiMapPin className="text-xl" />, label: "Address", value: "Rangpur, Dhaka (Bangladesh)" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-[#f9fafb] rounded-xl hover:shadow-md transition">
                    <div className="p-3 bg-[#FF014F] text-white rounded-full">{item.icon}</div>
                    <div>
                      <p className="text-gray-500 text-sm">{item.label}</p>
                      <h4 className="text-gray-800 font-semibold break-all">{item.value}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-[#394E6A] mb-4 border-b-2 border-[#FF014F] inline-block pb-1">
                Social Media
              </h3>
              <div className="flex gap-4 mt-4 flex-wrap">
                {[FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 border border-[#FF014F] rounded-full text-[#394E6A] flex items-center justify-center hover:bg-[#FF014F] hover:text-white transition"
                  >
                    <Icon className="text-lg" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="h-full bg-white shadow-lg rounded-2xl p-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#394E6A] mb-6 border-b-2 border-[#FF014F] inline-block pb-1">
                Get in Touch
              </h2>
              <form className="space-y-6">
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
