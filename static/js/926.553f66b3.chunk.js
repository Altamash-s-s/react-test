"use strict";(self.webpackChunkhiparks=self.webpackChunkhiparks||[]).push([[926],{9538:function(s,l,e){e(2791);l.Z=e.p+"static/media/lightbox_icon.de13572c40823fc7353615f21f340080.svg"},7926:function(s,l,e){e.r(l),e.d(l,{default:function(){return p}});var a=e(1413),i=e(2791),o=e(5717),n=(e(608),e(3037),e(8688),e(6915)),c=e.n(n),r=e(6871),t=e(8890),d=e.n(t),_=e(184);function p(){var s=(0,r.UO)().slug,l=c()("https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/parks/?slug=".concat(s)),n=(l.isLoading,l.data),t=(l.error,{arrows:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,speed:500,centerMode:!0,centerPadding:"40px",responsive:[{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,centerMode:!1,centerPadding:"0px"}}]}),p={arrows:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,speed:500};return(0,i.useEffect)((function(){d()(".siteplan_btn").on("click",(function(){d()(".siteplan_light_box").addClass("open_light_box"),d()(".lightbox_overlay").addClass("overlay_open"),d()("body").css("overflow","hidden"),d()("html, body").animate({scrollTop:d()(".park_gallery_sec").offset().top},100)})),d()(".photo_btn").on("click",(function(){d()(".photo_light_box").addClass("open_light_box"),d()(".lightbox_overlay").addClass("overlay_open"),d()("body").css("overflow","hidden"),d()("html, body").animate({scrollTop:d()(".park_gallery_sec").offset().top},100)})),d()(".close_btn").on("click",(function(){d()(".park_lightbox").removeClass("open_light_box"),d()(".lightbox_overlay").removeClass("overlay_open"),d()("body").css("overflow","visible")}));var s=window.location.pathname;console.log(s),"/parks/dobbaspet-ii"===s||"/parks/delhi-ii"===s?d()(".video_tabs_li").hide():"/parks/bhayala"===s?(d()(".video_tabs_li").hide(),d()(".photo_tabs_li").hide()):"/parks/verna"===s?d()(".video_tabs_li").hide():(d()(".site_tabs_li").show(),d()(".photo_tabs_li").show(),d()(".video_tabs_li").show())})),(0,_.jsx)(_.Fragment,{children:n&&n.map((function(s){var l=s.id,i=(s.title,s.acf);s.content;return(0,_.jsxs)("div",{className:"park_gallery_sec snap_sec",children:[(0,_.jsx)("div",{className:"lightbox_overlay"}),(0,_.jsxs)("div",{className:"",children:[(0,_.jsx)("div",{className:"row prk_hd_row no_LR_margin",children:(0,_.jsx)("div",{className:"col-12",children:(0,_.jsx)("p",{className:"section_heading prk_glry_ttl",children:"Park Gallery"})})}),(0,_.jsxs)("div",{className:"row prk_tab_content_row no_LR_margin",children:[(0,_.jsx)("div",{className:"col-lg-3 col-md-6 col-12",children:(0,_.jsxs)("ul",{className:"nav nav-pills prk_gallery_tabs",role:"tablist",children:[(0,_.jsx)("li",{className:"nav-item site_tabs_li",children:(0,_.jsx)("a",{className:"nav-link active","data-bs-toggle":"pill",href:"#siteplan",children:"Site plan"})}),(0,_.jsx)("li",{className:"nav-item photo_tabs_li",children:(0,_.jsx)("a",{className:"nav-link ","data-bs-toggle":"pill",href:"#photos",children:"Photos"})}),(0,_.jsx)("li",{className:"nav-item video_tabs_li",children:(0,_.jsx)("a",{className:"nav-link","data-bs-toggle":"pill",href:"#video",children:"videos"})})]})}),(0,_.jsx)("div",{className:"col-lg-9 col-md-12 col-12 no_right_padding park_grly_col2",children:(0,_.jsxs)("div",{className:"tab-content",children:[(0,_.jsxs)("div",{id:"siteplan",className:"tab-pane  active",children:[(0,_.jsx)(o.Z,(0,a.Z)((0,a.Z)({},t),{},{className:"park_photo_slider",children:i.site_plan.map((function(s){return(0,_.jsx)("div",{className:"prk_p_slide",children:(0,_.jsx)("div",{className:"prk_photo_content",children:(0,_.jsx)("img",{src:s})})},l)}))})),(0,_.jsx)("div",{className:"lightbox_btn siteplan_btn",children:(0,_.jsx)("img",{src:e(9538).Z})})]}),(0,_.jsxs)("div",{id:"photos",className:"tab-pane fade",children:[(0,_.jsx)(o.Z,(0,a.Z)((0,a.Z)({},t),{},{className:"park_photo_slider",children:i.photo.map((function(s){return(0,_.jsx)("div",{className:"prk_p_slide",children:(0,_.jsx)("div",{className:"prk_photo_content",children:(0,_.jsx)("img",{src:s})})},l)}))})),(0,_.jsx)("div",{className:"lightbox_btn photo_btn",children:(0,_.jsx)("img",{src:e(9538).Z})})]}),(0,_.jsx)("div",{id:"video",className:"tab-pane fade",children:(0,_.jsx)(o.Z,(0,a.Z)((0,a.Z)({},t),{},{className:"park_photo_slider",children:i.video_vimeo_link.map((function(s){return(0,_.jsx)("div",{className:"prk_p_slide",children:(0,_.jsx)("div",{className:"prk_photo_content",children:(0,_.jsx)("iframe",{id:"vimeoWrap",className:"vm-vid",src:s.park_video,allowfullscreen:"allowfullscreen",mozallowfullscreen:"mozallowfullscreen",msallowfullscreen:"msallowfullscreen",oallowfullscreen:"oallowfullscreen",webkitallowfullscreen:"webkitallowfullscreen"})})},l)}))}))})]})})]})]}),(0,_.jsx)("div",{className:"park_lightbox siteplan_light_box",children:(0,_.jsxs)("div",{className:"inner_light_box siteplan_inner",children:[(0,_.jsx)("img",{className:"close_btn",src:e(8913).Z}),(0,_.jsx)(o.Z,(0,a.Z)((0,a.Z)({},p),{},{className:"park_lightbox_photo",children:i.site_plan.map((function(s){return(0,_.jsx)("div",{className:"lb_prk_sld prk_siteplan_sld",children:(0,_.jsx)("div",{className:"lb_prk_sld_content siteplan_img_div prk_siteplan_img_div",children:(0,_.jsx)("img",{src:s})})},l)}))}))]})}),(0,_.jsx)("div",{className:"park_lightbox photo_light_box",children:(0,_.jsxs)("div",{className:"inner_light_box",children:[(0,_.jsx)("img",{className:"close_btn",src:e(8913).Z}),(0,_.jsx)(o.Z,(0,a.Z)((0,a.Z)({},p),{},{className:"park_lightbox_photo",children:i.photo.map((function(s){return(0,_.jsx)("div",{className:"lb_prk_sld",children:(0,_.jsx)("div",{className:"lb_prk_sld_content",children:(0,_.jsx)("img",{src:s})})},l)}))}))]})})]},l)}))})}}}]);
//# sourceMappingURL=926.553f66b3.chunk.js.map