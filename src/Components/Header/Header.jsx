import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='navbar py-4 bg-[#202124] opacity-95 shadow-sm fixed z-20 top-0'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-3xl text-white  font-bold'>Portfolio</h1>
                    <ul className='flex items-center gap-5 text-white'>
                        <li> <NavLink to="/">Home</NavLink> </li>
                        <li> <NavLink to="/about">About</NavLink> </li>
                        <li> <NavLink to="/skill">Skills</NavLink> </li>
                        <li> <NavLink to="/services">Services</NavLink> </li>
                        <li> <NavLink to="/projects">projects</NavLink> </li>
                        <li> <NavLink to="/contact">Contact</NavLink> </li>
                        <li> <NavLink to="/login">Login</NavLink> </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;