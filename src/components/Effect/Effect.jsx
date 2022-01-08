import { useState, useEffect } from "react";

const EffectUsed = () => {
    const [name, setName] = useState ('');
    const [lastName, setLastName] = useState ('');
    const [fullName, setFullName] = useState ('');


    useEffect(() =>{
        setFullName(`${name} ${lastName}`)
    }, [name, lastName]);

    const handleNameChange = ( e ) => {
        setName(e.target.value)
    }
    const handleLastNameChange = ( e ) =>{
        setLastName(e.target.value)

    }
    
    return (
        <div className="flex flex-col justify-center">
            <input type="text" placeholder="Digite seu nome" value= { name } onChange={ handleNameChange }/>
            <input type="text" placeholder="Digite seu sobrenome" value= { lastName } onChange={ handleLastNameChange }/>
            <p>Nome completo: { fullName } </p>
        </div>
    );
}
export default EffectUsed;