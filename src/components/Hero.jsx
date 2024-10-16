import styles from "../style.js";
import { farm } from "../assets";

const Hero = () => (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col w-full`}>
            <div className="hidden lg:block lg:flex flex-row items-center justify-between w-full p-12 gap-x-24">
                {/* Text Section */}
                <div className="flex flex-col justify-between space-y-14 w-2/3">
                    <h1 className="font-dmSans font-bold text-3xl text-center md:text-left md:text-5xl lg:text-6xl text-white leading-tight">
                        Investasi Cerdas untuk Masa Depan Pangan Berkelanjutan
                    </h1>
                    <p className="font-dmSans text-base md: text-2xl lg:text-3xl text-white text-justify">
                        Agria menyediakan layanan investasi properti lahan dengan peluang keuntungan yang menjanjikan,
                        serta jual beli bahan baku berkualitas tinggi untuk mendukung kebutuhan sektor agrikultur.
                        Agria juga menawarkan edukasi menyeluruh seputar praktik agrikultur modern.
                    </p>
                </div>

                {/* Image Section */}
                <div className="w-1/3 mt-12">
                    <img
                        src={farm}
                        alt="farm"
                        className="min-w-[512px] object-contain items-center"
                    />
                </div>
            </div>
            <div className="lg:hidden flex flex-col pt-24 md:pt-16 justify-center items-center px-8 md:px-20">
                <h3 className="font-dmSans font-bold text-3xl md:text-5xl text-center text-white leading-tight mb-8">
                    Investasi Cerdas untuk Masa Depan Pangan Berkelanjutan
                </h3>
                <img
                    src={farm}
                    alt="farm"
                    className="w-[334px] md:w-[496px]"
                />
                <p className="font-dmSans text-sm md:text-xl text-white text-justify md:text-center md:-mt-12">
                    Agria menyediakan layanan investasi properti lahan dengan peluang keuntungan yang menjanjikan,
                    serta jual beli bahan baku berkualitas tinggi untuk mendukung kebutuhan sektor agrikultur.
                    Agria juga menawarkan edukasi menyeluruh seputar praktik agrikultur modern.
                </p>
            </div>
        </div>
    </section>
);

export default Hero;