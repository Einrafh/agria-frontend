import { love, view, comment, save } from "../assets/index.js";

const EducationCard = ({ item }) => {
    return (
        <a
            href={item.link}
            className={
                "flex flex-col lg:flex-row rounded-2xl shadow-md border-2 border-transparent overflow-hidden cursor-pointer hover:border-primary transition-colors duration-100"
            }
        >
            {/* Gambar */}
            <img
                src={item.image}
                alt="education"
                className={"w-full lg:w-[408px] h-auto object-cover"}
            />
            {/* Konten */}
            <div className={"flex flex-col p-4 md:p-6 justify-between"}>
                {/* Judul dan tombol simpan */}
                <div className={"flex flex-row justify-between items-start mb-4 lg:gap-x-12"}>
                    <h3 className={"font-dmSans font-bold text-2xl lg:text-3xl"}>
                        {item.title}
                    </h3>
                    <img src={save} alt="save" className={"w-6 h-6 lg:w-7 lg:h-7 lg:m-1 hidden md:block"} />
                </div>
                <div className="md:flex md:flex-row md:justify-between md:items-center">
                    {/* Profil dan tanggal */}
                    <div className={"flex flex-row items-center gap-x-4 mb-4"}>
                        <img src={item.profile} alt="eduProfile" className={"w-10 h-10 lg:w-14 lg:h-14 rounded-full"} />
                        <div className={"flex flex-col gap-y-1"}>
                            <h3 className={"font-dmSans font-bold text-lg lg:text-xl"}>
                                {item.name}
                            </h3>
                            <h3 className={"font-dmSans text-sm lg:text-base"}>
                                {item.date}
                            </h3>
                        </div>
                    </div>
                    {/* Interaksi (like, view, comment) */}
                    <div className={"flex flex-row justify-between items-center lg:items-end md:gap-x-12"}>
                        <div className={"flex flex-row items-center gap-x-2 lg:gap-x-4"}>
                            <img src={love} alt="love" className={"w-4 h-4 lg:w-6 lg:h-6"} />
                            <h3 className={"font-dmSans font-bold text-lg lg:text-xl text-[#969696]"}>
                                {item.likes}
                            </h3>
                        </div>
                        <div className={"flex flex-row items-center gap-x-2 lg:gap-x-4"}>
                            <img src={view} alt="view" className={"w-4 h-4 lg:w-6 lg:h-6"} />
                            <h3 className={"font-dmSans font-bold text-lg lg:text-xl text-[#969696]"}>
                                {item.views}
                            </h3>
                        </div>
                        <div className={"flex flex-row items-center gap-x-2 lg:gap-x-4"}>
                            <img src={comment} alt="comment" className={"w-4 h-4 lg:w-6 lg:h-6"} />
                            <h3 className={"font-dmSans font-bold text-lg lg:text-xl text-[#969696]"}>
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
