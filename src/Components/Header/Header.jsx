// src/components/Header.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeProvider';
import { div } from 'framer-motion/client';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme(); // theme context use

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    const links = (
        <>
            {['/', '/about', '/skill', '/projects', '/contact'].map((path, i) => {
                const labels = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
                return (
                    <li key={path}>
                        <NavLink
                            to={path}
                            onClick={handleLinkClick}
                            className={({ isActive }) =>
                                `${isActive ? 'text-blue-500 font-bold underline underline-offset-8' : ''} 
                                relative transition duration-300 hover:text-blue-600`
                            }
                        >
                            {labels[i]}
                        </NavLink>
                    </li>
                );
            })}
        </>
    );

    return (
        <>
            <header
                className={`sticky top-0 z-50 w-full shadow-md transition-colors duration-300
                ${theme === 'light' ? 'bg-gray-100/90 text-black' : 'bg-gray-800/95 text-white'}`}
            >
                <div className="lg:max-w-7xl mx-auto flex items-center justify-between py-2 px-5 md:10 lg:px-20">
                    {/* Logo */}
                    <NavLink to="/" className="text-2xl md:text-3xl font-bold whitespace-nowrap">
                        Port<span className="text-blue-400">folio</span>
                    </NavLink>

                    {/* Navbar links - hidden on mobile */}
                    <nav className="hidden lg:flex flex-1 justify-center">
                        <ul className="menu menu-horizontal gap-4 lato px-1 text-lg font-medium">
                            {links}
                        </ul>
                    </nav>

                    {/* Right side buttons */}
                    <div className="hidden lg:flex items-center gap-4">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="px-3 py-2 rounded-full border transition"
                        >
                            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
                        </button>

                        {/* Hire Me button */}
                        <NavLink
                            to="/hireMe"
                            className="btn border bg-blue-500 text-white hover:bg-blue-800 px-6 rounded-full text-lg"
                        >
                            Hire Me
                        </NavLink>
                    </div>

                    {/* Mobile Icon */}
                    <div className="lg:hidden">
                        <button onClick={() => setIsOpen(true)} className="btn btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 right-0 h-fit w-48 z-[999] shadow-lg rounded 
                transform transition-transform duration-300 
                ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'} 
                ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="px-4 py-1 flex justify-between items-center border-b border-gray-300 dark:border-gray-700">
                    <h2 className="text-lg font-bold">Menu</h2>
                    <button onClick={() => setIsOpen(false)} className="text-2xl font-bold">
                        &times;
                    </button>
                </div>
                <ul className="menu px-4 w-full py-2 font-medium space-y-1">{links}</ul>

                {/* Mobile Theme Toggle */}
                <div className="px-4 py-2">
                    <button
                        onClick={toggleTheme}
                        className="w-full px-3 py-2 rounded border transition"
                    >
                        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
                    </button>
                </div>
            </div>
            <div>
                {/* backdrop */}
                {isOpen && (
                    <div className='fixed inset-0 bg-black opacity-25 z-50'
                        onClick={() => setIsOpen(!isOpen)}>

                    </div>
                )}
            </div>
        </>
    );
};

export default Header;
