import { bintang, luas, mail } from "../assets/index.js";

const YieldsCard = ({ item }) => {
    return (
        <a
            href="/yields"
            className="rounded-2xl shadow-md border-2 border-transparent overflow-hidden cursor-pointer hover:border-primary transition-colors duration-100"
        >
            <img src={item.photo_url} alt="promoProperti" className="w-full h-64 object-cover rounded-lg" />
            <div className="flex flex-col mx-6 mt-4 mb-7 gap-y-3">
                <div className="flex flex-row justify-between">
                    <h3 className="font-dmSans text-base text-[#969696]">{item.category_name}</h3>
                    <div className="flex flex-row items-center gap-x-1.5">
                        <img src={bintang} alt="bintang" className="size-4"/>
                        <h3 className="font-dmSans text-base text-[#969696]">{item.ratings}</h3>
                    </div>
                </div>
                <div className="flex flex-col gap-y-4">
                    <div className={"flex flex-col gap-y-2.5"}>
                        <h3 className="font-dmSans font-bold text-2xl">{item.name}</h3>
                        <h3 className="font-dmSans text-sm text-[#969696]"></h3>
                    </div>
                    <h3 className="font-dmSans text-base text-[#969696]">
                        Rp
                        <span className="text-xl text-black">
                            {item.discount_price}
                        </span>
                        /kg
                    </h3>
                </div>
            </div>
        </a>
    );
};

export default YieldsCard;