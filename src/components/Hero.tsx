import { AiFillGithub, AiOutlineMail } from "react-icons/ai";

import Bar from "./Bar";
import ScrollToButton from "./ScrollToButton";
import TextReveal from "./TextReveal";

export default function Hero() {
    
    return (
    <section id="hero" className="relative flex items-center justify-center min-h-screen overflow-hidden from-slate-200 to-slate-50 bg-gradient-to-b dark:from-slate-700 dark:to-slate-900">
        <div data-aos="slide-down" data-aos-delay="800" data-aos-duration="700" 
        className="absolute top-0 right-0 w-full gradient-green-y h-1/2 md:h-full md:w-1/3"></div>

        <div data-aos="fade-in" data-aos-delay="700" className="relative max-w-[90%] xs:max-w-[100%] min-w-[70%]">
            <div className="flex flex-col items-start px-5 shadow-2xl py-7 md:px-10 md:py-14 dark:bg-slate-900 bg-slate-100">
                <div
                className="bg-purple-400 dark:bg-purple-300 shadow-purple-300/60 shadow-lg w-5 sm:w-7 md:w-9 lg:w-10 h-1 sm:h-1.5 md:h-2 mb-4 underscore">
                </div>

                <TextReveal delay={1500} colors={{bg: "dark:bg-slate-50 bg-slate-800", text: "dark:text-slate-50 text-slate-800"}}>
                    <p className="text-lg font-semibold text-yellow-400 xs:text-2xl md:text-3xl lg:text-4xl xl:text-5xl roboto-mono">
                        <span className="text-green-400 dark:text-green-200">console.</span>
                        <span className="text-blue-500 dark:text-blue-400">log</span>
                        (<span className="text-green-400 dark:text-green-100">&quot;Hello there!&quot;</span>)<span className="text-green-400 dark:text-green-100">;</span>
                    </p>
                </TextReveal>

                <TextReveal className="mt-4" delay={1700} colors={{bg: "bg-slate-500", text: "text-slate-500"}}>
                    <p className="text-xs font-semibold xs:text-sm lg:text-lg xl:text-xl">
                        Tantomeus here. As you might have<br className="md:hidden"/> guessed, I&apos;m a web developer.
                    </p>
                </TextReveal>

                <div
                data-aos="flip-up" data-aos-delay="1500" data-aos-duration="1000" data-aos-offset="-200"
                className="mt-8 space-x-4 roboto-mono text-slate-800">
                    <a href="" className="px-2 py-1 text-xs font-semibold transition-colors bg-green-200 border border-green-400 rounded-sm shadow-lg sm:text-sm xs:px-4 shadow-green-300/20 hover:bg-green-300">View resume</a>
                    <a href="" className="px-2 py-1 text-xs font-semibold transition-colors bg-blue-200 border border-blue-400 rounded-sm shadow-lg sm:text-sm xs:px-4 shadow-blue-300/20 hover:bg-blue-300">Send message</a>
                </div>
            </div>
        </div>

        <ScrollToButton/>

        <Bar color="light" position="left-10 lg:left-14 bottom-0" delay="1500" duration="700" offset="0">
            <div className="flex flex-col gap-4">
                <a aria-label="github page" href="https://github.com/tantomeus"><AiFillGithub/></a>
                <a aria-label="send me an email" href="#"><AiOutlineMail/></a>
            </div>
        </Bar>
    </section>
    )
}