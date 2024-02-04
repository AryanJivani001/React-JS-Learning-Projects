import { useState } from "react";

function Number() {
    const [number, setNumber] = useState(0);

    const cal = () => {
        if (number < 20) {
            setNumber(number + 1);
        } else {
            alert("Limit reached");
        }
    };
    const del = () => {
        if (number > 0) {
            setNumber(number - 1);
        } else {
            alert("Limit reached");
        }
    };
    return (
        <div className="number" style={{ textAlign: "center" }}>
            <h1>AJ001</h1>
            <h3>Your Number Is: {number}</h3>
            <button onClick={cal}>Click Me</button>
            <button style={{ marginLeft: "10px" }} onClick={del}>Undo</button>
        </div>
    );
}

export default Number;
