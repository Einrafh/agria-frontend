import { whiteDot, whiteLove, whiteView, whiteComment } from "../../assets/index.js";

const LargeMustReadCard = ({ item }) => {
    return (
        <a
            href="/content"
            className="flex justify-center items-center h-full min-h-0 rounded-2xl shadow-md border-2 border-transparent overflow-hidden cursor-pointer hover:border-primary transition-colors duration-100"
        >
            <div className="relative w-[624px] h-full flex items-stretch">
                <img
                    src={item.image}
                    alt="image"
                    className="object-cover w-full h-full"
                />

                <div className="absolute inset-0 flex flex-col pt-4 pb-6 px-6 gap-y-4 justify-end">
                    <div className="flex items-center gap-x-2">
                        <img src={item.profile} alt="profile" className="size-6" />

                        <div className="flex items-center gap-x-1.5">
                            <h3 className="font-dmSans font-bold text-sm text-white">
                                {item.name}
                            </h3>
                            <img src={whiteDot} alt="dot" className="size-0.5" />
                            <h3 className="font-dmSans text-xs text-white">
                                {item.date}
                            </h3>
                        </div>
                    </div>
                    <h3 className="font-dmSans font-bold text-2xl text-white">
                        {item.title}
                    </h3>
                    <p className="font-dmSans text-base text-[#969696]">
                        {item.description}
                    </p>
                    <div className="flex flex-row gap-x-6">
                        <div className="flex flex-row items-center gap-x-2">
                            <img src={whiteLove} alt="love" className="size-4" />
                            <h3 className="font-dmSans font-bold text-sm text-white">
                                {item.likes}
                            </h3>
                        </div>
                        <div className="flex flex-row items-center gap-x-2">
                            <img src={whiteView} alt="view" className="size-4" />
                            <h3 className="font-dmSans font-bold text-sm text-white">
                                {item.views}
                            </h3>
                        </div>
                        <div className="flex flex-row items-center gap-x-2">
                            <img src={whiteComment} alt="comment" className="size-4" />
                            <h3 className="font-dmSans font-bold text-sm text-white">
                                {item.comments}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default LargeMustReadCard;