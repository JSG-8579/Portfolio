import React from 'react';

function Download(props) {

    function bb(){
        
        const link = document.createElement('a');
        link.href = './resume/resume.pdf';
        link.download = 'jsg_resume.pdf';
        document.body.appendChild(link);
        link.click();
        
    }
    
    return (
        <>
            <button  className='resume_down' onClick={bb}>이력서</button>
        </>
    );
}

export default Download;