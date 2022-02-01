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
        <div className="base-component">
            <div className="counter-frame">
                <h1>Counter</h1>
                <div className="cont-format">
                    <button onClick={handleMinus}>-</button>
                    <div>{numero}</div>
                    <button onClick={handlePlus}>+</button>
                </div>
            </div>
            <div className="card text-center">
            <div className="card-header">
                <h1>Simple react component with a counting function</h1>
            </div>
                <div className="card-body">
                    <h2 className="card-title">This was made with the use of the useState react hook</h2>
                    <div className="useState-structure">
                        <p className="card-text">
                            Main useState structure:
                        </p>
                        <p>
                            const [variable, variableSetter] = useState(initialValue)
                        </p>
                        <p>
                            const (clickingFunction) (
                                variableSetter(functionRule)
                            )
                        </p>
                    </div>
                    <h3>Then, atribute the function to each button</h3>
                    <a href={'https://en.reactjs.org/docs/hooks-reference.html#usestate'} target='blank'><button>Documentation</button></a>
                </div>
                <div className="card-footer text-muted">
                    
                </div>
                </div>
        </div>
    )
}
export default Contador;
