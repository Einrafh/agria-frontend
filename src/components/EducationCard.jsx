import {love, view, comment, save} from "../assets/index.js";

const EducationCard = ({ item }) => {
    return (
        <a
            href={item.link}
            className={"flex flex-row rounded-2xl shadow-md border-2 border-transparent overflow-hidden cursor-pointer hover:border-primary transition-colors duration-100"}
        >
            <img src={item.image} alt="education" className={"w-[408px] h-auto"} />
            <div className={"flex flex-col m-9 justify-between"}>
                <div className={"flex flex-row gap-x-12"}>
                    <h3 className={"font-dmSans font-bold text-3xl"}>
                        {item.title}
                    </h3>
                    <img src={save} alt="save" className={"size-7 m-1"} />
                </div>
                <div className={"flex flex-row justify-between"}>
                    <div className={"flex flex-row gap-x-6"}>
                        <img src={item.profile} alt="eduProfile" className={"size-14"} />
                        <div className={"flex flex-row justify-between"}>
                            <div className={"flex flex-col gap-y-1"}>
                                <h3 className={"font-dmSans font-bold text-xl"}>
                                    {item.name}
                                </h3>
                                <h3 className={"font-dmSans text-base"}>
                                    {item.date}
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className={"flex flex-row items-end gap-x-12"}>
                        <div className={"flex flex-row items-center gap-x-4"}>
                            <img src={love} alt="love" className={"size-6"} />
                            <h3 className={"font-dmSans font-bold text-xl text-[#969696]"}>
                                {item.likes}
                            </h3>
                        </div>
                        <div className={"flex flex-row items-center gap-x-4"}>
                            <img src={view} alt="view" className={"size-6"} />
                            <h3 className={"font-dmSans font-bold text-xl text-[#969696]"}>
                                {item.views}
                            </h3>
                        </div>
                        <div className={"flex flex-row items-center gap-x-4"}>
                            <img src={comment} alt="comment" className={"size-6"} />
                            <h3 className={"font-dmSans font-bold text-xl text-[#969696]"}>
                                {item.comments}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default EducationCard;