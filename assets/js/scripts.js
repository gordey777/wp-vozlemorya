// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function() {};
  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());
if (typeof jQuery === 'undefined') {
  console.warn('jQuery hasn\'t loaded');
} else {
  console.log('jQuery has loaded');
}
// Place any jQuery/helper plugins in here.


jQuery(document).ready(function($) {

  jQuery('#home__slider').owlCarousel({
    lazyLoad: true,
    items: 1,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    slideSpeed: 5000,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    loop: true,
    dots: true,
    //stagePadding:30,
    smartSpeed: 1000,
    animateIn: 'fadeIn',
    //animateOut: 'fadeOut'
  });

  var slideW = $('#home__slider').width(),
    slideH = slideW * .35;


  //$('.owl-item').height(slideH);
  $('#home__slider .item').height(slideH);
  $(window).resize(function() {
    var slideW = $('#home__slider').width(),
      slideH = postSlideW * .35;


    //$('.owl-item').height(slideH);
    $('#home__slider .item').height(slideH);

  });

  jQuery(".tab_content:first").addClass('current');
  jQuery('ul#tabs_list').on('click', 'li:not(.current)', function() {
    jQuery(this)
      .addClass('current').siblings().removeClass('current')
      .closest('div.tabs____tabs').find('div.tab_content').removeClass('current').eq(jQuery(this).index()).addClass('current');

  });
  // jQuery('#tabs_list li').click(function(e) {
  //   e.preventDefault();
  //   slider.reloadSlider();
  // });




  var sync1 = jQuery("#sync1");
  var sync2 = jQuery("#sync2");
  var slidesPerPage = 9; //globaly define number of elements per page
  var syncedSecondary = true;

  sync1.owlCarousel({
    lazyLoad: true,
    items: 1,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    slideSpeed: 5000,
    nav: true,
    //autoplay: true,
    margin: 40,
    dots: false,
    loop: true,
    //responsiveRefreshRate: 200,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
  }).on('changed.owl.carousel', syncPosition);

  sync2
    .on('initialized.owl.carousel', function() {
      sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
      lazyLoad: true,
      items: slidesPerPage,
      margin: 30,
      dots: false,
      //nav: false,
      smartSpeed: 200,
      slideSpeed: 500,
      //slideBy: slidesPerPage,
      responsiveRefreshRate: 100,
      responsive: {

        0: {
          items: 3,

        },

        480: {
          items: 5,

        },
        // breakpoint from 768 up
        768: {
          items: 8,

        },
        992: {
          items: 9,

        }
      }
    }).on('changed.owl.carousel', syncPosition2);

  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;

    //if you disable loop you have to comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - (el.item.count / 2) - .5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }

    //end block

    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync2.find('.owl-item.active').length - 1;
    var start = sync2.find('.owl-item.active').first().index();
    var end = sync2.find('.owl-item.active').last().index();

    if (current > end) {
      sync2.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
      sync2.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      sync1.data('owl.carousel').to(number, 100, true);
    }
  }

  sync2.on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = jQuery(this).index();
    sync1.data('owl.carousel').to(number, 300, true);
  });

  var postSlideW = $('.rama-wrap').width(),
    postSlideH = postSlideW * .35;


  $('#sync1').height(postSlideH);
  $('#sync1 .owl-item').height(postSlideH);
  $(window).resize(function() {
    var postSlideW = $('.rama-wrap').width(),
      postSlideH = postSlideW * .35;


    $('#sync1').height(postSlideH);
    $('#sync1 .owl-item').height(postSlideH);
  });



  //paralax breadcrumbs


  $(window).bind('scroll', function(e) {
    parallaxScrollBread();
  });

  function parallaxScrollBread() {
    var scrolled = $(window).scrollTop();
    if (scrolled < 300) {
      $('#tm-breadcrumbs').css('background-position', 'center ' + (0 - (scrolled * 1.3)) + 'px');
    }
  }

  /*stiky menu*/

  stikyMenu();


  var $menuPos = $('.menu_wrapp').offset(),
    $logoPos = $('.logo_wrapp').offset(),
    $menuTop = $menuPos.top,

    $logoLeft = $logoPos.left,
    $headerH = $('header').height();

  function stikyMenu() {

    $(window).scroll(function() {
      if (($(window).scrollTop() > $headerH) || ($(window).width() > 768)) {
        $('header').addClass('menu__stiky');
        $('.logo_wrapp').css('left', $logoLeft);
      } else {
        $('header').removeClass('menu__stiky');
        $('.logo_wrapp').css('left', 'auto');
      }

    });
  }


  //Google maps

  (function($) {



    function new_map($el) {

      var $markers = $el.find('.marker');

      var args = {
        zoom: 16,
        center: new google.maps.LatLng(0, 0),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      var map = new google.maps.Map($el[0], args);

      map.markers = [];

      $markers.each(function() {

        add_marker($(this), map);

      });

      center_map(map);

      return map;

    }

    function add_marker($marker, map) {
      // var
      var latlng = new google.maps.LatLng($marker.attr('data-lat'), $marker.attr('data-lng'));

      var marker = new google.maps.Marker({
        position: latlng,
        map: map
      });

      map.markers.push(marker);

      if ($marker.html()) {

        var infowindow = new google.maps.InfoWindow({
          content: $marker.html()
        });

        google.maps.event.addListener(marker, 'click', function() {

          infowindow.open(map, marker);

        });
      }

    }

    function center_map(map) {
      var bounds = new google.maps.LatLngBounds();
      $.each(map.markers, function(i, marker) {

        var latlng = new google.maps.LatLng(marker.position.lat(), marker.position.lng());

        bounds.extend(latlng);

      });

      if (map.markers.length == 1) {

        map.setCenter(bounds.getCenter());
        map.setZoom(16);
      } else {

        map.fitBounds(bounds);
      }

    }

    var map = null;
    $(document).ready(function() {
      $('.acf-map').each(function() {
        map = new_map($(this));
      });
    });

  })(jQuery);



  ///forms
  $('.wpcf7-form').addClass('uk-form uk-margin visform');


  //sidebuner


  /*$(function(){

  $( ".tm-button-sidepanel" ).click(function() {
    $('.tm-sidepanel').toggleClass('uk-open');
  });



     function show_popup(){
        $( ".tm-sidepanel" ).removeClass('sidepanel_hidden').addClass('uk-open');
     };
     window.setTimeout( show_popup, 17000 );
  });*/


  (function($) {

    var allPanels = $('.main__menu');
    var Panels = $('.main__menu');

    $('#humburger').click(function() {
      allPanels.toggleClass('menu__open');;
      $(this).toggleClass('humb__open');
      return false;
    });
    $('.mob_overlay').click(function() {
      allPanels.toggleClass('menu__open');;
      $('#humburger').toggleClass('humb__open');
      return false;
    });

  })(jQuery);


});
