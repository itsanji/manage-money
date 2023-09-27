import { useState } from "react";
import "./App.css";
import Keyboard from "./components/Keyboard";

const autoComplete = [
    "mua do combini",
    "di an/date ",
    "mua cay tu dong",
    "mua sieu thi",
    "an ngoai",
];

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

    return (
        <>
            <h1>{entered}</h1>
            <div style={{ margin: "20px auto" }}>
                <input
                    type="text"
                    style={{ width: "95%", borderRadius: 5 }}
                    onChange={(e) => setReason(e.currentTarget.value)}
                    value={reason}
                />
                <div
                    style={{ display: "flex", flexWrap: "wrap", marginTop: 10 }}
                >
                    {autoComplete.map((sentence, i) => (
                        <div
                            key={`autoComplete_${i}`}
                            style={{
                                borderRadius: 5,
                                margin: 5,
                                padding: 3,
                                border: "1px solid #054a29",
                            }}
                            onClick={() => {
                                setReason(sentence);
                            }}
                        >
                            {sentence}
                        </div>
                    ))}
                </div>
            </div>
            <Keyboard onClick={handleButtonClick} />
        </>
    );
}

export default App;
