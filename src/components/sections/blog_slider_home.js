import React from 'react'
import '../../assets/css/blog_slider_home.css'
import useFetch from "react-fetch-hook";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, EffectCreative, EffectFade, Mousewheel } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-creative";
import 'swiper/css/effect-fade';

export default function Blog_slider_home() {

    // const { isLoading, data, error } = useFetch(
    //     `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/posts?after=${firstDateOfCurrentMonth}T00:00:00&before=${firstDateOfNextMonth}T00:00:00`
    // );

    const { isLoading, data, error } = useFetch(
        `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/posts`
    );

  return (
    <>
        <div className='news_slider_sec blog_slider_home'>
            <div className=''>
                
                <div className='row no_LR_margin'>
                    <div className='col-12'>
                        <p className='section_name news_hd'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <hr className='add_border new_green_line'/>
                    </div>
                </div>
                <div className='row no_LR_margin'>
                    <div className='col-12'>
                        <h2 class="section_heading blog_bsh_ttl">Blogs</h2>

                        <div className='bloghome_slider'>
                        <Swiper
                            slidesPerView={2}
                            breakpoints={{
                                320: {
                                slidesPerView: 1
                                },
                                600: {
                                slidesPerView: 1
                                },
                                850: {
                                slidesPerView: 2
                                },
                                1024: {
                                slidesPerView: 2
                                },
                                1440: {
                                slidesPerView: 2
                                },
                            }}
                            spaceBetween={0}
                            speed={500}
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper news_slider bsh_slider_dv"
                        >

                            {data && data.map(({ id, acf, title, category, slug, content }) => (
                                <SwiperSlide>
                                    <div className='bsh_sld' key={id}>
                                        <a href={'/blogs/'+ slug}>
                                            <div className='image-conatoner'>
                                                <div className='img-box'>
                                                    <img src={acf.blog_image} alt={acf.blog_image_alt_text}></img>
                                                </div>
                                                <div className='text-box'>
                                                    <p className='new-para blg_cat_name'>{category}</p>
                                                    
                                                    <div className='icon-blog'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
                                                            <path d="M2.75514 7.2H4.13271V8.8H2.75514V7.2ZM12.3981 3.2V14.4C12.3981 15.28 11.7782 16 11.0206 16H1.37757C1.01222 16 0.661825 15.8314 0.403481 15.5314C0.145136 15.2313 0 14.8243 0 14.4L0.00688784 3.2C0.00688784 2.32 0.613019 1.6 1.37757 1.6H2.06635V0H3.44392V1.6H8.9542V0H10.3318V1.6H11.0206C11.7782 1.6 12.3981 2.32 12.3981 3.2ZM1.37757 4.8H11.0206V3.2H1.37757V4.8ZM11.0206 14.4V6.4H1.37757V14.4H11.0206ZM8.26542 8.8H9.64299V7.2H8.26542V8.8ZM5.51028 8.8H6.88785V7.2H5.51028V8.8Z" fill="white" />
                                                        </svg>
                                                        <p>{acf.blog_publish_date}</p>
                                                    </div>
                                                    <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
                                                    {/* <p className='blg_bx_para' dangerouslySetInnerHTML={{ __html: content }}></p> */}

                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </SwiperSlide>
                            ))}
                            
                        </Swiper>

                        <a href='/blogs' className='arrow_btn blog_lnding_btn'>View All</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}
