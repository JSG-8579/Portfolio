import React, { useEffect } from 'react';
import {useLocation} from "react-router-dom";
import  img  from "../imgs/Home_img2.png";
import './b.scss'

function Home(props) {
    const location = useLocation()
    useEffect(()=>{
        props.getUrl(location.pathname)
    },[])
    return (
        <div className='container'>
            <div className='logo'/>
            <div class="shadow"></div>
            
        </div>
    );
}

export default Home;