import styles from "../../style.js";
import PropertyPromo from "../../components/PropertyPromo.jsx";
import {Footer, Navbar} from "../../components/index.js";
import SubCategoryFilter from "../../components/SubCategoryFilter.jsx";
import CategoryFilter from "../../components/CategoryFilter.jsx";
import PropertyCard from "../../components/PropertyCard.jsx";
import {useEffect, useState} from "react";
import {
    promoProperti,
    promoYields
} from "../../assets/index.js";
import YieldsPromo from "../../components/YieldsPromo.jsx";
import YieldsCard from "../../components/YieldsCard.jsx";
import PaginationNumber from "../../components/PaginationNumber.jsx";
import { getDataMarket } from '../../services/apiService';

const Market = ({category}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const fetchData = async () => {
        try {
            const result = await getDataMarket();
            setData(result);
            setLoading(false);
        } catch (err) {
            console.log(err);
            setError('Error fetching data');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const property = data?.data?.properties?.data || [];
    const yields = data?.data?.products?.products || [];

    /*const property = [
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
        // Tambahkan item lainnya...
    ];*/

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 18;

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
        setCurrentPage(1);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const paginatedItems = activeCategory === 0
        ? property.slice(startIndex, endIndex)
        : yields.slice(startIndex, endIndex);

    const totalPages = Math.ceil((activeCategory === 0 ? property.length : yields.length) / itemsPerPage);


    return (
        <div className="w-full h-full">
            {/* Navbar Section */}
            <div className={`fixed z-50 ${styles.flexCenter}`}>
                <Navbar initialActive="Market"/>
            </div>

            <div className={`bg-white ${styles.paddingX} ${styles.flexStart} pt-28`}>
                <div className={`${styles.boxWidth}`}>
                    <SubCategoryFilter
                        isOptional={false}
                        categoryActiveIndex={activeCategory}
                        setCategoryActiveIndex={handleCategoryChange}
                    />
                    {/* Jika Properti dipilih */}
                    {activeCategory === 0 && <PropertyPromo data={data}/>}
                    {/* Jika Bahan Baku dipilih */}
                    {activeCategory === 1 && <YieldsPromo data={data}/>}
                </div>
            </div>

            <div className={`bg-white ${styles.paddingX} ${styles.flexStart} border-t-4 border-secondary mb-20`}>
                <div className={`${styles.boxWidth}`}>
                    <CategoryFilter/>
                    {activeCategory === 0 ? (
                        <>
                            <div className={"my-12"}>
                                <h3 className={"font-dmSans font-bold text-4xl"}>
                                    Jawa Timur
                                </h3>
                            </div>
                            <div className="grid grid-rows-2 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {paginatedItems.map((item, index) => (
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
                            <div className="grid grid-rows-2 grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {paginatedItems.map((item, index) => (
                                    <YieldsCard key={index} item={item} />
                                ))}
                            </div>
                        </>
                    )}

                    {/* PaginationNumber untuk mengatur pagination */}
                    <PaginationNumber
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer/>
                </div>
            </div>
        </div>
    );
};

export default Market;