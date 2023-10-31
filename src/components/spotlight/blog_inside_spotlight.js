import React from 'react'
import '../../assets/css/park_inside_spotlight.css';
import '../../assets/css/blog_inside_spotlight.css';
import { useEffect , useState } from "react";
import useFetch from "react-fetch-hook";
import { useParams } from "react-router-dom";
import Helmet from 'react-helmet';


export default function Blog_inside_spotlight() {

    let { slug } = useParams(); 
    const { isLoading, data, error } = useFetch(
        `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/posts/?slug=${slug}`
    );


  return (
    <>
        {data && data.map(({ id , acf , title , category , slug}) => (
            <div className='park_inside_spotlight_sec' >

            <Helmet>
                    <title>{acf.meta_title}</title>
                    <meta name="description" content={acf.meta_description} />
                    <meta name="keyword" content={acf.meta_keyword} />

                    <meta property="og:title" content={acf.meta_title} />
                    <meta property="og:description" content={acf.meta_description} />
                    <meta property="og:image" content={acf.blog_image} />

                    <meta name="twitter:title" content={acf.meta_title} />
                    <meta name="twitter:description" content={acf.meta_description} />
                    <meta name="twitter:image" content={acf.blog_image} />

            </Helmet>

                <div className='cstm_container'>
                    <div className='row'>
                        <div className='col-12 '>
                            <div className='spotlight_content_box'>
                                <div className='spotlight_inner_content'>
                                    <div className='prk_dtl_line1'>
                                        <p className='section_sub_heading'></p>
                                    </div>
                                    <div className='prk_dtl_line2 blog_spotlight_content'>
                                       
                                        {/* <h1 className='big_heading esg_heading_ttl' dangerouslySetInnerHTML={{ __html: title }}></h1>
                                        <p className='bl_bx_date'><img className='date_icon' src={require('../../assets/img/svg/date_icon.svg').default}></img>{acf.blog_publish_date}</p>
                                        <p className='bl_bx_ttl'>{category}</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <img src={require('../../assets/img/solutions_spotlight.jpg')} className='park_inside_bg_img'></img> */}
                <img src={acf.blog_image} className='park_inside_bg_img blog_thumb_img' alt={acf.blog_image_alt_text}></img>
                <img className='inside_spotlight_arrow' src={require('../../assets/img/home_sldr_arrow.png')}></img>
                <div className='ovrly_box_1'></div>
                <div className='breadcrum_div'>
                    <div className='cstm_container'>
                        <div className='row'>
                            <div className='col-12 '>
                                <div className='breadcrum_content'>
                                    <h3><a href='/'>Home</a>  /  <a href='/blogs'>Blogs</a> / <span dangerouslySetInnerHTML={{ __html: title }}></span></h3>
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