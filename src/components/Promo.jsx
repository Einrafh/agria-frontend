import {useEffect, useState} from "react";
import { CountdownTimer } from "../components";
import { promoProperti, promoYields, bintang, luas, mail, leftButton, rightButton } from "../assets";
import PaginationLine from "../components/PaginationLine";
import PropertyCard from "./PropertyCard.jsx";
import YieldsCard from "./YieldsCard.jsx";

const Promo = ({data}) => {
    // const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // const fetchData = async () => {
    //     try {
    //         const result = await getDataHomepage();
    //         setData(result);
    //         setLoading(false);
    //     } catch (err) {
    //         setError('Error fetching data');
    //         setLoading(false);
    //     }
    // };



    // data.forEach(d => {
    //     console.log(d)
    // })


    // useEffect(() => {
    //     fetchData();
    // }, []);


    // const userDetails = data.data.user_details;
    // const propertiesPromo = data.data.properties_promo.properties;
    // const productsPromo = data.data.products_promo.products;
    // const properties = data.data.properties.data;
    // const products = data.data.products;
    // const educations = data.data.educations;

    // const targetTime = new Date().setHours(23, 30, 0);

    console.log('test: ' + data);

    const targetTimeLahan = Date.now() + (data?.data?.property_promo?.time_life_in_seconds || 0) * 1000;
    const targetTimeBahanBaku = Date.now() + (data?.data?.property_promo?.time_life_in_seconds || 0) * 1000;

    // Simulasi data properti
    // const property = [
    //     {
    //         image: promoProperti,
    //         category: "Pertanian",
    //         rating: 4.8,
    //         title: "Lahan Pertanian Padi",
    //         address: "Jl. Tvri, Oro-Oro Ombo",
    //         price: "20.000.000",
    //         area: 900,
    //         certificate: "SHM"
    //     },
    //     {
    //         image: promoProperti,
    //         category: "Pertanian",
    //         rating: 4.8,
    //         title: "Lahan Pertanian Padi",
    //         address: "Jl. Tvri, Oro-Oro Ombo",
    //         price: "20.000.000",
    //         area: 900,
    //         certificate: "SHM"
    //     },
    //     {
    //         image: promoProperti,
    //         category: "Pertanian",
    //         rating: 4.8,
    //         title: "Lahan Pertanian Padi",
    //         address: "Jl. Tvri, Oro-Oro Ombo",
    //         price: "20.000.000",
    //         area: 900,
    //         certificate: "SHM"
    //     },
    //     {
    //         image: promoProperti,
    //         category: "Pertanian",
    //         rating: 4.1,
    //         title: "Lahan Pertanian Padi",
    //         address: "Jl. Tvri, Oro-Oro Ombo",
    //         price: "35.000.000",
    //         area: 900,
    //         certificate: "SHM"
    //     },
    //     {
    //         image: promoProperti,
    //         category: "Pertanian",
    //         rating: 4.8,
    //         title: "Lahan Pertanian Padi",
    //         address: "Jl. Tvri, Oro-Oro Ombo",
    //         price: "20.000.000",
    //         area: 900,
    //         certificate: "SHM"
    //     },
    //     {
    //         image: promoProperti,
    //         category: "Pertanian",
    //         rating: 4.8,
    //         title: "Lahan Pertanian Padi",
    //         address: "Jl. Tvri, Oro-Oro Ombo",
    //         price: "20.000.000",
    //         area: 900,
    //         certificate: "SHM"
    //     },
    //     {
    //         image: promoProperti,
    //         category: "Pertanian",
    //         rating: 4.8,
    //         title: "Lahan Pertanian Padi",
    //         address: "Jl. Tvri, Oro-Oro Ombo",
    //         price: "20.000.000",
    //         area: 900,
    //         certificate: "SHM"
    //     },
    //     // Tambahkan item lainnya...
    // ];

    const property = data?.data?.property_promo?.properties || [];

    console.log(property);

    // Simulasi data yields
    // const yields = [
    //     {
    //         image: promoYields,
    //         category: "Pertanian",
    //         rating: 4.5,
    //         title: "Bayam Sore",
    //         address: "Jl. Tvri, Oro-Oro Ombo",
    //         price: "127.500",
    //         area: 900,
    //         certificate: "SHM"
    //     },
    //     {
    //         image: promoYields,
    //         category: "Pertanian",
    //         rating: 4.5,
    //         title: "Bayam Sore",
    //         address: "Jl. Tvri, Oro-Oro Ombo",
    //         price: "127.500",
    //         area: 900,
    //         certificate: "SHM"
    //     },
    //     {
    //         image: promoYields,
    //         category: "Pertanian",
    //         rating: 4.5,
    //         title: "Bayam Sore",
    //         address: "Jl. Tvri, Oro-Oro Ombo",
    //         price: "127.500",
    //         area: 900,
    //         certificate: "SHM"
    //     },
    //     {
    //         image: promoYields,
    //         category: "Pertanian",
    //         rating: 4.5,
    //         title: "Bayam Sore",
    //         address: "Jl. Tvri, Oro-Oro Ombo",
    //         price: "50.000.000",
    //         area: 900,
    //         certificate: "SHM"
    //     },
    //     {
    //         image: promoYields,
    //         category: "Pertanian",
    //         rating: 4.5,
    //         title: "Bayam Sore",
    //         address: "Jl. Tvri, Oro-Oro Ombo",
    //         price: "127.500",
    //         area: 900,
    //         certificate: "SHM"
    //     },
    //     // Tambahkan item lainnya...
    // ];

    const yields = data?.data?.products_promo?.products || [];

    // Pagination states
    const [propertyCurrentPage, setPropertyCurrentPage] = useState(0);
    const [yieldsCurrentPage, setYieldsCurrentPage] = useState(0);

    // States to hold per-page values
    const [propertyPerPage, setPropertyPerPage] = useState(3);
    const [yieldsPerPage, setYieldsPerPage] = useState(4);

    // Update per-page values based on screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                // lg screen: 3 pages
                setPropertyPerPage(3);
                setYieldsPerPage(4);
            } else if (window.innerWidth >= 768) {
                // md screen: 4 pages for property, 4 pages for yields
                setPropertyPerPage(4);
                setYieldsPerPage(4);
            } else {
                // smaller screens: 3 pages for property, 4 pages for yields
                setPropertyPerPage(3);
                setYieldsPerPage(4);
            }
        };

        // Run handleResize on initial load
        handleResize();

        // Add event listener to watch for window resizing
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener when component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Calculate total pages
    const totalPropertyPages = Math.ceil(property.length / propertyPerPage);
    const totalYieldsPages = Math.ceil(yields.length / yieldsPerPage);

    // Get items for current page (Properties)
    const paginatedPropertyItems = property.slice(
        propertyCurrentPage * propertyPerPage,
        (propertyCurrentPage + 1) * propertyPerPage
    );

    // Get items for current page (Yields)
    const paginatedYieldsItems = yields.slice(
        yieldsCurrentPage * yieldsPerPage,
        (yieldsCurrentPage + 1) * yieldsPerPage
    );

    // Property pagination handlers
    const handlePropertyNextPage = () => {
        if (propertyCurrentPage < totalPropertyPages - 1) {
            setPropertyCurrentPage(propertyCurrentPage + 1);
        }
    };
    const handlePropertyPreviousPage = () => {
        if (propertyCurrentPage > 0) {
            setPropertyCurrentPage(propertyCurrentPage - 1);
        }
    };

    // Yields pagination handlers
    const handleYieldsNextPage = () => {
        if (yieldsCurrentPage < totalYieldsPages - 1) {
            setYieldsCurrentPage(yieldsCurrentPage + 1);
        }
    };
    const handleYieldsPreviousPage = () => {
        if (yieldsCurrentPage > 0) {
            setYieldsCurrentPage(yieldsCurrentPage - 1);
        }
    };

    return (
        <section>
            {/* Promo Properti Header */}
            <div className="flex flex-row justify-between items-center my-16">
                <h3 className="font-dmSans font-bold text-3xl md:text-4xl mr-2">Promo Properti</h3>
                <div className="flex flex-row items-center">
                    <h3 className="font-dmSans text-gray-500 text-3xl mr-4 lg:block hidden">Berakhir dalam</h3>
                    <CountdownTimer targetTime={targetTimeLahan} />
                </div>
            </div>

            {/* Grid of Property Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
                {paginatedPropertyItems.map((item, index) => (
                    <PropertyCard key={index} item={item}/>
                ))}
            </div>

            {/* Pagination Controls for Property */}
            <div className="flex justify-between mx-4 my-9 items-center">
                <PaginationLine currentPage={propertyCurrentPage} totalPages={totalPropertyPages}/>
                <div className="flex flex-row gap-x-4">
                    <button onClick={handlePropertyPreviousPage} disabled={propertyCurrentPage === 0}>
                        <img src={leftButton} alt="leftButton" />
                    </button>
                    <button onClick={handlePropertyNextPage} disabled={propertyCurrentPage === totalPropertyPages - 1}>
                        <img src={rightButton} alt="rightButton" />
                    </button>
                </div>
            </div>

            {/* Yields Section */}
            <div className="flex flex-row justify-between items-center my-16">
                <h3 className="font-dmSans font-bold text-3xl md:text-4xl mr-2">Promo Bahan Baku</h3>
                <div className="flex flex-row items-center">
                    <h3 className="font-dmSans text-gray-500 text-3xl mr-4 lg:block hidden">Berakhir dalam</h3>
                    <CountdownTimer targetTime={targetTimeBahanBaku} />
                </div>
            </div>

            {/* Grid of Yields Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6">
                {paginatedYieldsItems.map((item, index) => (
                    <YieldsCard key={index} item={item}/>
                ))}
            </div>
            {/*{ data.properties_promo.properties()}*/}
            {/* Pagination Controls for Yields */}
            <div className="flex justify-between mx-4 my-9 items-center">
                <PaginationLine currentPage={yieldsCurrentPage} totalPages={totalYieldsPages}/>
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

export default Promo;