export default function Bar({ color="dark", position="left-14 bottom-0", delay="0", duration="0", offset="0", children }:
{color: string, delay: string, duration: string, offset: string, position: string, children: JSX.Element}) {
    const isBottom  = position.includes("bottom");

    return (
    <div data-aos={`slide-${isBottom ? "up" : "down"}`} data-aos-delay={delay} data-aos-duration={duration} data-aos-offset={offset}
    className={`text-xl absolute hidden sm:flex flex-col gap-4 items-center w-4 ${position} text-center text-slate-700 dark:text-slate-50 roboto-mono`}>
        {isBottom && children}
        <div className={`shadow-xl w-4 h-28 ${color === "dark" ? "dark:bg-slate-700 bg-slate-50" : "bg-slate-700 dark:bg-slate-50"}`}></div>
        {!isBottom && children}
    </div>
    )
}