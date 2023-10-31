import React from 'react'
import '../../../assets/css/park_inside_spotlight.css';
import Helmet from 'react-helmet';

export default function Property_manag_spotlight() {
  return (
    <>
        <div className='park_inside_spotlight_sec solutions_inside_spotlight'>

            <Helmet>
                <title>Wareshouse Management Services In India | Horizon Industrial Park</title>
                <meta name="description" content="Hiparks manages and maintain the warehouse infrastructure and ensure a greener and more inviting landscape at our Industrial parks" />
                <meta name="keyword" content="warehouse Management " />

                <meta property="og:title" content="Wareshouse Management Services In India | Horizon Industrial Park" />
                <meta property="og:description" content="Hiparks manages and maintain the warehouse infrastructure and ensure a greener and more inviting landscape at our Industrial parks" />
                <meta property="og:image" content="" />

                <meta name="twitter:title" content="Wareshouse Management Services In India | Horizon Industrial Park" />
                <meta name="twitter:description" content="Hiparks manages and maintain the warehouse infrastructure and ensure a greener and more inviting landscape at our Industrial parks" />
                <meta name="twitter:image" content="" />
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
                                    <h1 className='big_heading esg_heading_ttl'>Property Management</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img alt='Hiparks wareshouse management services' src={require('../../../assets/img/solutions_inside/proprty_mang/proprty_mang_spotlight.jpg')} className='park_inside_bg_img'></img>
            <img className='inside_spotlight_arrow' src={require('../../../assets/img/home_sldr_arrow.png')}></img>
            <div className='ovrly_box_1'></div>
            <div className='breadcrum_div'>
                <div className='cstm_container'>
                    <div className='row'>
                        <div className='col-12 '>
                            <div className='breadcrum_content'>
                                <h3><a href='/'>Home</a>  / <a href='/solutions'> Solutions</a> / Property Management</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
