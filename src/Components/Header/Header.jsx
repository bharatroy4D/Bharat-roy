import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const links = (
        <>
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'bg-gray-200 font-bold' : ''}>Home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? 'bg-gray-200 font-bold' : ''}>About</NavLink></li>
            <li><NavLink to="/skill" className={({ isActive }) => isActive ? 'bg-gray-200 font-bold' : ''}>Skills</NavLink></li>
            <li><NavLink to="/services" className={({ isActive }) => isActive ? 'bg-gray-200 font-bold' : ''}>Services</NavLink></li>
            <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'bg-gray-200 font-bold' : ''}>Projects</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'bg-gray-200 font-bold' : ''}>Contact</NavLink></li>
        </>
    );

    return (
        <div className="sticky top-0 z-50  mx-auto">
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow text-lg">
                            {links}
                        </ul>
                    </div>
                    <NavLink to="/" className="btn btn-ghost text-2xl md:text-3xl font-bold">
                        Portfolio
                    </NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-5 px-1 text-lg font-medium">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <NavLink to="/login" className="btn border border-2 px-6 text-lg">
                        Login
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;
