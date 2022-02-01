import React, { useState } from "react";
import "./Style.css"
const Input = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');


    const handleName = (event) => {
        setName(event.target.value)
    }
    const handleLastName = (event) => {
        setLastName(event.target.value)
    }
    const handleAge = (event) => {
        setAge(event.target.value)
    }


    return (
        <div className="cont-format input base-component">
            <h1 style={{color: '#FFFFFF'}}>Input exercise:</h1>
            <input type="text" value={name} onChange={handleName} placeholder="first name"/>
            <input type="text" value={lastName} onChange={handleLastName} placeholder="last name"/>
            <input type="number" value={age} onChange={handleAge} placeholder="---"/>
            <div style={{color: '#FFFFFF'}}>
                <h2> Hey
                    {` ${name} ${lastName}`}, <br/>
                    how are you?
                    <br/>
                    you are {age} years old.
                </h2>
            </div>
            <div class="card text-center">
                <div class="card-header">
                    <h1>Exploring the useState functionalities using an input</h1>
                </div>
                <div class="card-body">
                    <h2 class="card-title">This was made with the use of the useState react hook</h2>
                    <div className="useState-structure">
                        <p class="card-text">Main useState structure:</p>
                        <p>const [variable, variableSetter] = useState(initialValue)</p>
                        <p> const (clickingFunction) ( variableSetter(functionRule) )</p>
                    </div>
                    <a href={'https://en.reactjs.org/docs/hooks-reference.html#usestate'}><button>Documentation</button></a>

                </div>
                <div class="card-footer text-muted">
                </div>
            </div>
        </div>
    )
}
export default Input;