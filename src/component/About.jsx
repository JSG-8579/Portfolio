import React, { useEffect } from 'react';
import {useLocation} from "react-router-dom";
import Myimg from "../imgs/image 3.png";



function About(props) {
    const location = useLocation()
    useEffect(()=>{
        props.getUrl(location.pathname)
    },[])
    return (

        
            <div>
                <h2>About Me</h2>
                <div className='about_me'>
                    <div className='imgback'>
                    <img src={Myimg} alt="" />
                    </div>
                    <div className='mytext'>
                        <p>노력, 집중력, 끈기<br />
                            저를 표현 할 수있는 단어 3가지입니다.<br />
                            <br />
                            프론트앤드 개발자가 되기위해 계속 <b>‘노력’</b> 해왔고,<br />
                            개발에 몰두하기 위해 필요한 <b>‘집중력’</b><br />
                            프로젝트에 대해 책임을 가지고 끝가지 가려는 <b>‘끈기’</b><br />
                            <br />
                            이 모두를 계속 발전하기위해 나아가는<br />
                            제 이름은 정승관입니다.

                        </p>
                    </div>
                </div>
            </div>
    );
}

export default About;