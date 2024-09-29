import {useState} from 'react';

const NumberInput = () => {
    const [value, setValue] = useState(1);

    const increment = () => {
        setValue((prev) => (prev === "" ? 1 : prev + 1));
    };

    const decrement = () => {
        setValue((prev) => (prev > 1 ? prev - 1 : 1));
    };

    const handleChange = (e) => {
        const inputValue = e.target.value;

        // Jika input kosong, set ke string kosong ("")
        if (inputValue === "") {
            setValue("");
        } else {
            // Mengubah input ke angka, menghilangkan leading zero
            const numericValue = Number(inputValue);
            setValue(numericValue >= 0 ? numericValue : 1);
        }
    };

    return (
        <div className="flex flex-row items-center space-x-2 border border-[#C8C8C8] rounded-full shadow-md">
            <button
                onClick={decrement}
                className="font-dmSans text-[#969696] text-4xl px-4"
            >
                -
            </button>
            <input
                type="number"
                value={value}
                onChange={handleChange}
                className="w-16 font-dmSans text-xl rounded-lg text-center my-4"
                min="0" // Boleh sampai kosong (sementara)
            />
            <button
                onClick={increment}
                className="font-dmSans text-secondary text-4xl px-4"
            >
                +
            </button>
        </div>
    );
};

export default NumberInput;