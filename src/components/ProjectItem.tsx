import { HiCode } from "react-icons/hi";
import { BsLink45Deg } from "react-icons/bs";
import { Project } from "@/types";

import Image from "next/image";

export default function ProjectItem({ direction, project }: {direction: string, project: Project}) {
    const isDirectionRight = direction === "right";

    return (
    <article className="grid items-center max-w-2xl grid-cols-1 gap-8 text-center lg:grid-cols-2 lg:gap-14 lg:max-w-6xl">
        <div className={isDirectionRight ? "lg:row-[1_/_2] lg:col-[2_/_3]" : ""}>
            <a data-aos="zoom-in" href={project.link} className="inline-block overflow-hidden rounded-md gradient-green-y">
                <Image className="object-scale-down p-3 transition duration-300 ease-in-out opacity-50 hover:blur-0 hover:opacity-100"
                width={520} height={300} src="/image.jpg" alt="screenshot"/>
            </a>

            <div data-aos="flip-up" data-aos-delay="200"
            className="flex items-center justify-center gap-6 mt-4">
                <a className="flex items-center gap-2 shadow-md rounded-md px-3 py-1.5 bg-slate-700 hover:bg-slate-600 transition-colors text-slate-50"
                aria-label="github page" href={project.github}>Code <HiCode className="w-6 h-6"/> </a>
                <a className="flex items-center gap-1 text-slate-800 dark:text-slate-100 hover:underline"
                aria-label="send me an email" href={project.link}>Link <BsLink45Deg className="w-5 h-5"/></a>
            </div>
        </div>

        <div className={`space-y-4 ${isDirectionRight ? "lg:row-[1_/_2] text-left" : "text-left"}`}>
            <h3 data-aos={`fade-${direction}`} data-aos-delay="0"
            className="text-2xl font-extrabold text-slate-800 dark:text-slate-50 lg:text-4xl">
                {project.name}
                <time className="ml-3 text-xl font-light text-right lg:text-2xl dark:text-slate-300">2023</time>
            </h3>

            <hr data-aos={`fade-${direction}`} data-aos-delay="200" className="border-slate-500"/>

            <p data-aos={`fade-${direction}`} data-aos-delay="400"
            className="font-semibold text-slate-600 dark:text-slate-300 ">{project.description}</p>

            <ul data-aos={`fade-${direction}`} data-aos-delay="600"
            className="flex flex-wrap gap-2 text-sm font-semibold lowercase text-slate-100 dark:text-slate-700 roboto-mono">
                {project.tools.map((tool) => <li key={tool} className="shadow-md rounded-md px-3 py-1.5 bg-slate-700 text-slate-50">{tool}</li>)}
            </ul>
        </div>
    </article>
    )
}