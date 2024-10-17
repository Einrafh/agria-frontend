import EducationCard from "./EducationCard.jsx";
import {education, eduProfile} from "../assets/index.js";
import PropertyCard from "./PropertyCard.jsx";

const Education = () => {
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
    ]

    return (
        <section>
            <div className={"flex flex-col gap-y-12"}>
                <h3 className={"font-dmSans font-bold text-4xl mt-20"}>
                    Edukasi
                </h3>
                <div className={"grid grid-rows-3 gap-y-6"}>
                    {education2.slice(0, 3).map((item, index) => (
                        <EducationCard key={index} item={item} />
                    ))}
                </div>
            </div>
            <a
                href="/education"
                className="block shadow-md rounded-xl mt-6 mb-20 border-2 border-transparent hover:border-primary transition-colors duration-100"
            >
                <h3 className="font-dmSans font-bold text-2xl md:text-3xl text-center py-6">
                    Lihat selengkapnya
                </h3>
            </a>
        </section>
    );
};

export default Education;