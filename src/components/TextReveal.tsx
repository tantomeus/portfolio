export default function TextReveal({ delay, colors, className="", children }: 
{delay: number, colors: {bg: string, text: string}, className?: string, children: JSX.Element}) {

    return (
    <div className={`relative overflow-x-clip pl-[1px] ${className}`}>

        <div data-aos="fade" data-aos-delay={delay + 300} data-aos-duration="500" 
        className={`inline ${colors.text}`}>
            {children}
        </div>

        <div data-aos="slide-right" data-aos-delay={delay} data-aos-duration="1000"
        className="flex w-[200%] absolute -inset-y-1 pointer-events-none">
            <div className="w-1/2 h-full"></div>
            <div className={`${colors.bg} h-full grow mx-4`}></div>
        </div>
    </div>
    )
}
