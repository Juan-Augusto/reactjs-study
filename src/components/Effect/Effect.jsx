import { useState, useEffect } from "react";
import './Style.css'
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
        <div className="flex flex-col justify-center main-effect">
            <input className="input-useEffect" type="text" placeholder="First name" value= { name } onChange={ handleNameChange }/>
            <input className="input-useEffect" type="text" placeholder="Last name" value= { lastName } onChange={ handleLastNameChange }/>
            <div className="effect-reciver">
                <h2>Full name: <strong>{ fullName }</strong></h2>
            </div>
            <div className="card text-center">
                <div className="card-header">
                    <h1>Simple react component with a counting function</h1>
                </div>
                    <div className="card-body">
                        <h2 className="card-title">This was made with the use of the useState react hook that gets the input value and with the useEffect an array is filled by the two inputs and sets the full name, which is returned and rendered</h2>
                        <div className="useState-structure">
                            <p className="card-text">
                                Main useState structure:
                            </p>
                            <code>
                                const [variable, variableSetter] = useState(initialValue) <br />
                            </code>
                            <code>
                                const (clickingFunction) (
                                    variableSetter(functionRule)
                                )
                            </code>
                            <p className="card-text">
                                Main useEffect structure:
                            </p>
                            <code>
                                useEffect(() - (<br/>
                                    setFunction(`$(variable1) $(variable2) ...`)<br/>
                                ), [variable1, variable2, ...]);
                            </code>
                        </div>
                        <h3>Then, the useEffect hook concatanates each value setted</h3>
                        <a href={'https://en.reactjs.org/docs/hooks-reference.html#usestate'} target='blank'><button>useState Documentation</button></a>
                        <a href={'https://en.reactjs.org/docs/hooks-reference.html#useeffect'} target='blank'><button>useEffect Documentation</button></a>

                    </div>
                    <div className="card-footer text-muted">
                        
                    </div>
                </div>
        </div>
    );
}
export default EffectUsed;