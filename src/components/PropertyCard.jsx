import { bintang, luas, mail } from "../assets/index.js";

const PropertyCard = ({ item }) => {
    return (
        <a
            href="/property"
            className="rounded-2xl shadow-md border-2 border-transparent overflow-hidden cursor-pointer hover:border-primary transition-colors duration-100"
        >
            <img src={item.image} alt="promoProperti" />
            <div className="flex flex-col mx-6 mt-4 mb-7 gap-y-3">
                <div className="flex flex-row justify-between">
                    <h3 className="font-dmSans text-base text-[#969696]">{item.category}</h3>
                    <div className="flex flex-row items-center gap-x-1.5">
                        <img src={bintang} alt="bintang" className="size-4" />
                        <h3 className="font-dmSans text-base text-[#969696]">{item.rating}</h3>
                    </div>
                </div>
                <div className="flex flex-col gap-y-4">
                    <div className="flex flex-col gap-y-2.5">
                        <h3 className="font-dmSans font-bold text-2xl">{item.title}</h3>
                        <h3 className="font-dmSans text-sm text-[#969696]">{item.address}</h3>
                    </div>
                    <div className="flex flex-row justify-between">
                        <h3 className="font-dmSans text-base text-[#969696]">
                            Rp
                            <span className="text-xl text-black">
                                {item.price}
                            </span>
                            /musim
                        </h3>
                        <div className="flex flex-row gap-x-3">
                            <div className="flex flex-row items-center gap-x-1">
                                <img src={luas} alt="luas" className="size-3.5" />
                                <h3 className="font-dmSans text-sm text-[#969696]">{item.area}m²</h3>
                            </div>
                            <div className="flex flex-row items-center gap-x-1">
                                <img src={mail} alt="mail" className="size-3.5" />
                                <h3 className="font-dmSans text-sm text-[#969696]">{item.certificate}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default PropertyCard;