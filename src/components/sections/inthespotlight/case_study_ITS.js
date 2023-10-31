import React from 'react'
import useFetch from "react-fetch-hook";

export default function Case_study_ITS() {

    const { isLoading, data, error } = useFetch(
        "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/client_stories?per_page=1"
    );

  return (
    <>
     {data && data.map(({ id , acf , title , content , slug}) => (
        <div className='news_sld' key={id} >
                <a href={'/client-stories/'+ slug}>
                    <div className='news_content spotlight_content nw_ovrly_cntnt'>
                        <div className='news_inner_dv'>
                            <p className='news_name'>Client Stories</p>
                            <p className='news_desc' dangerouslySetInnerHTML={{ __html: title.rendered }}></p>
                        </div>
                        {/* <div className='news_date_box'>
                            <p className='nws_date'></p>
                            <p className='news_year'>{acf.short_date}</p>
                        </div>  */}
                        <div className='news_overlay'>
                            <img src={acf.client_stories_image} ></img>
                        </div>
                    </div>
                </a>
        </div>
        ))}  
    </>
  )
}
