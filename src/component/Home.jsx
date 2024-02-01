import React, { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import home_img2 from '../imgs/Home_img4.png';
import home_img4 from '../imgs/Home_img1.png';
import home_img5 from '../imgs/Home_img2.png';
import home_img6 from '../imgs/Home_img3.png';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';


function Home(props) {
    const location = useLocation()
    useEffect(() => {
        props.getUrl(location.pathname)
    }, [])
    return (
        <div className='home_contents'>
            <div className='home_text'>
                <p className='logo'>JSG Story</p>
                <p>JSG STORY</p>
                <p>FrontEnd developer is My Dream</p>
                <button>ABOUT & SKILL</button>
                <div className='contact_link'>
                    <Link to><p>CONTACT US</p></Link>
                    <img src={home_img2} alt="" width='40' height='27' />
                </div>
            </div>
            <div className='swiper_div'>
                <div className='swiper'>
                    <Swiper 
                    // 스와이프 세로좀 해라
                        spaceBetween={0}
                        slidesPerView={1}
                        direction={'vertical'}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        navigation
                        scrollbar={{ draggable: true }}>
                        <SwiperSlide><img src={home_img4} width={50} height={60} /></SwiperSlide>
                        <SwiperSlide><img src={home_img5} /></SwiperSlide>
                        <SwiperSlide><img src={home_img6} /></SwiperSlide>

                    </Swiper>
                </div>
            </div>

        </div>
    );
}

export default Home;