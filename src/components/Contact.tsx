import Bar from "./Bar";
import Form from "./Form";
import ScrollToButton from "./ScrollToButton";
import TextReveal from "./TextReveal";

export default function Contact() {

    return (
    <section className="relative flex justify-center py-44 overflow-hidden from-slate-200 to-slate-50 bg-gradient-to-b dark:from-slate-700 dark:to-slate-900">
        <div data-aos="slide-down" data-aos-duration="700" 
        className="absolute top-0 left-0 w-full gradient-green-y h-1/2 md:h-full md:w-1/3"></div>

        <div data-aos="fade-in" data-aos-delay="700" className="relative max-w-[90%] xs:max-w-[100%] min-w-[70%] px-2 xs:px-6 sm:px-16 md:px-0">
            <div className="px-5 shadow-2xl py-7 md:px-10 md:py-14 dark:bg-slate-900 bg-slate-100">
                <div
                className="bg-purple-400 dark:bg-purple-300 shadow-purple-300/60 shadow-lg w-5 sm:w-7 md:w-9 lg:w-10 h-1 sm:h-1.5 md:h-2 mb-4 underscore">
                </div>

                <div className="flex gap-10 flex-col lg:flex-row">
                    <div className="space-y-4 basis-[42%]">
                        <TextReveal delay={600} colors={{bg: "dark:bg-slate-50 bg-slate-800", text: "dark:text-slate-50 text-slate-800"}}>
                            <h2 className="inline text-3xl font-black uppercase sm:text-4xl lg:text-6xl">Contact me</h2>
                        </TextReveal>

                        <TextReveal delay={700} colors={{bg: "dark:bg-slate-50 bg-slate-800", text: "dark:text-slate-50 text-slate-800"}}>
                            <p className="text-sm xs:text-base">Send me a message with your business proposals or simply wish me a good day.</p>
                        </TextReveal>
                    </div>

                    <Form/>
                </div>

            </div>
        </div>

        <ScrollToButton position="bottom"/>

        <Bar color="dark" position="left-10 lg:left-14 top-0" delay="100" duration="700" offset="200">
            <span className="text-3xl font-bold text-slate-50 dark:text-slate-700">011</span>
        </Bar>
    </section>
    )
}
