import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const activeClass = 'bg-gray-200 font-bold';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false); // 
    };

    const links = (
        <>
            <li><NavLink to="/" onClick={handleLinkClick} className={({ isActive }) => isActive ? activeClass : ''}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={handleLinkClick} className={({ isActive }) => isActive ? activeClass : ''}>About</NavLink></li>
            <li><NavLink to="/skill" onClick={handleLinkClick} className={({ isActive }) => isActive ? activeClass : ''}>Skills</NavLink></li>
            <li><NavLink to="/projects" onClick={handleLinkClick} className={({ isActive }) => isActive ? activeClass : ''}>Projects</NavLink></li>
            <li><NavLink to="/contact" onClick={handleLinkClick} className={({ isActive }) => isActive ? activeClass : ''}>Contact</NavLink></li>
        </>
    );

    return (
        <>
            <header className="sticky top-0 z-50 bg-base-300 w-full shadow-md">
                <div className="w-[87%] mx-auto flex items-center justify-between py-2 ">

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

                    {/* Login button - hidden on small devices */}
                    <div className="hidden lg:flex">
                        <NavLink to="/login" className="btn border px-6 text-lg">
                            Login
                        </NavLink>
                    </div>

                    {/* Mobile Icon */}
                    <div className="lg:hidden">
                        <button onClick={() => setIsOpen(true)} className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Sidebar */}
            <div className={`fixed top-0 right-0 h-fit w-48 bg-base-100 z-[999] shadow-lg rounded transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-4 flex justify-between items-center border-b">
                    <h2 className="text-lg font-bold">Menu</h2>
                    <button onClick={() => setIsOpen(false)} className="text-2xl font-bold">&times;</button>
                </div>
                <ul className="menu px-4 py-2 font-medium space-y-1">
                    {links}                 
                </ul>
            </div>
        </>
    );
};

export default Header;
