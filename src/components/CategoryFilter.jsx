import {useState} from "react";
import {arrowDown, filter} from "../assets/index.js";

const CategoryFilter = () => {
    const [menuActiveIndex, setMenuActiveIndex] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown on mobile/tablet
    const menuItems = ['Pertanian', 'Perkebunan', 'Peternakan', 'Perikanan'];

    const handleMenuClick = (index) => {
        if (menuActiveIndex === index) {
            setMenuActiveIndex(null);
        } else {
            setMenuActiveIndex(index);
        }
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className={"flex flex-col lg:flex-row justify-between items-start my-20 gap-x-6 gap-y-6"}>
            <div className={`lg:shadow-md w-full lg:w-auto ${isDropdownOpen ? 'rounded-3xl lg:rounded-full shadow-md' : 'rounded-full'}`}>
                {/* Button for dropdown on mobile/tablet */}
                <button
                    className="lg:hidden px-16 py-6 flex justify-between items-center w-full bg-white shadow-md rounded-full"
                    onClick={toggleDropdown}
                >
                    <span className="font-dmSans font-bold text-xl">Pilih Kategori</span>
                    <img src={arrowDown} alt="arrowDown" className={"size-3"}/>
                </button>

                {/* Menu items */}
                <ul className={`lg:flex lg:flex-row items-center ${isDropdownOpen ? 'block' : 'hidden'} lg:block`}>c
                    {menuItems.map((item, index) => (
                        <button
                            key={index}
                            className={`px-16 py-6 block lg:inline-block w-full lg:w-auto text-left ${menuActiveIndex === index ? 'bg-secondary rounded-full text-white' : ''}`}
                            onClick={() => handleMenuClick(index)}
                        >
                            <h3 className={"font-dmSans font-bold text-xl"}>
                                {item}
                            </h3>
                        </button>
                    ))}
                </ul>
            </div>
            <div className={"flex flex-row rounded-full shadow-md px-16 py-6 gap-x-5 items-center"}>
                <img src={filter} alt="filter" className={"size-7"}/>
                <button className={"font-dmSans font-bold text-xl"}>
                    Filter
                </button>
                <img src={arrowDown} alt="arrowDown" className={"size-3"}/>
            </div>
        </div>
    );
};

export default CategoryFilter;
