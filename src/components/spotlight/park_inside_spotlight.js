import React from 'react'
import '../../assets/css/park_inside_spotlight.css';
import useFetch from "react-fetch-hook";
import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Helmet from 'react-helmet';

export default function Park_inside_spotlight() {
    
  let { slug } = useParams(); 
  const { isLoading, data, error } = useFetch(
    `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/parks/?slug=${slug}`
  );

  return (
    <>
    {data && data.map(({ id, title , acf  }) => (
        <div className='park_inside_spotlight_sec' key={id}>

            <Helmet>
                    <title>{acf.meta_title}</title>
                    <meta name="description" content={acf.meta_description} />
            </Helmet>
            
            <div className='cstm_container'>
                <div className='row'>
                    <div className='col-12 '>
                        <div className='spotlight_content_box'>
                            <div className='spotlight_inner_content'>
                                <div className='prk_dtl_line1'>
                                    <img src={require('../../assets/img/svg/mark_icon.svg').default} className='mark_icon'></img>
                                    <p className='section_sub_heading'>{acf.zone_name}   <span>{'>'}</span> {acf.state_name} </p>
                                </div>
                                <div className='prk_dtl_line2 prk_spot_inside_hd'>
                                    <h1 className='big_heading esg_heading_ttl'>{title.rendered}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src={acf.park_spotlight_image} className='park_inside_bg_img'></img>
            <img className='inside_spotlight_arrow' src={require('../../assets/img/home_sldr_arrow.png')}></img>
            <div className="ovrly_box_1"></div>  

            <div className='breadcrum_div'>
                <div className='cstm_container'>
                    <div className='row'>
                        <div className='col-12 '>
                            <div className='breadcrum_content'>
                                <h3><a href='/'>Home</a>  /  <a href='/parks'>Parks</a>  / {acf.state_name}  /  {title.rendered}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        ))} 
    </>
  )
}
