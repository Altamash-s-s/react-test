import React from 'react'
import '../../assets/css/leadership_slider.css'
import { useEffect, useRef } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, EffectCreative, EffectFade, Mousewheel } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-creative";
import 'swiper/css/effect-fade';

import $ from "jquery";

export default function Leadership_slider() {



    return (
    <>
        <div className='leadership_slder_sec mob_pd_LR tab_pd_LR' id='leadership_slider'>
            <div className='cstm_container'>
                <div className='row'>
                    <div className='col-12'>
                        <p className='section_sub_heading ldr_sld_hd' >Neque porro quisquam est qui dolorem</p>
                    </div>
                    <div className='col-12'>
                        <p className='sub_para'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique posuere eros, vitae tristique quam scelerisque at. Vestibulum justo eros, tincidunt et blandit at, tempor et lacus.
                        </p>
                    </div>
                    <div className='col-12'>
                        <h2 class="section_heading">qui dolorem</h2>
                    </div>

                    <div className='col-12 leader_slider_col'>
                        <div className='leader_slider_cd'>
                            
                            <Swiper
                                slidesPerView={3}
                                breakpoints={{
                                    320: {
                                    slidesPerView: 1
                                    },
                                    600: {
                                    slidesPerView: 2
                                    },
                                    850: {
                                    slidesPerView: 2
                                    },
                                    1024: {
                                    slidesPerView: 3
                                    },
                                }}
                                spaceBetween={0}
                                speed={500}
                                navigation={true}
                                modules={[Navigation]}
                                className="mySwiper ldrshp_slider news_slider"
                            >
         
                                    <SwiperSlide>
                                        <div className='leader_sld'  >
                                            <a target='_blank' href='#'>
                                                <div className='ldr_content'>
                                                    <div className='video_dv'>
                                                        {/* <img src={require('../../assets/img/esg_spotlight.jpg')}></img> */}
                                                        <iframe src='https://www.youtube.com/embed/gXHr7x3hY-I'
                                                                frameborder='0'
                                                                allow='autoplay; encrypted-media'
                                                                allowfullscreen
                                                                title='video'
                                                        />
                                                    </div>
                                                    <h3>set video playback speed with javascript</h3>
                                                    <p>Did you come here for something in particular or just general Riker-bashing? And blowing into</p>
                                                </div>
                                            </a>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='leader_sld'  >
                                            <a target='_blank' href='#'>
                                                <div className='ldr_content'>
                                                    <div className='video_dv'>
                                                        <iframe src='https://www.youtube.com/embed/ffz9DJaHM2k'
                                                                frameborder='0'
                                                                allow='autoplay; encrypted-media'
                                                                allowfullscreen
                                                                title='video'
                                                        />
                                                    </div>
                                                    <h3>set video playback speed with javascript</h3>
                                                    <p>Did you come here for something in particular or just general Riker-bashing? And blowing into</p>
                                                </div>
                                            </a>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='leader_sld'  >
                                            <a target='_blank' href='#'>
                                                <div className='ldr_content'>
                                                    <div className='video_dv'>
                                                        <iframe src='https://www.youtube.com/embed/4M5JjwAISi0'
                                                                frameborder='0'
                                                                allow='autoplay; encrypted-media'
                                                                allowfullscreen
                                                                title='video'
                                                        />
                                                    </div>
                                                    <h3>set video playback speed with javascript</h3>
                                                    <p>Did you come here for something in particular or just general Riker-bashing? And blowing into</p>
                                                </div>
                                            </a>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='leader_sld'  >
                                            <a target='_blank' href='#'>
                                                <div className='ldr_content'>
                                                    <div className='video_dv'>
                                                        <iframe src='https://www.youtube.com/embed/GnvaVbf08t8'
                                                                frameborder='0'
                                                                allow='autoplay; encrypted-media'
                                                                allowfullscreen
                                                                title='video'
                                                        />
                                                    </div>
                                                    <h3>set video playback speed with javascript</h3>
                                                    <p>Did you come here for something in particular or just general Riker-bashing? And blowing into</p>
                                                </div>
                                            </a>
                                        </div>
                                    </SwiperSlide>
                            
                            </Swiper>


                           


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
