import React, { useEffect } from 'react';
import {useLocation} from "react-router-dom";

function Contacts(props) {
    const location = useLocation()
    useEffect(()=>{
        props.getUrl(location.pathname)
    },[])
    return (
        <div>
            wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
        </div>
    );
}

export default Contacts;