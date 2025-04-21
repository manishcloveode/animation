'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Menu } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="w-full sticky top-0 bg-white py-6 px-6 md:px-12 flex items-center justify-between">

            <Link href="/" className="text-2xl font-bold text-black">
                LUSION
            </Link>

            <div className="flex items-center gap-2 md:gap-4">
                <button className="hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                    <span className="h-1 w-4 bg-black rounded-full"></span>
                </button>
                <Link
                    href="/contact"
                    className="group flex items-center gap-2 py-2 px-4 md:px-6 rounded-full bg-gray-900 hover:bg-blue-600 transition-all"
                >
                    <ArrowRight className="text-white" size={16} />
                    <span className="text-white font-medium">LET'S TALK</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">

                    </span>
                </Link>


                <div className="relative">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="flex items-center gap-2 py-2 px-4 rounded-full hover:bg-gray-100 transition-colors"
                    >
                        <span className="hidden md:inline font-medium">MENU</span>
                        <Menu size={20} className="text-gray-800" />
                    </button>

                    {isMenuOpen && (
                        <div className="absolute right-0 top-full mt-2 w-56 bg-white shadow-xl rounded-xl py-4 z-10 text-black">
                            <Link href="/" className="flex justify-between items-center px-6 py-3 text-lg font-semibold uppercase">
                                Home <span className="text-xl">•</span>
                            </Link>
                            <Link href="/#" className="block px-6 py-3 text-lg font-semibold uppercase">
                                About Us
                            </Link>
                            <Link href="/#" className="block px-6 py-3 text-lg font-semibold uppercase">
                                Projects
                            </Link>
                            <Link href="/#" className="block px-6 py-3 text-lg font-semibold uppercase">
                                Contact
                            </Link>
                        </div>
                    )}
                </div>

            </div>
        </nav>
    );
};

export default Navbar;