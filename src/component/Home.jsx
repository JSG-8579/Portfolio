import React, { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/virtual';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';


function Home(props) {
    const imgs = ["img1", "img2", "img3","img1", "img2", "img3"]
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
                <Link to='/PROJECT'><button>ABOUT & SKILL</button></Link>
                <div className='contact_link'>
                    <Link to ='/CONTACT'><p>CONTACT US</p></Link>
                    <img src='./imgs/Home_img4.png' alt="" width='40' height='27' />
                </div>
            </div>
            <div className='home_picture'>
                <img className='drag_point' src='./imgs/Home_img5.png' alt="" />
                <div className='swiper_div'>
                    <div className='swiper'>
                        <Swiper
                            // 스와이프 세로좀 해라
                            spaceBetween={30}
                            slidesPerView={2}
                            centeredSlides={true}
                            loop={true}
                            direction={'vertical'}
                            initialSlide ={1}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination, Mousewheel]}
                            navigation
                            scrollbar={{ draggable: true }}
                            mousewheel = {{ invert: true }}>
                                {
                                    imgs.map((obj)=>(
                                        <SwiperSlide ><Link key={obj} to='/PROJECT'><img src={`./imgs/Home_${obj}.png`} /></Link></SwiperSlide>
                                    ))
                                }
                            

                        </Swiper>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;