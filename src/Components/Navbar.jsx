import React, { useState } from "react";
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="h-20 flex items-center justify-between px-6 lg:px-40 sticky top-0 bg-white  z-50">
            <h1 className="logo text-violet-600 text-3xl font-semibold">Digency</h1>

            <div className="lg:hidden cursor-pointer text-3xl" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>

            <div className={`links flex-col lg:flex-row lg:flex gap-8 absolute lg:static bg-white lg:bg-transparent left-0 w-full lg:w-auto transition-all duration-300 ${isOpen ? 'top-20 flex' : 'top-[-300px] hidden'}`}>
                <Link className="cursor-pointer font-semibold hover:text-violet-600 py-2 lg:py-0" to="home" spy={true} smooth={true} duration={500}>Home</Link>
                <Link className="cursor-pointer font-semibold hover:text-violet-600 py-2 lg:py-0" to="services" spy={true} smooth={true} duration={500}>Services</Link>
                <Link className="cursor-pointer font-semibold hover:text-violet-600 py-2 lg:py-0" to="about" spy={true} smooth={true} duration={500}>About</Link>
                <Link className="cursor-pointer font-semibold hover:text-violet-600 py-2 lg:py-0" to="blog" spy={true} smooth={true} duration={500}>Blog</Link>
            </div>
        </div>
    );
}
