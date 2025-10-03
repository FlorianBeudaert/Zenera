"use client";
import { useState } from 'react';
import { Book, Menu } from 'lucide-react';

const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/wiki', label: 'Wiki' },
    { href: '/launcher', label: 'Launcher' },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-hover rounded-lg flex items-center justify-center">
                            <Book className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold">Zanera Wiki</span>
                    </div>
                    {/* Menu desktop */}
                    <nav className="hidden md:flex space-x-6">
                        {navLinks.map(link => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-gray-600 hover:text-primary transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                    {/* Menu mobile */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100 transition-colors"
                            aria-label="Toggle menu"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                        {menuOpen && (
                            <div className="absolute top-16 right-4 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl shadow-xl w-52 overflow-hidden">
                                <nav className="flex flex-col py-2">
                                    {navLinks.map(link => (
                                        <a
                                            key={link.href}
                                            href={link.href}
                                            className="px-6 py-3 text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-200 font-medium"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}