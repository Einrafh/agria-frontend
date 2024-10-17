import styles from "../../style.js";
import {Footer, Navbar} from "../../components/index.js";
import {
    dot,
    educationContent, educationContentSmall1,
    eduProfile, leftButton, promoYields, rightButton,
    whiteDot,
} from "../../assets/index.js";
import PropertyCard from "../../components/PropertyCard.jsx";
import PaginationLine from "../../components/PaginationLine.jsx";
import {useState} from "react";

const EducationContent = () => {
    // Simulasi data education
    const education = [
        {
            photo_url: promoYields,
            category_name: "Pertanian",
            ratings: 4.5,
            name: "Bayam Sore",
            city: "Jl. Tvri, Oro-Oro Ombo",
            discount_price: "127.500",
            width: 900,
            ownership_type: "SHM"
        },
        // Tambahkan item lainnya...
    ];

    // Pagination setup
    const [educationCurrentPage, setEducationCurrentPage] = useState(0);

    const educationPerPage = 4;
    const totalEducationPages = Math.ceil(education.length / educationPerPage);

    // Get items for current page (Yields)
    const paginatedEducationItems = education.slice(
        educationCurrentPage * educationPerPage,
        (educationCurrentPage + 1) * educationPerPage
    );

    // Yields pagination handlers
    const handleEducationNextPage = () => educationCurrentPage < totalEducationPages - 1 && setEducationCurrentPage(educationCurrentPage + 1);
    const handleEducationPreviousPage = () => educationCurrentPage > 0 && setEducationCurrentPage(educationCurrentPage - 1);

    return (
        <div className="w-full h-full">
            {/* Navbar Section */}
            <div className={`fixed z-50 ${styles.flexCenter}`}>
                <Navbar initialActive="Education"/>
            </div>

            <div className={`bg-white ${styles.paddingX} ${styles.flexStart} pt-36`}>
                <div className={`${styles.boxWidth}`}>
                    <div>
                        <div className="relative flex flex-col h-full justify-center rounded-2xl overflow-hidden">
                            {/* Gambar akan mengisi penuh */}
                            <img
                                src={educationContent}
                                alt="mustReadLarge"
                                className="object-cover w-full h-full"
                            />

                            {/* Konten div pertama ditempatkan di atas gambar */}
                            <div className="absolute inset-0 flex flex-col pt-4 pb-6 md:pb-8 lg:pb-16 px-6 md:px-8 lg:px-20 gap-y-4 justify-end">
                                <h3 className="font-dmSans font-bold text-base md:text-3xl lg:text-6xl text-white">
                                    23 Cara Membuat Tanah Lebih Subur, Salah Satunya Pakai Pupuk Kimia?
                                </h3>
                                <div className="flex items-center gap-x-4">
                                    <img src={eduProfile} alt="profile" className="size-8"/>

                                    <div className="flex items-center gap-x-2">
                                        <h3 className="font-dmSans font-bold text-sm md:text-xl text-white">
                                            Rafly
                                        </h3>
                                        <img src={whiteDot} alt="dot" className="size-2"/>
                                        <h3 className="font-dmSans text-sm md:text-xl text-white">
                                            2 September 2023
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between pt-20 gap-y-6 lg:gap-x-20">
                            <div>
                                <p className="font-dmSans text-2xl text-justify">
                                    Cara Membuat Tanah Lebih Subur – Salah satu kunci keberhasilan pertanian adalah
                                    tanah
                                    yang subur dan tanah yang subur tidak dapat diperoleh tanpa menerapkan cara
                                    pemupukan
                                    yang tepat? Masalah cara pemupukan tanah bukanlah hal yang sepele, karena kualitas
                                    tanah
                                    yang baik bukanlah jaminan.
                                    <br/><br/>
                                    Tanah yang baik hanyalah modal utama untuk memperlancar pekerjaan dan meningkatkan
                                    produksi. Jika tidak dikelola dengan baik, tanah yang subur pun tidak akan mencapai
                                    potensi maksimalnya.
                                    <br/><br/>
                                    Itulah mengapa penting untuk memahami kompleksitas tanah dan menerapkan metode
                                    pemupukan yang tepat. Penasaran, simak penjelasan lengkap tentang seluk beluk
                                    penyuburan
                                    tanah di bawah ini.
                                    <br/><br/><br/>
                                </p>
                                <div className="flex flex-col gap-y-6">
                                    <h3 className="font-dmSans font-bold text-3xl">
                                        Jenis-Jenis Tanah di Indonesia
                                    </h3>
                                    <img src={educationContentSmall1} alt="contentImage" className="w-96"/>
                                    <p className="font-dmSans text-2xl text-justify">
                                        Sebelum membahas cara menyuburkan tanah, sangat penting untuk terlebih dahulu
                                        memahami jenis-jenis tanah di Indonesia dan kelebihannya.
                                        <br/><br/>
                                        Jenis tanah ini pasti banyak Anda temukan di sekitar Anda, namun sudahkah Anda
                                        memahami perbedaan karakteristik dan kelebihannya? Tahukah Anda jenis tanah apa
                                        yang
                                        baik untuk bercocok tanam atau berkebun?
                                        Untuk lebih memahaminya, mari simak ulasan jenis tanah dan ciri-cirinya di bawah
                                        ini.
                                        <br/><br/>
                                        <span className="font-bold">
                                        1. Tanah Regosol
                                    </span>
                                        <br/><br/>
                                        Tanah Regosol ini termasuk dalam subtipe tanah Entisol. Jenis tanah ini
                                        terbentuk
                                        dari pelapukan material vulkanik seperti pasir, lava, debu, dan lipili. Jenis
                                        tanah
                                        ini tidak sepenuhnya berkembang. Tanah regosol memiliki tekstur kasar dengan pH
                                        6-7
                                        yang mengandung unsur P, K dan beberapa N.
                                        Tanah ini sulit menahan air, sehingga tidak semua tanaman cocok untuk lapisan
                                        ini.
                                        Beberapa tanaman yang bisa ditanam dengan tanah regosol ini adalah palawija,
                                        tembakau dan pohon buah-buahan yang tidak terlalu membutuhkan unsur air. Tanah
                                        ini
                                        terdapat di daerah dekat Gunung Merapi, seperti Sumatera dan Nusa Tenggara.
                                        <br/><br/>
                                        <span className="font-bold">
                                        2. Tanah Latosol
                                    </span>
                                        <br/><br/>
                                        Jenis tanah ini terbentuk dari pelapukan batuan sedimen dan batuan metamorf.
                                        Tingkat
                                        pertumbuhan pakaian dalam di cakrawala lambat hingga rata-rata. Ini karena
                                        sebagian
                                        besar tanah terasa di daerah basah. Tanah merah hingga coklat ini memiliki pH
                                        antara
                                        4,5 dan 6,5. Tanah ini mengandung unsur hara sedang hingga tinggi.
                                        Namun, jenis tanah latosol ini memiliki kemampuan menyerap air yang baik,
                                        sehingga
                                        tahan terhadap erosi. Tanaman yang cocok ditanam di tanah ini adalah tembakau,
                                        kakao, pala, tebu, dan vanili. Beberapa daerah dengan jenis tanah ini adalah
                                        Sumatera, Jawa, Bali, Sulawesi.
                                        <br/><br/>
                                        <span className="font-bold">
                                        3. Tanah Organosol
                                    </span>
                                        <br/><br/>
                                        Tanah yang terbentuk oleh proses pelapukan dan penguraian bahan organik dapat
                                        ditemukan di daerah rawa atau daerah banjir besar. Oleh karena itu, jenis tanah
                                        ini
                                        memiliki tekstur yang lembut karena rentan terhadap genangan air. Ada 2 jenis
                                        tanah
                                        organik, humus dan gambut.
                                        <br/><br/>
                                        <span className="font-bold">
                                        4. Tanah Aluvial
                                    </span>
                                        <br/><br/>
                                        Tanah yang terdapat terutama di bagian hilir sungai ini merupakan tanah muda
                                        yang
                                        terbentuk dari pengendapan material halus dari aliran sungai. Lantai ini
                                        memiliki
                                        struktur lantai yang longgar dengan warna abu-abu.
                                        Ph-nya termasuk dalam level ph rendah, sekitar 5,3-5,8. Karena pHnya, tanah ini
                                        sangat mudah digali. Kandungan unsur tanah aluvial ini sangat bergantung pada
                                        iklim
                                        daerah tersebut. Tanah yang terbentang di Jawa, Sumatera dan Papua cocok untuk
                                        menanam padi dan tanaman lainnya.
                                        <br/><br/>
                                        <span className="font-bold">
                                        5. Tanah Podsolik Merah Kuning (PMK)
                                    </span>
                                        <br/><br/>
                                        Sesuai dengan namanya, tanah ini berwarna merah hingga kuning yang berarti
                                        tanahnya
                                        kurang subur akibat pencucian. Jenis tanah ini terbentuk oleh curah hujan yang
                                        deras
                                        dan suhu yang sangat rendah, pH tanah ini termasuk dalam pH rendah dan banyak
                                        mengandung unsur Al dan Fe, kriteria tanah humus dan mudah lembab. Tanah dengan
                                        kriteria tersebut cocok untuk persawahan, tanah PMK ini tersebar merata di
                                        Indonesia.
                                        <br/><br/>
                                        <span className="font-bold">
                                        6. Tanah Laterit
                                    </span>
                                        <br/><br/>
                                        Tanah yang diangkut mirip dengan PMK ini memiliki suhu yang jauh lebih tinggi.
                                        Unsur
                                        hara di dalam tanah ini melimpah dan tanahnya juga cukup subur, namun hilang
                                        ketika
                                        larut oleh air hujan. Namun, jenis tanah ini banyak mengandung sesquioxides.
                                        Sayangnya jenis tanah ini tidak cocok untuk beberapa tanaman, hanya beberapa
                                        tanaman
                                        yang cocok untuk jenis tanah ini, yaitu jambu mete dan kelapa. Tanah ini
                                        terdapat di
                                        wilayah Jawa, Kalimantan dan Sulawesi.
                                        <br/><br/>
                                        <span className="font-bold">
                                        7. Tanah Litosol
                                    </span>
                                        <br/><br/>
                                        Tanah yang masih satu famili dengan tanah regosol ini terbentuk dari proses
                                        perubahan iklim topografi dan aktivitas vulkanik. Tanah ini termasuk dalam
                                        kelompok
                                        tanah Entisol, oleh karena itu selalu satu famili dengan tanah regosol. Struktur
                                        tanah ini besar dan rendah unsur hara, sehingga hanya dapat digunakan untuk
                                        tanaman
                                        palawija. Tanah ini membentang di Sumatera, Jawa, Sulawesi Selatan dan Nusa
                                        Tenggara.
                                        <br/><br/>
                                        <span className="font-bold">
                                        8. Tanah Rendzina
                                    </span>
                                        <br/><br/>
                                        Tanahnya bertekstur lembut dan sangat permeabel, terbentuk dari basal,
                                        batugamping,
                                        dan granit. Karena permeabilitasnya yang tinggi, jenis tanah ini memiliki
                                        kemampuan
                                        menahan air. Tanah ini menyimpan banyak Ca, Mg dan sedikit unsur hara dengan pH
                                        tinggi. Tanah di Aceh, Sulawesi, Maluku dan Papua cocok untuk menanam tanaman
                                        keras
                                        musiman dan tanaman sampingan.
                                        <br/><br/>
                                        <span className="font-bold">
                                        9. Tanah Mediteran
                                    </span>
                                        <br/><br/>
                                        Tanah terdiri dari batugamping kaya karbonat yang merupakan bagian dari jajaran
                                        Alfisols yang biasa ditemukan di iklim lembab. Tanah ini banyak mengandung air,
                                        Al,
                                        Fe dan zat organik lainnya, sehingga dapat dikatakan sebagai tanah yang subur
                                        cocok
                                        untuk persawahan basah. Tanah ini membentang di Sumatera, Jawa, Sulawesi dan
                                        Nusa
                                        Tenggara.
                                        <br/><br/>
                                        <span className="font-bold">
                                        10. Tanah Grumusol
                                    </span>
                                        <br/><br/>
                                        Tanah di Grumusol merupakan jenis tanah yang terbentuk dari strata batugamping
                                        dan
                                        vulkanik, dan umumnya bersifat basa sehingga tidak aktif. Tanah dengan kandungan
                                        liat tinggi termasuk dalam kelompok Vertisols. Tanah ini tergolong tidak subur
                                        karena jika iklimnya panas/kering akan retak dan menjadi sangat lengket saat
                                        hujan.
                                        Namun lahan ini masih bisa menjadi media tanam jati dan rerumputan. Tanah ini
                                        berada
                                        di Sumatera Barat, Jawa dan Nusa Tenggara Timur.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col w-full md:w-80 border-b gap-y-6">
                                    <h3 className="font-dmSans font-bold text-2xl">
                                        Written By
                                    </h3>
                                    <div className="flex flex-row items-center gap-x-6 mb-6">
                                        <img src={eduProfile} alt="profile" className="size-12"/>
                                        <div className="flex flex-col gap-y-1">
                                            <h3 className="font-dmSans font-bold text-xl">
                                                Rafly
                                            </h3>
                                            <h3 className="font-dmSans text-base text-[#969696]">
                                                Traveloka Ltd.
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col mt-6 gap-y-6">
                                    <h3 className="font-dmSans font-bold text-2xl">
                                        Contributors
                                    </h3>
                                    <div className="flex flex-row items-center gap-x-6">
                                        <img src={eduProfile} alt="profile" className="size-12"/>
                                        <div className="flex flex-col gap-y-1">
                                            <h3 className="font-dmSans font-bold text-xl">
                                                Rashky
                                            </h3>
                                            <h3 className="font-dmSans text-base text-[#969696]">
                                                GoTo Ltd.
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center gap-x-6">
                                        <img src={eduProfile} alt="profile" className="size-12"/>
                                        <div className="flex flex-col gap-y-1">
                                            <h3 className="font-dmSans font-bold text-xl">
                                                Ayas
                                            </h3>
                                            <h3 className="font-dmSans text-base text-[#969696]">
                                                Pluang Ltd.
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col mt-14 gap-y-6">
                            <div className="flex flex-col rounded-2xl shadow-md p-6 md:p-14">
                                <h3 className="font-dmSans font-bold text-2xl md:text-3xl mb-9">
                                    Komentar
                                </h3>
                                <textarea
                                    placeholder="Tulis Komentar Anda"
                                    className="h-32 md:h-40 font-dmSans text-lg md:text-xl placeholder:text-[#C8C8C8] bg-[#FAFAFA] rounded-lg p-4 md:p-6 focus:outline-none resize-none"
                                />
                                <div className="flex flex-row bg-[#FAFAFA] justify-end p-6">
                                    <button
                                        className="bg-secondary font-dmSans font-bold text-lg md:text-xl text-white rounded-full px-6 md:px-9 py-3">
                                        Kirim
                                    </button>
                                </div>
                            </div>
                            {/* More comment sections */}
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col gap-y-6 mt-16">
                            <h3 className="font-dmSans font-bold text-3xl md:text-4xl">
                                Related Articles
                            </h3>
                            {/* Grid of Education Items */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6">
                                {paginatedEducationItems.map((item, index) => (
                                    <PropertyCard key={index} item={item}/>
                                ))}
                            </div>
                        </div>

                        {/* Pagination Controls for Property */}
                        <div className="flex justify-between mx-4 my-9 items-center">
                            <PaginationLine currentPage={educationCurrentPage} totalPages={totalEducationPages}/>
                            <div className="flex flex-row gap-x-4">
                                <button onClick={handleEducationPreviousPage} disabled={educationCurrentPage === 0}>
                                    <img src={leftButton} alt="leftButton"/>
                                </button>
                                <button onClick={handleEducationNextPage}
                                        disabled={educationCurrentPage === totalEducationPages - 1}>
                                    <img src={rightButton} alt="rightButton"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer Section */}
            <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer/>
                </div>
            </div>
        </div>
    );
};

export default EducationContent;
