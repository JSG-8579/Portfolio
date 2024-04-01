import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import Familar from './Familar';
import Normar from './Normar';
import Download from './Download';
import { motion } from 'framer-motion';




function About(props) {
    const SkillName = ['HTML', 'SCSS', 'JS', 'TS', 'React', 'Next', 'Figma', 'Github', 'Firebase', 'Mongo', 'Vercel']
    const FamilarName =
        [
            { 'name': 'HTML', 'text': '기본적인 웹표준을 잘 지키며 다양한 태그를 활용하여, 코드의 마크업이 가능합니다.' },
            { 'name': 'SCSS', 'text': 'SCSS의 기본적인 형태를 알고, 웹페이지 콘텐츠를 다양하게 꾸밀수 있습니다. \n \n 반응형 작업을 주로 많이 하였습니다.' },
            { 'name': 'JS', 'text': 'ES6+ 문법에 많이 익숙합니다. \n\n get, post 방식을 이용한 url 작업이 가능합니다. \n \n json 데이터 관리, local, session storage 데이터 관리 작업을 할수 있습니다.' },
            { 'name': 'TS', 'text': '코드에 맞는 기본적인 타입설정이 가능합니다.' },
            { 'name': 'React', 'text': 'npm 패키지 설치 및 환경설정에 대해 익숙합니다. \n \n componet로 페이지, 기능 구분과 props로 데이터를 주는데에 익숙합니다. \n \n useEffect, useState, useStore등 라이브러리 함수를 활용 가능합니다.' },
            { 'name': 'Next', 'text': 'Next js 14버전 환경이 익숙합니다. \n \n zustand를 이용한 서버연결 및 추가, 삭제 수정 등의 기능이 가능합니다.' },
            { 'name': 'Figma', 'text': '웹, 모바일 페이지의 화면디자인 구성을 할 수 있습니다.' },
            { 'name': 'Github', 'text': 'Repositories 관리가 가능하고, 개발환경 github 연결 및 pull push가 가능합니다.' }
        ]
    const NormarName =
        [
            { 'name': 'Mongo', 'text': 'react, next 데이터 서버 연결이 가능합니다. \n \n Database Collection 관리를 할 수 있습니다.' },
            { 'name': 'Firebase', 'text': 'Storage를 생성하여 이미지 데이터 서버 연결이 가능합니다.' },
            { 'name': 'Vercel', 'text': 'github와 연동하여 react, next js를 배포 할 수 있습니다' },
            { 'name': 'Vue', 'text': '개발 환경 설정이 가능하고, 기본적인 구조를 알고있습니다.' }

        ]

    // const downloadResume =()=>{




    // }    
    const [a, setA] = useState()
    const [b, setB] = useState()


    const familarBalloonUp = (e, idx) => {
        e.stopPropagation();
        //함수 우선순위 젤 높게

        if (a == null) {
            setA(idx)
        } else if (a !== idx) {
            setA(idx)
        } else {
            setA(null)
        }

    }

    const normarBalloonUp = (e, idx) => {
        e.stopPropagation();
        if (b == null) {
            setB(idx)
        } else if (b !== idx) {
            setB(idx)
        } else {
            setB(null)
        }

    }

    const BalloonDown = () => {
        setA(null)
        setB(null)
    }

    const location = useLocation()
    useEffect(() => {
        props.getUrl(location.pathname)
    }, [])
    return (
        <div onClick={BalloonDown}>

            <div id='gohome'>
                <Link to='/'>JSG</Link>
            </div>
            <div className='about_skill'>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{
                        ease: "easeInOut",
                        duration: 1,
                        y: { duration: 1 },
                    }}

                    className='me'>
                    <p>ABOUT</p>
                    <p>정승관 <b>1995.07</b></p>
                    <img id='my_face' src='./imgs/Myprofile.jpg' alt="" />
                    <p>노력, 집중력, 끈기<br />
                        저를 표현 할 수있는 단어 3가지입니다.<br />
                        <br />
                        프론트앤드 개발자가 되기위한 끊임없는 <b id='red_text'>‘노력’</b><br />
                        개발에 몰두하기 위해 필요한 <b id='red_text'>‘집중력’</b><br />
                        프로젝트에 대해 책임을 가지고 끝가지 가려는 <b id='red_text'>‘끈기’</b><br />
                        <br />
                        이 모두를 계속 발전하기위해 나아가는<br />
                        제 이름은 정승관입니다.</p>
                    <Download />
                </motion.div>
                {/* <div id='line2'></div> */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{
                        ease: "easeInOut",
                        duration: 1,
                        y: { duration: 1 }
                    }}

                    className='my_skill'>
                    <p>SKILL</p>
                    <p>That I Own</p>
                    <div

                        className='skill_list'>
                        {
                            SkillName.map((obj, k) => (
                                <img key={k} src={`./imgs/${obj}.png`} />
                            ))

                        }
                    </div>
                    <p>Familar</p>
                    {
                        FamilarName.map((obj, k) => (
                            <div key={k} className={`text_box ${a == k ? 'active' : ''}`}>
                                {
                                    obj.text.split('\n').map((obj2, k2) => (
                                        <p>{obj2}</p>
                                    ))
                                }


                            </div>

                        ))
                    }

                    <div className='familar_list'>
                        {
                            // FamilarName.map((obj, idx) => (
                            <Familar FamilarName={FamilarName} familarBalloonUp={familarBalloonUp} a={a} setB={setB} />
                            // ))
                        }
                    </div>
                    <p>Normal</p>
                    {
                        NormarName.map((obj, k) => (
                            <div key={k} className={`text_box ${b == k ? 'active' : ''}`}>
                                {
                                    obj.text.split('\n').map((obj2, k2) => (
                                        <p>{obj2}</p>
                                    ))
                                }


                            </div>

                        ))
                    }
                    <div className='normar_list'>
                        <Normar NormarName={NormarName} normarBalloonUp={normarBalloonUp} b={b} setA={setA} />
                    </div>


                </motion.div>
            </div>
        </div>
    );
}

export default About;