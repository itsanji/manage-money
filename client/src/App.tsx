import { useState } from "react";
import "./App.css";
import Keyboard from "./components/Keyboard/Keyboard";
import Autocomplete from "./components/autocomplete/Autocomplete";

const autoComplete = [
    "mua do combini",
    "di an/date ",
    "mua cay tu dong",
    "mua sieu thi",
    "an ngoai",
];

const numberAutoComplete = ["500", "1000", "3000", "5000", "7000", "10000"];

function App() {
    const [entered, setEntered] = useState("0");
    const [reason, setReason] = useState("");

    const handleButtonClick = (clicked: string) => {
        switch (clicked) {
            case "C":
                // clear
                setEntered("0");
                break;
            case "Save":
                // add to use list
                console.log(entered);
                break;
            default:
                // adding number together
                setEntered((prev) => {
                    prev = String(prev) + clicked;
                    // removing starting 0
                    return String(Number(prev));
                });
        }
    };

    const fillReason = (sentence: string) => {
        setReason(sentence);
    };

    return (
        <>
            <h1>{entered}</h1>

            <div style={{ margin: "20px auto" }}>
                <input
                    type="text"
                    style={{ width: "95%" }}
                    onChange={(e) => setReason(e.currentTarget.value)}
                    value={reason}
                />
                <Autocomplete
                    autocompletes={autoComplete}
                    onClick={fillReason}
                />
                <hr />
                <Autocomplete
                    autocompletes={numberAutoComplete}
                    onClick={fillReason}
                />
            </div>

            <Keyboard onClick={handleButtonClick} />
        </>
    );
}

export default App;
