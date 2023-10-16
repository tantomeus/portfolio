"use client";

import { FaMoon, FaSun, FaGlobe } from "react-icons/fa";

export default function Nav() {
    
    function handleToggleTheme(e: MouseEvent): void {
        const html = document.querySelector("html")!;
        if (html.className.includes("dark")) {
            html.className = "light";
        } else {
            html.className = "dark";
        }
    }

    return (
    <nav className="flex items-center px-6 lg:px-10 py-4 top-0 bg-white/80
    dark:bg-gray-900/80 backdrop-blur-md shadow-md fixed w-full z-50">
        <a>logo</a>

        <ul className="flex items-center gap-9 ml-auto">
            <li><a className="nav-item" href="#about">About</a></li>
            <li><a className="nav-item" href="#project">Projects</a></li>
            <li><a className="nav-item" href="#contact">Contact</a></li>
            <li><a className="nav-item" href="#contact">Resume</a></li>
        </ul>

        <div className="ml-9 flex gap-4">
            <button onClick={handleToggleTheme} aria-label="toggle theme">
                <span className="hidden dark:flex nav-button">{<FaMoon/>} Dark</span>
                <span className="flex dark:hidden nav-button">{<FaSun/>} Light</span>
                </button>
            <button aria-label="toggle language" className="nav-button">{<FaGlobe/>} Eng</button>
        </div>
    </nav>
    )
}