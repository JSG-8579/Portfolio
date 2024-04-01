import React from 'react';

function Download(props) {

    function downResume(){
        
        const link = document.createElement('a');
        link.href = './resume/JSG_resume.pdf';
        link.download = 'jsg_resume.pdf';
        document.body.appendChild(link);
        link.click();
        
    }
    
    return (
        <>
            <button  className='resume_down' onClick={downResume}>이력서</button>
        </>
    );
}

export default Download;