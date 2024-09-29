const PaginationLine = ({ currentPage, totalPages }) => {
    // Determines line length based on the current page
    const getLineLength = (lineNumber) => {
        return currentPage === lineNumber ? 142 : 40;
    };

    // Determines line color based on the current page
    const getLineColor = (lineNumber) => {
        return currentPage === lineNumber ? "#50C878" : "#C8C8C8";
    };

    // Calculates the `x` position for each line to avoid overlap
    const getLineXPosition = (index) => {
        let xPosition = 3; // Starting position of the first line
        for (let i = 0; i < index; i++) {
            // Add the previous line's length and a gap (16px) to the `x` position
            xPosition += getLineLength(i) + 16;
        }
        return xPosition;
    };

    // Render the lines based on the total number of pages
    return (
        <svg width="100%" height="6" fill="none" xmlns="http://www.w3.org/2000/svg">
            {Array.from({ length: totalPages }).map((_, index) => (
                <path
                    key={index}
                    d={`M${getLineXPosition(index)} 3L${getLineXPosition(index) + getLineLength(index)} 3`}
                    stroke={getLineColor(index)}
                    strokeWidth="6"
                    strokeLinecap="round"
                />
            ))}
        </svg>
    );
};

export default PaginationLine;