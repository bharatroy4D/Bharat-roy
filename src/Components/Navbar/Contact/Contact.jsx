import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-base-200 py-6">
      <div className=" max-w-7xl px-20 mx-auto ">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          {/* Contact Info */}
          <div className="w-full md:w-1/2 bg-base-300 shadow border rounded-md p-5 border-gray-400/20">
            <h1 className="text-4xl font-bold pb-8 text-[#394E6A]">Contact Me</h1>

            <div className="flex flex-col gap-5 ">
              {/* Phone */}
              <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow transition">
                <FiPhone className="text-3xl text-[#394E6A]" />
                <span className="text-base font-semibold text-[#394E6A]">+8801714414775</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow transition">
                <FiMail className="text-3xl text-[#394E6A]" />
                <span className="text-base font-semibold text-[#394E6A]">bharartoy1005@gamil.com</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow transition">
                <FiMapPin className="text-3xl text-[#394E6A]" />
                <span className="text-base font-semibold text-[#394E6A]">Rangpur, Dhaka (Bangladesh)</span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-6 mt-8 ">
              <a href="#" className="w-10 h-10 bg-white rounded-full shadow flex justify-center items-center hover:bg-[#FF014F] transition">
                <FaFacebookF className="text-xl text-[#394E6A] hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full shadow flex justify-center items-center hover:bg-[#FF014F] transition">
                <FaGithub className="text-xl text-[#394E6A] hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full shadow flex justify-center items-center hover:bg-[#FF014F] transition">
                <FaLinkedinIn className="text-xl text-[#394E6A] hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full shadow flex justify-center items-center hover:bg-[#FF014F] transition">
                <FaInstagram className="text-xl text-[#394E6A] hover:text-white" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2 ">
            <div className="bg-white backdrop-blur-md shadow rounded-2xl p-8">
              <form className="flex flex-col gap-6">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-base font-semibold text-[#394E6A]">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#FF014F] transition"
                    required
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-base font-semibold text-[#394E6A]">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#FF014F] transition"
                    required
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-base font-semibold text-[#394E6A]">Message</label>
                  <textarea
                    placeholder="Write your message..."
                    className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#FF014F] transition h-36 resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#394E6A] hover:bg-[#FF014F] text-white font-bold rounded-lg transition-all"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
