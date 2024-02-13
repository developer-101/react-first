import { useEffect, useState } from "react";

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

export default function RandomColor() {

    const [typeOfColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState("#000000");

    function randomColorUtility(length: number) {
        return Math.floor(Math.random() * length);
    }

    function handleGenerateRandomColor(): void {
        if (typeOfColor == "hex") {
            let hexColor = "#";

            for (let i = 0; i < 6; i++) {
                hexColor += hex[randomColorUtility(hex.length)];
            }

            setColor(hexColor);
        } else {
            const r = randomColorUtility(256);
            const g = randomColorUtility(256);
            const b = randomColorUtility(256);
            setColor(`rgb(${r},${g},${b})`);
        }
    }

    useEffect(() => {
        handleGenerateRandomColor();
    }, [typeOfColor]);

    return (
        <>
            <div
                style={{
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: color,
                }}
            >
                <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
                <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
                <button onClick={handleGenerateRandomColor}>
                    Generate Random Color
                </button>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff',
                    fontSize: '50px',
                    marginTop: '50px',
                    flexDirection: 'column'
                }}>
                    <h3>{typeOfColor == 'hex' ? 'HEX Color' : 'RGB Color'}</h3>
                    <h1>{color}</h1>
                </div>
            </div>
        </>
    );
}
