import React from 'react'
import useFetch from "react-fetch-hook";


export default function Blog_ITS() {

    const { isLoading, data, error } = useFetch(
        `https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/posts?per_page=1`
    );

  return (
    <>
    {data && data.map(({ id, acf, title, category, slug, content }) => (
        <div className='news_sld inthespotlight_blog_sld'  >
            <a href={'/blogs/'+ slug}>
            <div className='news_content spotlight_content nw_ovrly_cntnt'>
                <div className='news_inner_dv'>
                    <p className='news_name'>Blogs</p>
                    <p className='news_desc' dangerouslySetInnerHTML={{ __html: title }}></p>
                </div>
                {/* <div className='news_date_box'>
                    <p className='nws_date'></p>
                    <p className='news_year'>{acf.short_date}</p>
                </div>  */}
                <div className='news_overlay'>
                    <img src={acf.blog_image} alt={acf.blog_image_alt_text}></img>
                </div>
            </div>
            </a>
        </div>
    ))}
    </>
  )
}
