import {useEffect, useState} from "react";
import styles from "../../style.js";
import {Features, Footer, Hero, Market, Navbar, Promo} from "../../components/index.js";
import Education from "../../components/Education.jsx";
import {
    heroBackground,
    heroBackgroundIpad,
    heroBackgroundIpadShadow1, heroBackgroundIpadShadow2,
    heroBackgroundMobile,
    heroBackgroundMobileShadow1,
    heroBackgroundMobileShadow2,
    heroBackgroundShadow1,
    heroBackgroundShadow2, whiteArrowDown,
} from "../../assets/index.js";
import { getDataHomepage, postDataHomepage } from '../../services/apiService';

export default function Home() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const fetchData = async () => {
        try {
            const result = await getDataHomepage();
            setData(result);
            setLoading(false);
        } catch (err) {
            console.log(err);
            setError('Error fetching data');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    
    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="bg-[#F5F5F5] w-full h-full" >
            {/* Navbar Section */}
            <div className={`fixed z-50 ${styles.flexCenter}`}>
                <Navbar initialActive="Home"/>
            </div>

            {/* Hero Section */}
            <div className={`relative rounded-b-[48px] w-full ${styles.flexStart} `}>
                {/* Background Hero */}
                <div>
                    <img src={heroBackgroundMobile} alt="" className="md:hidden absolute top-0 left-0 z-30"/>
                    <img src={heroBackgroundIpad} alt=""
                         className="md:block lg:hidden hidden absolute top-0 left-0 z-30"/>
                    <img src={heroBackground} alt="" className="lg:block hidden absolute top-0 left-0 z-30"/>

                    <button className="absolute -bottom-20 md:-bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-40">
                        <img src={whiteArrowDown} alt="arrowDown" className="size-8"/>
                    </button>
                </div>

                {/* Background Hero Shadow 1 */}
                <div>
                    <img src={heroBackgroundMobileShadow1} alt="" className="md:hidden absolute top-0 left-0 z-20"/>
                    <img src={heroBackgroundIpadShadow1} alt=""
                         className="md:block lg:hidden hidden absolute top-0 left-0 z-20"/>
                    <img src={heroBackgroundShadow1} alt="" className="lg:block hidden absolute top-0 left-0 z-20"/>
                </div>

                {/*/!* Background Hero Shadow 2 *!/*/}
                <div>
                    <img src={heroBackgroundMobileShadow2} alt="" className="md:hidden absolute top-0 left-0 z-10"/>
                    <img src={heroBackgroundIpadShadow2} alt=""
                         className="md:block lg:hidden hidden absolute top-0 left-0 z-10"/>
                    <img src={heroBackgroundShadow2} alt="" className="lg:block hidden absolute top-0 left-0 z-10"/>
                </div>

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
                    <Promo data={data} />
                </div>
            </div>
            <div className={"bg-white border-t-4 border-secondary"}>
                <div className={`${styles.paddingX} ${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Market category="property" data={data}/>
                    </div>
                </div>
            </div>
            <div className={"bg-white border-t-4 border-secondary"}>
                <div className={`${styles.paddingX} ${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Education data={data}/>
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