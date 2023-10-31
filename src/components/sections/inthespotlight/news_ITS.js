import React from 'react'
import useFetch from "react-fetch-hook";

export default function News_ITS() {
    
    const { isLoading, data, error } = useFetch(
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/news?per_page=1"
    );

  return (
    <>
         {data && data.map(({ id , acf , title , content , slug}) => (
        <div className='news_sld inthespotlight_news_sld' key={id}>
            <a target='_blank ' href={acf.news_link}>
            <div className='news_content spotlight_content'>
                <div className='news_inner_dv'>
                    <p className='news_name'>Media</p>
                    <p className='news_desc'>{acf.news_description}</p>
                </div>
                {/* <div className='news_date_box'>
                    <p className='nws_date'></p>
                    <p className='news_year'>{acf.publish_month} {acf.publish_year}</p>
                </div>  */}
                <div className='news_overlay'>
                    <img src={acf.news_image}></img>
                </div>
            </div>
            </a>
        </div>
        ))} 
    </>
  )
}
