export default function TextReveal({ delay, colors, className="", children }: 
{delay: number, colors: string, className?: string, children: JSX.Element}) {

    function makeColorClasse(targ: string) {
        return colors.split(" ").map((color) => color.includes("dark") ? `${color.slice(0, 5)}${targ}-${color.slice(5)}` : `${targ}-${color}`).join(" ");
    }

    return (
    <div className={`relative overflow-x-clip ${className}`}>

        <div data-aos="zoom-in" data-aos-delay={delay + 300} data-aos-duration="500" 
        className={`inline ${makeColorClasse("text")}`}>
            {children}
        </div>

        <div data-aos="slide-right" data-aos-delay={delay} data-aos-duration="1000"
        className="flex w-[200%] absolute -inset-y-1 pointer-events-none">
            <div className="h-full w-1/2"></div>
            <div className={`${makeColorClasse("bg")} h-full grow mx-4`}></div>
        </div>
    </div>
    )
}
{/* <p 
className="inline text-colors text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold roboto-mono">
    console.
    <span className="text-red-400">log</span>
    (<span className="text-green-400">&quot;Hello there!&quot;</span>);
</p> */}
