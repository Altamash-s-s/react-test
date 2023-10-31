import React from 'react'
import '../../assets/css/park_inside_spotlight.css';
import useFetch from "react-fetch-hook";
import { useParams } from "react-router-dom";
import Helmet from 'react-helmet';


export default function Client_inside_spotlight() {

    let { slug } = useParams(); 
    const { isLoading, data, error } = useFetch(
        `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/client_stories/?slug=${slug}`
    );

  return (
    <>
        {data && data.map(({ id , acf , title , category , slug}) => (
            <div className='park_inside_spotlight_sec client_inside_spotlight'>

                <Helmet>
                    <title>{acf.meta_title}</title>
                    <meta name="description" content={acf.meta_description} />
                    <meta name="keyword" content={acf.meta_keyword} />

                    <meta property="og:title" content={acf.meta_title} />
                    <meta property="og:description" content={acf.meta_description} />
                    <meta property="og:image" content={acf.client_stories_image} />

                    <meta name="twitter:title" content={acf.meta_title} />
                    <meta name="twitter:description" content={acf.meta_description} />
                    <meta name="twitter:image" content={acf.client_stories_image} />

            </Helmet>

                <div className='cstm_container'>
                    <div className='row'>
                        <div className='col-12 '>
                            <div className='spotlight_content_box'>
                                <div className='spotlight_inner_content'>
                                    {/* <div className='prk_dtl_line1'>
                                        <p className='section_sub_heading'>Solutions that consistently deliver the best</p>
                                    </div> */}
                                    <div className='prk_dtl_line2'>
                                        {/* <h1 className='big_heading esg_heading_ttl' dangerouslySetInnerHTML={{ __html: title.rendered }}></h1> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={acf.client_stories_image} alt={acf.image_alt_tag} className='park_inside_bg_img'></img>
                {/* <img src={acf.blog_image} className='park_inside_bg_img'></img> */}
                <img className='inside_spotlight_arrow' src={require('../../assets/img/home_sldr_arrow.png')}></img>
                <div className='ovrly_box_1'></div>
                <div className='breadcrum_div'>
                    <div className='cstm_container'>
                        <div className='row'>
                            <div className='col-12 '>
                                <div className='breadcrum_content'>
                                    <h3><a href='/'>Home</a>  /  <a href='/client-stories'>Client Stories /</a> <span dangerouslySetInnerHTML={{ __html: title.rendered }}></span></h3>
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