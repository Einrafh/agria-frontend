import {Footer, Navbar} from "../../components/index.js";
import styles from "../../style.js";
import {
    arrowDown,
    bintang,
    delivery,
    eduProfile,
    imgDetail,
    like,
    mapIcon,
    smallImgDetail
} from "../../assets/index.js";
import NumberInput from "../../components/NumberInput.jsx";
import DetailCategory from "./DetailCategory.jsx";
import {useState} from "react";
import Discussion from "../property/Discussion.jsx";
import ProductDetail from "./ProductDetail.jsx";
import RatingsAndReviews from "./RatingsAndReviews.jsx";

const Yields = () => {
    const reviews = [
        {
            id: 1,
            profileImg: eduProfile,
            name: "Ariiq",
            review: "Lorem ipsum dolor sit amet consectetur." +
                " Interdum sed arcu consectetur consectetur viverra orci pulvinar." +
                " Praesent senectus laoreet mauris scelerisque euismod scelerisque porttitor nunc." +
                " Sem quis neque ultrices est sagittis dolor. Ac ultricies diam a diam consequat turpis." +
                " Sodales blandit faucibus dui cras ac ultrices. ",
            date: "3 hari lalu",
            helpedCount: 19,
            images: [smallImgDetail, smallImgDetail, smallImgDetail, smallImgDetail]
        },
        {
            id: 2,
            profileImg: eduProfile,
            name: "Ariiq",
            review: "Lorem ipsum dolor sit amet consectetur." +
                " Interdum sed arcu consectetur consectetur viverra orci pulvinar." +
                " Praesent senectus laoreet mauris scelerisque euismod scelerisque porttitor nunc." +
                " Sem quis neque ultrices est sagittis dolor. Ac ultricies diam a diam consequat turpis." +
                " Sodales blandit faucibus dui cras ac ultrices. ",
            date: "3 hari lalu",
            helpedCount: 19,
            images: [smallImgDetail, smallImgDetail, smallImgDetail]
        },
        {
            id: 3,
            profileImg: eduProfile,
            name: "Ariiq",
            review: "Lorem ipsum dolor sit amet consectetur. Interdum sed arcu consectetur consectetur viverra orci pulvinar.",
            date: "3 hari lalu",
            helpedCount: 19,
            images: [smallImgDetail, smallImgDetail, smallImgDetail]
        },
        {
            id: 4,
            profileImg: eduProfile,
            name: "Ariiq",
            review: "Lorem ipsum dolor sit amet consectetur." +
                " Interdum sed arcu consectetur consectetur viverra orci pulvinar." +
                " Praesent senectus laoreet mauris scelerisque euismod scelerisque porttitor nunc." +
                " Semasds quis neque ultrices est sagittis dolor. ",
            date: "3 hari lalu",
            helpedCount: 19,
            images: [smallImgDetail, smallImgDetail, smallImgDetail]
        },
    ];

    const [activeCategory, setActiveCategory] = useState(0);

    const handleCategoryChange = (index) => {
        setActiveCategory(index);
    };

    return (
        <div className="w-full h-full">
            {/* Navbar Section */}
            <div className={`fixed z-50 w-full ${styles.flexCenter}`}>
                <Navbar initialActive="Market"/>
            </div>

            <div className={`bg-white ${styles.paddingX} ${styles.flexStart} pt-32 md:pt-36 lg:pt-40`}>
                <div className={`${styles.boxWidth}`}>
                    {/* Container utama, jadikan flex-col di mobile */}
                    <div className="flex flex-col lg:flex-row gap-x-20 gap-y-10 lg:gap-y-0">
                        {/* Bagian gambar */}
                        <div className="flex flex-col gap-y-9">
                            <img src={imgDetail} alt="imgDetail" className="w-full lg:w-[540px]"/>
                            <div className="flex flex-row justify-around">
                                <img src={smallImgDetail} alt="smallImgDetail" className="w-[60px] sm:w-[84px]"/>
                                <img src={smallImgDetail} alt="smallImgDetail" className="w-[60px] sm:w-[84px]"/>
                                <img src={smallImgDetail} alt="smallImgDetail" className="w-[60px] sm:w-[84px]"/>
                                <img src={smallImgDetail} alt="smallImgDetail" className="w-[60px] sm:w-[84px]"/>
                                <img src={smallImgDetail} alt="smallImgDetail" className="w-[60px] sm:w-[84px]"/>
                            </div>
                        </div>

                        {/* Bagian detail produk */}
                        <div className="flex-1">
                            <h3 className="font-dmSans font-bold text-2xl sm:text-4xl mb-3 sm:mb-5">
                                Bayam Sore
                            </h3>
                            <div className="flex flex-row items-center gap-x-2 mb-4 sm:mb-9">
                                <div className="flex flex-row gap-x-2">
                                    <img src={bintang} alt="bintang" className="w-4 h-4"/>
                                    <img src={bintang} alt="bintang" className="w-4 h-4"/>
                                    <img src={bintang} alt="bintang" className="w-4 h-4"/>
                                    <img src={bintang} alt="bintang" className="w-4 h-4"/>
                                    <img src={bintang} alt="bintang" className="w-4 h-4"/>
                                </div>
                                <h3 className="font-dmSans text-sm sm:text-base text-[#969696]">
                                    (4.8)
                                </h3>
                            </div>
                            <h3 className="font-dmSans text-xl sm:text-3xl text-[#969696] mb-4 sm:mb-6">
                                Rp
                                <span className="font-bold text-2xl sm:text-4xl text-black">
                                    50.000
                                </span>
                                /kg
                            </h3>

                            {/* Pengiriman */}
                            <div className="border-y py-4 sm:py-6">
                                <h3 className="font-dmSans font-bold text-lg sm:text-xl mb-4 sm:mb-6">
                                    Pengiriman
                                </h3>
                                <div className="flex flex-col gap-y-4">
                                    <div className="flex flex-row gap-x-4">
                                        <img src={mapIcon} alt="mapIcon" className="w-6 h-6"/>
                                        <h3 className="font-dmSans text-base">
                                            Dikirim dari
                                            <span className="ps-1 font-bold">
                                                Kota Batu
                                            </span>
                                        </h3>
                                    </div>
                                    <div className="flex flex-row gap-x-4">
                                        <img src={delivery} alt="delivery" className="w-6 h-6"/>
                                        <h3 className="font-dmSans text-base">
                                            Ongkos Kirim
                                            <span className="ps-1 font-bold">
                                                Rp0 - Rp14.000
                                            </span>
                                        </h3>
                                    </div>
                                    <div className="flex flex-row ps-8">
                                        <h3 className="font-dmSans text-sm sm:text-base text-[#969696]">
                                            Estimasi tiba
                                            <span className="ps-1 font-bold">
                                                24 - 28 September
                                            </span>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            {/* Input jumlah dan stok */}
                            <div className="flex flex-row items-center gap-x-6 my-6">
                                <NumberInput/>
                                <h3 className="font-dmSans text-lg sm:text-xl">
                                    Stok:
                                    <span className="ps-1 font-bold">
                                        1000
                                    </span>
                                </h3>
                            </div>

                            {/* Tombol */}
                            <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 sm:gap-x-6">
                                <button
                                    className="w-full sm:w-[312px] h-[64px] bg-secondary rounded-lg font-dmSans font-bold text-white text-xl">
                                    Masukkan Keranjang
                                </button>
                                <a
                                    href=""
                                    className="flex flex-col w-full sm:w-[312px] h-[64px] border-2 border-secondary rounded-lg font-dmSans font-bold text-secondary text-center justify-center text-xl"
                                >
                                    Beli Langsung
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Detail dan Review */}
                    <div className="flex flex-col gap-y-9 my-20">
                        <DetailCategory
                            isOptional={false}
                            categoryActiveIndex={activeCategory}
                            setCategoryActiveIndex={handleCategoryChange}
                        />
                        <div>
                            {(() => {
                                switch (activeCategory) {
                                    case 0:
                                        return <ProductDetail/>;
                                    case 1:
                                        return <RatingsAndReviews/>;
                                    default:
                                        return null;
                                }
                            })()}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer/>
                </div>
            </div>
        </div>
    );
};

export default Yields;