import React, { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

function Project(props) {
    const location = useLocation()
    useEffect(() => {
        props.getUrl(location.pathname)
    }, [])
    return (
        <div>
            <div id='gohome'>
                <Link to='/'>JSG</Link>
            </div>
            <div className='Project'>
                <p id='project_text'>PROJECT</p>
                <section className='project_section'>
                    <nav>
                        <p>Happy Pub</p>
                        <p>
                            첫번째 프로젝트인 주류 판매 사이트입니다.<br />
                            기존 술마켓 각각의 온라인 판매 사이트를 참고하여<br />
                            디자인의 재구성과 기능들의 활성화를 목표로 작업하였습니다
                        </p>
                    </nav>
                    <div className='project_img'>
                        <img src="./imgs/Project1.png" alt="" />
                        
                    </div>

                </section>
                <section className='project_section'>
                    <nav>
                        <p>Happy Pub</p>
                        <p>
                            첫번째 프로젝트인 주류 판매 사이트입니다.<br />
                            기존 술마켓 각각의 온라인 판매 사이트를 참고하여<br />
                            디자인의 재구성과 기능들의 활성화를 목표로 작업하였습니다
                        </p>
                    </nav>
                    <div className='project_img'>
                        <img src="./imgs/Project1.png" alt="" />
                        
                    </div>

                </section>

            </div>




        </div>
    );
}

export default Project;