import React from 'react'
import useFetch from "react-fetch-hook";
import { useEffect, useRef } from "react";
import $ from "jquery";
import {NavLink , Link} from "react-router-dom";

export default function Groundbreaking_event() {

    const { isLoading, data, error } = useFetch(
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/events?per_page=1"
    );

    useEffect(() => {

        $('.event_spot_cont').on("click", function() {
            $('.load-container').hide();
            $('.event_popup').addClass('event_popup_opn');
            $('.event_home_overlay').addClass('event_home_overlay_on');
            $('body').css('overflow','hidden');
            
        });

        $('.ep_cls_btn').on("click", function() {
            $('.event_popup').removeClass('event_popup_opn');
            $('.event_home_overlay').removeClass('event_home_overlay_on');
            $('body').css('overflow','visible');
            // $('html, body').animate({
            //     scrollTop: $("#event_sec").offset().top
            //  }, 100);
        });

    })


  return (
    <>
    {data && data.map(({ id , acf , content , event_year , event_categories , slug}) => ( 

        <div>
            <div className='news_sld'  key={id}>
                {/* <Link to={slug} > */}
                    <div className='news_content spotlight_content nw_ovrly_cntnt event_spot_cont'>
                        <div className='news_inner_dv'>
                            <p className='news_name'>Events</p>
                            <p className='news_desc' dangerouslySetInnerHTML={{ __html: content.rendered }}></p>
                        </div>
                        {/* <div className='news_date_box'>
                            <p className='nws_date'></p>
                            <p className='news_year'>{acf.date}</p>
                        </div>  */}
                        <div className='news_overlay'>
                            <img src={acf.feature_image}></img>
                        </div>
                    </div>
                {/* </Link> */}
            </div>

         </div>

    ))}


    </>
  )
}
