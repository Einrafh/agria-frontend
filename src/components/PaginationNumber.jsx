import { arrowLeft, arrowLeftDouble, arrowRight, arrowRightDouble } from "../assets/index.js";
import { useState } from "react";

const PaginationNumber = ({ totalPages, currentPage, onPageChange }) => {
    const maxVisibleButtons = 5;
    const [startPage, setStartPage] = useState(1);

    // Calculate the last visible page based on the current start page
    const endPage = Math.min(startPage + maxVisibleButtons - 1, totalPages);

    // Update the visible buttons range based on current page and arrow clicks
    const updateVisiblePages = (page) => {
        if (page < startPage) {
            setStartPage(page);
        } else if (page > endPage) {
            setStartPage(page - maxVisibleButtons + 1);
        }
        onPageChange(page);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            updateVisiblePages(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            updateVisiblePages(currentPage + 1);
        }
    };

    const handleFirstPage = () => {
        setStartPage(1);
        onPageChange(1);
    };

    const handleLastPage = () => {
        setStartPage(Math.max(1, totalPages - maxVisibleButtons + 1));
        onPageChange(totalPages);
    };


    // Generate pagination buttons based on visible page range
    const pageButtons = [];
    for (let page = startPage; page <= endPage; page++) {
        if (page > 0) { // Pastikan halaman 0 tidak ditampilkan
            pageButtons.push(
                <button
                    key={page}
                    className={`font-dmSans text-2xl w-12 h-12 rounded-full flex items-center justify-center ${
                        currentPage === page ? "bg-secondary text-white font-bold" : "text-gray-600"
                    }`}
                    onClick={() => updateVisiblePages(page)}
                >
                    {page}
                </button>
            );
        }
    }


    return (
        <div className="flex flex-row justify-center items-center mt-12 relative">
            <div className="flex flex-row gap-x-6 items-center">
                <img
                    src={arrowLeftDouble}
                    alt="arrowLeftDouble"
                    className="size-4 cursor-pointer"
                    onClick={handleFirstPage}
                />
                <img
                    src={arrowLeft}
                    alt="arrowLeft"
                    className="size-4 cursor-pointer"
                    onClick={handlePrevPage}
                />
                {pageButtons}
                <img
                    src={arrowRight}
                    alt="arrowRight"
                    className="size-4 cursor-pointer"
                    onClick={handleNextPage}
                />
                <img
                    src={arrowRightDouble}
                    alt="arrowRightDouble"
                    className="size-4 cursor-pointer"
                    onClick={handleLastPage}
                />
            </div>
            <div className="absolute right-0 flex flex-row items-center gap-x-6">
                <h3 className="font-dmSans text-xl text-[#969696]">
                    Page
                </h3>
                <input
                    type="number"
                    value={currentPage}
                    onChange={(e) => updateVisiblePages(Number(e.target.value))}
                    className="w-16 h-12 font-dmSans text-xl rounded-lg text-center my-4 border border-[#969696]"
                    min="1"
                    max={totalPages}
                />
                <h3 className="font-dmSans text-xl text-[#969696]">
                    of {totalPages}
                </h3>
            </div>
        </div>
    );
};

export default PaginationNumber;