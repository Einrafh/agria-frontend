import { facebook, farmHouse, google } from "../../assets/index.js";

export default function Login() {
    return (
        <div className="flex flex-wrap h-screen bg-[#FAFAFA] justify-center items-center gap-x-6 lg:gap-x-36 px-6">
            <div className="bg-white w-full max-w-md lg:max-w-lg h-auto rounded-2xl px-6 lg:px-9 py-12">
                <div className="flex flex-col gap-y-4">
                    <div className="flex flex-col gap-y-6 lg:gap-y-9">
                        <div className={"flex flex-col gap-y-2 lg:gap-y-4"}>
                            <h3 className="font-dmSans text-lg lg:text-2xl">
                                Selamat Datang!
                            </h3>
                            <h3 className="font-dmSans font-bold text-2xl lg:text-4xl">
                                Masuk ke agria
                            </h3>
                        </div>
                        <div className="flex flex-col gap-y-6 lg:gap-y-8">
                            <div className="flex flex-col gap-y-2 lg:gap-y-4">
                                <h3 className="font-dmSans text-sm lg:text-base">
                                    Email
                                </h3>
                                <input
                                    type="text"
                                    placeholder="Masukkan Email"
                                    className="bg-[#FAFAFA] rounded-lg font-dmSans w-full lg:w-[440px] px-6 lg:px-9 py-4 lg:py-5"
                                />
                            </div>
                            <div className="flex flex-col gap-y-2 lg:gap-y-4">
                                <h3 className="font-dmSans text-sm lg:text-base">
                                    Password
                                </h3>
                                <input
                                    type="password"
                                    placeholder="Masukkan Password"
                                    className="bg-[#FAFAFA] rounded-lg font-dmSans w-full lg:w-[440px] px-6 lg:px-9 py-4 lg:py-5"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center text-sm lg:text-base">
                        <div className="flex flex-row gap-x-2 lg:gap-x-4">
                            <input type="checkbox" className="size-6 items-center"/>
                            <h3 className="items-center">
                                Ingat saya?
                            </h3>
                        </div>
                        <h3 className="text-secondary">
                            Lupa password?
                        </h3>
                    </div>
                </div>
                <a href="/" className="bg-secondary rounded-lg my-4 lg:my-6 w-full block">
                    <h3 className="font-dmSans font-bold text-sm lg:text-base text-white text-center py-3 lg:py-4">
                        Login
                    </h3>
                </a>
                <div className="relative my-6">
                    <div className="border-t">
                        <h3 className="relative bg-white font-dmSans text-sm lg:text-base text-center text-[#C8C8C8] -top-3 mx-auto w-16 lg:w-20">
                            Atau
                        </h3>
                    </div>
                </div>
                <div className="flex flex-row justify-center gap-x-4 lg:gap-x-6">
                    <a
                        href="https://agria-backend.iyh.me/v1/auth/google"
                        className="flex flex-row items-center rounded-lg shadow-md w-40 lg:w-52 h-12 lg:h-14 justify-center gap-x-2 lg:gap-x-3"
                    >
                        <img src={google} alt="google" className="size-4"/>
                        <h3 className="font-dmSans text-sm lg:text-base">
                            Google
                        </h3>
                    </a>
                    <a
                        href="https://agria-backend.iyh.me/v1/auth/facebook"
                        className="flex flex-row items-center rounded-lg shadow-md w-40 lg:w-52 h-12 lg:h-14 justify-center gap-x-2 lg:gap-x-3"
                    >
                        <img src={facebook} alt="facebook" className="size-4"/>
                        <h3 className="font-dmSans text-sm lg:text-base">
                            Facebook
                        </h3>
                    </a>
                </div>
                <div className="flex flex-row justify-center gap-x-1 mt-3.5 text-sm lg:text-base">
                    <h3 className="font-dmSans text-[#C8C8C8]">
                        Tidak punya akun?
                    </h3>
                    <a href="/register" className="font-dmSans text-secondary">
                        Daftar
                    </a>
                </div>
            </div>
            <div className="hidden lg:block">
                <img src={farmHouse} alt="farmHouse" className="w-[624px]"/>
            </div>
        </div>
    )
}
