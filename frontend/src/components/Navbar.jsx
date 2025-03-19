import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-900 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold">
                    E-Shop
                </Link>

                {/* Menu for Larger Screens */}
                <div className="hidden md:flex space-x-6">
                    <Link to="/" className="hover:text-gray-400">Home</Link>
                    <Link to="/collection" className="hover:text-gray-400">Collection</Link>
                    <Link to="/cart" className="hover:text-gray-400">Cart</Link>
                    <Link to="/login" className="hover:text-gray-400">Login</Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="text-2xl">&#9776;</span> {/* Hamburger Icon */}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden flex flex-col space-y-4 mt-4">
                    <Link to="/" className="block px-4 py-2 hover:bg-gray-800">Home</Link>
                    <Link to="/collection" className="block px-4 py-2 hover:bg-gray-800">Collection</Link>
                    <Link to="/cart" className="block px-4 py-2 hover:bg-gray-800">Cart</Link>
                    <Link to="/login" className="block px-4 py-2 hover:bg-gray-800">Login</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
