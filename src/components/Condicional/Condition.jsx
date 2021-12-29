import React from "react";
import { useState } from "react";
import "./Style.css"

const ExhibitionCondition = () =>{
    const [show, setShow] = useState(false);
    const clickedForText = () => {
        setShow( !show )
    
    }
    return(
        <div className="conditional-format">
            <button onClick={clickedForText}>{show ? 'Ocultar texto' : 'Mostrar texto'}</button>
            <aside>
                {
                show === true && 
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum esse ea quibusdam earum repudiandae! Tempora ipsum nihil facilis laboriosam, in magni ad dignissimos debitis iste, illum vero. Ducimus, magni consequuntur.</h4>
                }
            </aside>
        </div>
    );
}; 
export default ExhibitionCondition;