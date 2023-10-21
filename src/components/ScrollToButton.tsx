"use client";

import { TbChevronDown } from "react-icons/tb";

export default function ScrollToButton() {

    function handleScroll() {
        document.querySelector("#about")?.scrollIntoView({behavior: "smooth"});
    }

    return (
    <button onClick={handleScroll} aria-label="go to about me"
    data-aos="fade-down" data-aos-delay="1500" data-aos-duration="700" data-aos-offset="-200"
    className="flex justify-center py-5 text-slate-700 dark:text-slate-100 absolute w-14 mx-auto bottom-10 right-0 left-0">
        <TbChevronDown className="pulse text-3xl sm:text-4xl md:text-5xl"/>
    </button>
    )
}