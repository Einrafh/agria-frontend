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
        <div>
            <h3 className="font-dmSans font-bold text-3xl">
                Rating dan Produk
            </h3>
            <div className="flex flex-row">
                <div className="w-3/4 pr-28">
                    <button
                        className="flex flex-row items-center px-10 py-6 shadow-md rounded-full gap-x-6 my-8">
                        <h3 className="font-dmSans font-bold text-lg">
                            Terbaru
                        </h3>
                        <img src={arrowDown} alt="arrowDown" className="size-3"/>
                    </button>
                    <div className="flex flex-col gap-y-6">
                        {reviews.map((review) => (
                            <div className="border-b" key={review.id}>
                                <div>
                                    <div className="flex flex-row items-center gap-x-3">
                                        <div className="flex flex-row gap-x-2">
                                            {/* Render bintang */}
                                            {[...Array(5)].map((_, index) => (
                                                <img src={bintang} alt="bintang"
                                                     className="size-4" key={index}/>
                                            ))}
                                        </div>
                                        <h3 className="font-dmSans text-xl text-[#969696]">{review.date}</h3>
                                    </div>
                                </div>

                                <div className="flex flex-row items-center mt-6 mb-4 gap-x-3">
                                    <img src={review.profileImg} alt="profile"
                                         className="size-12"/>
                                    <h3 className="font-dmSans font-bold text-2xl">{review.name}</h3>
                                </div>

                                <h3 className="font-dmSans text-xl">{review.review}</h3>

                                <div className="flex flex-row my-6 gap-x-6">
                                    {review.images.map((image, index) => (
                                        <img src={image} alt="smallImgDetail"
                                             className="w-[84px]" key={index}/>
                                    ))}
                                </div>

                                <div className="flex flex-row mb-6 gap-x-4 items-center">
                                    <img src={like} alt="like" className="size-5"/>
                                    <h3 className="font-dmSans text-xl">
                                        {review.helpedCount} orang terbantu
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex-grow">
                    <div
                        className="flex flex-row justify-between items-center gap-x-2 mt-8 mb-6">
                        <div className="flex flex-row gap-x-2">
                            <img src={bintang} alt="bintang" className="size-6"/>
                            <img src={bintang} alt="bintang" className="size-6"/>
                            <img src={bintang} alt="bintang" className="size-6"/>
                            <img src={bintang} alt="bintang" className="size-6"/>
                            <img src={bintang} alt="bintang" className="size-6"/>
                        </div>
                        <h3 className="font-dmSans font-bold text-3xl">
                            4.8
                        </h3>
                    </div>
                    <div className="border-t pt-10">
                        <div className="flex flex-row items-center justify-between">
                            <h3>
                                5
                            </h3>
                            <div className="flex-grow mx-8">
                                <ProgressBar value="153" max="167" w="240" h="8" color="bg-[#FCD53F]"/>
                            </div>
                            <h3>
                                123
                            </h3>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <h3>
                                4
                            </h3>
                            <div className="flex-grow mx-8">
                                <ProgressBar value="34" max="167" w="240" h="8" color="bg-[#FCD53F]"/>
                            </div>
                            <h3>
                                34
                            </h3>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <h3>
                                3
                            </h3>
                            <div className="flex-grow mx-8">
                                <ProgressBar value="6" max="167" w="240" h="8" color="bg-[#FCD53F]"/>
                            </div>
                            <h3>
                                6
                            </h3>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <h3>
                                2
                            </h3>
                            <div className="flex-grow mx-8">
                                <ProgressBar value="1" max="167" w="240" h="8" color="bg-[#FCD53F]"/>
                            </div>
                            <h3>
                                1
                            </h3>
                        </div>
                        <div className="flex flex-row items-center justify-between">
                            <h3>
                                1
                            </h3>
                            <div className="flex-grow mx-8">
                                <ProgressBar value="3" max="167" w="240" h="8" color="bg-[#FCD53F]"/>
                            </div>
                            <h3>
                                3
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RatingsAndReviews;