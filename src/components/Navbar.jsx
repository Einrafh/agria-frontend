import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = ({ initialActive }) => {
    const [active, setActive] = useState(initialActive);
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="w-screen bg-primary py-4 rounded-b-[48px] drop-shadow-md">
            {/* Background full width */}
            <div className="w-screen flex justify-center">
                {/* Limited width content */}
                <div className="max-w-[1280px] w-full flex justify-between items-center px-6">
                    {/* Logo */}
                    <a href="/" className="mx-8">
                        <img src={logo} alt="agria" className="w-[120px]" />
                    </a>

                    {/* Desktop Search Input */}
                    <div className="flex-1 mx-4 hidden lg:block">
                        <input
                            type="text"
                            placeholder="Cari di agria"
                            className="w-full py-2 px-4 rounded-lg bg-[#E7F4EA] text-black placeholder:text-black placeholder:opacity-50 focus:outline-none"
                        />
                    </div>

                    {/* Desktop Menu Links */}
                    <ul className="list-none lg:flex hidden justify-center items-center flex-1 mx-6">
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-dmSans font-bold cursor-pointer text-base ${active === nav.title ? "text-white" : "text-white opacity-50"} ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                                onClick={() => setActive(nav.title)}
                            >
                                <a href={`/${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop Buttons */}
                    <div className="hidden lg:flex space-x-4 mx-6">
                        <a className="font-dmSans font-bold text-base px-5 py-3 border-2 border-white rounded-lg text-white" href="/login">
                            Masuk
                        </a>
                        <a className="font-dmSans font-bold text-base px-5 py-3 bg-[#DCF4E4] text-[#50C878] rounded-lg border-2 border-[#DCF4E4]" href="/register">
                            Daftar
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex flex-1 justify-end items-center">
                        <img
                            src={toggle ? close : menu}
                            alt="menu"
                            className="w-[28px] h-[28px] object-contain"
                            onClick={() => setToggle(!toggle)}
                        />
                    </div>

                    {/* Mobile/Tablet Pop-up Menu */}
                    <div
                        className={`fixed top-0 right-0 h-screen w-full sm:w-[50%] bg-primary p-6 transform ${
                            toggle ? "translate-x-0" : "translate-x-full"
                        } transition-transform duration-500 ease-in-out z-50`}
                    >
                        {/* Close button */}
                        <div className="flex justify-between items-center mb-6">
                            <a href="/" className="mx-8">
                                <img src={logo} alt="agria" className="w-[120px]" />
                            </a>
                            <img
                                src={close}
                                alt="close"
                                className="w-[28px] h-[28px] object-contain"
                                onClick={() => setToggle(false)}
                            />
                        </div>

                        {/* Mobile/Tablet Search Input */}
                        <div className="mb-6">
                            <input
                                type="text"
                                placeholder="Cari di agria"
                                className="w-full py-2 px-4 rounded-lg bg-[#E7F4EA] text-black placeholder:text-black placeholder:opacity-50 focus:outline-none"
                            />
                        </div>

                        {/* Mobile/Tablet Menu Links */}
                        <ul className="list-none flex flex-col items-start space-y-4">
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`font-dmSans font-medium cursor-pointer text-[16px] ${
                                        active === nav.title ? "text-white" : "text-white opacity-50"
                                    }`}
                                    onClick={() => {
                                        setActive(nav.title);
                                        setToggle(false);
                                    }}
                                >
                                    <a href={`/${nav.id}`}>{nav.title}</a>
                                </li>
                            ))}
                        </ul>

                        {/* Mobile/Tablet Buttons */}
                        <div className="mt-8 space-y-4">
                            <a className="font-dmSans font-bold text-base block text-center px-5 py-3 border-2 border-white rounded-lg text-white" href="/login">
                                Masuk
                            </a>
                            <a className="font-dmSans font-bold text-base block text-center px-5 py-3 bg-[#DCF4E4] text-[#50C878] rounded-lg border-2 border-[#DCF4E4]" href="/register">
                                Daftar
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;