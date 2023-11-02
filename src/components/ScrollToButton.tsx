"use client";

import { TbChevronDown, TbChevronUp } from "react-icons/tb";

export default function ScrollToButton({ position = "top" }) {
    const isBottom = position === "bottom";

    function handleScroll() {
        if (isBottom) document.querySelector("#hero")?.scrollIntoView({behavior: "smooth"});
        else document.querySelector("#about")?.scrollIntoView({behavior: "smooth"});
    }

    return (
    <button onClick={handleScroll} aria-label="scroll to page"
    data-aos="fade-down" data-aos-delay={isBottom ? "500" : "1500"} data-aos-duration="700" data-aos-offset="-200"
    className="flex justify-center py-5 text-slate-700 dark:text-slate-100 absolute w-14 mx-auto bottom-10 right-0 left-0">
        {isBottom && <TbChevronUp className="pulse text-3xl sm:text-4xl md:text-5xl"/>}
        {!isBottom && <TbChevronDown className="pulse text-3xl sm:text-4xl md:text-5xl"/>}
    </button>
    )
}