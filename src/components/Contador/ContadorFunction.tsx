import React from "react";
import { useState } from "react";
import "./Style.css"
const Contador = () => {
    const [numero, setNumero] = useState(0);

    const handleMinus = () => {
        setNumero(numero - 1);
    }
    const handlePlus = () => {
        setNumero(numero + 1);

    };

    return (
        <div className="contador">
            <h1>Contador</h1>
            <div className="cont-format">
                <button onClick={handleMinus}>-</button>
                <div>{numero}</div>
                <button onClick={handlePlus}>+</button>
            </div>
        </div>
    )
}
export default Contador;
