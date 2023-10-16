export default function Bar({ color = "dark", position = "left-14 bottom-0",  children }:
{color: string, position: string, children: JSX.Element}) {
    const isBottom  = position.includes("bottom");

    return (
    <div data-aos={`slide-${isBottom ? "up" : "down"}`} data-aos-delay="700" data-aos-duration="700"
    className={`text-xl absolute flex flex-col gap-4 items-center w-4 ${position} text-center text-gray-700 dark:text-gray-50`}>
        {isBottom && children}
        <div className={`shadow-xl w-4 h-28 ${color === "dark" ? "dark:bg-gray-700 bg-gray-50" : "bg-gray-700 dark:bg-gray-50"}`}></div>
        {!isBottom && children}
    </div>
    )
}