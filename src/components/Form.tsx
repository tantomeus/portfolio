"use client";

import { useState } from "react";

export default function Form() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <form
        // data-aos="flip-up" data-aos-delay="1500" data-aos-duration="1000" data-aos-offset="-200"
        className="space-y-5 text-slate-800 grow text-right">
            <div className="relative">
                <input value={username} onChange={(e) => setUsername(e.target.value)}
                className="w-full h-10 px-4 py-2 bg-transparent border-2 outline-none peer border-slate-600 text-slate-900 focus:border-slate-900 dark:focus:border-slate-50 dark:text-slate-50"/>
                <label className={`label ${username ? "translate-y-[-125%] scale-[80%]" : ""}`}>Your name</label>
            </div>
            
            <div className="relative">
                <input value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full h-10 px-4 py-2 bg-transparent border-2 outline-none peer border-slate-600 text-slate-900 focus:border-slate-900 dark:focus:border-slate-50 dark:text-slate-50"/>
                <label className={`label ${email ? "translate-y-[-125%] scale-[80%]" : ""}`}>Your email</label>
            </div>

            <div className="relative">
                <textarea name="" id="" cols={10} value={message} onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 bg-transparent border-2 outline-none min-h-1/4 peer border-slate-600 text-slate-900 focus:border-slate-900 dark:focus:border-slate-50 dark:text-slate-50"></textarea>
                <label className={`label ${message ? "translate-y-[-125%] scale-[80%]" : ""}`}>Your message</label>
            </div>

            <button type="submit"
            className="px-2 py-1 text-base font-semibold transition-colors bg-blue-200 border border-blue-400 rounded-sm shadow-lg xs:px-4 shadow-blue-300/20 hover:bg-blue-300 roboto-mono">Send</button>
        </form>
    )
}