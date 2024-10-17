import { comment, dot, love, view } from "../../assets/index.js";
import TruncateText from "../../components/TruncateText.jsx";

const SmallMustReadCard = ({ item }) => {
    return (
        <a
            href="/content"
            className="hidden md:block rounded-2xl shadow-md border-2 border-transparent overflow-hidden cursor-pointer hover:border-primary transition-colors duration-100"
        >
            <img src={item.image} alt="image" />
            <div className="flex flex-col pt-4 pb-6 px-6 gap-y-4">
                <div className="flex items-center gap-x-2">
                    <img src={item.profile} alt="profile" className="size-6" />

                    <div className="flex items-center gap-x-1.5">
                        <h3 className="font-dmSans font-bold text-sm">
                            {item.name}
                        </h3>
                        <img src={dot} alt="dot" className="size-0.5" />
                        <h3 className="font-dmSans text-xs text-[#969696]">
                            {item.date}
                        </h3>
                    </div>
                </div>
                <h3 className="font-dmSans font-bold text-2xl">
                    <TruncateText text={item.title} maxWords="5" />
                </h3>
                <div className="flex flex-row gap-x-6">
                    <div className="flex flex-row items-center gap-x-2">
                        <img src={love} alt="love" className="size-4" />
                        <h3 className="font-dmSans font-bold text-sm text-[#969696]">
                            {item.likes}
                        </h3>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                        <img src={view} alt="view" className="size-4" />
                        <h3 className="font-dmSans font-bold text-sm text-[#969696]">
                            {item.views}
                        </h3>
                    </div>
                    <div className="flex flex-row items-center gap-x-2">
                        <img src={comment} alt="comment" className="size-4" />
                        <h3 className="font-dmSans font-bold text-sm text-[#969696]">
                            {item.comments}
                        </h3>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default SmallMustReadCard;