import React from 'react';

function Familar({ FamilarName, a, familarBalloonUp, setB }) {
    return (
        <>

            {

                FamilarName.map((obj, k) => (
 
                        <div key={k}>
                            <div className={`skill_textbox ${a == k ? 'active' : ''}`}>
                                <div id='skill_texts'>
                                    {
                                        obj.text.split('\n').map((line, idx) => (

                                            <p id='skill_text' key={idx}>
                                                {line}<br />
                                            </p>

                                        ))
                                    }
                                </div>
                            </div>
                            <button onClick={(e) => { familarBalloonUp(e,k); setB(null) }} key={k} className={`family ${a == k ? 'active' : ''}`}>{obj.name}</button>
                        </div>
                ))
            }
        </>
    );
}

export default Familar;