import React, { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

function Contacts(props) {
    const location = useLocation()
    useEffect(() => {
        props.getUrl(location.pathname)
    }, [])
    return (
        <div>
            <div id='gohome'>
                <Link to='/'>JSG</Link>
            </div>
            <div className='Contact'>
                <p id='contact_text'>CONTACT</p>

                <div className='contacts'>
                    <form className='comment'>
                        <input className='name_input' type="name" placeholder='이름' /><br />
                        <input className='email_input' type="email" placeholder='이메일' /><br />
                        <textarea className='textarea_input'  placeholder='내용' ></textarea><br />
                        <input className='submit_input' type="submit" value='Submit' />
                    </form>
                    <div className='my_link'>
                        <nav>
                            <p>Github : <a>https://github.com/JSG-8579</a></p>
                            <p>Kakao : <a>https://open.kakao.com/o/sp53ZU5f</a></p>
                            <p>Email : rkfntmdrhks@naver.com</p>
                        </nav>
                        <img className='contact_img' src="./imgs/Home_img4.png" alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Contacts;