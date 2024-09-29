import { properti, bahanBaku, edukasi } from "../assets";

const Features = () => (
    <section className={"mt-36 mb-20"}>
        <h3 className={"font-dmSans font-bold text-6xl text-center pt-24"}>
            Semua ada di
            <span className={"text-primary ps-2"}>
                agria
            </span>
        </h3>
        <div className={"grid grid-cols-3 gap-x-8 my-14"}>
            <div className={"my-card flex flex-col bg-tertiary rounded-3xl border-solid border-2 border-[#50C878] p-9 gap-y-3"}>
                <img src={properti} alt="properti" className={"size-[108px]"}/>
                <div className={"flex flex-col gap-y-3"}>
                    <h3 className={"font-dmSans font-bold text-4xl"}>
                        Properti
                    </h3>
                    <p className={"font-dmSans text-xl text-gray-600 leading-snug"}>
                        Lorem ipsum dolor sit amet consectetur.
                        Lacus nibh dui ultrices nisl aliquam.
                        Nisi nulla amet nec cursus tincidunt sed feugiat.
                        Aliquam sit eget nam sem neque. Sed curabitur a egestas tempus in.
                    </p>
                </div>
            </div>
            <div className={"my-card flex flex-col bg-[#DCEEF4] rounded-3xl border-solid border-2 border-[#73BCD3] p-9 gap-y-3"}>
                <img src={bahanBaku} alt="properti" className={"size-[108px]"}/>
                <div className={"flex flex-col gap-y-3"}>
                    <h3 className={"font-dmSans font-bold text-4xl"}>
                        Bahan Baku
                    </h3>
                    <p className={"font-dmSans text-xl text-gray-600 leading-snug"}>
                        Lorem ipsum dolor sit amet consectetur.
                        Lacus nibh dui ultrices nisl aliquam.
                        Nisi nulla amet nec cursus tincidunt sed feugiat.
                        Aliquam sit eget nam sem neque. Sed curabitur a egestas tempus in.
                    </p>
                </div>
            </div>
            <div className={"my-card flex flex-col bg-[#F4ECDC] rounded-3xl border-solid border-2 border-[#D3A773] p-9 gap-y-3"}>
                <img src={edukasi} alt="properti" className={"size-[108px]"}/>
                <div className={"flex flex-col gap-y-3"}>
                    <h3 className={"font-dmSans font-bold text-4xl"}>
                        Edukasi
                    </h3>
                    <p className={"font-dmSans text-xl text-gray-600 leading-snug"}>
                        Lorem ipsum dolor sit amet consectetur.
                        Lacus nibh dui ultrices nisl aliquam.
                        Nisi nulla amet nec cursus tincidunt sed feugiat.
                        Aliquam sit eget nam sem neque. Sed curabitur a egestas tempus in.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default Features;