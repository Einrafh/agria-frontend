import {whiteFacebook, whiteInstagram, whiteTwitter, whiteYoutube} from "../assets/index.js";

const Footer = () => {
    return (
        <section className="flex flex-col gap-y-12 my-9">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] lg:grid-cols-[600px_1fr_1fr_1fr] font-dmSans text-white gap-8">
                <div className="flex flex-col gap-y-6 lg:gap-y-12">
                    <h3 className="font-dmSans font-bold text-4xl lg:text-6xl">
                        agria
                    </h3>
                    <div className="flex flex-row gap-x-6 lg:gap-x-9">
                        <img src={whiteInstagram} alt="instagram" className="w-8 h-8 lg:w-12 lg:h-12"/>
                        <img src={whiteYoutube} alt="youtube" className="w-8 h-8 lg:w-12 lg:h-12"/>
                        <img src={whiteFacebook} alt="facebook" className="w-8 h-8 lg:w-12 lg:h-12"/>
                        <img src={whiteTwitter} alt="twitter" className="w-8 h-8 lg:w-12 lg:h-12"/>
                    </div>
                </div>
                <div className="flex flex-col gap-y-6">
                    <h3 className="text-xl lg:text-2xl text-[#DDDDDD]">
                        Community
                    </h3>
                    <div className="flex flex-col gap-y-2 lg:gap-y-4">
                        <h3 className="text-xl lg:text-2xl">Blog</h3>
                        <h3 className="text-xl lg:text-2xl">Community</h3>
                        <h3 className="text-xl lg:text-2xl">Ideas</h3>
                        <h3 className="text-xl lg:text-2xl">Developers</h3>
                    </div>
                </div>
                <div className="flex flex-col gap-y-6">
                    <h3 className="text-xl lg:text-2xl text-[#DDDDDD]">
                        Company
                    </h3>
                    <div className="flex flex-col gap-y-2 lg:gap-y-4">
                        <h3 className="text-xl lg:text-2xl">About Us</h3>
                        <h3 className="text-xl lg:text-2xl">Teams</h3>
                        <h3 className="text-xl lg:text-2xl">Influencers</h3>
                        <h3 className="text-xl lg:text-2xl">Affiliates</h3>
                        <h3 className="text-xl lg:text-2xl">Media</h3>
                        <h3 className="text-xl lg:text-2xl">Contacts</h3>
                    </div>
                </div>
                <div className="flex flex-col gap-y-6">
                    <h3 className="text-xl lg:text-2xl text-[#DDDDDD]">
                        Useful Links
                    </h3>
                    <div className="flex flex-col gap-y-2 lg:gap-y-4">
                        <h3 className="text-xl lg:text-2xl">Warranty</h3>
                        <h3 className="text-xl lg:text-2xl">Product Declarations</h3>
                        <h3 className="text-xl lg:text-2xl">Terms of Use</h3>
                        <h3 className="text-xl lg:text-2xl">Privacy Policy</h3>
                        <h3 className="text-xl lg:text-2xl">Cookie Policy</h3>
                        <h3 className="text-xl lg:text-2xl">Cookie Settings</h3>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center border-t border-white pt-9">
                <h3 className="font-dmSans text-xl lg:text-3xl text-white text-center">
                    Copyright © 2024 by BCC Ketoprak. All rights reserved.
                </h3>
            </div>
        </section>
    );
};

export default Footer;
