const ProductDetail = () => {
    return (
        <div>
            {/* Specification Section */}
            <div className="w-full md:w-96">
                <h3 className="font-dmSans font-bold text-2xl md:text-3xl">
                    Spesifikasi Produk
                </h3>
                <div className="grid grid-cols-2 gap-y-2 md:gap-y-4 my-4 md:my-6">
                    <span className="text-gray-500">
                        Kategori
                    </span>
                    <span>
                        Pertanian
                    </span>

                    <span className="text-gray-500">
                        Berat Satuan
                    </span>
                    <span>
                        250 gram
                    </span>

                    <span className="text-gray-500">
                        Masa Penyimpanan
                    </span>
                    <span>
                        8 Hari
                    </span>

                    <span className="text-gray-500">
                        Sertifikasi Organik (LSO)
                    </span>
                    <span>
                        -
                    </span>
                </div>
            </div>

            {/* Description Section */}
            <div className="flex flex-col border-t mt-4">
                <h3 className="font-dmSans font-bold text-2xl md:text-3xl my-4 md:my-6">
                    Deskripsi Produk
                </h3>
                <p className="font-dmSans text-base md:text-xl text-justify">
                    Bayam (Amaranthus) adalah tumbuhan yang biasa ditanam untuk dikonsumsi
                    daunnya sebagai sayuran hijau. Tumbuhan ini berasal dari Amerika tropik namun
                    sekarang tersebar ke seluruh dunia. Tumbuhan ini dikenal sebagai sayuran sumber zat
                    besi yang penting bagi tubuh.
                    <br /><br />
                    Terna semusim yang menyukai iklim hangat dan cahaya kuat. Bayam relatif
                    tahan terhadap pencahayaan langsung karena merupakan tumbuhan C4. Batang berair
                    dan kurang berkayu. Daun bertangkai, berbentuk bulat telur, lemas, berwarna
                    hijau, merah, atau hijau keputihan. Bunga tersusun majemuk tipe tukal yang rapat,
                    bagian bawah duduk di ketiak, bagian atas berkumpul menjadi karangan bunga
                    di ujung tangkai dan ketiak percabangan. Bijinya berwarna hitam, kecil, dan
                    keras.
                </p>
            </div>
        </div>
    );
};

export default ProductDetail;
