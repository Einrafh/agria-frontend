import {facebook, farmHouse, google} from "../../assets/index.js";

export default function Login() {
    return (
        <div className="flex flex-wrap h-screen bg-[#FAFAFA] justify-center items-center gap-x-36">
            <div className="bg-white h-auto rounded-2xl px-9 py-12">
                <div className="flex flex-col gap-y-4">
                    <div className="flex flex-col gap-y-9">
                        <div className={"flex flex-col gap-y-4"}>
                            <h3 className="font-dmSans text-2xl">
                                Selamat Datang!
                            </h3>
                            <h3 className="font-dmSans font-bold text-4xl">
                                Masuk ke agria
                            </h3>
                        </div>
                        <div className="flex flex-col gap-y-8">
                            <div className="flex flex-col gap-y-4">
                                <h3 className="font-dmSans text-base">
                                    Username
                                </h3>
                                <input
                                    type="text"
                                    placeholder="Masukkan Username"
                                    className="bg-[#FAFAFA] rounded-lg font-dmSans w-[440px] px-9 py-5"
                                />
                            </div>
                            <div className="flex flex-col gap-y-4">
                                <h3 className="font-dmSans text-base">
                                    Password
                                </h3>
                                <input
                                    type="password"
                                    placeholder="Masukkan Password"
                                    className="bg-[#FAFAFA] rounded-lg font-dmSans w-[440px] px-9 py-5"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row gap-x-4">
                            <input type="checkbox" className="size-6 items-center"/>
                            <h3 className="items-center">
                                Ingat saya?
                            </h3>
                        </div>
                        <h3>
                            Lupa password?
                        </h3>
                    </div>
                </div>
                <a className="bg-secondary rounded-lg mb-6 w-full">
                    <h3 className="font-dmSans font-bold text-base text-white text-center py-4">
                        Login
                    </h3>
                </a>
                <div className="relative">
                    <div className="border-t">
                        <h3 className="relative bg-white font-dmSans text-base text-center text-[#C8C8C8] -top-3 mx-40">
                            Atau
                        </h3>
                    </div>
                </div>
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
                        Tidak punya akun?
                    </h3>
                    <a href="/register" className="font-dmSans text-base">
                        Daftar
                    </a>
                </div>
            </div>
            <div>
                <img src={farmHouse} alt="farmHouse" className="w-[624px]"/>
            </div>
        </div>
    )
}
