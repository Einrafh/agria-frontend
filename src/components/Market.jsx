import {useEffect, useState} from 'react';
import {arrowDown, bintang, filter, luas, mail, promoProperti, promoYields} from "../assets";
import PropertyCard from "./PropertyCard.jsx";
import YieldsCard from "./YieldsCard.jsx";
import SubCategoryFilter from "./SubCategoryFilter.jsx";
import PropertyPromo from "./PropertyPromo.jsx";
import YieldsPromo from "./YieldsPromo.jsx";
import CategoryFilter from "./CategoryFilter.jsx";

const Market = ({category, data}) => {
    /*
    const property = [
        {
            image: promoProperti,
            category: "Pertanian",
            rating: 4.8,
            title: "Lahan Pertanian Padi",
            address: "Jl. Tvri, Oro-Oro Ombo",
            price: "20.000.000",
            area: 900,
            certificate: "SHM"
        },
        {
            image: promoProperti,
            category: "Pertanian",
            rating: 4.8,
            title: "Lahan Pertanian Padi",
            address: "Jl. Tvri, Oro-Oro Ombo",
            price: "20.000.000",
            area: 900,
            certificate: "SHM"
        },
        {
            image: promoProperti,
            category: "Pertanian",
            rating: 4.8,
            title: "Lahan Pertanian Padi",
            address: "Jl. Tvri, Oro-Oro Ombo",
            price: "20.000.000",
            area: 900,
            certificate: "SHM"
        },
        {
            image: promoProperti,
            category: "Pertanian",
            rating: 4.1,
            title: "Lahan Pertanian Padi",
            address: "Jl. Tvri, Oro-Oro Ombo",
            price: "35.000.000",
            area: 900,
            certificate: "SHM"
        },
        {
            image: promoProperti,
            category: "Pertanian",
            rating: 4.8,
            title: "Lahan Pertanian Padi",
            address: "Jl. Tvri, Oro-Oro Ombo",
            price: "20.000.000",
            area: 900,
            certificate: "SHM"
        },
        {
            image: promoProperti,
            category: "Pertanian",
            rating: 4.8,
            title: "Lahan Pertanian Padi",
            address: "Jl. Tvri, Oro-Oro Ombo",
            price: "20.000.000",
            area: 900,
            certificate: "SHM"
        },
        {
            image: promoProperti,
            category: "Pertanian",
            rating: 4.8,
            title: "Lahan Pertanian Padi",
            address: "Jl. Tvri, Oro-Oro Ombo",
            price: "20.000.000",
            area: 900,
            certificate: "SHM"
        },
        {
            image: promoProperti,
            category: "Pertanian",
            rating: 4.8,
            title: "Lahan Pertanian Padi",
            address: "Jl. Tvri, Oro-Oro Ombo",
            price: "20.000.000",
            area: 900,
            certificate: "SHM"
        },
        {
            image: promoProperti,
            category: "Pertanian",
            rating: 4.8,
            title: "Lahan Pertanian Padi",
            address: "Jl. Tvri, Oro-Oro Ombo",
            price: "20.000.000",
            area: 900,
            certificate: "SHM"
        },
        // Tambahkan item lainnya...
    ];

    const yields = [
        {
            image: promoYields,
            category: "Pertanian",
            rating: 4.5,
            title: "Bayam Sore",
            address: "Jl. Tvri, Oro-Oro Ombo",
            price: "127.500",
            area: 900,
            certificate: "SHM"
        },
        {
            image: promoYields,
            category: "Pertanian",
            rating: 4.5,
            title: "Bayam Sore",
            address: "Jl. Tvri, Oro-Oro Ombo",
            price: "127.500",
            area: 900,
            certificate: "SHM"
        },
        {
            image: promoYields,
            category: "Pertanian",
            rating: 4.5,
            title: "Bayam Sore",
            address: "Jl. Tvri, Oro-Oro Ombo",
            price: "127.500",
            area: 900,
            certificate: "SHM"
        },
        {
            image: promoYields,
            category: "Pertanian",
            rating: 4.5,
            title: "Bayam Sore",
            address: "Jl. Tvri, Oro-Oro Ombo",
            price: "50.000.000",
            area: 900,
            certificate: "SHM"
        },
        {
            image: promoYields,
            category: "Pertanian",
            rating: 4.5,
            title: "Bayam Sore",
            address: "Jl. Tvri, Oro-Oro Ombo",
            price: "127.500",
            area: 900,
            certificate: "SHM"
        },
        {
            image: promoYields,
            category: "Pertanian",
            rating: 4.5,
            title: "Bayam Sore",
            address: "Jl. Tvri, Oro-Oro Ombo",
            price: "127.500",
            area: 900,
            certificate: "SHM"
        },
        {
            image: promoYields,
            category: "Pertanian",
            rating: 4.5,
            title: "Bayam Sore",
            address: "Jl. Tvri, Oro-Oro Ombo",
            price: "127.500",
            area: 900,
            certificate: "SHM"
        },
        {
            image: promoYields,
            category: "Pertanian",
            rating: 4.5,
            title: "Bayam Sore",
            address: "Jl. Tvri, Oro-Oro Ombo",
            price: "127.500",
            area: 900,
            certificate: "SHM"
        },
        {
            image: promoYields,
            category: "Pertanian",
            rating: 4.5,
            title: "Bayam Sore",
            address: "Jl. Tvri, Oro-Oro Ombo",
            price: "127.500",
            area: 900,
            certificate: "SHM"
        },
        // Tambahkan item lainnya...
    ];*/

    const property = data?.data?.properties?.data || [];
    const yields = data?.data?.products || [];

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

    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        if (category === "property") {
            setActiveCategory(0);
        } else {
            setActiveCategory(1);
        }
    }, [category]);

    const handleCategoryChange = (index) => {
        setActiveCategory(index);
    };

    console.log(property);

    return (
        <section>
            <CategoryFilter/>
            <SubCategoryFilter
                isOptional={false}
                categoryActiveIndex={activeCategory}
                setCategoryActiveIndex={handleCategoryChange}
            />
            {activeCategory === 0 ? (
                <>
                    <div className={"my-12"}>
                        <h3 className={"font-dmSans font-bold text-4xl"}>
                            Jawa Timur
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {property.slice(0, 6).map((item, index) => (
                            <PropertyCard key={index} item={item} />
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <div className={"my-12"}>
                        <h3 className={"font-dmSans font-bold text-4xl"}>
                            Daftar Bahan Baku
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {yields.slice(0, 8).map((item, index) => (
                            <YieldsCard key={index} item={item} />
                        ))}
                    </div>
                </>
            )}
            <a
                href="/market"
                className="block shadow-md rounded-xl mt-6 mb-20 border-2 border-transparent hover:border-primary transition-colors duration-100"
            >
                <h3 className="font-dmSans font-bold text-2xl md:text-3xl text-center py-6">
                    Lihat selengkapnya
                </h3>
            </a>
        </section>
    );
};

export default Market;