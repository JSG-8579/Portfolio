import React from 'react';

function Familar({ obj,idx, a, familarBalloonUp,setB }) {
    return (
        <div>
            <div className={`skill_textbox ${a == idx ? 'active' : ''}`}>
                <p id='skill_text'>
                    {obj.text}
                </p>
            </div>
            <button onClick={()=>{familarBalloonUp(idx); setB(null)}} key={obj} className='family'>{obj.name}</button>
        </div>
    );
}

export default Familar;