import { dot, eduProfile } from "../../assets/index.js";

const Discussion = () => {
    return (
        <div className="p-4 sm:p-6 lg:p-14">
            <h3 className="font-dmSans font-bold text-2xl sm:text-3xl mb-6 sm:mb-9">
                Diskusi
            </h3>
            <div className="flex flex-col rounded-2xl shadow-md p-6 sm:p-10 lg:p-14">
                <div className="flex flex-row gap-y-4 gap-x-6">
                    <img src={eduProfile} alt="profile" className="w-12 h-12 sm:w-16 sm:h-16"/>
                    <div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-x-2">
                            <h3 className="font-dmSans font-bold text-lg sm:text-xl">Rashky</h3>
                            <img src={dot} alt="dot" className="w-1 h-1"/>
                            <h3 className="font-dmSans text-sm sm:text-base text-[#969696]">2 September 2023</h3>
                        </div>
                        <p className="text-sm sm:text-base">
                            Lorem ipsum dolor sit amet consectetur. Neque quam suspendisse tincidunt sed enim tempus.
                            Elementum sit eu tortor pellentesque varius diam orci ac. Nisl pharetra risus sit at a in
                            sapien vulputate. Sed eget faucibus et nec in. Non tincidunt eu curabitur eget egestas cum.
                        </p>
                    </div>
                </div>
                <div
                    className="flex flex-row gap-y-4 sm:gap-y-0 gap-x-6 border-l ml-4 sm:ml-8 pl-4 sm:pl-16 pt-6 sm:pt-9">
                    <img src={eduProfile} alt="profile" className="w-12 h-12 sm:w-16 sm:h-16"/>
                    <div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-x-2">
                            <h3 className="font-dmSans font-bold text-lg sm:text-xl">Rafly</h3>
                            <img src={dot} alt="dot" className="w-1 h-1"/>
                            <h3 className="font-dmSans text-sm sm:text-base text-[#969696]">2 September 2023</h3>
                        </div>
                        <p className="text-sm sm:text-base">
                            Lorem ipsum dolor sit amet consectetur. Neque quam suspendisse tincidunt sed enim tempus.
                            Elementum sit eu tortor pellentesque varius diam orci ac.
                        </p>
                    </div>
                </div>
                <div
                    className="flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 sm:gap-x-6 border-l ml-4 sm:ml-8 pl-4 sm:pl-16 pt-6 sm:pt-9">
                    <input
                        type="text"
                        placeholder="Tambahkan Komentar"
                        className="w-full bg-[#FAFAFA] px-4 py-3 sm:px-6 sm:py-4 font-dmSans text-sm sm:text-xl rounded-lg"
                    />
                </div>
            </div>

            <div className="flex flex-col rounded-2xl shadow-md p-6 sm:p-10 lg:p-14">
                <div className="flex flex-row gap-y-4 gap-x-6">
                    <img src={eduProfile} alt="profile" className="w-12 h-12 sm:w-16 sm:h-16"/>
                    <div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-x-2">
                            <h3 className="font-dmSans font-bold text-lg sm:text-xl">Rashky</h3>
                            <img src={dot} alt="dot" className="w-1 h-1"/>
                            <h3 className="font-dmSans text-sm sm:text-base text-[#969696]">2 September 2023</h3>
                        </div>
                        <p className="text-sm sm:text-base">
                            Lorem ipsum dolor sit amet consectetur. Neque quam suspendisse tincidunt sed enim tempus.
                            Elementum sit eu tortor pellentesque varius diam orci ac. Nisl pharetra risus sit at a in
                            sapien vulputate. Sed eget faucibus et nec in. Non tincidunt eu curabitur eget egestas cum.
                        </p>
                    </div>
                </div>
                <div
                    className="flex flex-row gap-y-4 sm:gap-y-0 gap-x-6 border-l ml-4 sm:ml-8 pl-4 sm:pl-16 pt-6 sm:pt-9">
                    <img src={eduProfile} alt="profile" className="w-12 h-12 sm:w-16 sm:h-16"/>
                    <div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-x-2">
                            <h3 className="font-dmSans font-bold text-lg sm:text-xl">Rafly</h3>
                            <img src={dot} alt="dot" className="w-1 h-1"/>
                            <h3 className="font-dmSans text-sm sm:text-base text-[#969696]">2 September 2023</h3>
                        </div>
                        <p className="text-sm sm:text-base">
                            Lorem ipsum dolor sit amet consectetur. Neque quam suspendisse tincidunt sed enim tempus.
                            Elementum sit eu tortor pellentesque varius diam orci ac.
                        </p>
                    </div>
                </div>
                <div
                    className="flex flex-row gap-y-4 sm:gap-y-0 gap-x-6 border-l ml-4 sm:ml-8 pl-4 sm:pl-16 pt-6 sm:pt-9">
                    <img src={eduProfile} alt="profile" className="w-12 h-12 sm:w-16 sm:h-16"/>
                    <div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-x-2">
                            <h3 className="font-dmSans font-bold text-lg sm:text-xl">Ayas</h3>
                            <img src={dot} alt="dot" className="w-1 h-1"/>
                            <h3 className="font-dmSans text-sm sm:text-base text-[#969696]">2 September 2023</h3>
                        </div>
                        <p className="text-sm sm:text-base">
                            Lorem ipsum dolor sit amet consectetur. Neque quam suspendisse tincidunt sed enim tempus.
                            Elementum sit eu tortor pellentesque varius diam orci ac.
                        </p>
                    </div>
                </div>
                <div
                    className="flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 sm:gap-x-6 border-l ml-4 sm:ml-8 pl-4 sm:pl-16 pt-6 sm:pt-9">
                    <input
                        type="text"
                        placeholder="Tambahkan Komentar"
                        className="w-full bg-[#FAFAFA] px-4 py-3 sm:px-6 sm:py-4 font-dmSans text-sm sm:text-xl rounded-lg"
                    />
                </div>
            </div>

            <div className="flex flex-col rounded-2xl shadow-md p-6 sm:p-10 lg:p-14">
                <h3 className="font-dmSans font-bold text-2xl sm:text-3xl mb-6 sm:mb-9">Tulis Pertanyaan</h3>
                <textarea
                    placeholder="Tulis Pertanyaan Anda"
                    className="h-32 sm:h-40 font-dmSans text-sm sm:text-xl placeholder:text-[#C8C8C8] bg-[#FAFAFA] rounded-lg p-4 sm:p-6 focus:outline-none resize-none"
                />
                <div className="flex justify-end bg-[#FAFAFA] p-4 sm:p-6">
                    <button
                        className="bg-secondary font-dmSans font-bold text-sm sm:text-xl text-white rounded-full px-6 py-2 sm:px-9 sm:py-3">
                        Kirim
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Discussion;
