import {useState} from "react";
import {arrowDown, filter} from "../assets/index.js";

const CategoryFilter = () => {
    const [menuActiveIndex, setMenuActiveIndex] = useState(null);

    const menuItems = ['Pertanian', 'Perkebunan', 'Peternakan', 'Perikanan'];

    const handleMenuClick = (index) => {
        if (menuActiveIndex === index) {
            setMenuActiveIndex(null);
        } else {
            setMenuActiveIndex(index);
        }
    };

    return (
        <div className={"flex flex-row justify-between items-center my-20 gap-x-6"}>
            <div className={"rounded-full shadow-md"}>
                <ul className={"flex flex-row items-center"}>
                    {menuItems.map((item, index) => (
                        <button
                            key={index}
                            className={`px-16 py-6 ${menuActiveIndex === index ? 'bg-secondary rounded-full text-white' : ''}`}
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