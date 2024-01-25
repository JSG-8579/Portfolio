import React, { useEffect } from 'react';
import {useLocation} from "react-router-dom";

function Skills(props) {
    const location = useLocation()
    useEffect(()=>{
        props.getUrl(location.pathname)
    },[])

    return (
        <div>
            kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
        </div>
    );
}

export default Skills;