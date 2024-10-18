import Navigation from "@/app/components/Navigation"

export default function MobileMenu({ data }) {
    return (
        <label
            style={{
                marginTop: "5px"
            }}
            className="relative z-40 cursor-pointer lg:hidden"
            htmlFor="mobile-menu"
        >
            <input className="peer hidden" type="checkbox" id="mobile-menu" />
            <div className="relative z-50 block h-[1px] w-7 bg-black bg-transparent content-[''] before:absolute before:top-[-0.35rem] before:z-50 before:block before:h-full before:w-full before:bg-black before:transition-all before:duration-200 before:ease-out before:content-[''] after:absolute after:right-0 after:bottom-[-0.35rem] after:block after:h-full after:w-full after:bg-black after:transition-all after:duration-200 after:ease-out after:content-[''] peer-checked:bg-transparent before:peer-checked:top-0 before:peer-checked:w-full before:peer-checked:rotate-45 before:peer-checked:transform after:peer-checked:bottom-0 after:peer-checked:w-full after:peer-checked:-rotate-45 after:peer-checked:transform dark:bg-white dark:before:bg-black dark:after:bg-black dark:peer-checked:before:bg-white dark:peer-checked:after:bg-white"></div>
            <div className="fixed top-0 right-0 z-40 h-full w-full translate-x-full overflow-y-auto overscroll-y-none transition duration-500 peer-checked:translate-x-0">
                <div className="float-right min-h-full w-[85%] bg-white dark:bg-black px-6 pt-12 shadow-2xl">
                    <div>
                        <Navigation data={data} />
                    </div>
                </div>
            </div>
        </label>
    )
}
