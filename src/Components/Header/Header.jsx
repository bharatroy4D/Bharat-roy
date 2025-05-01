import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

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
                                `${isActive ? 'text-blue-500 font-bold underline underline-offset-8' : 'text-gray-700'} 
                                relative transition duration-300 hover:text-blue-600
                                before:content-[''] before:absolute before:bottom-0 before:left-0 
                                before:w-0 hover:before:w-full before:h-[2px] before:bg-blue-500 
                                before:transition-all before:duration-300`
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
            <header className="sticky top-0 z-50 bg-base-100 w-full shadow-md">
                <div className="w-[87%] mx-auto flex items-center justify-between py-2">
                    {/* Logo */}
                    <NavLink to="/" className="text-2xl md:text-3xl font-bold whitespace-nowrap">
                        Port<span className="text-blue-400">folio</span>
                    </NavLink>

                    {/* Navbar links - hidden on mobile */}
                    <nav className="hidden lg:flex flex-1 justify-center">
                        <ul className="menu menu-horizontal gap-4 px-1 text-lg font-medium">
                            {links}
                        </ul>
                    </nav>

                    {/* Hire Me button */}
                    <div className="hidden lg:flex">
                        <NavLink
                            to="/login"
                            className="btn border bg-[#394E6A] text-white hover:bg-red-400 px-6 text-lg"
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
                className={`fixed top-0 right-0 h-fit w-48 bg-base-100 z-[999] shadow-lg rounded transform transition-transform duration-300 ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="px-4 py-1 flex justify-between items-center border-b border-gray-300">
                    <h2 className="text-lg font-bold">Menu</h2>
                    <button onClick={() => setIsOpen(false)} className="text-2xl font-bold">
                        &times;
                    </button>
                </div>
                <ul className="menu px-4 w-full py-2 font-medium space-y-1">{links}</ul>
            </div>
        </>
    );
};

export default Header;
