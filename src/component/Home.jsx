import React, { useEffect } from 'react';
import {useLocation} from "react-router-dom";

function Home(props) {
    const location = useLocation()
    useEffect(()=>{
        props.getUrl(location.pathname)
    },[])
    return (
        <div>
            홈이에요~
            
        </div>
    );
}

export default Home;