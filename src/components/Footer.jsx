import {whiteFacebook, whiteInstagram, whiteTwitter, whiteYoutube} from "../assets/index.js";

const Footer = () => {
    return (
        <section className="flex flex-col gap-y-12 my-9">
            <div className="grid grid-cols-[600px_1fr_1fr_1fr] font-dmSans text-white">
                <div className="flex flex-col gap-y-12">
                    <h3 className="font-dmSans font-bold text-6xl">
                        agria
                    </h3>
                    <div className="flex flex-row gap-x-9">
                        <img src={whiteInstagram} alt="instagram" className="size-12"/>
                        <img src={whiteYoutube} alt="youtube" className="size-12"/>
                        <img src={whiteFacebook} alt="facebook" className="size-12"/>
                        <img src={whiteTwitter} alt="twitter" className="size-12"/>
                    </div>
                </div>
                <div className="flex flex-col gap-y-6">
                    <h3 className="text-2xl text-[#DDDDDD]">
                        Community
                    </h3>
                    <div className="flex flex-col gap-y-4">
                        <h3 className="text-2xl">
                            Blog
                        </h3>
                        <h3 className="text-2xl">
                            Community
                        </h3>
                        <h3 className="text-2xl">
                            Ideas
                        </h3>
                        <h3 className="text-2xl">
                            Developers
                        </h3>
                    </div>
                </div>
                <div className="flex flex-col gap-y-6">
                    <h3 className="text-2xl text-[#DDDDDD]">
                        Company
                    </h3>
                    <div className="flex flex-col gap-y-4">
                        <h3 className="text-2xl">
                            About Us
                        </h3>
                        <h3 className="text-2xl">
                            Teams
                        </h3>
                        <h3 className="text-2xl">
                            Influencers
                        </h3>
                        <h3 className="text-2xl">
                            Affiliates
                        </h3>
                        <h3 className="text-2xl">
                            Media
                        </h3>
                        <h3 className="text-2xl">
                            Contacts
                        </h3>
                    </div>
                </div>
                <div className="flex flex-col gap-y-6">
                    <h3 className="text-2xl text-[#DDDDDD]">
                        Useful Links
                    </h3>
                    <div className="flex flex-col gap-y-4">
                        <h3 className="text-2xl">
                            Warranty
                        </h3>
                        <h3 className="text-2xl">
                            Product Declarations
                        </h3>
                        <h3 className="text-2xl">
                            Terms of Use
                        </h3>
                        <h3 className="text-2xl">
                            Privacy Policy
                        </h3>
                        <h3 className="text-2xl">
                            Cookie Policy
                        </h3>
                        <h3 className="text-2xl">
                            Cookie Settings
                        </h3>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center border-t border-white pt-9">
                <h3 className="font-dmSans text-3xl text-white">
                    Copyright © 2024 by BCC Ketoprak. All rights reserved.
                </h3>
            </div>
        </section>
    );
};

export default Footer;