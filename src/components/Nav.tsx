"use client";

import { FaMoon, FaSun, FaGlobe } from "react-icons/fa";
import { useEffect, useRef } from "react";

export default function Nav() {
    const nav = useRef<HTMLElement>(null);
    const navList = useRef<HTMLDivElement>(null);
    
    function handleOpenNav(e: React.MouseEvent) {
        const navListCur = navList.current!
        const btn = (e.target as HTMLElement).closest("button")!;

        btn.classList.toggle("hamburger-cross");

        if (navListCur.classList.contains("hidden")) {
            navListCur.classList.add("flex", "slide-down");
            navListCur.classList.remove("hidden", "slide-up");
        } else {
            navListCur.classList.add("slide-up");
            navListCur.classList.remove("slide-down");

            setTimeout(() => {
                navListCur.classList.add("hidden");
                navListCur.classList.remove("flex");
            }, 500);
        }
    }

    function handleToggleTheme(): void {
        const html = document.querySelector("html")!;
        if (html.className.includes("dark")) {
            html.className = "light";
        } else {
            html.className = "dark";
        }
    }

    useEffect(() => {
        const navCur = nav.current!;
        let prevScroll = window.scrollY;

        window.addEventListener("scroll", () => {
            const nextScroll = window.scrollY;
            
            if (prevScroll > nextScroll) navCur.style.transform = "translateY(0)";
            else navCur.style.transform = `translateY(-${navCur.offsetHeight}px)`;

            prevScroll = nextScroll;
        });

        window.addEventListener("mousemove", (e) => {
            if (e.clientY < navCur.offsetHeight) navCur.style.transform = "translateY(0)";
        });
    }, []);

    return (
    <nav ref={nav}
    className="flex flex-wrap items-center px-6 lg:px-10 py-4 top-0 bg-white/80
    dark:bg-gray-900/80 backdrop-blur-md shadow-md fixed w-full z-50 transition duration-500 roboto-mono">
        <a data-aos="flip-up" data-aos-duration="700" className="nav-item" href="#">logo</a>

        <button onClick={handleOpenNav} aria-label="toggle navigation"
        className="space-y-1 ml-auto md:hidden">
            <span className="block bg-gray-800 dark:bg-gray-50 w-6 h-1 rounded-sm transition duration-500"></span>
            <span className="block bg-gray-800 dark:bg-gray-50 w-6 h-1 rounded-sm transition duration-500"></span>
            <span className="block bg-gray-800 dark:bg-gray-50 w-6 h-1 rounded-sm transition duration-500"></span>
        </button>

        <div ref={navList}
        className="hidden md:flex grow sm:grow-0 justify-center flex-wrap mt-4 md:mt-0 min-w-full md:min-w-0 md:ml-auto">
            <ul className="flex items-center gap-4 2xs:gap-9">
                <li data-aos="zoom-in" data-aos-delay="200" data-aos-duration="700"><a className="nav-item" href="#about">About</a></li>
                <li data-aos="zoom-in" data-aos-delay="300" data-aos-duration="700"><a className="nav-item" href="#project">Projects</a></li>
                <li data-aos="zoom-in" data-aos-delay="400" data-aos-duration="700"><a className="nav-item" href="#contact">Contact</a></li>
                <li data-aos="zoom-in" data-aos-delay="500" data-aos-duration="700"><a className="nav-item" href="#contact">Resume</a></li>
            </ul>

            <div className="flex justify-center gap-4 mt-4 sm:mt-0 sm:ml-9 w-full sm:w-auto">
                <button data-aos="flip-up" data-aos-delay="600" data-aos-duration="700" onClick={handleToggleTheme} aria-label="toggle theme">
                    <span className="hidden dark:flex nav-button">{<FaMoon/>} Dark</span>
                    <span className="flex dark:hidden nav-button">{<FaSun/>} Light</span>
                </button>
                <button data-aos="flip-up" data-aos-delay="700" data-aos-duration="700" aria-label="toggle language" className="nav-button">
                    {<FaGlobe/>} Eng
                </button>
            </div>
        </div>

    </nav>
    )
}