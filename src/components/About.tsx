import Bar from "./Bar";
import ToolsList from "./ToolsList";
import TextReveal from "./TextReveal";


export default function About() {
    return (
    <article id="about" className="relative flex items-center justify-center py-24 overflow-hidden from-slate-100 to-slate-200 bg-gradient-to-b dark:from-slate-800 dark:to-slate-700 dark:text-slate-50 text-slate-700">
        <div data-aos="slide-right" data-aos-offset="100" data-aos-duration="700" 
        className="absolute top-0 left-0 w-1/3 h-full gradient-pink-y lg:w-1/4"></div>

        <div className="grid justify-items-center lg:justify-items-end grid-cols-1 lg:grid-cols-[1fr_2fr] gap-x-20 gap-y-10 z-10 px-6 xs:px-8 sm:px-16 md:px-20">
            
            <TextReveal className="justify-self-end row-[2_/_3] lg:row-span-1 lg:col-span-full" delay={200}
            colors={{bg: "dark:bg-slate-50 bg-slate-800", text: "dark:text-slate-50 text-slate-800"}}>
                <h2 className="text-4xl font-black uppercase xs:text-5xl md:text-7xl">About me</h2>
            </TextReveal>

            <div className="h-96 w-72 bg-slate-500"></div>
            
            <div className="flex flex-col items-end gap-4 text-lg">
                <div className="max-w-xl p-3 space-y-6 shadow-2xl dark:bg-slate-900 bg-slate-50">
                    <p data-aos="zoom-in-left" data-aos-offset="0" data-aos-delay="100" data-aos-duration="400"
                    className="first-letter:text-4xl first-letter:font-bold">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia?</p>
                </div>

                <TextReveal delay={400}
                colors={{bg: "dark:bg-slate-50 bg-slate-800", text: "dark:text-slate-50 text-slate-800"}}>
                    <h3 className="text-3xl font-semibold text-right uppercase">Tools & Skills</h3>
                </TextReveal>
                
                <ToolsList/>
            </div>

        </div>

        <Bar color="dark" position="left-10 lg:left-14 top-0" duration="700" delay="100" offset="200">
            <span className="text-3xl font-bold text-slate-50 dark:text-slate-700">001</span>
        </Bar>

        <Bar color="light" position="right-10 lg:right-14 bottom-0" duration="700" delay="0" offset="0">
            <span className="text-3xl font-bold dark:text-slate-50 text-slate-700"></span>
        </Bar>
    </article>
    )
}