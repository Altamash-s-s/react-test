import React from 'react'
import '../../assets/css/park_inside_spotlight.css';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Contact_spotlight() {

    
    // gloabl line GSAP
    gsap.registerPlugin(ScrollTrigger); 

    // Heading text animation variable
    const spot_hd_anmt_cont = useRef(null);

    useEffect(() => {
    
        // Heading text animation code
        gsap.to("#spot_hd_anmt_cont", {
            y:0,
            duration: 1.3,
            ease: "power4.out",
            delay: 0.7,
            scrollTrigger: {
                trigger: "#spot_hd_anmt_cont",
                markers: false
            }
        });

}, []);

  return (
    <>
        <div className='park_inside_spotlight_sec'>
            <div className='cstm_container'>
                <div className='row'>
                    <div className='col-12 '>
                        <div className='spotlight_content_box'>
                            <div className='spotlight_inner_content'>
                                {/* <div className='prk_dtl_line1'>
                                     <p className='section_sub_heading'>Grade A industrial {'&'} logistics parks</p> 
                                </div> */}
                                <div className='prk_dtl_line2 contact_anmt'>
                                    <h1 className='big_heading esg_heading_ttl' ref={spot_hd_anmt_cont} id='spot_hd_anmt_cont'>Contact</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src={require('../../assets/img/contact_spotlight.jpg')} className='park_inside_bg_img contact_spotlight_img'></img>
            <img className='inside_spotlight_arrow' src={require('../../assets/img/home_sldr_arrow.png')}></img>
            <div className='ovrly_box_1'></div>

            <div className='breadcrum_div'>
                <div className='cstm_container'>
                    <div className='row'>
                        <div className='col-12 '>
                            <div className='breadcrum_content'>
                                <h3><a href='/'>Home</a>  /  Contact</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
