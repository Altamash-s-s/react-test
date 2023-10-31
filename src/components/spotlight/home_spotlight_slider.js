import React from 'react'
import '../../assets/css/home_spotlight_slider.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef } from "react";
import $ from "jquery";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function Home_spotlight_slider() {

   

    const home_slider = {
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true
    };
    


    // gloabl line GSAP
    gsap.registerPlugin(ScrollTrigger); 

    // Heading text animation variable
    const spot_sld_txt = useRef(null);

    const videoEl = useRef(null);

    const attemptPlay = () => {
      videoEl &&
        videoEl.current &&
        videoEl.current.play().catch((error) => {
          console.error("Error attempting to play", error);
        });
    };
  
    useEffect(() => {



        // Heading text animation code
        gsap.to("#spot_sld_txt", {
            y:0,
            duration: 1.3,
            ease: "power4.out",
            delay: 0.7,
            scrollTrigger: {
                trigger: "#spot_sld_txt",
                markers: false
            }
        });

        $(window).on("scroll", function(){
            if ($(this).scrollTop() >= 800) {        
                $('.home_spotlight_slider_sec').fadeOut();  
            }               
            else {
                $('.home_spotlight_slider_sec').fadeIn();
            }
        });

        $(window).on("scroll", function(){
            if ($(this).scrollTop() >= 30) {        
                $('.home_spotlight_slider_sec').css("z-index","-1")   
            }               
            else {
                $('.home_spotlight_slider_sec').css("z-index","0")   
            }
        });

        $('.sld_arrow').css({'transform' : 'none', 'opacity' : '1'});

        // $(window).on("load", function(e) { 

        //     setTimeout(function () {
        //         $('.sp_sld1_hd').css('transform','translateY(0)');
        //         $('.sp_sld1_txt').css('opacity','1');
        //     }, 500);
        // });


        


      attemptPlay();
    }, []);

  return (
    <>

        <div className='home_spotlight_slider_sec ' >
            
            
                <Slider {...home_slider} className='home_slider'>


                    <div className='hm_sld hs_2' id='hm_sld'>
                        <div className='cstm_container tab_pd_LR'>
                            <div className='hs_content'>
                                <div className='inner_cnt'>
                                    <p className='section_sub_heading sp_sld1_txt'>Take your business to </p>
                                    <div className='spot_rvl_animation'>
                                        <h1 className='big_heading spot_hd'>NEW HEIGHTS</h1>
                                    </div>
                                </div>
                            </div>
                            {/* <img className='sld_arrow' src={require('../../assets/img/home_sldr_arrow.png')}></img> */}
                        </div>  
                        <div className="ovrly_box"></div>  
                    </div>
                    <div className='hm_sld hs_1' id='hm_sld'>
                        <div className='cstm_container tab_pd_LR'>
                            <div className='hs_content'>
                                <div className='inner_cnt'>
                                    {/* <p className='section_sub_heading sp_sld1_txt'>Take your business to </p> */}

                                    <div className='spot_rvl_animation'>
                                        {/* <h1 className='big_heading spot_hd sp_sld1_hd' >NEW HEIGHTS</h1> */}
                                    </div>
                                    
                                </div>
                            </div>
                            {/* <img className='sld_arrow' src={require('../../assets/img/home_sldr_arrow.png')}></img> */}
                        </div> 
                        {/* <div className="ovrly_box"></div> */}
                        {/* <video className='spot_video' playsInline loop muted src={require('../../assets/video/hipark_spotlight_video.mp4')} ref={videoEl} /> */}
                         <video className='spot_video' playsInline loop muted src={require('../../assets/video/hip_spotlight.mp4')} ref={videoEl} />
                    </div>
            
                </Slider>
                
                <img className='sld_arrow sticky_arrow chrome_spot_img' src={require('../../assets/img/home_sldr_arrow.png')}></img>
                <img className='sld_arrow sticky_arrow safari_spot_img' src={require('../../assets/img/home_sldr_arrow_safari.png')}></img>
 

        </div>

        <div className='home_spotlight_space'></div>
       
    </>
  )
}
