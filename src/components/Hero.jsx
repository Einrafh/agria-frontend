import styles from "../style.js";
import { farm } from "../assets";

const Hero = () => (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col`}>
            <div className="flex flex-row items-center justify-between w-full p-12 gap-x-24">
                {/* Text Section */}
                <div className="flex flex-col justify-between space-y-14">
                    <h1 className="font-dmSans font-bold text-6xl text-white leading-tight">
                        Investasi Cerdas untuk Masa Depan Pangan Berkelanjutan
                    </h1>
                    <p className="font-dmSans text-3xl text-white text-justify">
                        Agria menyediakan layanan investasi properti lahan dengan peluang keuntungan yang menjanjikan,
                        serta jual beli bahan baku berkualitas tinggi untuk mendukung kebutuhan sektor agrikultur.
                        Agria juga menawarkan edukasi menyeluruh seputar praktik agrikultur modern.
                    </p>
                </div>

                {/* Image Section */}
                <img
                    src={farm}
                    alt="farm"
                    className="w-[512px] h-auto object-contain items-center"
                />
            </div>
        </div>
    </section>
);

export default Hero;