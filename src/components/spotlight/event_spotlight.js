import React from 'react'
import '../../assets/css/park_inside_spotlight.css';

export default function Event_spotlight() {
  return (
    <>
        <div className='park_inside_spotlight_sec'>
            <div className='cstm_container'>
                <div className='row'>
                    <div className='col-12 '>
                        <div className='spotlight_content_box'>
                            <div className='spotlight_inner_content'>
                                {/* <div className='prk_dtl_line1'>
                                    <p className='section_sub_heading'>Solutions that consistently deliver the best</p>
                                </div> */}
                                <div className='prk_dtl_line2'>
                                    <h1 className='big_heading esg_heading_ttl'>Events</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src={require('../../assets/img/solutions_spotlight.jpg')} className='park_inside_bg_img'></img>
            <img className='inside_spotlight_arrow' src={require('../../assets/img/home_sldr_arrow.png')}></img>
            <div className='ovrly_box_1'></div>
            <div className='breadcrum_div'>
                <div className='cstm_container'>
                    <div className='row'>
                        <div className='col-12 '>
                            <div className='breadcrum_content'>
                                <h3><a href='/'>Home</a>  /  Events</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}