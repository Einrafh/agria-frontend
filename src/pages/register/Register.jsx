import {useState} from "react";
import {facebook, farmHouse, google, map} from "../../assets/index.js";

const Register = () => {
    const [isNext, setIsNext] = useState(false);

    const handlePreviousClick = () => {
        setIsNext(false);
    };

    const handleNextClick = () => {
        setIsNext(true);
    };

    return (
        <div className="flex flex-wrap h-screen bg-[#FAFAFA] justify-center items-center gap-x-36">
            {!isNext ? (
                <div className="bg-white h-auto rounded-2xl p-9">
                    <div className="flex flex-col gap-y-4">
                        <div className="flex flex-col gap-y-4">
                            <h3 className="font-dmSans font-bold text-4xl">
                                Daftar ke agria
                            </h3>
                            <h3 className="font-dmSans text-base">
                                Silakan daftar menggunakan Email dan Password anda
                            </h3>
                        </div>
                        <div className="flex flex-col gap-y-6">
                            <div className="flex flex-col gap-y-4">
                                <h3 className="font-dmSans text-base">Nama</h3>
                                <input
                                    type="text"
                                    placeholder="Masukkan Nama"
                                    className="bg-[#FAFAFA] rounded-lg font-dmSans w-[440px] px-9 py-5"
                                />
                            </div>
                            <div className="flex flex-col gap-y-4">
                                <h3 className="font-dmSans text-base">Username</h3>
                                <input
                                    type="text"
                                    placeholder="Masukkan Username"
                                    className="bg-[#FAFAFA] rounded-lg font-dmSans w-[440px] px-9 py-5"
                                />
                            </div>
                            <div className="flex flex-col gap-y-4">
                                <h3 className="font-dmSans text-base">Email</h3>
                                <input
                                    type="email"
                                    placeholder="Masukkan Email"
                                    className="bg-[#FAFAFA] rounded-lg font-dmSans w-[440px] px-9 py-5"
                                />
                            </div>
                            <div className="flex flex-col gap-y-4">
                                <h3 className="font-dmSans text-base">Password</h3>
                                <input
                                    type="password"
                                    placeholder="Masukkan Password"
                                    className="bg-[#FAFAFA] rounded-lg font-dmSans w-[440px] px-9 py-5"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-6">
                        <div className="border-t">
                            <h3 className="relative bg-white font-dmSans text-base text-center text-[#C8C8C8] -top-3 mx-40">
                                Atau
                            </h3>
                        </div>
                    </div>
                    <button
                        onClick={handleNextClick}
                        className="bg-secondary rounded-lg mb-6 w-full"
                    >
                        <h3 className="font-dmSans font-bold text-base text-white text-center py-4">
                            Selanjutnya
                        </h3>
                    </button>
                    <div className="flex flex-row justify-center gap-x-6">
                        <a
                            href="https://agria-backend.iyh.me/v1/auth/google"
                            className="flex flex-row items-center rounded-lg shadow-md w-52 h-14 justify-center gap-x-3"
                        >
                            <img src={google} alt="google" className="size-4"/>
                            <h3 className="font-dmSans text-base">
                                Google
                            </h3>
                        </a>
                        <a
                            href="https://agria-backend.iyh.me/v1/auth/facebook"
                            className="flex flex-row items-center rounded-lg shadow-md w-52 h-14 justify-center gap-x-3"
                        >
                            <img src={facebook} alt="facebook" className="size-4"/>
                            <h3 className="font-dmSans text-base">
                                Facebook
                            </h3>
                        </a>
                    </div>
                    <div className="flex flex-row justify-center gap-x-1 mt-3.5">
                        <h3 className="font-dmSans text-base text-[#C8C8C8]">Sudah punya akun?</h3>
                        <a href="/login" className="font-dmSans text-base">Masuk</a>
                    </div>
                </div>
            ) : (
                <div className="bg-white h-auto rounded-2xl p-9">
                    <div className="flex flex-col gap-y-4">
                        <div className="flex flex-col gap-y-4">
                            <h3 className="font-dmSans font-bold text-4xl">
                                Daftar ke agria
                            </h3>
                            <h3 className="font-dmSans text-base">
                                Silakan daftar menggunakan Email dan Password anda
                            </h3>
                        </div>
                        <div className="flex flex-col gap-y-6">
                            <div className="flex flex-col gap-y-4">
                                <h3 className="font-dmSans text-base">Nomor Telepon</h3>
                                <input
                                    type="text"
                                    placeholder="Masukkan Nomor Telepon"
                                    className="bg-[#FAFAFA] rounded-lg font-dmSans w-[440px] px-9 py-5"
                                />
                            </div>
                            <div className="flex flex-col gap-y-4">
                                <h3 className="font-dmSans text-base">Alamat</h3>
                                <input
                                    type="text"
                                    placeholder="Masukkan "
                                    className="bg-[#FAFAFA] rounded-lg font-dmSans w-[440px] px-9 py-5"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-6">
                        <div className="border-t">
                            <h3 className="relative bg-white font-dmSans text-base text-center text-[#C8C8C8] -top-3 mx-40">
                                Atau
                            </h3>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-3 mb-6">
                        <h3 className="font-dmSans text-base">
                            Pilih Melalui Peta
                        </h3>
                        <img src={map} alt="map" className="w-[440px]"/>
                    </div>
                    <a
                        href="/"
                        onClick={handleNextClick}
                        className="bg-secondary rounded-lg mb-4 w-full block cursor-pointer"
                    >
                        <h3 className="font-dmSans font-bold text-base text-white text-center py-4">
                            Daftar
                        </h3>
                    </a>
                    <button
                        onClick={handlePreviousClick}
                        className="bg-[#DCF4E4] rounded-lg mb-6 w-full"
                    >
                        <h3 className="font-dmSans font-bold text-base text-secondary text-center py-4">
                            Sebelumnya
                        </h3>
                    </button>
                    <div className="flex flex-row justify-center gap-x-6">
                        <a
                            href="https://agria-backend.iyh.me/v1/auth/google"
                            className="flex flex-row items-center rounded-lg shadow-md w-52 h-14 justify-center gap-x-3"
                        >
                            <img src={google} alt="google" className="size-4"/>
                            <h3 className="font-dmSans text-base">
                                Google
                            </h3>
                        </a>
                        <a
                            href="https://agria-backend.iyh.me/v1/auth/facebook"
                            className="flex flex-row items-center rounded-lg shadow-md w-52 h-14 justify-center gap-x-3"
                        >
                            <img src={facebook} alt="facebook" className="size-4"/>
                            <h3 className="font-dmSans text-base">
                                Facebook
                            </h3>
                        </a>
                    </div>
                    <div className="flex flex-row justify-center gap-x-1 mt-3.5">
                        <h3 className="font-dmSans text-base text-[#C8C8C8]">
                            Sudah punya akun?
                        </h3>
                        <a href="/login" className="font-dmSans text-base">
                            Masuk
                        </a>
                    </div>
                </div>
            )}
            <div>
                <img src={farmHouse} alt="farmHouse" className="w-[624px]"/>
            </div>
        </div>
    );
};

export default Register;