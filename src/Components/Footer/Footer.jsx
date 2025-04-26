// src/components/Footer.jsx
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* About Section */}
                <div>
                    <h2 className="text-xl font-bold mb-4">About Me</h2>
                    <p className="text-sm">
                        I am a passionate web developer specializing in building and designing modern websites. Let's connect!
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#home" className="hover:text-white">Home</a></li>
                        <li><a href="#projects" className="hover:text-white">Projects</a></li>
                        <li><a href="#about" className="hover:text-white">About</a></li>
                        <li><a href="#contact" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>

                {/* Social & Contact */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Follow Me</h2>
                    <div className="flex space-x-4 mb-4">
                        <a href="https://facebook.com" target="_blank" className="hover:text-white"><FaFacebookF size={20} /></a>
                        <a href="https://github.com" target="_blank" className="hover:text-white"><FaGithub size={20} /></a>
                        <a href="https://linkedin.com" target="_blank" className="hover:text-white"><FaLinkedinIn size={20} /></a>
                        <a href="https://twitter.com" target="_blank" className="hover:text-white"><FaTwitter size={20} /></a>
                    </div>
                    <p className="text-sm">Email: yourname@example.com</p>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="text-center text-sm text-gray-500 mt-10">
                © 2025 Your Name. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
