import React from 'react'
import '../../../assets/css/blog_landing_sec.css'
import '../../../assets/css/blog_inside_sec.css'
import $ from "jquery";
import { useEffect, useState } from "react";
import useFetch from "react-fetch-hook";
import Blog_tags from './blog_tags';
import Blog_categories from './blog_categories';
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, EffectCreative, EffectFade, Mousewheel, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-creative";
import 'swiper/css/effect-fade';

import 'swiper/css/pagination';

import {
    FacebookIcon,
    FacebookShareButton,
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon
} from "react-share";
import Blog_rlat_artical from './blog_rlat_artical';
import Blog_related_slider from './blog_related_slider';




export default function Blog_inside_sec() {

    let { slug } = useParams(); 
    const { isLoading, data, error } = useFetch(
        `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/posts/?slug=${slug}`
    );


    const pg_url = document.URL;
    console.log(pg_url);


    return (
        <>

            {/* section 1 */}

            <div className='blog_inside_Sec'>
                {data && data.map(({ id ,title , acf , tags , term_id ,  slug , content , category}) => ( 
                    <div className='cstm_container'>

                        <div className='row no_LR_margin' >

                            <div className='col-md-12 col-lg-12 col-12 mob_pd_LR tab_pd_LR'>

                                <div className='icon-head'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
                                        <path d="M2.75514 7.2H4.13271V8.8H2.75514V7.2ZM12.3981 3.2V14.4C12.3981 15.28 11.7782 16 11.0206 16H1.37757C1.01222 16 0.661825 15.8314 0.403481 15.5314C0.145136 15.2313 0 14.8243 0 14.4L0.00688784 3.2C0.00688784 2.32 0.613019 1.6 1.37757 1.6H2.06635V0H3.44392V1.6H8.9542V0H10.3318V1.6H11.0206C11.7782 1.6 12.3981 2.32 12.3981 3.2ZM1.37757 4.8H11.0206V3.2H1.37757V4.8ZM11.0206 14.4V6.4H1.37757V14.4H11.0206ZM8.26542 8.8H9.64299V7.2H8.26542V8.8ZM5.51028 8.8H6.88785V7.2H5.51028V8.8Z" fill="black" />
                                    </svg>
                                    <p>{acf.blog_publish_date}</p>

                                </div>

                                <div className='main-blog-cstm'>
                                    <h2 className='hd-build blog_heading'  dangerouslySetInnerHTML={{ __html: title }}></h2>
                                    <p className='para' dangerouslySetInnerHTML={{ __html: content }}></p>
                                </div>
                                

                                {/* <div className='main-blog-cstm'>
                                    <h2 className='hd-build'>Building for Tomorrow: How BTS Warehousing is Meeting Today's Business Demands</h2>

                                    <h2 className='hd-head'> Through the Lens of Time</h2>

                                    <p className='para'>
                                        Through the Lens of Time:The evolution of warehousing in India from glorified godowns to technically-fitted floors with computerised specifications has been remarkable. This article explores the benefits of custom-built warehouses compared to standard plug and play systems. With the demand for logistics and warehousing space in India expected to reach 380 million sq. ft by the end of 2024 and an estimated growth rate of 8-10% annually 1, companies need agile and flexible warehousing solutions to meet customer demands. Built-to-Suit (BTS) warehousing is the solution that offers customised and scalable facilities designed to meet specific business needs, and leaders like Horizon Industrial Parks are helping companies create them.</p>

                                    <p className='para'>The history of BTS Warehousing in India is less than a decade old, but its drivers are the same as any technological revolution: demand and technology. As per a report by JLL India Industrial Services, 2018 witnessed a 22% year-on-year growth in total stock in Grade A and B warehousing space in top eight cities at 169 million sq. ft compared to 138 million sq. ft a year ago. The robust growth in absorption reflects demand outstripping supply, with vacancies dropping below 10% level for the first time ever. In 2018, around 26% of total absorption contracted were under the BTS model.As per a report by JLL, India's logistics and warehousing sector witnessed private equity (PE) investments worth USD 1.8 billion in 2020, a rise of 34% YoY, indicating the sector's potential.</p>



                                    <h2 className='hd-head'>The Current Catalysts</h2>

                                    <p className='para'>
                                        BTS Warehousing has been a revolutionizing concept in the world of procurement, manufacturing, and distribution services. The rising demand for BTS warehouses can be attributed to several factors that have made it an indispensable part of the supply chain ecosystem. Firstly, there is a growing emphasis on sustainability in the construction industry, and BTS warehousing is no exception. Tenants are increasingly seeking solutions that reduce carbon footprint, and BTS warehouses provide a sustainable option that is tailor-made to meet their specific requirements. With features such as energy-efficient lighting, HVAC systems, and solar panels, BTS warehousing can significantly reduce the carbon footprint of businesses and make their operations more sustainable.</p>

                                    <p className='para'>Secondly, the expansion of multinational corporations in emerging economies like India has fueled the demand for high-spec, BTS warehouses. BTS warehouses offer a unique solution that is tailored to the specific needs of businesses, providing a high degree of customization in terms of design, layout, and automation.</p>

                                    <img className='blg-img' src={require('../../../assets/img/blog-inside-1.png')}></img>

                                    <h2 className='hd-head'>
                                        The Current Catalysts
                                    </h2>

                                    <p className='para'>
                                        As per a recent report by Mordor Intelligence, the BTS warehousing market in India is anticipated to grow at a CAGR of 16.4% 2 during the forecast period of 2021-2026. Here are some of the key benefits that BTS warehousing offers to businesses:
                                        Flexibility and Tailored Solutions: With BTS warehousing, businesses can enjoy the benefits of custom-designed warehouse spaces that offer the flexibility and agility to adapt to changing market dynamics and customer needs. Businesses can choose the size, layout, height, and number of dock doors to create a tailored warehouse space that aligns with their specific requirements.
                                        Maximized Space Utilization: BTS warehousing allows for optimal utilization of available space, thereby minimizing costs. By custom-designing layouts with features such as additional dock doors and high ceilings, BTS warehouses eliminate underutilized spaces that are commonly found in traditional warehouses. According to a report by JLL 3, the demand for BTS warehouses is driven by the need for efficient space utilization, particularly in urban areas where land availability is limited.</p>

                                    <p className='para'>Improved Cost Savings: One of BTS warehousing's most important advantages is its capacity to increase savings. Businesses can increase overall cost savings by lowering transportation, storage, and logistics costs with a custom-designed warehouse.4
                                        Streamlined Supply Chain Operations: BTS warehousing helps streamline supply chain operations by improving the flow of goods and reducing the time taken to move products from one point to another. A customized warehouse layout can be designed to accommodate specific types of inventory, optimized to minimize the distance and time required to move products from the warehouse to the loading dock. According to a report by Frost & Sullivan 5, the use of advanced technologies such as automation, robotics, and artificial intelligence in BTS warehousing can further enhance supply chain efficiencies..</p>

                                    <p className='para'>Improved Working Conditions: BTS warehousing creates a productive working environment for employees by offering tailored warehouse spaces with features like climate control, ergonomic designs, and advanced lighting systems.</p>

                                    <img className='blg-img' src={require('../../../assets/img/blog-inside-2.png')}></img>

                                    <h2 className='hd-head'>
                                        Technological Edge
                                    </h2>

                                    <p className='para'>
                                        The state-of-the-art Grade A warehouses offer a variety of opportunities for the client, to build cutting-edge features that cater to the specific needs of businesses.</p>

                                    <p className='para'>Whether it's scanning the warehouse floor for Automated Guided Vehicles (AGV) or implementing supply chain solutions for last-mile tracking, BTS warehouses are the way forward. With features like sensor and camera-equipped shelves for efficient stocking and tracking, IoT-based weighing ramps, and sustainable practices like recycled water usage, these warehouses provide a seamless experience for businesses.</p>


                                    <p className='para'>Moreover, businesses also have the option of creating Solar-Powered Warehouses like Benteler at the Chakan- II park. To learn more about their success story, check out our website.</p>

                                    <h2 className='hd-head'>
                                        Potential New Horizons For You?
                                    </h2>

                                    <p className='para'>
                                        With our extensive presence across multiple cities, we are well-equipped to provide bespoke solutions for your business needs. As your strategic partner, we can assist you in choosing the perfect location and providing design inputs to create a Grade A warehouse that aligns with your business objectives. Our integrated approach to land acquisition, compliance, asset development, and property management optimizes efficiency and controls costs to deliver maximum value to your business.</p>

                                    <p className='para'>Through our co-creation process, we can develop BTS warehouses that specifically meet your business needs for light manufacturing, ecommerce, cold chain, auto and chemicals, like we have done for several customers, enabling you to reduce operating costs while improving sustainability. Our focus on delivering custom-built solutions ensures that your warehouse space is tailored to your requirements, providing you with the agility to adapt to evolving market conditions.</p>


                                </div> */}

                            </div>

                            <div className='col-md-12 col-lg-12 col-12 mob_pd_LR tab_pd_LR'>
                                <div className='social_share-fab'>
                                    <img className='social_icon' src={require('../../../assets/img/svg/social_icon.svg').default}></img>
                                    <FacebookShareButton url={pg_url} quote={'Hello'}>
                                        <FacebookIcon size={25} round={true}></FacebookIcon>
                                    </FacebookShareButton>

                                    <TwitterShareButton url={pg_url} >
                                        <TwitterIcon size={25} round={true}></TwitterIcon>
                                    </TwitterShareButton>
                                    <LinkedinShareButton url={pg_url} >
                                        <LinkedinIcon size={25} round={true}></LinkedinIcon>
                                    </LinkedinShareButton>
                                </div>
                            </div>

                            <div className='blog_lnd_sec1-sec mob_pd_LR tab_pd_LR blog_inside_sld_col'>



                                {/* <div className='row no_LR_margin'> */}

                                {/* <div className='col-12 leader_slider_col mob_pd_LR tab_pd_LR'> */}
                                <h2 className='hdg_esg'>related articles</h2>
                                <Blog_related_slider post_id={id} categ_id={acf.category_id}/>
                                {/* </div> */}


                                {/* </div> */}


                            </div>

                        </div>


                    </div>
                ))}  

            </div>





        </>
    )
}

