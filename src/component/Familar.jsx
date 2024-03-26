import React from 'react';

function Familar({ FamilarName, a, familarBalloonUp, setB }) {
    return (
        <>
            {
                FamilarName.map((obj, idx) => (
                    <div key={idx}>
                        <div className={`skill_textbox ${a == idx ? 'active' : ''}`}>
                            <p id='skill_text'>
                                {obj.text}
                            </p>
                        </div>
                        <button onClick={() => { familarBalloonUp(idx); setB(null) }} key={obj} className='family'>{obj.name}</button>
                    </div>
                ))
            }
        </>
    );
}

export default Familar;