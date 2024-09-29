const DetailCategory = ({ isOptional, categoryActiveIndex, setCategoryActiveIndex }) => {
    const categoryItems = ["Detail Produk", "Rating dan Ulasan", "Diskusi"];

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
        <div className={"border-b border-[#C8C8C8] border-dashed"}>
            <ul className={"relative flex z-10 -mb-[0.5px] justify-between"}>
                {categoryItems.map((item, index) => (
                    <button
                        key={index}
                        className={`w-full py-3 ${categoryActiveIndex === index ? 'text-secondary border-b-4 border-secondary' : 'border-b-4 border-transparent'}`}
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

export default DetailCategory;