import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import about_img7 from '../imgs/about.png';




function About(props) {
    const location = useLocation()
    useEffect(() => {
        props.getUrl(location.pathname)
    }, [])
    return (
        <div className='about_contents'>
            <div className='gohome'>
                <p>JSG</p>
            </div>
            <div className='about_skill'>
                <div className='about_me'>
                    <p>ABOUT</p>
                    <p>정승관 <b>1995.07</b></p>
                    <img id='my_face' src={about_img7} alt="" />
                    <p>노력, 집중력, 끈기<br/>
                        저를 표현 할 수있는 단어 3가지입니다.<br/>
                        <br/>
                        프론트앤드 개발자가 되기위한 끊임없는 <b id='red_text'>‘노력’</b><br/>
                        개발에 몰두하기 위해 필요한 <b id='red_text'>‘집중력’</b><br/>
                        프로젝트에 대해 책임을 가지고 끝가지 가려는 <b id='red_text'>‘끈기’</b><br/>
                        <br/>
                        이 모두를 계속 발전하기위해 나아가는<br/>
                        제 이름은 정승관입니다.</p>
                    <button className='resume_down'>이력서</button>
                </div>
                <div className='my_skill'>

                </div>
            </div>
        </div>
    );
}

export default About;