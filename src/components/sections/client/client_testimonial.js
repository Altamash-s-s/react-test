import React from 'react'
import Slider from 'react-slick';
import '../../../assets/css/client_testimonial.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Client_testimonial() {

    const custm_slider = {
        arrows: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 800,
        // centerMode: true,
        // centerPadding: '140px',
        responsive: [
            {
                breakpoint: 1090,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll:1,
                  centerMode: true,
                  centerPadding: '50px',
                  adaptiveHeight: true
                }
            },
            {
                breakpoint: 835,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll:1,
                  centerMode: false,
                  centerPadding: '140px',
                  adaptiveHeight: true,
                  infinite: false
                }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll:1,
                centerMode: false,
                centerPadding: '0px',
                adaptiveHeight: true,
                infinite: false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
                centerPadding: '0px',
                adaptiveHeight: true,
                infinite: false
              }
            }
        ]
    };


    // gloabl line GSAP
    gsap.registerPlugin(ScrollTrigger); 

    // Heading text animation variable
    const social_hd = useRef(null);
    
    // Para animation variable
    const social_para1 = useRef(null);
    const social_para2 = useRef(null);

    // border animation variable
    const agileBorder_aniamtion = useRef(null);

    useEffect(() => {

        // Heading text animation code
        gsap.to("#social_hd", {
            y:0,
            duration: 1.3,
            ease: "power4.out",
            delay: 0.3,
            scrollTrigger: {
                trigger: "#social_hd",
                markers: false
            }
        });

        // Para animation code
        gsap.to("#social_para1", {
            opacity:1,
            duration: 1.5,
            ease: "linear",
            delay: 0.9,
            scrollTrigger: {
                trigger: "#social_para1",
                markers: false
            }
        });
        // Para animation code
        gsap.to("#social_para2", {
            opacity:1,
            duration: 1.5,
            ease: "linear",
            delay: 0.9,
            scrollTrigger: {
                trigger: "#social_para2",
                markers: false
            }
        });

    }, []);


    return (
        <>
            <div className='customis_sec testimonial_sec' id='social'>
                <div className='row no_LR_margin'>
                    <div className='col-12 no_padding'>
                        <div className="animate_txt ">
                            <h2 ref={social_hd} id='social_hd' className='section_heading'>Client Testimonials</h2>
                        </div>
                    </div>
                </div>

                <div className='row no_LR_margin'>
                    <div className='col-12 no_padding p_opacity' ref={social_para2} id='social_para2'>
                        <Slider {...custm_slider} className=' custm_main_slider social_main_slider Testimonial_slider'>

                            <div className='custm_outer_sld'>
                                <div className='custm_inner'>

                                    <div className='content_div'>
                                        {/* <img src={acf.client_stories_image} className='client_img'></img> */}
                                        <div className='content_div_inner'>
                                            <img className='quote_icon' src={require('../../../assets/img/quote_icon.png')}></img>
                                            <div className=''>
                                                <p className='csm_para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc facilisis, metus at blandit pretium, mauris arcu iaculis sapien, eget scelerisque est sapien sit amet metus. Suspendisse dolor leo, vestibulum ac dui vitae, accumsan dignissim orci. Donec non commodo nulla, quis tincidunt dui. Cras id velit nec mi egestas rhoncus.</p>
                                                <hr className='testimonial_hr'></hr>
                                                
                                                <img className='client_logo_testim' src={require('../../../assets/img/dummy_logo.png')}></img>    
                                                <p className='test_nm'>Rajesh Kapoor</p>
                                                <p className='csm_para test_dsg'>Plant Head – ABC LTD.</p>

                                            </div>
                                        </div>
                             
                                    </div>
                                   
                                </div>
                            </div>

                            <div className='custm_outer_sld'>
                                <div className='custm_inner'>

                                    <div className='content_div'>
                                        {/* <img src={acf.client_stories_image} className='client_img'></img> */}
                                        <div className='content_div_inner'>
                                            <img className='quote_icon' src={require('../../../assets/img/quote_icon.png')}></img>
                                            <div className=''>
                                                <p className='csm_para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc facilisis, metus at blandit pretium, mauris arcu iaculis sapien, eget scelerisque est sapien sit amet metus. Suspendisse dolor leo, vestibulum ac dui vitae, accumsan dignissim orci. Donec non commodo nulla, quis tincidunt dui. Cras id velit nec mi egestas rhoncus.</p>
                                                <hr className='testimonial_hr'></hr>
                                                
                                                <img className='client_logo_testim' src={require('../../../assets/img/dummy_logo.png')}></img>    
                                                <p className='test_nm'>Rajesh Kapoor</p>
                                                <p className='csm_para test_dsg'>Plant Head – ABC LTD.</p>

                                            </div>
                                        </div>
                             
                                    </div>
                                   
                                </div>
                            </div>

                            <div className='custm_outer_sld'>
                                <div className='custm_inner'>

                                    <div className='content_div'>
                                        {/* <img src={acf.client_stories_image} className='client_img'></img> */}
                                        <div className='content_div_inner'>
                                            <img className='quote_icon' src={require('../../../assets/img/quote_icon.png')}></img>
                                            <div className=''>
                                                <p className='csm_para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc facilisis, metus at blandit pretium, mauris arcu iaculis sapien, eget scelerisque est sapien sit amet metus. Suspendisse dolor leo, vestibulum ac dui vitae, accumsan dignissim orci. Donec non commodo nulla, quis tincidunt dui. Cras id velit nec mi egestas rhoncus.</p>
                                                <hr className='testimonial_hr'></hr>
                                                
                                                <img className='client_logo_testim' src={require('../../../assets/img/dummy_logo.png')}></img>    
                                                <p className='test_nm'>Rajesh Kapoor</p>
                                                <p className='csm_para test_dsg'>Plant Head – ABC LTD.</p>

                                            </div>
                                        </div>
                             
                                    </div>
                                   
                                </div>
                            </div>


                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}
