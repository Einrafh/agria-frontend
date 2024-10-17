import { useState } from "react";
import { promoProperti, leftButton, rightButton } from "../assets";
import PaginationLine from "../components/PaginationLine";
import PropertyCard from "./PropertyCard.jsx";
import CountdownTimer from "../components/CountdownTimer";

const PropertyPromo = ({data}) => {
    const targetTime = Date.now() + (data?.data?.property_promo?.time_life_in_seconds || 0) * 1000;

    // Simulasi data properti
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
        // Tambahkan item lainnya...
    ];*/

    const property = data?.data?.property_promo?.properties || [];

    // Pagination setup
    const [propertyCurrentPage, setPropertyCurrentPage] = useState(0);
    const propertyPerPage = 3;
    const totalPropertyPages = Math.ceil(property.length / propertyPerPage);

    // Get items for current page (Properties)
    const paginatedPropertyItems = property.slice(
        propertyCurrentPage * propertyPerPage,
        (propertyCurrentPage + 1) * propertyPerPage
    );

    // Property pagination handlers
    const handlePropertyNextPage = () => propertyCurrentPage < totalPropertyPages - 1 && setPropertyCurrentPage(propertyCurrentPage + 1);
    const handlePropertyPreviousPage = () => propertyCurrentPage > 0 && setPropertyCurrentPage(propertyCurrentPage - 1);

    return (
        <section>
            {/* Promo Properti Header */}
            <div className="flex flex-row justify-between items-center my-16">
                <h3 className="font-dmSans font-bold text-4xl mr-2">Promo Properti</h3>
                <div className="flex flex-row items-center">
                    <h3 className="font-dmSans text-gray-500 text-3xl mr-4 hidden lg:block">Berakhir dalam</h3>
                    <CountdownTimer targetTime={targetTime} />
                </div>
            </div>

            {/* Grid of Property Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
                {paginatedPropertyItems.map((item, index) => (
                    <PropertyCard key={index} item={item} />
                ))}
            </div>

            {/* Pagination Controls for Property */}
            <div className="flex justify-between mx-4 my-9 items-center">
                <PaginationLine currentPage={propertyCurrentPage} totalPages={totalPropertyPages} />
                <div className="flex flex-row gap-x-4">
                    <button onClick={handlePropertyPreviousPage} disabled={propertyCurrentPage === 0}>
                        <img src={leftButton} alt="leftButton" />
                    </button>
                    <button onClick={handlePropertyNextPage} disabled={propertyCurrentPage === totalPropertyPages - 1}>
                        <img src={rightButton} alt="rightButton" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PropertyPromo;