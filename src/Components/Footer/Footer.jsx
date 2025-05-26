import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left Side */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-white mb-2">Bharat Roy</h2>
          <p className="text-sm">Web Developer | Frontend Specialist</p>
        </div>

        {/* Center - Social Links */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaFacebookF size={18} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaGithub size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaLinkedinIn size={18} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaTwitter size={18} />
          </a>
        </div>

        {/* Right Side */}
        <div className="text-center md:text-right text-sm">
          © 2025 Bharat Roy. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
