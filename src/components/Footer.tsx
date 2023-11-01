import { AiFillGithub } from "react-icons/ai";

export default function Footer() {
    return (
    <footer className="from-slate-200 to-slate-50 bg-gradient-to-b dark:to-slate-800 dark:from-slate-900 py-8 text-center">
        <div className="flex justify-center">
            <a href="#" aria-label="link to my github account"><AiFillGithub className="h-12 w-12"/></a>
        </div>
    </footer>
    )
}