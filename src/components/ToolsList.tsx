"use client";

import { useRef, useState } from "react";
import { Tool } from "@/types.js";

import skills from "../skills.js"
import Image from "next/image"
import Modal from "./Modal";

export default function SkillsList() {
    const [selected, setSelected] = useState<Tool | null>(null);
    
    const ul = useRef(null);
    const target = useRef(null);

    function moveTo({pageX, pageY}: {pageX: number, pageY: number}, li: HTMLElement) {
        li.style.left = pageX - li.offsetWidth / 2 + "px";
        li.style.top = pageY - li.offsetHeight / 2 + "px";
    }

    function handleGrab(e: React.MouseEvent) {
        const ulCur = ul.current! as HTMLElement;
        const targetCur = target.current! as HTMLElement;
        const li = (e.target as HTMLElement).closest("li")!;
        const clone = li.cloneNode(true);

        li.style.cursor = "grabbing";
        li.style.position = "absolute";
        li.style.zIndex = "100";

        li.nextElementSibling?.before(clone);
        document.body.append(li);

        ulCur.querySelectorAll('li').forEach((node) => {
            if (node.dataset.name !== li.dataset.name) return;
            node.style.opacity = "10%";
        });

        moveTo({pageX: e.pageX, pageY: e.pageY}, li);

        function mouseMove(e: MouseEvent) {
            moveTo({pageX: e.pageX, pageY: e.pageY}, li);

            const below = document.elementFromPoint(e.clientX, e.clientY - li.offsetHeight)?.closest("div");
            const child = targetCur.firstChild! as HTMLElement;

            if (below?.isEqualNode(targetCur)) {
                child.classList.add("shadow-amber-500", "border-amber-500");
                li.onmouseup = function() {
                    const data = skills.find(skill => skill.name === li.dataset.name);
                    setSelected(data || null);
                    cleanUp();
                };
            } else {
                child.classList.remove("shadow-amber-500", "border-amber-500");
                li.onmouseup = cleanUp;
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

            ulCur.querySelectorAll('li').forEach(node => node.style.opacity = "");
            ulCur.replaceChild(li, clone);

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
    <div  data-aos="zoom-in" data-aos-delay="500" data-aos-duration="700" className="space-y-4 overflow-x-clip roboto-mono">
        {/* <div  data-aos="zoom-in" data-aos-offset="0" data-aos-duration="400"
        className="flex items-center">
            <hr className="grow"/>
            <h3 className="px-2">I know</h3>
            <hr className="grow"/>
        </div> */}

        {selected && <Modal tool={selected}/>}

        {!selected && <ul ref={ul} className="relative flex justify-center w-fit icons-moving">
            {[...skills, ...skills, ...skills].map((skill, i) => {
                return <li data-name={skill.name} key={i} onMouseDown={handleGrab}
                className="flex flex-col items-center px-2 cursor-grab">
                    <div className="rounded-lg w-9 h-9 gradient-pink-y">
                        <Image className="p-0.5 transition duration-300 ease-in-out opacity-75 hover:opacity-100"
                        width={38}
                        height={38}
                        src={`/skills/${skill.name}.svg`}
                        alt={skill.name}/>
                    </div>
                </li>
            })}
        </ul>}

        {!selected && <div ref={target} className="flex items-end h-20 mx-auto w-14">
            <div
            className="w-10 h-10 mx-auto border rounded-lg shadow-xl gradient-pink-y">
            </div>
        </div>}
        
    </div>
    )
}