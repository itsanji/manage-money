import React from "react";
import "./Autocomplete.css";

interface AutocompleteProps {
    children?: React.ReactNode;
    onClick: (sentence: string) => void;
    autocompletes: string[];
}

const Autocomplete: React.FC<AutocompleteProps> = ({
    onClick,
    autocompletes,
}) => {
    return (
        <>
            <div className="autocomplete_container">
                {autocompletes.map((sentence, i) => (
                    <div
                        key={`autoComplete_${i}`}
                        className="autocomplete_selection"
                        onClick={() => onClick(sentence)}
                    >
                        {sentence}
                    </div>
                ))}
            </div>
        </>
    );
};
export default Autocomplete;
