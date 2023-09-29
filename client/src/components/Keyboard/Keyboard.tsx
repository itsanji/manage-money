import React from "react";
import "./Keyboard.css";

interface KeyboardProps {
    children?: React.ReactNode;
    onClick: (clicked: string) => void;
}

const keyboard = [
    ["7", "8", "9"],
    ["4", "5", "6"],
    ["1", "2", "3"],
    ["0", "00"],
    ["C", "Save"],
];

const Keyboard: React.FC<KeyboardProps> = ({ onClick }) => {
    return (
        <div className="keyboard-container">
            {keyboard.map((line, i) => (
                <div className="line-container" key={`line_${i}`}>
                    {line.map((num) => (
                        <button
                            key={num}
                            style={{
                                flex: num === "00" || num == "Save" ? 2 : 1,
                            }}
                            onClick={() => onClick(num)}
                        >
                            {num}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    );
};
export default Keyboard;
