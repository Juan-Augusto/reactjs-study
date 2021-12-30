import React, { useState } from "react";
import "./Style.css"
const Input = () => {
    const [name, setName] = useState('-');
    const [lastName, setLastName] = useState('-');
    const [age, setAge] = useState('--');


    const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }
    const handleLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value)
    }
    const handleAge = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAge(event.target.value)
    }


    return (
        <div className="cont-format input">
            <h1>Input para nome:</h1>
            <h2> Nome: </h2>
            <input type="text" value={name} onChange={handleName} placeholder=""/>
            <input type="text" value={lastName} onChange={handleLastName} placeholder="---"/>
            <input type="number" value={age} onChange={handleAge} placeholder="---"/>

            <h2> Olá
                {` ${name} ${lastName}`}, <br/>
                tudo bem?
                <br/>
                você tem {age} anos
            </h2>

        </div>
    )
}
export default Input;