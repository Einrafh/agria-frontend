import styles from "../../style.js";
import {Features, Footer, Hero, Market, Navbar, Promo} from "../../components/index.js";
import Education from "../../components/Education.jsx";
import {heroBackground, heroBackgroundShadow1, heroBackgroundShadow2} from "../../assets/index.js";

export default function Home() {
    return (
        <div className="bg-[#F5F5F5] w-full h-full" >
            {/* Navbar Section */}
            <div className={`fixed z-50 ${styles.flexCenter}`}>
                <Navbar initialActive="Home"/>
            </div>

            {/* Hero Section */}
            <div className={`relative rounded-b-[48px] w-full ${styles.flexStart} `} id={"cob"}>
                {/* Background Hero */}
                <img src={heroBackground} alt="" className="absolute top-0 left-0 z-30"/>

                {/* Background Hero Shadow 1 */}
                <img src={heroBackgroundShadow1} alt="" className="absolute top-0 left-0 z-20"/>

                {/*/!* Background Hero Shadow 2 *!/*/}
                <img src={heroBackgroundShadow2} alt="" className="absolute top-0 left-0 z-10"/>

                <div className={`${styles.boxWidth} z-40`}>
                    <Hero/>
                </div>
            </div>

            {/* Content Sections */}
            <div className={`bg-[#F5F5F5] ${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Features/>
                </div>
            </div>
            <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Promo/>
                </div>
            </div>
            <div className={"bg-white border-t-4 border-secondary"}>
                <div className={`${styles.paddingX} ${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Market category="property"/>
                    </div>
                </div>
            </div>
            <div className={"bg-white border-t-4 border-secondary"}>
                <div className={`${styles.paddingX} ${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Education/>
                    </div>
                </div>
            </div>
            <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}