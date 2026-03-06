
export default function HeadingBar({setDark, dark}) {
    return (
        <div className="md:w-[30rem] flex justify-between items-center mb-12">
            <span className="text-4xl font-bold text-gray-50 tracking-[0.5em]">
                TODO
            </span>
            <img
                onClick={() => setDark(!dark)}
                src={dark ? "../../public/images/icon-sun.svg" : "../../public/images/icon-moon.svg"}
                alt={dark ? "sun" : "moon"}
                className="w-6 h-6 cursor-pointer"
            />
        </div>
    )
}