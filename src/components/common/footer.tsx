"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUp } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-16 px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="space-y-2">
                        <p className="font-medium">Suite 2</p>
                        <p>9 Marsh Street</p>
                        <p>Bristol, BS1 4AA</p>
                        <p>United Kingdom</p>
                    </div>
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <Link href="https://twitter.com" className="block hover:underline">
                                Twitter / X
                            </Link>
                            <Link href="https://instagram.com" className="block hover:underline">
                                Instagram
                            </Link>
                            <Link href="https://linkedin.com" className="block hover:underline">
                                Linkedin
                            </Link>
                        </div>

                        <div className="space-y-2">
                            <p className="font-medium">General enquires</p>
                            <a href="mailto:hello@lusion.co" className="block hover:underline">
                                hello@lusion.co
                            </a>
                        </div>

                        <div className="space-y-2">
                            <p className="font-medium">New business</p>
                            <a href="mailto:business@lusion.co" className="block hover:underline">
                                business@lusion.co
                            </a>
                        </div>
                    </div>

                    {/* Newsletter Section */}
                    <div className="space-y-6">
                        <h3 className="text-4xl font-bold">Subscribe to our newsletter</h3>
                        <div className="flex items-center bg-gray-100 rounded-full overflow-hidden">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-grow py-4 px-6 bg-transparent outline-none"
                            />
                            <button
                                type="submit"
                                className="p-4 text-black hover:bg-gray-200"
                                aria-label="Subscribe"
                            >
                                <ArrowRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="mt-16 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm">©2024 LUSION Creative Studio</p>

                    <div className="flex items-center space-x-4 mt-4 md:mt-0">
                        <Link href="https://labs.lusion.co" className="text-sm hover:underline">
                            R&D: labs.lusion.co
                        </Link>

                        <div className="flex items-center">
                            <span className="text-sm">Built by Lusion with</span>
                            <span className="text-red-500 mx-1">❤️</span>
                        </div>
                    </div>

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="mt-4 md:mt-0 bg-black text-white p-4 rounded-full hover:bg-gray-800"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp size={24} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;