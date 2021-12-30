import React, {useState} from "react";

const StyledCondition = () => {
    const [color, setColor] = useState('#FFF')
    const clickMeEvent = () => {
        setColor('blue')
    }
    return(
        <div className="cont-format input">
            <button style={{backgroundColor: color}} onClick={clickMeEvent}>
                Click me
            </button>
        </div>
    );
}
export default StyledCondition