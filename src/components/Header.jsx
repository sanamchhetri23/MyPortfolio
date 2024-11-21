import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-800 p-4 flex items-center justify-between">
            {/* Logo */}
            <div className="text-white text-xl font-bold">
                <a href="/">MyLogo</a>
            </div>

            {/* Hamburger Button */}
            <button
                className="text-white md:hidden focus:outline-none ml-auto"
                onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="white"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                ) : (
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="white"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                )}
            </button>

            {/* Navigation Links */}
            <ul
                className={`flex-col md:flex md:flex-row md:space-x-6 ${isOpen ? 'flex' : 'hidden'
                    } md:flex mt-4 md:mt-0 space-y-4 md:space-y-0`}
            >
                <li>
                    <a href="/" className="text-white hover:text-yellow-400 block text-center">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#project" className="text-white hover:text-yellow-400 block text-center">
                        Project
                    </a>
                </li>
                <li>
                    <a href="#about" className="text-white hover:text-yellow-400 block text-center">
                        About
                    </a>
                </li>
                <li>
                    <a href="#contact" className="text-white hover:text-yellow-400 block text-center">
                        Contacts
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
