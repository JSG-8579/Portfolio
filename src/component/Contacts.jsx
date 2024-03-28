import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";

function Contacts(props) {

    const completedTitle = "'For any enquiries, or just to say hello, get in touch and contact'";
    const [landingTitle, setLandingTitle] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setLandingTitle(landingTitle + completedTitle[count]);
            setCount(count + 1)
        }, 50)
        if (count === completedTitle.length) {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    })



    const location = useLocation()
    useEffect(() => {
        props.getUrl(location.pathname)
    }, [])
    return (
        <div>
            <div id='gohome'>
                <Link to='/'>JSG</Link>
            </div>

            <div className='Contact_all'>
                <div className='Contact'>
                    <p id='contact_text'>CONTACT</p>
                    <div className='contacts'>
                        <div className='dlstkakf'>
                            <p>
                                {landingTitle}
                            </p>
                        </div>

                        <div className='my_link'>
                            <nav>
                                <p>Email</p>
                                <p>jsg8579@naver.com</p>
                                <p>Github</p>
                                <p><a a href='https://github.com/JSG-8579' target="_blank" >https://github.com/JSG-8579</a></p>
                                <p>Kakao</p>
                                <p><a href='https://open.kakao.com/o/sp53ZU5f' target="_blank">https://open.kakao.com/o/sp53ZU5f</a></p>
                                <p>Address</p>
                                <p>서울특별시 중랑구 중화동</p>
                            </nav>
                        </div>
                        <div className='contact_img'>
                            <img src="./imgs/Contact_img1.png" alt="" />
                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
}

export default Contacts;