import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import Familar from './Familar';
import Normar from './Normar';
import Download from './Download';
import { motion } from 'framer-motion';




function About(props) {
    const SkillName = ['HTML', 'SCSS', 'JS', 'TS', 'React', 'Next',
        , 'Figma', 'Github', 'JQuery', 'Mongo']
    const FamilarName =
        [
            { 'name': 'HTML', 'text': 'HTML' },
            { 'name': 'SCSS', 'text': 'SCSS' },
            { 'name': 'JS', 'text': 'JS' },
            { 'name': 'TS', 'text': 'TS' },
            { 'name': 'React', 'text': 'React' },
            { 'name': 'Next', 'text': 'Next' },
            { 'name': 'Figma', 'text': 'Figma' },
            { 'name': 'Github', 'text': 'Github' }
        ]
    const NormarName =
        [
            { 'name': 'JQeury', 'text': 'JQeury' },
            { 'name': 'Mongo', 'text': 'Mongo' }
            
        ]

    // const downloadResume =()=>{




    // }    
    const [a, setA] = useState()
    const [b, setB] = useState()
    

    const familarBalloonUp = (idx) => {
        if (a == null) {
            setA(idx)
        } else if (a !== idx) {
            setA(idx)
        } else {
            setA(null)
        }

    }

    const normarBalloonUp = (idx) => {
        if (b == null) {
            setB(idx)
        } else if (b !== idx) {
            setB(idx)
        } else {
            setB(null)
        }

    }

    const location = useLocation()
    useEffect(() => {
        props.getUrl(location.pathname)
    }, [])
    return (
        <div>
            <div id='gohome'>
                <Link to='/'>JSG</Link>
            </div>
            <div className='about_skill'>
                <div className='me'>
                    <p>ABOUT</p>
                    <p>정승관 <b>1995.07</b></p>
                    <img id='my_face' src='./imgs/about.png' alt="" />
                    <p>노력, 집중력, 끈기<br />
                        저를 표현 할 수있는 단어 3가지입니다.<br />
                        <br />
                        프론트앤드 개발자가 되기위한 끊임없는 <b id='red_text'>‘노력’</b><br />
                        개발에 몰두하기 위해 필요한 <b id='red_text'>‘집중력’</b><br />
                        프로젝트에 대해 책임을 가지고 끝가지 가려는 <b id='red_text'>‘끈기’</b><br />
                        <br />
                        이 모두를 계속 발전하기위해 나아가는<br />
                        제 이름은 정승관입니다.</p>
                    <Download/>
                </div>
                <div id='line2'></div>
                <div className='my_skill'>
                    <p>SKILL</p>
                    <p>That I Own</p>
                    <div
                    
                     className='skill_list'>
                        {
                            SkillName.map((obj) => (
                                <img key={obj} src={`./imgs/${obj}.png`} />
                            ))

                        }
                    </div>
                    <p>Familar</p>
                    <div className='familar_list'>
                        {
                            FamilarName.map((obj, idx) => (
                                <Familar obj={obj} idx={idx} familarBalloonUp={familarBalloonUp} a={a} setB={setB} />
                            ))
                        }
                    </div>
                    <p>Normal</p>
                    <div className='normar_list'>
                        {
                            NormarName.map((obj, idx) => (
                                <Normar obj={obj} idx={idx} normarBalloonUp={normarBalloonUp} b={b} setA={setA} />
                            ))
                        }
                    </div>


                </div>
            </div>
        </div>
    );
}

export default About;