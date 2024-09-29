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

            <div className={`bg-white ${styles.paddingX} ${styles.flexStart} pt-40`}>
                <div className={`${styles.boxWidth}`}>
                    <div className="flex flex-row gap-x-20">
                        <div className="flex flex-col gap-y-9">
                            <img src={imgDetail} alt="imgDetail" className="w-[540px]"/>
                            <div className="flex flex-row justify-around">
                                <img src={smallImgDetail} alt="smallImgDetail" className="w-[84px]"/>
                                <img src={smallImgDetail} alt="smallImgDetail" className="w-[84px]"/>
                                <img src={smallImgDetail} alt="smallImgDetail" className="w-[84px]"/>
                                <img src={smallImgDetail} alt="smallImgDetail" className="w-[84px]"/>
                                <img src={smallImgDetail} alt="smallImgDetail" className="w-[84px]"/>
                            </div>
                        </div>
                        <div className="flex-grow">
                            <h3 className="font-dmSans font-bold text-4xl mb-5">
                                Lahan Pertanian Padi
                            </h3>
                            <div className="flex flex-row items-center gap-x-2 mb-9">
                                <div className="flex flex-row gap-x-2">
                                    <img src={bintang} alt="bintang" className="size-4"/>
                                    <img src={bintang} alt="bintang" className="size-4"/>
                                    <img src={bintang} alt="bintang" className="size-4"/>
                                    <img src={bintang} alt="bintang" className="size-4"/>
                                    <img src={bintang} alt="bintang" className="size-4"/>
                                </div>
                                <h3 className="font-dmSans text-base text-[#969696]">
                                    (4.8)
                                </h3>
                            </div>
                            <h3 className="font-dmSans text-3xl text-[#969696] mb-6">
                                Rp
                                <span className="font-bold text-4xl text-black">
                                    20.000.000
                                </span>
                                /musim
                            </h3>
                            <div className="flex flex-row border-y py-6 justify-between">
                                <div className="flex flex-row items-center gap-x-6">
                                    <img src={eduProfile} alt="profile" className="size-14"/>
                                    <h3 className="font-dmSans text-2xl">
                                        Ayas Ash Jauhara
                                    </h3>
                                </div>
                                <div className="flex flex-row gap-x-9">
                                    <img src={phoneIcon} alt="phoneIcon" className="size-16"/>
                                    <img src={chatIcon} alt="chatIcon" className="size-16"/>
                                </div>
                            </div>
                            <div className="border-b py-6">
                                <h3 className="font-dmSans font-bold text-xl mb-6">
                                    Keunggulan Lahan
                                </h3>
                                <div className="flex flex-row justify-between">
                                    <div
                                        className="flex flex-row bg-[#F5F5F5] rounded-full shadow-md items-center gap-x-4 px-8 py-4">
                                        <img src={moneyIcon} alt="moneyIcon" className="size-4"/>
                                        <h3 className="font-dmSans text-base">
                                            Harga Bersaing
                                        </h3>
                                    </div>
                                    <div
                                        className="flex flex-row bg-[#F5F5F5] rounded-full shadow-md items-center gap-x-4 px-8 py-4">
                                        <img src={homeIcon} alt="homeIcon" className="size-4"/>
                                        <h3 className="font-dmSans text-base">
                                            Terpercaya
                                        </h3>
                                    </div>
                                    <div
                                        className="flex flex-row bg-[#F5F5F5] rounded-full shadow-md items-center gap-x-4 px-8 py-4">
                                        <img src={leafIcon} alt="leafIcon" className="size-4"/>
                                        <h3 className="font-dmSans text-base">
                                            Jaminan Mutu
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row gap-x-6 mt-8">
                                <button
                                    className="w-[408px] h-[64px] bg-secondary rounded-lg font-dmSans font-bold text-white text-xl">
                                    Sewa Sekarang
                                </button>
                            </div>
                        </div>
                    </div>
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

            <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer/>
                </div>
            </div>
        </div>
    );
};

export default Property;