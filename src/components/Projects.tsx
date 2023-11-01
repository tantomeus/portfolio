import Bar from "./Bar";
import ProjectItem from "./ProjectItem";
import TextReveal from "./TextReveal";
import projects from "public/projects.json";

import { Project } from "@/types";

export default function Projects() {

    return (
    <section className="relative flex flex-col justify-center overflow-hidden bg-gradient-to-b from-slate-200 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <header className="relative flex justify-center grow">
            <div data-aos="slide-down" data-aos-duration="700" 
            className="absolute inset-0 gradient-green-y"></div>

            <div data-aos="fade"
            className="text-center flex flex-col items-center justify-center shadow-2xl dark:bg-slate-900 bg-slate-50 sm:max-w-[75%] p-5 md:p-10 mx-6 my-20 space-y-6 z-10">
                <TextReveal className="justify-self-end row-[2_/_3] lg:row-span-1 lg:col-span-full" delay={200}
                colors={{bg: "dark:bg-slate-50 bg-slate-800", text: "dark:text-slate-50 text-slate-800"}}>
                    <h2 className="text-3xl font-black uppercase sm:text-4xl lg:text-5xl">featured projects</h2>
                </TextReveal>

                <p data-aos="zoom-in" data-aos-delay="300"
                className="font-semibold text-center md:text-lg text-slate-600 dark:text-slate-300">I have industry experience working as a fullstack web developer, here are some featured projects</p>
            </div>
        </header>

        <Bar color="dark" position="right-10 lg:right-14 top-0" duration="700" delay="100" offset="200">
            <span className="text-3xl font-bold text-slate-50 dark:text-slate-700">011</span>
        </Bar>

        <section className="px-6 py-32 mx-auto space-y-24 xs:px-10 sm:px-20 max-w-7xl md:px-28">
            {projects.map((project: Project, i: number) => <ProjectItem key={i} direction={i % 2 === 0 ? "left" : "right"} project={project} />)}
        </section>

        <Bar color="light" position="left-10 lg:left-14 bottom-0" duration="700" delay="100" offset="200">
            <span className="text-3xl font-bold dark:text-slate-50 text-slate-700"></span>
        </Bar>
    </section>
    )
}