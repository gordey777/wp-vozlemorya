!function(){for(var e,n=function(){},o=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],t=o.length,a=window.console=window.console||{};t--;)e=o[t],a[e]||(a[e]=n)}(),"undefined"==typeof jQuery?console.warn("jQuery hasn't loaded"):console.log("jQuery has loaded"),jQuery(document).ready(function(e){function n(e){var n=e.item.count-1,o=Math.round(e.item.index-e.item.count/2-.5);o<0&&(o=n),o>n&&(o=0),l.find(".owl-item").removeClass("current").eq(o).addClass("current");var t=l.find(".owl-item.active").length-1,a=l.find(".owl-item.active").first().index(),i=l.find(".owl-item.active").last().index();o>i&&l.data("owl.carousel").to(o,100,!0),o<a&&l.data("owl.carousel").to(o-t,100,!0)}function o(e){if(u){var n=e.item.index;s.data("owl.carousel").to(n,100,!0)}}function t(){var n=e(window).scrollTop();n<300&&e("#tm-breadcrumbs").css("background-position","center "+(0-1.3*n)+"px")}function a(){e(window).scroll(function(){e(window).scrollTop()>w&&e(window).width()>768?(e("header").addClass("menu__stiky"),e(".logo_wrapp").css("left",p)):(e("header").removeClass("menu__stiky"),e(".logo_wrapp").css("left","auto"))})}jQuery("#home__slider").owlCarousel({lazyLoad:!0,items:1,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],slideSpeed:5e3,nav:!0,autoplay:!0,autoplayHoverPause:!0,loop:!0,dots:!0,smartSpeed:1e3,animateIn:"fadeIn"});var i=e("#home__slider").width(),r=.35*i;e("#home__slider .item").height(r),e(window).resize(function(){var n=(e("#home__slider").width(),.35*c);e("#home__slider .item").height(n)}),jQuery(".tab_content:first").addClass("current"),jQuery("ul#tabs_list").on("click","li:not(.current)",function(){jQuery(this).addClass("current").siblings().removeClass("current").closest("div.tabs____tabs").find("div.tab_content").removeClass("current").eq(jQuery(this).index()).addClass("current")});var s=jQuery("#sync1"),l=jQuery("#sync2"),d=9,u=!0;s.owlCarousel({lazyLoad:!0,items:1,animateOut:"fadeOut",animateIn:"fadeIn",slideSpeed:5e3,nav:!0,margin:40,dots:!1,loop:!0,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']}).on("changed.owl.carousel",n),l.on("initialized.owl.carousel",function(){l.find(".owl-item").eq(0).addClass("current")}).owlCarousel({lazyLoad:!0,items:d,margin:30,dots:!1,smartSpeed:200,slideSpeed:500,responsiveRefreshRate:100,responsive:{0:{items:3},480:{items:5},768:{items:8},992:{items:9}}}).on("changed.owl.carousel",o),l.on("click",".owl-item",function(e){e.preventDefault();var n=jQuery(this).index();s.data("owl.carousel").to(n,300,!0)});var c=e(".rama-wrap").width(),m=.35*c;e("#sync1").height(m),e("#sync1 .owl-item").height(m),e(window).resize(function(){var n=e(".rama-wrap").width(),o=.35*n;e("#sync1").height(o),e("#sync1 .owl-item").height(o)}),e(window).bind("scroll",function(e){t()}),a();var f=e(".menu_wrapp").offset(),g=e(".logo_wrapp").offset(),p=(f.top,g.left),w=e("header").height();!function(e){function n(n){var a=n.find(".marker"),i={zoom:16,center:new google.maps.LatLng(0,0),mapTypeId:google.maps.MapTypeId.ROADMAP},r=new google.maps.Map(n[0],i);return r.markers=[],a.each(function(){o(e(this),r)}),t(r),r}function o(e,n){var o=new google.maps.LatLng(e.attr("data-lat"),e.attr("data-lng")),t=new google.maps.Marker({position:o,map:n});if(n.markers.push(t),e.html()){var a=new google.maps.InfoWindow({content:e.html()});google.maps.event.addListener(t,"click",function(){a.open(n,t)})}}function t(n){var o=new google.maps.LatLngBounds;e.each(n.markers,function(e,n){var t=new google.maps.LatLng(n.position.lat(),n.position.lng());o.extend(t)}),1==n.markers.length?(n.setCenter(o.getCenter()),n.setZoom(16)):n.fitBounds(o)}var a=null;e(document).ready(function(){e(".acf-map").each(function(){a=n(e(this))})})}(jQuery),e(".wpcf7-form").addClass("uk-form uk-margin visform"),function(e){var n=e(".main__menu");e(".main__menu");e("#humburger").click(function(){return n.toggleClass("menu__open"),e(this).toggleClass("humb__open"),!1}),e(".mob_overlay").click(function(){return n.toggleClass("menu__open"),e("#humburger").toggleClass("humb__open"),!1})}(jQuery)});
//# sourceMappingURL=maps/scripts.js.map
