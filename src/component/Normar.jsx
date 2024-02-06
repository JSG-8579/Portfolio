import React from 'react';

function Normar({ obj, idx, b, normarBalloonUp,setA }) {
    return (
        <div>
            <div className={`skill_textbox2 ${b == idx ? 'active' : ''}`}>
                <p id='skill_text2'>
                    {obj.text}
                </p>
            </div>
            <button onClick={() => { normarBalloonUp(idx); setA(null) }} key={obj} className='normar'>{obj.name}</button>
        </div>
    );
}

export default Normar;