import React, { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { motion } from 'framer-motion';

function Project(props) {
    const Project_all =
        [
            {
                'project_name': 'Sudoku',
                'text': '두번째 개인 프로젝트인 Sudoku 입니다. Vue를 활용하여 가로,세로,3x3 블럭의 중복값이 없이 1~9까지 숫자를 나열하는 방식의 게임이고, 난이도 별로 게임을 플레이 하실수 있습니다. ',
                'img': './imgs/Project5.PNG',
                'git_link': 'https://github.com/JSG-8579/sudoku',
                'link': 'https://sudoku-kohl-tau.vercel.app/'
            },
            {
                'project_name': 'JSG Stroy',
                'text': '첫번째 개인 프로젝트인 JSG Story 입니다. React를 활용하여 흑백 배경의 심플한 화면으로 포트폴리오를 만들었고, swiper와 motion으로 움직임을 주었습니다. ',
                'img': './imgs/portfolio1.PNG',
                'git_link': 'https://github.com/JSG-8579/portfolio',
                'link': 'https://jsg8579.vercel.app/'
            },
            {
                'project_name': 'Kook kook',
                'text': '두번째 프로젝트인 kookkook 사이트입니다. 기존 레시피 공유 사이트인 "만개의 레시피" 웹페이지를 참고했고 Next, mongodb, firebase, api를 사용하여 팀 프로젝트로 개발하였습니다. ',
                'img': './imgs/Project4.PNG',
                'git_link': 'https://github.com/JSG-8579/KookProject',
                'link': 'https://kook-project.vercel.app/'
            },
            {
                'project_name': 'Happy Pub',
                'text': '첫번째 프로젝트인 Happy Pub 사이트입니다. 기존 술마켓 각각의 온라인 판매 사이트를 참고하여 디자인의 재구성과 기능들의 활성화를 목표로 작업하였습니다',
                'img': './imgs/Project1.png',
                'git_link': 'https://github.com/JSG-8579/Team-project-Happy-Pub',
                'link': 'https://jsg-8579.github.io/Team-project-Pub/'
                
            },
            {
                'project_name': 'Figma',
                'text': 'Figma로 디자인 작업을 하고 HTML, SCSS, JS 를 활용하여 처음으로 작업한 개인 프로젝트입니다.',
                'img': './imgs/Figma1.PNG',
                'git_link': 'https://github.com/JSG-8579/figma',
                'link': 'https://jsg-8579.github.io/figma/'
            }
        ]

    const projectLink = (aa) => {
        // console.log(aa)
        const link2 = document.createElement('a');
        link2.href = `${aa}`;
        link2.target = "_blank";
        link2.click();
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

            <motion.div 
            // initial={{ opacity: 0, y: -100 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: false }}
            // transition={{
            //     ease: "easeInOut",
            //     duration: 1,
            //     y: { duration: 1 },
            // }}
            className='Project'>
                <p id='project_text'>PROJECT</p>
                {
                    Project_all.map((obj, k) => (
                        <section key={k} className='project_section'>
                            <motion.nav
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{
                                ease: "easeInOut",
                                duration: 1,
                                y: { duration: 1 },
                            }}
                            >
                                <p>{k+1}. {obj.project_name}</p>
                                <p >{obj.text}</p>
                                <div className='readme'>
                                <button onClick={() => { projectLink(obj.git_link) }}>자세히보기▶README</button>
                                </div>
                            </motion.nav>
                            <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{
                                ease: "easeInOut",
                                duration: 1,
                                y: { duration: 1 }
                            }} 
                            className='project_img'>
                                <p onClick={() => { projectLink(obj.link) }}>{obj.project_name} 사이트</p>
                                <img src={obj.img} alt="" />

                            </motion.div>

                        </section>

                    ))
                }

            </motion.div>




        </div>
    );
}

export default Project;