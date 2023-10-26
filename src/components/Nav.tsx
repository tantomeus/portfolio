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
            html.style.setProperty("--scheme", "light");
        } else {
            html.className = "dark";
            html.style.setProperty("--scheme", "dark");
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
    className="fixed top-0 z-[1000] flex flex-wrap items-center w-full px-6 py-4 transition duration-500 shadow-md lg:px-10 bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-md roboto-mono">
        <a data-aos="flip-up" data-aos-duration="700" className="nav-item" href="#">logo</a>

        <button onClick={handleOpenNav} aria-label="toggle navigation"
        className="ml-auto space-y-1 md:hidden">
            <span className="block w-6 h-1 transition duration-500 rounded-sm bg-slate-800 dark:bg-slate-50"></span>
            <span className="block w-6 h-1 transition duration-500 rounded-sm bg-slate-800 dark:bg-slate-50"></span>
            <span className="block w-6 h-1 transition duration-500 rounded-sm bg-slate-800 dark:bg-slate-50"></span>
        </button>

        <div ref={navList}
        className="flex-wrap justify-center hidden min-w-full mt-4 md:flex grow sm:grow-0 md:mt-0 md:min-w-0 md:ml-auto">
            <ul className="flex items-center gap-4 2xs:gap-9">
                <li data-aos="zoom-in" data-aos-delay="200" data-aos-duration="700"><a className="nav-item" href="#about">About</a></li>
                <li data-aos="zoom-in" data-aos-delay="300" data-aos-duration="700"><a className="nav-item" href="#project">Projects</a></li>
                <li data-aos="zoom-in" data-aos-delay="400" data-aos-duration="700"><a className="nav-item" href="#contact">Contact</a></li>
                <li data-aos="zoom-in" data-aos-delay="500" data-aos-duration="700"><a className="nav-item" href="#contact">Resume</a></li>
            </ul>

            <div className="flex justify-center w-full gap-4 mt-4 sm:mt-0 sm:ml-9 sm:w-auto">
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