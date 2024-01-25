import React, { useEffect } from 'react';
import {useLocation} from "react-router-dom";

function Project(props) {
    const location = useLocation()
    useEffect(()=>{
        props.getUrl(location.pathname)
    },[])
    return (
        <div>
            cccccccccccccccccccccccccccccccccc
        </div>
    );
}

export default Project;