import { useState } from "react";
import { CgMenuGridR } from "react-icons/cg";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="w-full flex justify-between items-center px-20 py-5 bg-myred text-mybiege relative max-sm:px-5 max-md:px-5">
            <div className="flex gap-2">
                <div className="flex flex-col max-sm:flex-row max-sm:gap-3">
                    <button
                        onClick={() => setShowMenu(true)}
                        className="hidden text-4xl max-sm:block"
                    >
                        <CgMenuGridR />
                    </button>
                    <h1 className="text-5xl font-extrabold tracking-tighter max-sm:text-4xl">
                        IELTS
                    </h1>
                </div>
            </div>
            {showMenu ? (
                <div className="w-[100vw] h-[100vh] fixed top-0 left-0 justify-center items-center bg-myred text-mybiege text-2xl z-10 hidden max-sm:flex max-sm:flex-col">
                    <button onClick={() => setShowMenu(false)} className="text-3xl -translate-y-30 px-3 border-2 rounded-md border-mybiege">x</button>
                    <ul className="flex flex-col justify-center items-center gap-7">
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer">Features</li>
                        <li className="cursor-pointer">Testimonials</li>
                        <li className="cursor-pointer">Contact</li>
                    </ul>
                </div>
            ) : (
                <div>
                    <ul className="flex gap-7 max-sm:hidden max-md:text-lg">
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer">Features</li>
                        <li className="cursor-pointer">Testimonials</li>
                        <li className="cursor-pointer">Contact</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
