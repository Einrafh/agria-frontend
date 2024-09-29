import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = ({initialActive}) => {
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
                        <img src={logo} alt="agria" className="w-[120px]"/>
                    </a>

                    {/* Search Input */}
                    <div className="flex-1 mx-4">
                        <input
                            type="text"
                            placeholder="Cari di agria"
                            className="w-full py-2 px-4 rounded-lg bg-[#E7F4EA] text-black placeholder:text-black placeholder:opacity-50 focus:outline-none"
                        />
                    </div>

                    {/* Menu Links */}
                    <ul className="list-none sm:flex hidden justify-center items-center flex-1 mx-6">
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-dmSans font-bold cursor-pointer text-base ${
                                    active === nav.title ? "text-white" : "text-white opacity-50"
                                } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                                onClick={() => setActive(nav.title)}
                            >
                                <a href={`/${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>

                    {/* Buttons */}
                    <div className="hidden sm:flex space-x-4 mx-6">
                        <a className="font-dmSans font-bold text-base px-5 py-3 border-2 border-white rounded-lg text-white" href="/login">
                            Masuk
                        </a>
                        <a className="font-dmSans font-bold text-base px-5 py-3 bg-[#DCF4E4] text-[#50C878] rounded-lg border-2 border-[#DCF4E4]" href="/register">
                            Daftar
                        </a>
                    </div>

                    {/* Mobile Menu */}
                    <div className="sm:hidden flex flex-1 justify-end items-center">
                        <img
                            src={toggle ? close : menu}
                            alt="menu"
                            className="w-[28px] h-[28px] object-contain"
                            onClick={() => setToggle(!toggle)}
                        />
                        <div
                            className={`${
                                !toggle ? "hidden" : "flex"
                            } p-6 bg-[#71C58E] absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}
                        >
                            <ul className="list-none flex flex-col items-start">
                                {navLinks.map((nav, index) => (
                                    <li
                                        key={nav.id}
                                        className={`font-dmSans font-medium cursor-pointer text-[16px] ${
                                            active === nav.title
                                                ? "text-white"
                                                : "text-white opacity-50"
                                        } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                                        onClick={() => setActive(nav.title)}
                                    >
                                        <a href={`#${nav.id}`}>{nav.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;