import { useState } from "react";
import { promoYields, bintang, leftButton, rightButton } from "../assets";
import PaginationLine from "../components/PaginationLine";
import CountdownTimer from "../components/CountdownTimer";
import YieldsCard from "./YieldsCard.jsx";

const YieldsPromo = ({data}) => {
    console.log(data);
    const targetTime = Date.now() + (data?.data?.products_promo?.time_life_in_seconds || 0) * 1000;

    // Simulasi data yields
    /*const yields = [
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

    const yields = data?.data?.products_promo?.products || [];

    // Pagination setup
    const [yieldsCurrentPage, setYieldsCurrentPage] = useState(0);
    const yieldsPerPage = 4;
    const totalYieldsPages = Math.ceil(yields.length / yieldsPerPage);

    // Get items for current page (Yields)
    const paginatedYieldsItems = yields.slice(
        yieldsCurrentPage * yieldsPerPage,
        (yieldsCurrentPage + 1) * yieldsPerPage
    );

    // Yields pagination handlers
    const handleYieldsNextPage = () => yieldsCurrentPage < totalYieldsPages - 1 && setYieldsCurrentPage(yieldsCurrentPage + 1);
    const handleYieldsPreviousPage = () => yieldsCurrentPage > 0 && setYieldsCurrentPage(yieldsCurrentPage - 1);

    return (
        <section>
            {/* Promo Yields Header */}
            <div className="flex flex-row justify-between items-center my-16">
                <h3 className="font-dmSans font-bold text-4xl mr-2">Promo Bahan Baku</h3>
                <div className="flex flex-row items-center">
                    <h3 className="font-dmSans text-gray-500 text-3xl mr-4 hidden lg:block">Berakhir dalam</h3>
                    <CountdownTimer targetTime={targetTime} />
                </div>
            </div>

            {/* Grid of Yields Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6">
                {paginatedYieldsItems.map((item, index) => (
                    <YieldsCard key={index} item={item} />
                ))}
            </div>

            {/* Pagination Controls for Yields */}
            <div className="flex justify-between mx-4 my-9 items-center">
                <PaginationLine currentPage={yieldsCurrentPage} totalPages={totalYieldsPages} />
                <div className="flex flex-row gap-x-4">
                    <button onClick={handleYieldsPreviousPage} disabled={yieldsCurrentPage === 0}>
                        <img src={leftButton} alt="leftButton" />
                    </button>
                    <button onClick={handleYieldsNextPage} disabled={yieldsCurrentPage === totalYieldsPages - 1}>
                        <img src={rightButton} alt="rightButton" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default YieldsPromo;