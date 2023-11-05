"use client";

import { useRef, useState } from "react";
import { Tool } from "@/types.js";
import { TbDragDrop2 } from "react-icons/tb";

import tools from "@public/tools.json";
import Image from "next/image";

export default function ToolsList() {
    const [selected, setSelected] = useState<Tool | null>(null);
    const [isBackSide, setIsBackSide] = useState(false);
    const [isValidTarget, setIsValidTarget] = useState(false);
    
    const ul = useRef<HTMLElement[]>([]);
    const target = useRef(null);

    function moveTo({pageX, pageY}: {pageX: number, pageY: number}, li: HTMLElement) {
        li.style.left = pageX - li.offsetWidth / 2 + "px";
        li.style.top = pageY - li.offsetHeight / 2 + "px";
    }

    function handleTouchGrab(e: React.TouchEvent) {
        const targetCur = target.current! as HTMLElement;

        const li = (e.target as HTMLElement).closest("li")!;
        const clone = li.cloneNode(true) as HTMLElement;

        ul.current.forEach((node) => {
            if (node.dataset.name !== li.dataset.name) return;
            node.style.opacity = "10%";
        });
        clone.style.opacity = "10%"

        li.style.cursor = "grabbing";
        li.style.position = "absolute";
        li.style.zIndex = "100";
        li.style.opacity = "100%";

        li.nextElementSibling?.before(clone);
        document.body.append(li);

        moveTo({pageX: e.changedTouches[0].pageX, pageY: e.changedTouches[0].pageY}, li);

        function touchMove(e: TouchEvent) {
            moveTo({pageX: e.changedTouches[0].pageX, pageY: e.changedTouches[0].pageY}, li);

            li.querySelector("div")!.hidden = true;
            const below = document.elementFromPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY)?.closest(".target");
            li.querySelector("div")!.hidden = false;

            if (below?.isEqualNode(targetCur)) {
                setIsValidTarget(true);

                li.ontouchend = function() {
                    const data = tools.find(tool => tool.name === li.dataset.name);
                    setSelected(data || null);
                    setIsBackSide(true);
                    cleanUp();
                };
            } else {
                li.ontouchend = cleanUp;
                setIsValidTarget(false);
            }
        }
        
        document.addEventListener("touchmove", touchMove);

        function cleanUp() {
            document.removeEventListener("touchmove", touchMove);

            li.style.cursor = "";
            li.style.position = "";
            li.style.zIndex = "";
            li.style.top = "";
            li.style.left = "";

            setIsValidTarget(false);

            ul.current.forEach(node => node.style.opacity = "");
            clone.replaceWith(li);

            li.ontouchstart = null;
            li.ontouchend = null;
        }
        
        li.ontouchstart = cleanUp;

        li.ontouchend = cleanUp;

        li.ondragstart = function() {
            return false;
        };
    }

    function handleMouseGrab(e: React.MouseEvent) {
        const targetCur = target.current! as HTMLElement;

        const li = (e.target as HTMLElement).closest("li")!;
        const clone = li.cloneNode(true) as HTMLElement;

        ul.current.forEach((node) => {
            if (node.dataset.name !== li.dataset.name) return;
            node.style.opacity = "10%";
        });
        clone.style.opacity = "10%"

        li.style.cursor = "grabbing";
        li.style.position = "absolute";
        li.style.zIndex = "100";
        li.style.opacity = "100%";

        li.nextElementSibling?.before(clone);
        document.body.append(li);

        moveTo({pageX: e.pageX, pageY: e.pageY}, li);

        function mouseMove(e: MouseEvent) {
            moveTo({pageX: e.pageX, pageY: e.pageY}, li);

            li.querySelector("div")!.hidden = true;
            const below = document.elementFromPoint(e.clientX, e.clientY)?.closest(".target");
            li.querySelector("div")!.hidden = false;

            if (below?.isEqualNode(targetCur)) {
                setIsValidTarget(true);

                li.onmouseup = function() {
                    const data = tools.find(tool => tool.name === li.dataset.name);
                    setSelected(data || null);
                    setIsBackSide(true);
                    cleanUp();
                };
            } else {
                li.onmouseup = cleanUp;
                setIsValidTarget(false);
            }
        }
        
        document.addEventListener("mousemove", mouseMove);

        function cleanUp() {
            document.removeEventListener("mousemove", mouseMove);

            li.style.cursor = "";
            li.style.position = "";
            li.style.zIndex = "";
            li.style.top = "";
            li.style.left = "";

            setIsValidTarget(false);

            ul.current.forEach(node => node.style.opacity = "");
            clone.replaceWith(li);

            li.onmouseleave = null;
            li.onmouseup = null;
        }
        
        li.onmouseleave = cleanUp;

        li.onmouseup = cleanUp;

        li.ondragstart = function() {
            return false;
        };
    }

    return (
    <div data-aos="zoom-in" data-aos-delay="500" data-aos-duration="700"
    className="w-full max-w-xl h-20 sm:h-28">

        <div className="w-full h-full flip-box">
            <div style={{transform: isBackSide ? "rotateX(180deg)" : ""}} className="h-full flip-box-inner">
                <div className="flex items-center h-full px-5 shadow-2xl flip-box-front dark:bg-slate-900 bg-slate-50">
                    <div className="overflow-hidden">
                        <ul className="relative flex justify-center w-fit icons-moving">
                            {[...tools, ...tools, ...tools].map((tool, i) => {
                                return <li ref={el => {
                                    if (!el) return;
                                    ul.current[i] = el;
                                }} data-name={tool.name} key={i} onMouseDown={handleMouseGrab} onTouchStart={handleTouchGrab}
                                className={`flex flex-col items-center px-2 cursor-grab`}>
                                    <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg">
                                        <Image className=""
                                        width={48}
                                        height={48}
                                        src={`/tools/${tool.name}.svg`}
                                        alt={tool.name}/>
                                    </div>
                                </li>
                            })}
                        </ul>
                    </div>

                    <div ref={target} className="flex items-center justify-center w-10 sm:w-20 h-16 sm:h-24 pl-4 border-l-2 target">
                        <div
                        className={`flex items-center justify-center w-10 h-10 mx-auto transition duration-500 rounded-lg 
                        ${isValidTarget ? "border-amber-500" : ""}`}>
                            <TbDragDrop2 className={`w-12 h-12 transition duration-300 ${isValidTarget ? "text-amber-500" : ""}`}/>
                        </div>
                    </div>
                </div>

                <div onClick={() => setIsBackSide(false)} className="h-full shadow-2xl flip-box-back cursor-pointer">
                    {selected && (
                    <div style={{background: "url(/image.jpg) center center / cover no-repeat"}}
                        className="flex items-center justify-center w-full h-full p-3 text-base text-slate-50">
                        <p className="px-3 text-base text-center bg-slate-900/80 first-letter:uppercase">{selected.name} {selected.descr}</p>
                    </div>)}
                </div>

            </div>
        </div>

    </div>
    )
}
