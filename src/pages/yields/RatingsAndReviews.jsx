import {arrowDown, bintang, eduProfile, like, smallImgDetail} from "../../assets/index.js";
import ProgressBar from "../../components/ProgressBar.jsx";

const RatingsAndReviews = () => {
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

    return (
        <div className="">
            <h3 className="font-dmSans font-bold text-3xl sm:text-4xl mb-4">
                Rating dan Produk
            </h3>
            <div className="flex flex-col lg:flex-row">
                <div className="lg:flex-grow mb-6 lg:mt-0 lg:hidden">
                    <div
                        className="flex flex-row justify-between items-center gap-x-2 mt-4 sm:mt-8 mb-4 sm:mb-6">
                        <div className="flex flex-row gap-x-1">
                            {[...Array(5)].map((_, index) => (
                                <img src={bintang} alt="bintang" className="w-4 h-4 sm:w-6 sm:h-6" key={index}/>
                            ))}
                        </div>
                        <h3 className="font-dmSans font-bold text-2xl sm:text-3xl">
                            4.8
                        </h3>
                    </div>
                    <div className="border-t pt-6 sm:pt-10">
                        {[5, 4, 3, 2, 1].map((rating, index) => (
                            <div className="flex flex-row items-center justify-between" key={index}>
                                <h3 className="text-sm sm:text-base">
                                    {rating}
                                </h3>
                                <div className="flex-grow mx-4 sm:mx-8">
                                    <ProgressBar value="153" max="167" w="180" sm:w="240" h="6" sm:h="8"
                                                 color="bg-[#FCD53F]"/>
                                </div>
                                <h3 className="text-sm sm:text-base">
                                    {rating === 5 ? "123" : rating === 4 ? "34" : rating === 3 ? "6" : rating === 2 ? "1" : "3"}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:w-3/4 lg:pr-28">
                    <button
                        className="flex flex-row items-center px-4 py-3 sm:px-10 sm:py-6 shadow-md rounded-full gap-x-6 my-4 sm:my-8">
                        <h3 className="font-dmSans font-bold text-lg sm:text-xl">
                            Terbaru
                        </h3>
                        <img src={arrowDown} alt="arrowDown" className="w-4 h-4 sm:w-6 sm:h-6"/>
                    </button>
                    <div className="flex flex-col gap-y-6">
                        {reviews.map((review) => (
                            <div className="border-b pb-4" key={review.id}>
                                <div>
                                    <div className="flex flex-row items-center gap-x-3">
                                        <div className="flex flex-row gap-x-1">
                                            {/* Render bintang */}
                                            {[...Array(5)].map((_, index) => (
                                                <img src={bintang} alt="bintang"
                                                     className="w-4 h-4 sm:w-5 sm:h-5" key={index}/>
                                            ))}
                                        </div>
                                        <h3 className="font-dmSans text-sm sm:text-lg text-[#969696]">{review.date}</h3>
                                    </div>
                                </div>

                                <div className="flex flex-row items-center mt-4 sm:mt-6 mb-2 sm:mb-4 gap-x-3">
                                    <img src={review.profileImg} alt="profile"
                                         className="w-10 h-10 sm:w-12 sm:h-12"/>
                                    <h3 className="font-dmSans font-bold text-xl sm:text-2xl">{review.name}</h3>
                                </div>

                                <h3 className="font-dmSans text-base sm:text-xl">{review.review}</h3>

                                <div className="flex flex-row my-4 sm:my-6 gap-x-2 sm:gap-x-6">
                                    {review.images.map((image, index) => (
                                        <img src={image} alt="smallImgDetail"
                                             className="w-[64px] sm:w-[84px]" key={index}/>
                                    ))}
                                </div>

                                <div className="flex flex-row mb-4 sm:mb-6 gap-x-2 sm:gap-x-4 items-center">
                                    <img src={like} alt="like" className="w-4 h-4 sm:w-5 sm:h-5"/>
                                    <h3 className="font-dmSans text-sm sm:text-xl">
                                        {review.helpedCount} orang terbantu
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:flex-grow mt-8 lg:mt-0 hidden lg:block">
                    <div
                        className="flex flex-row justify-between items-center gap-x-2 mt-4 sm:mt-8 mb-4 sm:mb-6">
                        <div className="flex flex-row gap-x-1">
                            {[...Array(5)].map((_, index) => (
                                <img src={bintang} alt="bintang" className="w-4 h-4 sm:w-6 sm:h-6" key={index}/>
                            ))}
                        </div>
                        <h3 className="font-dmSans font-bold text-2xl sm:text-3xl">
                            4.8
                        </h3>
                    </div>
                    <div className="border-t pt-6 sm:pt-10">
                        {[5, 4, 3, 2, 1].map((rating, index) => (
                            <div className="flex flex-row items-center justify-between" key={index}>
                                <h3 className="text-sm sm:text-base">
                                    {rating}
                                </h3>
                                <div className="flex-grow mx-4 sm:mx-8">
                                    <ProgressBar value="153" max="167" w="180" sm:w="240" h="6" sm:h="8"
                                                 color="bg-[#FCD53F]"/>
                                </div>
                                <h3 className="text-sm sm:text-base">
                                    {rating === 5 ? "123" : rating === 4 ? "34" : rating === 3 ? "6" : rating === 2 ? "1" : "3"}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RatingsAndReviews;
