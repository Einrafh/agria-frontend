import { useState } from "react";

const SubCategoryFilter = ({ isOptional, categoryActiveIndex, setCategoryActiveIndex }) => {
    const categoryItems = ["Properti", "Bahan Baku"];

    const handleCategoryClick = (index) => {
        if (categoryActiveIndex === index) {
            if (isOptional) {
                setCategoryActiveIndex(null); // Jika opsional, bisa mengosongkan pilihan
            }
        } else {
            setCategoryActiveIndex(index); // Pilih kategori baru
        }
    };

    return (
        <div className={"border-b border-[#C8C8C8]"}>
            <ul className={"relative z-10 -mb-[0.5px]"}>
                {categoryItems.map((item, index) => (
                    <button
                        key={index}
                        className={`px-6 py-3 ${categoryActiveIndex === index ? 'text-secondary border-b-4 border-secondary' : 'border-b-4 border-transparent'}`}
                        onClick={() => handleCategoryClick(index)}
                    >
                        <h3 className={"font-dmSans font-bold text-xl"}>
                            {item}
                        </h3>
                    </button>
                ))}
            </ul>
        </div>
    );
};

export default SubCategoryFilter;