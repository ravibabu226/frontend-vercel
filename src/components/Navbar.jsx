import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, User, BookOpen, BarChart } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                            <Compass className="h-8 w-8 text-blue-600" />
                            <span className="font-bold text-xl text-gray-800">Career Navigator</span>
                        </Link>
                    </div>
                    <div className="flex space-x-8 items-center">
                        <Link to="/" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">
                            Home
                        </Link>
                        <Link to="/features" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">
                            Features
                        </Link>
                        <Link to="/about" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">
                            About
                        </Link>
                        <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-150 ease-in-out flex items-center gap-2">
                            <User className="h-4 w-4" /> Login
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
