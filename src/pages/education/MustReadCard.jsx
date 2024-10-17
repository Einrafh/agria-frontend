import { comment, dot, love, view } from "../../assets/index.js";

const MustReadCard = ({ item }) => {
    const getFirst100Words = (content) => {
        if (!content) return ''; // Menghindari error jika content tidak ada
        const words = content.split(' '); // Memisahkan berdasarkan spasi
        const first100Words = words.slice(0, 25).join(' '); // Mengambil 100 kata pertama dan menggabungkannya kembali
        return first100Words;
    };

    return (
        <a
            href="/content"
            className="hidden lg:block rounded-2xl shadow-md border-2 border-transparent overflow-hidden cursor-pointer hover:border-primary transition-colors duration-100"
        >
            <div className="w-full h-[176px] md:w-[300px]">
                <img
                    src={item.photo_url}
                    alt="image"
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="flex flex-col pt-4 pb-6 px-4 gap-y-4 md:px-6">
                <div className="flex items-center gap-x-2">
                    <img src={item.photo_url_author} alt="profile" className="w-6 h-6"/>
                    <div className="flex items-center gap-x-1.5">
                        <h3 className="font-dmSans font-bold text-sm">
                            {item.author}
                        </h3>
                        <img src={dot} alt="dot" className="w-0.5 h-0.5"/>
                        <h3 className="font-dmSans text-xs text-[#969696]">
                            {item.created_at}
                        </h3>
                    </div>
                </div>
                <h3 className="font-dmSans font-bold text-xl md:text-2xl">
                    {item.title}
                </h3>
                <p className="font-dmSans text-base text-[#969696]">
                    {getFirst100Words(item.content)}
                </p>
                <div className="flex flex-row gap-x-4">
                    <div className="flex flex-row items-center gap-x-2">
                        <img src={love} alt="love" className="w-4 h-4"/>
                        <h3 className="font-dmSans font-bold text-sm text-[#969696]">
                            {item.count_likes}
                        </h3>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                        <img src={view} alt="view" className="w-4 h-4"/>
                        <h3 className="font-dmSans font-bold text-sm text-[#969696]">
                            {item.count_views}
                        </h3>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                        <img src={comment} alt="comment" className="w-4 h-4"/>
                        <h3 className="font-dmSans font-bold text-sm text-[#969696]">
                            {item.count_comments}
                        </h3>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default MustReadCard;
