"use client"
import "./HeaderComponent.css";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import React from 'react';

const ActiveElement = <div className="absolute bottom-0 left-0 w-full h-1 text-yellow-400 text-center text-4xl">.</div>

const HeaderComponent: React.FC = () => {
    const pathname = usePathname();
    return (
        <header className="text-white">
            <nav className="container mx-auto flex items-center justify-between p-4">
                {/* Logo Section */}
                <div className="text-2xl font-bold logo">
                    <Link href="/">
                        Nihal Shameem
                    </Link>
                </div>

                {/* Navigation Links */}
                <ul className="flex space-x-4">
                    <li className="relative">
                        <Link href="/" className={`hover:text-yellow5-400 ${pathname === "/" && 'text-yellow-400'}`}>
                            Home
                        </Link>
                        {pathname === "/" && ActiveElement}
                    </li>
                    <li>
                        <Link href="/about" className={`hover:text-yellow5-400 ${pathname === "/about" && 'text-yellow-400'}`}>
                            About
                        </Link>
                        {pathname === "/about" && ActiveElement}
                    </li>
                    <li>
                        <Link href="/projects" className={`hover:text-yellow5-400 ${pathname === "/projects" && 'text-yellow-400'}`}>
                            Projects
                        </Link>
                        {pathname === "/projects" && ActiveElement}
                    </li>
                    <li>
                        <Link href="/contact" className={`hover:text-yellow5-400 ${pathname === "/contact" && 'text-yellow-400'}`}>
                            Contact
                        </Link>
                        {pathname === "/contact" && ActiveElement}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderComponent;
