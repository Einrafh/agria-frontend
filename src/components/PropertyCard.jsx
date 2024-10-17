import { bintang, luas, mail } from "../assets/index.js";

const PropertyCard = ({ item }) => {
    return (
        <a
            href="/property"
            className="rounded-2xl shadow-md border-2 border-transparent overflow-hidden cursor-pointer hover:border-primary transition-colors duration-100"
        >
            <img src={item.photo_url} alt="promoProperti" className="w-full h-64 object-cover rounded-lg" />
            <div className="flex flex-col px-4 sm:px-6 mt-4 mb-5 sm:mb-7 gap-y-3">
                <div className="flex flex-row justify-between">
                    <h3 className="font-dmSans text-sm sm:text-base text-[#969696]">{item.category_name}</h3>
                    <div className="flex flex-row items-center gap-x-1.5">
                        <img src={bintang} alt="bintang" className="w-4 h-4" />
                        <h3 className="font-dmSans text-sm sm:text-base text-[#969696]">{item.ratings}</h3>
                    </div>
                </div>
                <div className="flex flex-col gap-y-3 sm:gap-y-4">
                    <div className="flex flex-col gap-y-2">
                        <h3 className="font-dmSans font-bold text-xl sm:text-2xl">{item.name}</h3>
                        <h3 className="font-dmSans text-xs sm:text-sm text-[#969696]">{item.city}</h3>
                    </div>
                    <div className="flex flex-row justify-between">
                        <h3 className="font-dmSans text-xs sm:text-base text-[#969696]">
                            Rp
                            <span className="text-sm sm:text-xl text-black">
                                {item.discount_price}
                            </span>
                            /musim
                        </h3>
                        <div className="flex flex-row gap-x-2 sm:gap-x-3">
                            <div className="flex flex-row items-center gap-x-1">
                                <img src={luas} alt="luas" className="w-3 h-3.5 sm:w-4 sm:h-4" />
                                <h3 className="font-dmSans text-xs sm:text-sm text-[#969696]">{item.width}m²</h3>
                            </div>
                            <div className="flex flex-row items-center gap-x-1">
                                <img src={mail} alt="mail" className="w-3 h-3.5 sm:w-4 sm:h-4" />
                                <h3 className="font-dmSans text-xs sm:text-sm text-[#969696]">{item.ownership_type}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default PropertyCard;
