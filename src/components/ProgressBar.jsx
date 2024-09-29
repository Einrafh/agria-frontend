const ProgressBar = ({ value, max, w, h, color }) => {
    const progressPercentage = (value / max) * 100;

    return (
        <div
            className={`bg-[#F5F5F5] rounded-full`}
            style={{ width: `${w}px`, height: `${h}px` }}
        >
            <div
                className={`${color} rounded-full`}
                style={{ width: `${progressPercentage}%`, height: `${h}px` }}
            ></div>
        </div>
    );
};

export default ProgressBar;