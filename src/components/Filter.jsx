import {useState} from "react";

const Filter = () => {
    const [menuActiveIndex, setMenuActiveIndex] = useState(null);
    const [categoryActiveIndex, setCategoryActiveIndex] = useState(null);

    const menuItems = ['Pertanian', 'Perkebunan', 'Peternakan', 'Perikanan'];

    const categoryItems = ["Properti", "Bahan Baku"];

    const handleMenuClick = (index) => {
        if (menuActiveIndex === index) {
            setMenuActiveIndex(null);
        } else {
            setMenuActiveIndex(index);
        }
    };

    const handleCategoryClick = (index) => {
        if (categoryActiveIndex === index) {
            setCategoryActiveIndex(null);
        } else {
            setCategoryActiveIndex(index);
        }
    };

    return (
        <div>

        </div>
    );
};

export default Filter;