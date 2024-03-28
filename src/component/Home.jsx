import React, { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/virtual';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Autoplay } from 'swiper/modules';
import { delay, motion } from 'framer-motion';


function Home(props) {
    const imgs = ["Project1", "Project2", "Project3", "Project1", "Project2", "Project3"]
    const location = useLocation()
    useEffect(() => {
        props.getUrl(location.pathname)
    }, [])


    return (
        <div className='home_contents'>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                    ease: "easeInOut",
                    duration: 2,
                    y: { duration: 1 },
                }}
                className='home_text'
            >
                <p className='logo'>JSG Story</p>
                <p>JSG STORY</p>
                <p>FrontEnd developer is My Dream</p>
                <Link to='/PROJECT'><button>ABOUT & SKILL</button></Link>

                <div className='contact_link'>
                    <Link to='/CONTACT'><p>CONTACT</p></Link>
                    <img src='./imgs/Home_img4.png' alt="" width='40' height='27' />
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                    ease: "easeInOut",
                    duration: 2,
                    y: { duration: 1 },
                }}
                className='home_picture'>
                <img className='drag_point' src='./imgs/Home_img5.png' alt="" />
                <div className='swiper_div'>
                    <div className='swiper'>
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={2}
                            centeredSlides={true}
                            modules={[Pagination, Mousewheel, Autoplay]}
                            speed={3000}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                                //스와이프후 자동재생 false
                            }

                            }
                            loop={true}
                            direction={'vertical'}
                            initialSlide={1}
                            pagination={{
                                clickable: true
                            }}

                            navigation
                            scrollbar={{ draggable: true }}
                            mousewheel={{ invert: false }}>
                            {
                                imgs.map((obj, k) => (
                                    <SwiperSlide key={k}><Link to='/PROJECT'><img src={`./imgs/${obj}.png`} /></Link></SwiperSlide>
                                ))
                            }


                        </Swiper>
                    </div>
                </div>
            </motion.div>

        </div>
    );
}

export default Home;