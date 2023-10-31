import React from 'react'
import '../../assets/css/header.css';
import $ from "jquery";
import { useEffect } from 'react';

export default function Header() {


    const resultinput = React.useRef(null);

    const sendResult = (e) => {
      e.preventDefault();
  
      let resultinput_var= (resultinput.current.value);
      window.location.href = "/search/" + resultinput_var;
    };


    useEffect(() => {

        //----------------------------------------------------------------------- Desktop Header 1 Jquery Code Start Here
        $('.park_drp').on("click", function(e) { 
            
            $('.solution_drp').find('.megamenu').removeClass('open_megamenu');
            $('.explore_drp').find('.megamenu').removeClass('open_megamenu');
            $('.esg_drp').find('.megamenu').removeClass('open_megamenu');
            $('.solution_drp').removeClass('add_black');
            $('.explore_drp').removeClass('add_black');
            $('.esg_drp').removeClass('add_black');

            
            $('.menu_animate_box').removeClass('submenu_animation');
            $(this).find('.megamenu').addClass('open_megamenu');
            $('.hdr_container').removeClass('show_header_bg2');
            $('.hdr_container').addClass('show_header_bg1');
            $('.park_drp .menu_animate_box').addClass('submenu_animation');
            $(this).toggleClass('add_black');
            e.stopPropagation(); 
        });   
        
        $('.solution_drp').on("click", function(e) {
            $('.park_drp').find('.megamenu').removeClass('open_megamenu');
            $('.explore_drp').find('.megamenu').removeClass('open_megamenu');
            $('.esg_drp').find('.megamenu').removeClass('open_megamenu');
            $('.park_drp').removeClass('add_black');
            $('.explore_drp').removeClass('add_black');
            $('.esg_drp').removeClass('add_black');

            $('.menu_animate_box').removeClass('submenu_animation');
            $(this).find('.megamenu').addClass('open_megamenu');
            $('.hdr_container').removeClass('show_header_bg1');
            $('.hdr_container').addClass('show_header_bg2');
            $('.solution_drp .menu_animate_box').addClass('submenu_animation');
            $(this).toggleClass('add_black');
            e.stopPropagation(); 
        });   

        $('.explore_drp').on("click", function(e) { 
            $('.park_drp').find('.megamenu').removeClass('open_megamenu');
            $('.solution_drp').find('.megamenu').removeClass('open_megamenu');
            $('.esg_drp').find('.megamenu').removeClass('open_megamenu');
            $('.park_drp').removeClass('add_black');
            $('.solution_drp').removeClass('add_black');
            $('.esg_drp').removeClass('add_black');

            $('.menu_animate_box').removeClass('submenu_animation');
            $(this).find('.megamenu').addClass('open_megamenu');
            $('.hdr_container').removeClass('show_header_bg1');
            $('.hdr_container').addClass('show_header_bg2');
            $('.explore_drp .menu_animate_box').addClass('submenu_animation');
            $(this).toggleClass('add_black');
            e.stopPropagation(); 
        });   

        $('.esg_drp').on("click", function(e) { 
            $('.park_drp').find('.megamenu').removeClass('open_megamenu');
            $('.solution_drp').find('.megamenu').removeClass('open_megamenu');
            $('.explore_drp').find('.megamenu').removeClass('open_megamenu');
            $('.park_drp').removeClass('add_black');
            $('.solution_drp').removeClass('add_black');
            $('.explore_drp').removeClass('add_black');

            $('.menu_animate_box').removeClass('submenu_animation');
            $(this).find('.megamenu').addClass('open_megamenu');
            $('.hdr_container').removeClass('show_header_bg1');
            $('.hdr_container').addClass('show_header_bg2');
            $('.esg_drp .menu_animate_box').addClass('submenu_animation');
            $(this).toggleClass('add_black');
            e.stopPropagation(); 
        });   

        $('.contact_link').on("click", function(e) {
            $('.megamenu').removeClass('open_megamenu');
            $('.hdr_container').css({'background-color':'transparent','height':'180px'});
            $('.hdr_container').removeClass('show_header_bg1');
            $('.hdr_container').removeClass('show_header_bg2');
            $('.dropdown').removeClass('add_black');
            e.stopPropagation(); 
        });

        $('.book_visit_btn').on("click", function(e) {
            $('.megamenu').removeClass('open_megamenu');
            $('.hdr_container').removeClass('show_header_bg1');
            $('.hdr_container').removeClass('show_header_bg2');
            $('.dropdown').removeClass('add_black');
            $('.dropdown').append('<style>.dropdown a::after{right:2px !important;}</style>');
            e.stopPropagation(); 
        });

        $('body').on("click", function() {
            $('.megamenu').removeClass('open_megamenu');
            $('.hdr_container').removeClass('show_header_bg1');
            $('.hdr_container').removeClass('show_header_bg2');
            $('.dropdown').removeClass('add_black');
            $('.dropdown').append('<style>.dropdown a::after{right:2px !important;}</style>');
        });

        

        $('.dropdown').on("click", function(e) { 
            $('.dropdown').find('a.dropdown-toggle.nav-link').css("padding-left","2px");
            $('.dropdown').find('a::after').css("right","2px");
            $('.dropdown').css("background-color","transparent")
            
            $(this).find('a.dropdown-toggle.nav-link').css("padding-left","7%");
            // $(this).append('<style> a::after{right:7% !important;}</style>');
        });
        //----------------------------------------------------------------------- Desktop Header 1 Jquery Code End Here






        //----------------------------------------------------------------------- Desktop Header 2 Jquery Code Start Here
        $('.desktop_header2 .park_drp').on("click", function(e) { 
            
            $('.desktop_header2 .solution_drp').find('.megamenu').removeClass('open_megamenu');
            $('.desktop_header2 .explore_drp').find('.megamenu').removeClass('open_megamenu');
            $('.desktop_header2 .esg_drp').find('.megamenu').removeClass('open_megamenu');
            $('.desktop_header2 .solution_drp').removeClass('add_black');
            $('.desktop_header2 .explore_drp').removeClass('add_black');
            $('.desktop_header2 .esg_drp').removeClass('add_black');

            
            $('.desktop_header2 .menu_animate_box').removeClass('submenu_animation');
            $(this).find('.desktop_header2 .megamenu').addClass('open_megamenu');
            $('.desktop_header2 .hdr_container').removeClass('show_header_bg2');
            $('.desktop_header2 .hdr_container').addClass('show_header_bg1');
            $('.desktop_header2 .park_drp .menu_animate_box').addClass('submenu_animation');
            $(this).toggleClass('add_black');
            e.stopPropagation(); 
        });   
        
        $('.desktop_header2 .solution_drp').on("click", function(e) {
            $('.desktop_header2 .park_drp').find('.desktop_header2 .megamenu').removeClass('open_megamenu');
            $('.desktop_header2 .explore_drp').find('.desktop_header2 .megamenu').removeClass('open_megamenu');
            $('.desktop_header2 .esg_drp').find('.desktop_header2 .megamenu').removeClass('open_megamenu');
            $('.desktop_header2 .park_drp').removeClass('add_black');
            $('.desktop_header2 .explore_drp').removeClass('add_black');
            $('.desktop_header2 .esg_drp').removeClass('add_black');

            $('.desktop_header2 .menu_animate_box').removeClass('submenu_animation');
            $(this).find('.desktop_header2 .megamenu').addClass('open_megamenu');
            $('.desktop_header2 .hdr_container').removeClass('show_header_bg1');
            $('.desktop_header2 .hdr_container').addClass('show_header_bg2');
            $('.desktop_header2 .solution_drp .menu_animate_box').addClass('submenu_animation');
            $(this).toggleClass('add_black');
            e.stopPropagation(); 
        });   

        $('.desktop_header2 .explore_drp').on("click", function(e) { 
            $('.desktop_header2 .park_drp').find('.desktop_header2 .megamenu').removeClass('open_megamenu');
            $('.desktop_header2 .solution_drp').find('.desktop_header2 .megamenu').removeClass('open_megamenu');
            $('.desktop_header2 .esg_drp').find('.desktop_header2 .megamenu').removeClass('open_megamenu');
            $('.desktop_header2 .park_drp').removeClass('add_black');
            $('.desktop_header2 .solution_drp').removeClass('add_black');
            $('.desktop_header2 .esg_drp').removeClass('add_black');

            $('.desktop_header2 .menu_animate_box').removeClass('submenu_animation');
            $(this).find('.desktop_header2 .megamenu').addClass('open_megamenu');
            $('.desktop_header2 .hdr_container').removeClass('show_header_bg1');
            $('.desktop_header2 .hdr_container').addClass('show_header_bg2');
            $('.desktop_header2 .explore_drp .menu_animate_box').addClass('submenu_animation');
            $(this).toggleClass('add_black');
            e.stopPropagation(); 
        });   

        $('.desktop_header2 .esg_drp').on("click", function(e) { 
            $('.desktop_header2 .park_drp').find('.desktop_header2 .megamenu').removeClass('open_megamenu');
            $('.desktop_header2 .solution_drp').find('.desktop_header2 .megamenu').removeClass('open_megamenu');
            $('.desktop_header2 .explore_drp').find('.desktop_header2 .megamenu').removeClass('open_megamenu');
            $('.desktop_header2 .park_drp').removeClass('add_black');
            $('.desktop_header2 .solution_drp').removeClass('add_black');
            $('.desktop_header2 .explore_drp').removeClass('add_black');

            $('.desktop_header2 .menu_animate_box').removeClass('submenu_animation');
            $(this).find('.desktop_header2 .megamenu').addClass('open_megamenu');
            $('.desktop_header2 .hdr_container').removeClass('show_header_bg1');
            $('.desktop_header2 .hdr_container').addClass('show_header_bg2');
            $('.desktop_header2 .esg_drp .menu_animate_box').addClass('submenu_animation');
            $(this).toggleClass('add_black');
            e.stopPropagation(); 
        });   

        $('.desktop_header2 .contact_link').on("click", function(e) {
            $('.desktop_header2 .megamenu').removeClass('open_megamenu');
            $('.desktop_header2 .hdr_container').css({'background-color':'transparent','height':'78px'});
            $('.desktop_header2 .hdr_container').removeClass('show_header_bg1');
            $('.desktop_header2 .hdr_container').removeClass('show_header_bg2');
            $('.desktop_header2 .dropdown').removeClass('add_black');
            e.stopPropagation(); 
        });

        $('body').on("click", function() {
            $('.desktop_header2 .megamenu').removeClass('open_megamenu');
            $('.desktop_header2 .hdr_container').removeClass('show_header_bg1');
            $('.desktop_header2 .hdr_container').removeClass('show_header_bg2');
            $('.desktop_header2 .dropdown').removeClass('add_black');
            $('.desktop_header2 .dropdown').append('<style>.dropdown a::after{right:2px !important;}</style>');
        });

        $('.desktop_header2 .dropdown').on("click", function(e) { 
            $('.desktop_header2 .dropdown').find('a.dropdown-toggle.nav-link').css("padding-left","2px");
            $('.desktop_header2 .dropdown').find('a::after').css("right","2px");
            $('.desktop_header2 .dropdown').css("background-color","transparent")
            
            $(this).find('.desktop_header2 a.dropdown-toggle.nav-link').css("padding-left","7%");
            // $(this).append('<style>.desktop_header2 a::after{right:7% !important;}</style>');
        });
        //----------------------------------------------------------------------- Desktop Header 1 Jquery Code End Here







        $('.mob_menu_btn').on("click", function() {
            $('.mobile_nav').addClass('open_mob_nav');
        });

        $('.close_mob_nav').on("click", function() {
            $('.mobile_nav').removeClass('open_mob_nav');
        });

        $('.anchr_btn').on("click", function() {
            $('.mobile_nav').removeClass('open_mob_nav');
        });

        
        if($(window).width() >1023)
        {  
            var prevScrollpos = window.pageYOffset;
            
            window.onscroll = function() {

                var header  = document.getElementById("desk_header");
                var currentScrollPos = window.pageYOffset;

                if (prevScrollpos > currentScrollPos) {
                    // header.classList.add("fixed");
                    header.style.display = "block";

                } 
                else {
                    header.style.display = "none";
                }
                prevScrollpos = currentScrollPos;
            }

            $(window).on('scroll',function() {
                var sticky = $('#desk_header'),
                scroll = $(window).scrollTop();
                
                if (scroll <= 450) { 
                sticky.hide();
                }
                
            });
        }

        if($(window).width() < 1023)
        {  
            var prevScrollpos = window.pageYOffset;
            window.onscroll = function() {
    
                var header  = document.getElementById("desk_header_1");
                var currentScrollPos = window.pageYOffset;
    
                if (prevScrollpos > currentScrollPos) {
                    header.classList.add("fixed");
                    
                } 
                else {
                    header.classList.remove("fixed");
                }
                prevScrollpos = currentScrollPos;
            }
    
            $(window).on('scroll',function() {
                var sticky = $('.desktop_header1'),
                  scroll = $(window).scrollTop();
                 
                if (scroll == 0) { 
                  sticky.removeClass('fixed'); 
                }
                
            });
        }
        

        $('.mobile_nav .l1').on('click',function(){
            var tag = $(this).attr('value');
            var tag1 = $(this).text();
           // window.alert("#layer"+tag1);
           var back_link="#layer"+tag;
           //window.alert(back_link);
          $('.mobile_nav .nav-link').attr('href',back_link);
           //$('.nav-link').text(tag1);
           $('.mobile_nav .nav-link').attr('value',tag);
           $(".mobile_nav #layer"+tag).removeClass('hide-menu'); 
            $(".mobile_nav #layer"+tag).toggleClass('show-menu'); 
       });
       $('.mobile_nav .nav-link').on('click',function(){
            var tag = $(this).attr('href');
           var val= $(this).attr('value');
           // window.alert(val);
            $(tag).removeClass('show-menu'); 
            var back_link="#layer"+(val-1);
            $('.mobile_nav .nav-link').attr('href',back_link);
           $('.mobile_nav .nav-link').attr('value',val-1);
           //window.alert(back_link);
           
       });
       
       $("#mob_accordian a").on('click',function(){
            var link = $(this);
            var closest_ul = link.closest("ul");
            var parallel_active_links = closest_ul.find(".active")
            var closest_li = link.closest("li");
            var link_status = closest_li.hasClass("active");
            var count = 0;

            closest_ul.find("ul").slideUp(function() {
                    if (++count == closest_ul.find("ul").length)
                            parallel_active_links.removeClass("active");
            });

            if (!link_status) {
                    closest_li.children("ul").slideDown();
                    closest_li.addClass("active");
            }
        });

        
       
       

    })

    
  return (
    <>
    {/*------------------------------------------------------------------------------------- Desktop header 1  */}
        <div className='header_sec snap_sec desktop_header1' id='desk_header_1'>
            <div className='hdr_container'>

                {/* Header top bar */}
                <div className='row header_top_bar'>
                    <div className='col-lg-7 col-md-6 col-5 no_padding'>
                        <div className='logo_dv'>
                            <a href='/'>
                                <img className='white_logo' src={require('../../assets/img/horizon_logo.svg').default}></img>
                            </a>
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-6 col-7 no_padding'>
                        <div className='hdr_cntact_dv'>
                            
                            {/* <a href='tel:+91 88799 70705' className='hr_contact_no'>+91 88799 70705</a> */}
                            
                            <div className='search_box'>
                                <img src={require('../../assets/img/svg/search_icon.svg').default}></img>
                            </div>
                            
                            {/* <a className='enq_bnt'>Enquire Now <span><img src={require('../../assets/img/svg/sldr_right_arrow_wht.svg').default}></img></span></a> */}

                            <a href='https://www.blackstone.com/' target="_blank" className='hr_contact_no'>A blackstone <br></br>logistics platform</a>

                            {/* ============ mobile menu button */}
                            <div id="mobile_menu">
                                <img className='mob_menu_btn' src={require('../../assets/img/svg/mob_menu.svg').default}></img> 
                            </div>

                        </div>
                    </div>
                </div>
   

                {/* Desktop Navbar  */}
                <div className='row desk_menu_row'>
                    <div className='col-12 zero_padding'>

                    
                        <nav className="navbar navbar-expand-lg navbar-dark">
                            <div className="container-fluid no_padding">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="main_nav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item dropdown has-megamenu menu_link park_drp">
                                            <a className="nav-link dropdown-toggle " href="#" data-bs-toggle="dropdown" data-bs-hover="dropdown">Parks</a>
                                            <div className="dropdown-menu megamenu" role="menu">
                                                <div className="row row_border">
                                                        <div className="col-lg-3 col-6 over_flow">
                                                            <div className="col-megamenu menu_animate_box animi_bx1 park_menu_col1">
                                                                <a href='/parks'><h5>Park Overview</h5></a>
                                                                <img src={require('../../assets/img/park_2.jpg')}></img>
                                                                <a className='book_visit_btn bk_vst_btn'>Book a site visit</a>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-6 over_flow">
                                                            <div className="col-megamenu menu_animate_box animi_bx2">
                                                                <h5>Delhi NCR</h5>
                                                                <ul className="list-unstyled">
                                                                    <li><a href="/parks/farukhnagar">Farukhnagar</a></li>
                                                                    <li><a href="/parks/delhi-i">Delhi I</a></li>
                                                                    <li><a href="/parks/delhi-ii">Delhi II</a></li>
                                                                    <li><a href="/parks/bilaspur-i">Bilaspur I</a></li>
                                                                    <li><a href="/parks/bilaspur-ii">Bilaspur II</a></li>
                                                                </ul>
                                                                <h5 className='top_spc'>AHMEDABAD</h5>
                                                                <ul className="list-unstyled">
                                                                    <li><a href="/parks/bhayala">Bhayala</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-6 over_flow">
                                                            <div className="col-megamenu menu_animate_box animi_bx3">

                                                                <h5>Pune</h5>
                                                                <ul className="list-unstyled">
                                                                    <li><a href="/parks/chakan-ii">Chakan II</a></li>
                                                                    <li><a href="/parks/chakan-v">Chakan V</a></li>
                                                                </ul>

                                                                {/* <h5 className='top_spc'>Nagpur</h5>
                                                                <ul className="list-unstyled">
                                                                    <li><a href="#">Nagpur</a></li>
                                                                </ul> */}
                                                                
                                                                <h5 className='top_spc'>Goa</h5>
                                                                <ul className="list-unstyled">
                                                                    <li><a href="/parks/verna">Verna</a></li>
                                                                </ul>
                                                                
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-6 over_flow">
                                                            <div className="col-megamenu menu_animate_box animi_bx4">

                                                                <h5>HYDERABAD</h5>
                                                                <ul className="list-unstyled">
                                                                    <li><a href="/parks/kothur">Kothur</a></li>
                                                                    <li><a href="/parks/patancheru">Patancheru</a></li>
                                                                </ul>

                                                                <h5 className='top_spc'>BENGALURU</h5>
                                                                <ul className="list-unstyled">
                                                                    <li><a href="/parks/dobbaspet-i">Dobbaspet I</a></li>
                                                                    <li><a href="/parks/dobbaspet-ii">Dobbaspet II</a></li>
                                                                    <li><a href="/parks/hosur-i">Hosur I</a></li>
                                                                  
                                                                    <li><a href="/parks/malur">Malur</a></li>  
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>


                                            </div> 
                                        </li>
                                        <li className="nav-item menu_link  contact_link"><a className="nav-link" href="/solutions"> Solutions </a></li>

                                        <li className="nav-item dropdown has-megamenu menu_link explore_drp">
                                            <a className="nav-link dropdown-toggle " href="#" data-bs-toggle="dropdown" data-bs-hover="dropdown">Explore Horizon</a>
                                            <div className="dropdown-menu megamenu" role="menu">
                                                <div className="row row_border explore_menus">
                                                    
                                                    <div className="col over_flow">
                                                        <div className="col-megamenu menu_animate_box animi_bx1">
                                                            <ul className="list-unstyled">
                                                                <li><a href="/explore#overview">About Us</a></li>
                                                            </ul>
                                                        </div>  
                                                    </div>
                                                    <div className="col over_flow ">
                                                        <div className="col-megamenu menu_animate_box animi_bx2">
                                                            <ul className="list-unstyled">
                                                                <li><a href="/client-stories">Client Stories</a></li>
                                                            </ul>
                                                        </div>  
                                                    </div>
                                                    <div className="col over_flow">
                                                        <div className="col-megamenu menu_animate_box animi_bx3">
                                                            <ul className="list-unstyled">
                                                                <li><a href="/blogs">Blogs</a></li>
                                                            </ul>
                                                        </div>  
                                                    </div>    
                                                    <div className="col over_flow ">
                                                        <div className="col-megamenu menu_animate_box animi_bx4">
                                                            <ul className="list-unstyled">
                                                                <li><a href="/event">Events</a></li>
                                                            </ul>
                                                        </div>  
                                                    </div>
                                                    <div className="col over_flow ">
                                                        <div className="col-megamenu menu_animate_box animi_bx4">
                                                            <ul className="list-unstyled">
                                                                <li><a href="/explore#careers">Careers</a></li>
                                                            </ul>
                                                        </div>  
                                                    </div>
                                                    
                                                </div>
                                            </div> 
                                        </li>
                                        <li className="nav-item dropdown has-megamenu menu_link esg_drp">
                                            <a className="nav-link dropdown-toggle " href="#" data-bs-toggle="dropdown" data-bs-hover="dropdown"> Sustainability  </a>
                                            <div className="dropdown-menu megamenu" role="menu">
                                                <div className="row row_border esg_menus">
                                                    
                                                    <div className="col-lg-4 col-6 over_flow">
                                                        <div className="col-megamenu menu_animate_box animi_bx1">
                                                            <ul className="list-unstyled">
                                                                <li><a href="/sustainability#environment">Environment</a></li>
                                                            </ul>
                                                        </div>  
                                                    </div>
                                                    <div className="col-lg-4 col-6 over_flow">
                                                        <div className="col-megamenu menu_animate_box animi_bx2">
                                                            <ul className="list-unstyled">
                                                                <li><a href="/sustainability#social">Social</a></li>
                                                            </ul>
                                                        </div>  
                                                    </div>
                                                    <div className="col-lg-4 col-6 over_flow">
                                                        <div className="col-megamenu menu_animate_box animi_bx3">
                                                            <ul className="list-unstyled">
                                                                <li><a href="/sustainability#governance">Governance</a></li>
                                                            </ul>
                                                        </div>  
                                                    </div>    
        
                                                </div>
                                            </div> 
                                        </li>
                                        <li className="nav-item menu_link no_LR_margin contact_link"><a className="nav-link" href="/contact"> Contact Us </a></li>
                                        
                                    </ul>
                                </div> 
                            </div>
                        </nav>


                    </div>
                </div>
                

            </div>
        </div>


    {/*------------------------------------------------------------------------------------- Desktop header 2  */}
        <div className='header_sec snap_sec desktop_header2 fixed' id='desk_header'>
            <div className='hdr_container'>

                {/* Header top bar */}
                <div className='row header_top_bar'>

                    <div className='col-lg-12 col-md-12 col-12 zero_padding  hdr_2_menu'>

                        <div className='hiprk_logo_dv'>
                            <a href='/'>
                                <img className='hiprk_logo' src={require('../../assets/img/svg/horizon__logo_icon.svg').default}></img>
                            </a>
                        </div>                
                        <nav className="navbar navbar-expand-lg navbar-dark">
                            <div className="container-fluid no_padding">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="main_nav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item dropdown has-megamenu menu_link park_drp">
                                            <a className="nav-link dropdown-toggle " href="#" data-bs-toggle="dropdown" data-bs-hover="dropdown">Parks</a>
                                            <div className="dropdown-menu megamenu" role="menu">

                                                <div className="row row_border">
                                                        <div className="col-lg-3 col-6 over_flow">
                                                            <div className="col-megamenu menu_animate_box animi_bx1 park_menu_col1">
                                                                <a href='/parks'><h5>Park Overview</h5></a>
                                                                <img src={require('../../assets/img/park_2.jpg')}></img>
                                                                <a className='book_visit_btn bk_vst_btn'>Book a site visit</a>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-6 over_flow">
                                                            <div className="col-megamenu menu_animate_box animi_bx2">
                                                                <h5>Delhi NCR</h5>
                                                                <ul className="list-unstyled">
                                                                    <li><a href="/parks/farukhnagar">Farukhnagar</a></li>
                                                                    <li><a href="/parks/delhi-i">Delhi I</a></li>
                                                                    <li><a href="/parks/delhi-ii">Delhi II</a></li>
                                                                    <li><a href="/parks/bilaspur-i">Bilaspur I</a></li>
                                                                    <li><a href="/parks/bilaspur-ii">Bilaspur II</a></li>
                                                                </ul>
                                                                <h5 className='top_spc'>AHMEDABAD</h5>
                                                                <ul className="list-unstyled">
                                                                    <li><a href="/parks/bhayala">Bhayala</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-6 over_flow">
                                                            <div className="col-megamenu menu_animate_box animi_bx3">

                                                                <h5>Pune</h5>
                                                                <ul className="list-unstyled">
                                                                    <li><a href="/parks/chakan-ii">Chakan II</a></li>
                                                                    <li><a href="/parks/chakan-v">Chakan V</a></li>
                                                                </ul>

                                                                {/* <h5 className='top_spc'>Nagpur</h5>
                                                                <ul className="list-unstyled">
                                                                    <li><a href="#">Nagpur</a></li>
                                                                </ul> */}
                                                                
                                                                <h5 className='top_spc'>Goa</h5>
                                                                <ul className="list-unstyled">
                                                                    <li><a href="/parks/verna">Verna</a></li>
                                                                </ul>

              
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-6 over_flow">
                                                            <div className="col-megamenu menu_animate_box animi_bx4">

                                                                <h5 >HYDERABAD</h5>
                                                                <ul className="list-unstyled">
                                                                    <li><a href="/parks/kothur">Kothur</a></li>
                                                                    <li><a href="/parks/patancheru">Patancheru</a></li>
                                                                </ul>

                                                                <h5 className='top_spc'>BENGALURU</h5>
                                                                <ul className="list-unstyled">
                                                                    <li><a href="/parks/dobbaspet-i">Dobbaspet I</a></li>
                                                                    <li><a href="/parks/dobbaspet-ii">Dobbaspet II</a></li>
                                                                    <li><a href="/parks/hosur-i">Hosur I</a></li>
                                                        
                                                                    <li><a href="/parks/malur">Malur</a></li>  
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>


                                            </div> 
                                        </li>
                                        <li className="nav-item menu_link  contact_link"><a className="nav-link" href="/solutions"> Solutions </a></li>
                                        
                                        <li className="nav-item dropdown has-megamenu menu_link explore_drp">
                                            <a className="nav-link dropdown-toggle " href="#" data-bs-toggle="dropdown" data-bs-hover="dropdown">Explore Horizon</a>
                                            <div className="dropdown-menu megamenu" role="menu">
                                                <div className="row row_border explore_menus">
                                                    
                                                    <div className="col over_flow">
                                                        <div className="col-megamenu menu_animate_box animi_bx1">
                                                            <ul className="list-unstyled">
                                                                <li><a href="/explore#overview">About Us</a></li>
                                                            </ul>
                                                        </div>  
                                                    </div>
                                                    <div className="col over_flow ">
                                                        <div className="col-megamenu menu_animate_box animi_bx2">
                                                            <ul className="list-unstyled">
                                                                <li><a href="/client-stories">Client Stories</a></li>
                                                            </ul>
                                                        </div>  
                                                    </div>
                                                    {/* <div className="col-lg-2 col-6 over_flow col_offset">
                                                        <div className="col-megamenu menu_animate_box animi_bx3">
                                                            <ul className="list-unstyled">
                                                                <li><a href="/explore#milestones">Milestones</a></li>
                                                            </ul>
                                                        </div>  
                                                    </div>     */}
                                                    <div className="col over_flow ">
                                                        <div className="col-megamenu menu_animate_box animi_bx4">
                                                            <ul className="list-unstyled">
                                                                <li><a href="/blogs">Blogs</a></li>
                                                            </ul>
                                                        </div>  
                                                    </div>
                                                    <div className="col over_flow ">
                                                        <div className="col-megamenu menu_animate_box animi_bx4">
                                                            <ul className="list-unstyled">
                                                                <li><a href="/event">Events</a></li>
                                                            </ul>
                                                        </div>  
                                                    </div>
                                                    <div className="col over_flow ">
                                                        <div className="col-megamenu menu_animate_box animi_bx4">
                                                            <ul className="list-unstyled">
                                                                <li><a href="/explore#careers">Careers</a></li>
                                                            </ul>
                                                        </div>  
                                                    </div>
                                                    
                                                </div>
                                            </div> 
                                        </li>
                                        <li className="nav-item dropdown has-megamenu menu_link esg_drp">
                                            <a className="nav-link dropdown-toggle " href="#" data-bs-toggle="dropdown" data-bs-hover="dropdown"> Sustainability  </a>
                                            <div className="dropdown-menu megamenu" role="menu">
                                                <div className="row row_border esg_menus">
                                                    
                                                    <div className="col-lg-4 col-6 over_flow">
                                                        <div className="col-megamenu menu_animate_box animi_bx1">
                                                            <ul className="list-unstyled">
                                                                <li><a href="/sustainability#environment">Environment</a></li>
                                                            </ul>
                                                        </div>  
                                                    </div>
                                                    <div className="col-lg-4 col-6 over_flow">
                                                        <div className="col-megamenu menu_animate_box animi_bx2">
                                                            <ul className="list-unstyled">
                                                                <li><a href="/sustainability#social">Social</a></li>
                                                            </ul>
                                                        </div>  
                                                    </div>
                                                    <div className="col-lg-4 col-6 over_flow">
                                                        <div className="col-megamenu menu_animate_box animi_bx3">
                                                            <ul className="list-unstyled">
                                                                <li><a href="/sustainability#governance">Governance</a></li>
                                                            </ul>
                                                        </div>  
                                                    </div>    
        
                                                </div>
                                            </div> 
                                        </li>
                                        <li className="nav-item menu_link  contact_link"><a className="nav-link" href="/contact"> Contact Us </a></li>
                                        {/* <li className="nav-item menu_link no_LR_margin contact_link enq_txt_btn enq_bnt"><a className="nav-link" > Enquire Now</a></li> */}
                                        
                                    </ul>
                                </div> 
                            </div>
                        </nav>


                    </div>                    

                    {/* <div className='col-lg-2 col-md-2 col-2 no_padding '>
                        <div className='hdr_cntact_dv'>
                            ============ mobile menu button =========
                             <div id="mobile_menu">
                                <img className='mob_menu_btn' src={require('../../assets/img/svg/mob_menu.svg').default}></img> 
                            </div>
                        </div>
                    </div> */}

                </div>
   

            
                

            </div>
        </div>

        {/* ============================================================================ mobile Navbar*/}
        <div className='mobile_nav'>

            <img className='close_mob_nav' src={require('../../assets/img/svg/close_icon.svg').default}></img>


            <div id="mob_accordian">
                <ul>
                    <li className="active">

                        <ul>
                            <li className="">
                                <a className='lv_1' href="#">Parks</a>
                                <ul>

                                    <li>
                                        <a className='lv_2' href="/parks">Park Overview</a>
                                    </li>
                                    {/*---- Delhi NCR */}
                                    <li>
                                        <a className='lv_2' href="#">Delhi NCR</a>
                                        <ul className='lv_3ul'>
                                            <li><a className='lv_3' href="/parks/farukhnagar">Farukhnagar</a></li>
                                            <li><a className='lv_3' href="/parks/delhi-i">Delhi I</a></li>
                                            <li><a className='lv_3' href="/parks/delhi-ii">Delhi II</a></li>
                                            <li><a className='lv_3' href="/parks/bilaspur-i">Bilaspur I</a></li>
                                            <li><a className='lv_3' href="/parks/bilaspur-ii">Bilaspur II</a></li>
                                        </ul>
                                    </li>

                                    {/*---- AHMEDABAD */}
                                    <li>
                                        <a className='lv_2' href="#">Ahmedabad</a>
                                        <ul className='lv_3ul'>
                                            <li><a className='lv_3' href="/parks/bhayala">Bhayala</a></li>
                                        </ul>
                                    </li>

                                    {/*---- Pune */}
                                    <li>
                                        <a className='lv_2' href="#">Pune</a>
                                        <ul className='lv_3ul'>
                                            <li><a className='lv_3' href="/parks/chakan-ii">Chakan II</a></li>
                                            <li><a className='lv_3' href="/parks/chakan-v">Chakan V</a></li>
                                        </ul>
                                    </li>

                                    {/*---- Nagpur */}
                                    {/* <li>
                                        <a className='lv_2' href="#">Nagpur</a>
                                        <ul className='lv_3ul'>
                                            <li><a className='lv_3' href="#">Nagpur</a></li>
                                        </ul>
                                    </li> */}

                                    {/*---- Goa */}
                                    <li>
                                        <a className='lv_2' href="#">Goa</a>
                                        <ul className='lv_3ul'>
                                            <li><a className='lv_3' href="/parks/verna">Verna</a></li>
                                        </ul>
                                    </li>

                                    {/*---- HYDERABAD */}
                                    <li>
                                        <a className='lv_2' href="#">Hyderabad</a>
                                        <ul className='lv_3ul'>
                                            <li><a className='lv_3' href="/parks/kothur">Kothur</a></li>
                                            <li><a className='lv_3' href="/parks/patancheru">Patancheru</a></li>
                                        </ul>
                                    </li>

                                    {/*---- BENGALURU */}
                                    <li>
                                        <a className='lv_2' href="#">Bengaluru</a>
                                        <ul className='lv_3ul'>
                                            <li><a className='lv_3' href="/parks/malur">Malur</a></li>
                                            <li><a className='lv_3' href="/parks/hosur-i">Hosur I</a></li>
      
                                            <li><a className='lv_3' href="/parks/dobbaspet-i">Dobbaspet I</a></li>
                                            <li><a className='lv_3' href="/parks/dobbaspet-ii">Dobbaspet II</a></li>
                                        </ul>
                                    </li>


                                </ul>
                            </li>
                            <li>
                                <a className='lv_1' href="/solutions">Solutions</a>
                            </li>
                            <li>
                                <a className='lv_1' href="#">Explore Horizon</a>
                                <ul>
                                <li><a className='lv_2' href="/explore#overview">About Us</a></li>
                                    <li><a className='lv_2 anchr_btn' href="/client-stories">Client Stories</a></li>
                                    <li><a className='lv_2 anchr_btn' href="/blogs">Blogs</a></li>
                                    <li><a className='lv_2 anchr_btn' href="/event">Events</a></li>
                                    <li><a className='lv_2 anchr_btn' href="/explore#careers">Careers</a></li>
                                </ul>
                            </li>
                            <li>
                                <a className='lv_1' href="#">Sustainability</a>
                                <ul>
                                    <li><a className='lv_2 anchr_btn' href="/sustainability#environment">Environment</a></li>
                                    <li><a className='lv_2 anchr_btn' href="/sustainability#social">Social</a></li>
                                    <li><a className='lv_2 anchr_btn' href="/sustainability#governance">Governance</a></li>
                                </ul>
                            </li>
                            <li ><a className='lv_1' href="/contact">Contact Us</a></li>
                            <li ><a className='lv_1 bk_vst_btn book_visit_btn'>Book a site visit</a></li>

                        </ul>
                    </li>
                </ul>
            </div>

            <div className='mob_search_dv'>
                <form onSubmit={sendResult}> 
                    <input className='srch-input' type='text' placeholder='Search here...' ref={resultinput} />
                        <button type="submit" className='srch-btn'>
                        <img src={require('../../assets/img/svg/search_icon.svg').default}></img>
                    </button>
                </form> 
            </div>



        </div>

    </>
  )
}
