import { whiteDot, whiteLove, whiteView, whiteComment } from "../../assets/index.js";

const LargeMustReadCard = ({ item }) => {
    const getFirst100Words = (content) => {
        if (!content) return ''; // Menghindari error jika content tidak ada
        const words = content.split(' '); // Memisahkan berdasarkan spasi
        const first100Words = words.slice(0, 15).join(' '); // Mengambil 100 kata pertama dan menggabungkannya kembali
        return first100Words;
    };

    return (
        <a
            href="/content"
            className="flex justify-center items-center h-full min-h-0 rounded-2xl shadow-md border-2 border-transparent overflow-hidden cursor-pointer hover:border-primary transition-colors duration-100"
        >
            <div className="relative w-full md:w-[624px] h-[300px] md:h-full flex items-stretch">
                <img
                    src={item.photo_url}
                    alt="image"
                    className="object-cover w-full h-full"
                />

                <div className="absolute inset-0 flex flex-col pt-4 pb-6 px-4 md:px-6 gap-y-2 md:gap-y-4 justify-end">
                    {/* Profile and Metadata */}
                    <div className="flex items-center gap-x-2">
                        <img src={item.photo_url_author} alt="profile" className="size-6" />

                        <div className="flex items-center gap-x-1.5">
                            <h3 className="font-dmSans font-bold text-xs md:text-sm text-white">
                                {item.author}
                            </h3>
                            <img src={whiteDot} alt="dot" className="size-0.5" />
                            <h3 className="font-dmSans text-xs text-white">
                                {item.created_at}
                            </h3>
                        </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-dmSans font-bold text-lg md:text-2xl text-white">
                        {item.title}
                    </h3>

                    {/* Description */}
                    <p className="font-dmSans text-xs md:text-base text-white">
                        {getFirst100Words(item.content)}
                    </p>

                    {/* Interactions (Likes, Views, Comments) */}
                    <div className="flex flex-row gap-x-4 md:gap-x-6">
                        <div className="flex flex-row items-center gap-x-2">
                            <img src={whiteLove} alt="love" className="size-4" />
                            <h3 className="font-dmSans font-bold text-xs md:text-sm text-white">
                                {item.count_likes}
                            </h3>
                        </div>
                        <div className="flex flex-row items-center gap-x-2">
                            <img src={whiteView} alt="view" className="size-4" />
                            <h3 className="font-dmSans font-bold text-xs md:text-sm text-white">
                                {item.count_views}
                            </h3>
                        </div>
                        <div className="flex flex-row items-center gap-x-2">
                            <img src={whiteComment} alt="comment" className="size-4" />
                            <h3 className="font-dmSans font-bold text-xs md:text-sm text-white">
                                {item.count_comments}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default LargeMustReadCard;