import React from 'react';

function Normar({ NormarName, b, normarBalloonUp, setA }) {
    return (
        <>
          {
            NormarName.map((obj, idx) => (
            <div key={idx}>
                <div className={`skill_textbox2 ${b == idx ? 'active' : ''}`}>
                    <p id='skill_text2'>
                        {obj.text}
                    </p>
                </div>
                <button onClick={() => { normarBalloonUp(idx); setA(null) }} key={obj} className='normar'>{obj.name}</button>
            </div>
            ))
        }
        </>
    );
}

export default Normar;