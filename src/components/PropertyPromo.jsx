import { useState } from "react";
import { promoProperti, leftButton, rightButton } from "../assets";
import PaginationLine from "../components/PaginationLine";
import PropertyCard from "./PropertyCard.jsx";
import CountdownTimer from "../components/CountdownTimer";

const PropertyPromo = () => {
    const targetTime = new Date().setHours(23, 30, 0);

    // Simulasi data properti
    const property = [
        {
            photo_url: promoProperti,
            category_name: "Pertanian",
            ratings: 4.8,
            name: "Lahan Pertanian Padi",
            city: "Jl. Tvri, Oro-Oro Ombo",
            discount_price: "20.000.000",
            width: 900,
            ownership_type: "SHM"
        },
        {
            photo_url: promoProperti,
            category_name: "Pertanian",
            ratings: 4.8,
            name: "Lahan Pertanian Padi",
            city: "Jl. Tvri, Oro-Oro Ombo",
            discount_price: "20.000.000",
            width: 900,
            ownership_type: "SHM"
        },
        {
            photo_url: promoProperti,
            category_name: "Pertanian",
            ratings: 4.8,
            name: "Lahan Pertanian Padi",
            city: "Jl. Tvri, Oro-Oro Ombo",
            discount_price: "20.000.000",
            width: 900,
            ownership_type: "SHM"
        },
        {
            photo_url: promoProperti,
            category_name: "Pertanian",
            ratings: 4.8,
            name: "Lahan Pertanian Padi",
            city: "Jl. Tvri, Oro-Oro Ombo",
            discount_price: "20.000.000",
            width: 900,
            ownership_type: "SHM"
        },
        {
            photo_url: promoProperti,
            category_name: "Pertanian",
            ratings: 4.8,
            name: "Lahan Pertanian Padi",
            city: "Jl. Tvri, Oro-Oro Ombo",
            discount_price: "20.000.000",
            width: 900,
            ownership_type: "SHM"
        },
        {
            photo_url: promoProperti,
            category_name: "Pertanian",
            ratings: 4.8,
            name: "Lahan Pertanian Padi",
            city: "Jl. Tvri, Oro-Oro Ombo",
            discount_price: "20.000.000",
            width: 900,
            ownership_type: "SHM"
        },
        {
            photo_url: promoProperti,
            category_name: "Pertanian",
            ratings: 4.8,
            name: "Lahan Pertanian Padi",
            city: "Jl. Tvri, Oro-Oro Ombo",
            discount_price: "20.000.000",
            width: 900,
            ownership_type: "SHM"
        },
        {
            photo_url: promoProperti,
            category_name: "Pertanian",
            ratings: 4.8,
            name: "Lahan Pertanian Padi",
            city: "Jl. Tvri, Oro-Oro Ombo",
            discount_price: "20.000.000",
            width: 900,
            ownership_type: "SHM"
        },

        // Tambahkan item lainnya...
    ];

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