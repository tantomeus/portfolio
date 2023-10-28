"use client";

import { useState } from "react";

export default function Form() {
    const [username, setUsername] = useState("");

    return (
        <form
        // data-aos="flip-up" data-aos-delay="1500" data-aos-duration="1000" data-aos-offset="-200"
        className="space-y-5 text-slate-800 grow ">
            <div className="relative">
                <input value={username} onChange={(e) => setUsername(e.target.value)}
                className="w-full h-10 px-4 py-2 bg-transparent border-2 outline-none peer border-slate-600 hover:border-slate-600 focus:border-slate-50 text-slate-50"/>
                <label className={`absolute top-5 -translate-y-1/2 left-3 transition duration-200 peer-focus:scale-[80%] origin-top-left bg-slate-900 px-1 text-slate-600 peer-hover:text-slate-300  peer-focus:text-slate-50 peer-focus:translate-y-[-125%] pointer-events-none ${username ? "translate-y-[-125%] scale-[80%] text-stone-50" : ""}`}>Your name</label>
            </div>
            
            <div className="relative">
                <input value={username} onChange={(e) => setUsername(e.target.value)}
                className="w-full h-10 px-4 py-2 bg-transparent border-2 outline-none peer border-slate-600 hover:border-slate-600 focus:border-slate-50 text-slate-50"/>
                <label className={`absolute top-5 -translate-y-1/2 left-3 transition duration-200 peer-focus:scale-[80%] origin-top-left bg-slate-900 px-1 text-slate-600 peer-hover:text-slate-300  peer-focus:text-slate-50 peer-focus:translate-y-[-125%] pointer-events-none ${username ? "translate-y-[-125%] scale-[80%] text-stone-50" : ""}`}>Your email</label>
            </div>

            <div className="relative">
                <textarea name="" id="" cols={10} className="w-full px-4 py-2 bg-transparent border-2 outline-none min-h-1/4 peer border-slate-600 hover:border-slate-600 focus:border-slate-50 text-slate-50"></textarea>
                <label className={`absolute top-5 -translate-y-1/2 left-3 transition duration-200 peer-focus:scale-[80%] origin-top-left bg-slate-900 px-1 text-slate-600 peer-hover:text-slate-300  peer-focus:text-slate-50 peer-focus:translate-y-[-125%] pointer-events-none ${username ? "translate-y-[-125%] scale-[80%] text-stone-50" : ""}`}>Your message</label>
            </div>
        </form>
    )
}