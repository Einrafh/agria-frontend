import styles from "../../style.js";
import {Footer, Navbar} from "../../components/index.js";
import {
    comment, education,
    educationAgain,
    eduProfile,
    leftButton,
    love, mustRead, mustReadLarge, mustReadSmall,
    rightButton,
    save,
    view,
} from "../../assets/index.js";
import PaginationLine from "../../components/PaginationLine.jsx";
import {useEffect, useState} from "react";
import EducationCard from "../../components/EducationCard.jsx";
import LargeMustReadCard from "./LargeMustReadCard.jsx";
import MustReadCard from "./MustReadCard.jsx";
import SmallMustReadCard from "./SmallMustReadCard.jsx";
import SmallEducationCard from "../../components/SmallEducationCard.jsx";
import PaginationNumber from "../../components/PaginationNumber.jsx";
import { getDataEducation } from '../../services/apiService';

const Education = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const fetchData = async () => {
        try {
            const result = await getDataEducation();
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

    // Simulasi data education
    /*const education1 = [
        {
            image: mustRead,
            profile: eduProfile,
            name: "Rashky",
            date: "2 September 2023",
            title: "23 Cara Membuat Tanah Lebih Subur, Salah Satunya Pakai Pupuk Kimia?",
            likes: 1,
            views: 23,
            comments: 3,
        },
        {
            image: mustRead,
            profile: eduProfile,
            name: "Rashky",
            date: "2 September 2023",
            title: "23 Cara Membuat Tanah Lebih Subur, Salah Satunya Pakai Pupuk Kimia?",
            likes: 1,
            views: 23,
            comments: 3,
        },
        {
            image: mustRead,
            profile: eduProfile,
            name: "Rashky",
            date: "2 September 2023",
            title: "23 Cara Membuat Tanah Lebih Subur, Salah Satunya Pakai Pupuk Kimia?",
            likes: 1,
            views: 23,
            comments: 3,
        },
        {
            image: mustRead,
            profile: eduProfile,
            name: "Rashky",
            date: "2 September 2023",
            title: "23 Cara Membuat Tanah Lebih Subur, Salah Satunya Pakai Pupuk Kimia?",
            likes: 1,
            views: 23,
            comments: 3,
        },
        {
            image: mustRead,
            profile: eduProfile,
            name: "Rashky",
            date: "2 September 2023",
            title: "23 Cara Membuat Tanah Lebih Subur, Salah Satunya Pakai Pupuk Kimia?",
            likes: 1,
            views: 23,
            comments: 3,
        },
        {
            image: mustRead,
            profile: eduProfile,
            name: "Rashky",
            date: "2 September 2023",
            title: "23 Cara Membuat Tanah Lebih Subur, Salah Satunya Pakai Pupuk Kimia?",
            likes: 1,
            views: 23,
            comments: 3,
        },
        // Tambahkan item lainnya...
    ];*/

    const education1 = data?.data?.latest || [];

    /*
    const dataSmallMustRead1 = {
        image: mustReadSmall,
        profile: eduProfile,
        name: "Rashky",
        date: "2 September 2023",
        title: "23 Cara Membuat Tanah Lebih Subur, Salah Satunya Pakai Pupuk Kimia?",
        likes: 1,
        views: 23,
        comments: 3,
    };
    const dataSmallMustRead2 = {
        image: mustReadSmall,
        profile: eduProfile,
        name: "Rashky",
        date: "2 September 2023",
        title: "23 Cara Membuat Tanah Lebih Subur, Salah Satunya Pakai Pupuk Kimia?",
        likes: 1,
        views: 23,
        comments: 3,
    };

    const dataMustRead = {
        image: mustRead,
        profile: eduProfile,
        name: "Rashky",
        date: "2 September 2023",
        title: "23 Cara Membuat Tanah Lebih Subur, Salah Satunya Pakai Pupuk Kimia?",
        description: "Lorem ipsum dolor sit amet consectetur. Velit vestibulum porta et parturient quam dui pellentesque. Massa enim dui nulla purus. Interdum gravida.",
        likes: 1,
        views: 23,
        comments: 3,
    };

    const dataLargeMustRead = {
        image: mustReadLarge,
        profile: eduProfile,
        name: "Rashky",
        date: "2 September 2023",
        title: "23 Cara Membuat Tanah Lebih Subur, Salah Satunya Pakai Pupuk Kimia?",
        description: "Lorem ipsum dolor sit amet consectetur. Velit vestibulum porta et parturient quam dui pellentesque. Massa enim dui nulla purus. Interdum gravida.",
        likes: 1,
        views: 23,
        comments: 3,
        eduProfile: eduProfile,
    };*/

    const mainArticle = data?.data?.main_article || {};
    

    console.log(data?.data)
    
    const dataSmallMustRead1 = data?.data?.must_read[0] || {};
    const dataSmallMustRead2 = data?.data?.must_read[1] || {};
    const dataMustRead = data?.data?.must_read[2] || {};
    const dataLargeMustRead = data?.data?.must_read[3] || {};

    /*
    const education2 = [
        {
            image: education,
            title: "23 Cara Membuat Tanah Lebih Subur, Salah Satunya Pakai Pupuk Kimia?",
            profile: eduProfile,
            name: "Rafly",
            date: "19 September 2024",
            likes: 1,
            views: 23,
            comments: 3,
            link: "/content"
        },
        {
            image: education,
            title: "23 Cara Membuat Tanah Lebih Subur, Salah Satunya Pakai Pupuk Kimia?",
            profile: eduProfile,
            name: "Rafly",
            date: "19 September 2024",
            likes: 1,
            views: 23,
            comments: 3,
            link: "/content"
        },
        {
            image: education,
            title: "23 Cara Membuat Tanah Lebih Subur, Salah Satunya Pakai Pupuk Kimia?",
            profile: eduProfile,
            name: "Rafly",
            date: "19 September 2024",
            likes: 1,
            views: 23,
            comments: 3,
            link: "/content"
        },
        {
            image: education,
            title: "23 Cara Membuat Tanah Lebih Subur, Salah Satunya Pakai Pupuk Kimia?",
            profile: eduProfile,
            name: "Rafly",
            date: "19 September 2024",
            likes: 1,
            views: 23,
            comments: 3,
            link: "/content"
        },
        {
            image: education,
            title: "23 Cara Membuat Tanah Lebih Subur, Salah Satunya Pakai Pupuk Kimia?",
            profile: eduProfile,
            name: "Rafly",
            date: "19 September 2024",
            likes: 1,
            views: 23,
            comments: 3,
            link: "/content"
        },{
            image: education,
            title: "23 Cara Membuat Tanah Lebih Subur, Salah Satunya Pakai Pupuk Kimia?",
            profile: eduProfile,
            name: "Rafly",
            date: "19 September 2024",
            likes: 1,
            views: 23,
            comments: 3,
            link: "/content"
        },
        {
            image: education,
            title: "23 Cara Membuat Tanah Lebih Subur, Salah Satunya Pakai Pupuk Kimia?",
            profile: eduProfile,
            name: "Rafly",
            date: "19 September 2024",
            likes: 1,
            views: 23,
            comments: 3,
            link: "/content"
        },
        {
            image: education,
            title: "23 Cara Membuat Tanah Lebih Subur, Salah Satunya Pakai Pupuk Kimia?",
            profile: eduProfile,
            name: "Rafly",
            date: "19 September 2024",
            likes: 1,
            views: 23,
            comments: 3,
            link: "/content"
        },
    ]*/

    const education2 = data?.data?.discover_more?.data || [];

    const [educationCurrentPage, setEducationCurrentPage] = useState(0);

    const educationPerPage = 4;
    const totalEducationPages = Math.ceil(education1.length / educationPerPage);

    const paginatedEducationItems = education1.slice(
        educationCurrentPage * educationPerPage,
        (educationCurrentPage + 1) * educationPerPage
    );

    const handleEducationNextPage = () => educationCurrentPage < totalEducationPages - 1 && setEducationCurrentPage(educationCurrentPage + 1);
    const handleEducationPreviousPage = () => educationCurrentPage > 0 && setEducationCurrentPage(educationCurrentPage - 1);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const paginatedItems = education2.slice(startIndex, endIndex);

    const totalPages = Math.ceil(education2.length / itemsPerPage);

    const getFirst100Words = (content) => {
        if (!content) return ''; // Menghindari error jika content tidak ada
        const words = content.split(' '); // Memisahkan berdasarkan spasi
        const first100Words = words.slice(0, 80).join(' '); // Mengambil 100 kata pertama dan menggabungkannya kembali
        return first100Words;
    };

    return (
        <div className="w-full h-full">
            <div className={`fixed z-50 ${styles.flexCenter}`}>
                <Navbar initialActive="Education"/>
            </div>

            <div className={`bg-white ${styles.paddingX} ${styles.flexStart} pt-36`}>
                <div className={`${styles.boxWidth}`}>
                    <a
                        href="/content"
                        className="flex flex-col lg:flex-row rounded-2xl shadow-md border-2 border-transparent overflow-hidden cursor-pointer hover:border-primary transition-colors duration-100"
                    >
                        <img src={educationAgain} alt="education" className="w-full lg:w-[408px] h-auto"/>
                        <div className="flex flex-col m-6 lg:m-9 justify-between">
                            <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-x-12">
                                <h3 className="font-dmSans font-bold text-xl lg:text-3xl">
                                    {mainArticle.title}
                                </h3>
                                <img src={save} alt="save" className="w-6 h-6 lg:w-7 lg:h-7 m-1 hidden lg:block"/>
                            </div>
                            <p className="font-dmSans text-sm lg:text-base pr-0 lg:pr-20 my-4 lg:my-6">
                                {getFirst100Words(mainArticle.content)}
                            </p>
                            <div className="flex flex-col md:flex-row justify-between gap-y-4">
                                <div className="flex flex-row gap-x-4 lg:gap-x-6">
                                    <img src={mainArticle.photo_url_author} alt="eduProfile" className="w-10 h-10 lg:w-14 lg:h-14"/>
                                    <div className="flex flex-col justify-center">
                                        <h3 className="font-dmSans font-bold text-base lg:text-xl">{mainArticle.author}</h3>
                                        <h3 className="font-dmSans text-sm lg:text-base">{mainArticle.created_at}</h3>
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between items-end gap-x-8 lg:gap-x-12">
                                    <div className="flex flex-row items-center gap-x-2 lg:gap-x-4">
                                        <img src={love} alt="love" className="w-4 h-4 lg:w-6 lg:h-6"/>
                                        <h3 className="font-dmSans font-bold text-sm lg:text-xl text-[#969696]">{mainArticle.count_likes}</h3>
                                    </div>
                                    <div className="flex flex-row items-center gap-x-2 lg:gap-x-4">
                                        <img src={view} alt="view" className="w-4 h-4 lg:w-6 lg:h-6"/>
                                        <h3 className="font-dmSans font-bold text-sm lg:text-xl text-[#969696]">{mainArticle.count_views}</h3>
                                    </div>
                                    <div className="flex flex-row items-center gap-x-2 lg:gap-x-4">
                                        <img src={comment} alt="comment" className="w-4 h-4 lg:w-6 lg:h-6"/>
                                        <h3 className="font-dmSans font-bold text-sm lg:text-xl text-[#969696]">{mainArticle.count_comments}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>


                    <div className="flex flex-col gap-y-6 mt-16">
                        <h3 className="font-dmSans font-bold text-4xl">
                            Latest
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6">
                            {paginatedEducationItems.map((item, index) => (
                                <SmallEducationCard key={index} item={item}/>
                            ))}
                        </div>
                    </div>

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

                    <div className="flex flex-col gap-y-6 mt-16">
                        <h3 className="font-dmSans font-bold text-4xl">
                            Must Read
                        </h3>
                        <div
                            className="grid grid-cols-1 gap-y-6 md:grid-cols-2 lg:grid-cols-[1fr_624px_1fr] gap-x-6 h-full">
                            <MustReadCard item={dataMustRead}/>

                            <LargeMustReadCard item={dataLargeMustRead}/>

                            <div className="grid grid-rows-2 h-full gap-y-6">
                                <SmallMustReadCard item={dataSmallMustRead1}/>
                                <SmallMustReadCard item={dataSmallMustRead2}/>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col mt-16 gap-y-9">
                        <h3 className="font-dmSans font-bold text-4xl">
                            Discover More
                        </h3>
                        <div className="flex flex-col gap-y-6">
                            {paginatedItems.map((item, index) => (
                                <EducationCard key={index} item={item}/>
                            ))}
                            {/* PaginationNumber untuk mengatur pagination */}
                            <PaginationNumber
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} mt-20`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer/>
                </div>
            </div>
        </div>
    );
};

export default Education;