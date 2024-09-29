import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const CountdownTimer = ({ targetTime }) => {
    const calculateTimeLeft = () => {
        const currentTime = new Date().getTime();
        const difference = targetTime - currentTime;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    });

    const formatTime = (time) => {
        return time < 10 ? `0${time}` : time;
    };

    return (
        <div className="flex flex-row text-3xl font-bold text-white bg-red-500 p-4 rounded-lg">
            <div className="flex flex-col items-center">
                <span>{formatTime(timeLeft.hours || 0)}</span>
            </div>
            <span className="mx-2">:</span>
            <div className="flex flex-col items-center">
                <span>{formatTime(timeLeft.minutes || 0)}</span>
            </div>
            <span className="mx-2">:</span>
            <div className="flex flex-col items-center">
                <span>{formatTime(timeLeft.seconds || 0)}</span>
            </div>
        </div>
    );
};

CountdownTimer.propTypes = {
    targetTime: PropTypes.number.isRequired,
};

export default CountdownTimer;