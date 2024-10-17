import {Footer, Navbar} from "../../components/index.js";
import styles from "../../style.js";
import {
    bintang, chatIcon,
    delivery, eduProfile, homeIcon,
    imgDetail, leafIcon,
    mapIcon, moneyIcon, phoneIcon,
    smallImgDetail
} from "../../assets/index.js";
import NumberInput from "../../components/NumberInput.jsx";
import DetailCategory from "./DetailCategory.jsx";
import {useState} from "react";
import ProductDetail from "./ProductDetail.jsx";
import RatingsAndReviews from "./RatingsAndReviews.jsx";
import Discussion from "./Discussion.jsx";

const Property = () => {
    const [activeCategory, setActiveCategory] = useState(0);

    const handleCategoryChange = (index) => {
        setActiveCategory(index);
    };

    return (
        <div className="w-full h-full">
            {/* Navbar Section */}
            <div className={`fixed z-50 ${styles.flexCenter}`}>
                <Navbar initialActive="Market"/>
            </div>

            {/* Content Section */}
            <div className={`bg-white ${styles.paddingX} ${styles.flexStart} pt-32 md:pt-36 lg:pt-40`}>
                <div className={`${styles.boxWidth}`}>
                    {/* Image and Detail Section */}
                    <div className="flex flex-col lg:flex-row gap-x-20">
                        {/* Image Section */}
                        <div className="flex flex-col gap-y-9">
                            <img src={imgDetail} alt="imgDetail" className="w-full lg:w-[540px] h-auto"/>
                            <div className="flex flex-row justify-around">
                                {[...Array(5)].map((_, index) => (
                                    <img key={index} src={smallImgDetail} alt={`smallImgDetail-${index}`} className="w-[64px] sm:w-[84px] h-auto"/>
                                ))}
                            </div>
                        </div>

                        {/* Detail Section */}
                        <div className="flex-grow mt-10 lg:mt-0">
                            <h3 className="font-dmSans font-bold text-3xl sm:text-4xl mb-5">
                                Lahan Pertanian Padi
                            </h3>
                            <div className="flex flex-row items-center gap-x-2 mb-6">
                                <div className="flex flex-row gap-x-1 sm:gap-x-2">
                                    {[...Array(5)].map((_, index) => (
                                        <img key={index} src={bintang} alt={`bintang-${index}`} className="size-4"/>
                                    ))}
                                </div>
                                <h3 className="font-dmSans text-sm sm:text-base text-[#969696]">
                                    (4.8)
                                </h3>
                            </div>
                            <h3 className="font-dmSans text-2xl sm:text-3xl text-[#969696] mb-6">
                                Rp
                                <span className="font-bold text-3xl sm:text-4xl text-black">
                                    20.000.000
                                </span>
                                /musim
                            </h3>

                            {/* Profile Section */}
                            <div className="flex flex-col sm:flex-row border-y py-6 justify-between">
                                <div className="flex flex-row items-center gap-x-4 sm:gap-x-6">
                                    <img src={eduProfile} alt="profile" className="size-10 sm:size-14"/>
                                    <h3 className="font-dmSans text-xl sm:text-2xl">
                                        Ayas Ash Jauhara
                                    </h3>
                                </div>
                                <div className="flex flex-row gap-x-4 sm:gap-x-9 mt-4 sm:mt-0">
                                    <img src={phoneIcon} alt="phoneIcon" className="size-12 sm:size-16"/>
                                    <img src={chatIcon} alt="chatIcon" className="size-12 sm:size-16"/>
                                </div>
                            </div>

                            {/* Advantages Section */}
                            <div className="border-b py-6">
                                <h3 className="font-dmSans font-bold text-lg sm:text-xl mb-6">
                                    Keunggulan Lahan
                                </h3>
                                <div className="flex flex-col sm:flex-row justify-between gap-y-4 sm:gap-y-0">
                                    <div className="flex flex-row bg-[#F5F5F5] rounded-full shadow-md items-center gap-x-4 px-4 sm:px-8 py-4">
                                        <img src={moneyIcon} alt="moneyIcon" className="size-4"/>
                                        <h3 className="font-dmSans text-sm sm:text-base">
                                            Harga Bersaing
                                        </h3>
                                    </div>
                                    <div className="flex flex-row bg-[#F5F5F5] rounded-full shadow-md items-center gap-x-4 px-4 sm:px-8 py-4">
                                        <img src={homeIcon} alt="homeIcon" className="size-4"/>
                                        <h3 className="font-dmSans text-sm sm:text-base">
                                            Terpercaya
                                        </h3>
                                    </div>
                                    <div className="flex flex-row bg-[#F5F5F5] rounded-full shadow-md items-center gap-x-4 px-4 sm:px-8 py-4">
                                        <img src={leafIcon} alt="leafIcon" className="size-4"/>
                                        <h3 className="font-dmSans text-sm sm:text-base">
                                            Jaminan Mutu
                                        </h3>
                                    </div>
                                </div>
                            </div>

                            {/* Call to Action */}
                            <div className="flex flex-row gap-x-6 mt-8">
                                <button className="w-full lg:w-[408px] h-[64px] bg-secondary rounded-lg font-dmSans font-bold text-white text-xl">
                                    Sewa Sekarang
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Category Section */}
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
                                    case 2:
                                        return <Discussion/>;
                                    default:
                                        return null;
                                }
                            })()}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer/>
                </div>
            </div>
        </div>
    );
};

export default Property;
