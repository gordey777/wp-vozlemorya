<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title><?php wp_title( '' ); ?><?php if ( wp_title( '', false ) ) { echo ' :'; } ?> <?php bloginfo( 'name' ); ?></title>

  <link href="http://www.google-analytics.com/" rel="dns-prefetch"><!-- dns prefetch -->

  <!-- icons -->

  <!--[if lt IE 9]>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/selectivizr/1.0.2/selectivizr-min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
  <![endif]-->
  <!-- css + javascript -->
  <?php wp_head(); ?>
  <?php if(is_page_template('front-page.php')) {?>
    <link href="<?php echo get_template_directory_uri(); ?>/css/landing-main.css" rel="stylesheet" type="text/css">
  <?php } else {?>
    <link href="<?php echo get_template_directory_uri(); ?>/css/kontacts.css" rel="stylesheet" type="text/css">
  <?php } ?>





    <script src='https://www.google.com/recaptcha/api.js'></script>
    <!– Global site tag (gtag.js) - Google Analytics –>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-99843530-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-99843530-1');
    </script>
</head>

<!--         <?php if ( !is_front_page() && !is_home() ){ ?>
  <a href="<?php echo home_url(); ?>">
<?php } ?>
    <img src="<?php echo get_template_directory_uri(); ?>/img/logo.png" alt="<?php wp_title( '' ); ?>" title="<?php wp_title( '' ); ?>" class="logo-img">
<?php if ( !is_front_page() && !is_home() ){ ?>
  </a>
<?php } ?> -->

<body <?php body_class('tm-noblog'); ?>>

  <div class="uk-offcanvas-content">
    <div class="tm-header-mobile uk-hidden@m">
      <nav class="uk-navbar-container" uk-navbar="">
        <div class="uk-navbar-left">
          <a class="uk-navbar-toggle" href="http://www.harmony-suites.ru/hs11-ru#tm-mobile" uk-toggle="">
            <div uk-navbar-toggle-icon=""></div>
          </a>
        </div>
        <div class="uk-navbar-center">
          <a class="uk-navbar-item uk-logo" href="http://www.harmony-suites.ru/">
            <img src="<?php echo get_template_directory_uri(); ?>/img/logo_horiz.svg" class="uk-responsive-height" alt="Harmony Suites" width="200px"> </a>
        </div>
      </nav>
      <div id="tm-mobile" uk-offcanvas="" mode="slide" overlay="">
        <div class="uk-offcanvas-bar">
          <button class="uk-offcanvas-close" type="button" uk-close=""></button>
          <ul class="uk-nav uk-nav-default">
            <li><a href="http://www.harmony-suites.ru/hs11-ru#testimonials">Отзывы</a></li>
            <li><a href="http://www.harmony-suites.ru/hs11-ru#payments-awards-location">платежи, местоположение</a></li>
            <li><a href="http://www.harmony-suites.ru/hs11-ru#hs11">Harmony Suites 11</a></li>
            <li><a href="http://www.harmony-suites.ru/hs11-ru#gallery">Галерия</a></li>
            <li><a href="http://www.harmony-suites.ru/hs11-ru#trip">Смотровой тур</a></li>
            <li><a href="http://www.harmony-suites.ru/hs11-ru#request">Отправить запрос</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="tm-header uk-visible@m" uk-header="">
      <div uk-sticky="" media="768" cls-active="uk-navbar-sticky" sel-target=".uk-navbar-container">
        <div class="uk-navbar-container">
          <div class="uk-container">
            <nav class="uk-navbar" uk-navbar="{&quot;align&quot;:&quot;center&quot;}">
              <div class="uk-navbar-center">
                <div class="uk-navbar-center-left">
                  <div>
                    <?php wpeHeadNav(); ?>
                  </div>
                </div>
                <a href="http://www.harmony-suites.ru/" class="uk-navbar-item uk-logo">
                  <img src="<?php echo get_template_directory_uri(); ?>/img/logo_crest.svg" class="uk-responsive-height" alt="Harmony Suites" width="100px">
                  <img src="<?php echo get_template_directory_uri(); ?>/img/logo_crest_inverse.svg" class="uk-responsive-height uk-logo-inverse" alt="Harmony Suites" width="100px">
                </a>
                <div class="uk-navbar-center-right">
                  <div>
                    <ul class="uk-navbar-nav">
                      <li><a href="http://www.harmony-suites.ru/hs11-ru#gallery">Галерия</a></li>
                      <li><a href="http://www.harmony-suites.ru/hs11-ru#trip">Смотровой тур</a></li>
                      <li><a href="http://www.harmony-suites.ru/hs11-ru#request">Отправить запрос</a></li>
                    </ul>
                    <div class="custom mod-languages">
                      <ul class="lang-inline">
                        <li class="lang-active" dir="ltr">
                          <a href="http://www.harmony-suites.ru/hs11-ru">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="flag_ru" x="0px" y="0px" viewBox="0 0 153 153" xml:space="preserve" alt="Русский" title="Русский">
                              <path style="opacity:0.85;fill:#E73A36;" d="M4.3,102c10.5,29.7,38.8,51,72.2,51  s61.6-21.3,72.1-51H4.3z"></path>
                              <path style="opacity:0.85;fill:#3756A6;" d="M0,76.5C0,85.4,1.5,94,4.3,102h144.3  c2.8-8,4.4-16.6,4.4-25.5S151.5,59,148.6,51H4.3C1.5,59,0,67.6,0,76.5z"></path>
                              <path style="opacity:0.85;fill:#F4F4F4;" d="M148.6,51C138.1,21.3,109.8,0,76.5,0  S14.9,21.3,4.3,51H148.6z"></path>
                            </svg>
                          </a>
                        </li>
                        <li class="" dir="ltr">
                          <a href="http://www.harmony-suites.bg/hs11-bg">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="flag_ru" x="0px" y="0px" viewBox="0 0 153 153" xml:space="preserve" alt="Български" title="Български">
                              <path style="opacity:0.85;fill:#E73A36;" d="M4.3,102c10.5,29.7,38.8,51,72.2,51  s61.6-21.3,72.1-51H4.3z"></path>
                              <path style="opacity:0.85;fill:#007d00;" d="M0,76.5C0,85.4,1.5,94,4.3,102h144.3  c2.8-8,4.4-16.6,4.4-25.5S151.5,59,148.6,51H4.3C1.5,59,0,67.6,0,76.5z"></path>
                              <path style="opacity:0.85;fill:#F4F4F4;" d="M148.6,51C138.1,21.3,109.8,0,76.5,0  S14.9,21.3,4.3,51H148.6z"></path>
                            </svg>
                          </a>
                        </li>
                        <li class="" dir="ltr">
                          <a href="http://www.harmony-suites.com/hs11-en">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="flag_en" x="0px" y="0px" viewBox="0 0 153 153" xml:space="preserve" alt="English" title="English">
                              <path style="opacity:0.75;fill:#F4F4F4;" d="M1.7,92.6c0.5,2.4,1.1,4.7,1.9,7h33.3l-22.1,22.1  c0.9,1.3,1.9,2.6,3,3.8l32.9-32.9H1.7z M19.3,127.4c4.7,5.3,10.1,9.9,16,13.6l19.9-19.9V150c2,0.6,4,1.1,6,1.5v-48.2l-32.8,32.8  C25.2,133.5,22.1,130.6,19.3,127.4z M61.3,1.5c-2,0.4-4,0.9-6,1.5v36L31.2,14.8c-1.5,1.1-2.9,2.2-4.3,3.4l34.4,34.5V1.5z M16.4,29.1  c-1.6,2-3.1,4.1-4.5,6.3l21.9,22H2.4c2-7.9,5.3-15.3,9.5-22C4.4,47.2,0.1,61.1,0,76.1c0-4.3,0.4-8.5,1.1-12.7h49.5L16.4,29.1z   M76.5,153c42.3,0,76.5-34.3,76.5-76.5S118.8,0,76.5,0c4.8,0,9.4,0.4,13.9,1.3v51.5l34.9-35c3.9,3.2,7.4,6.8,10.6,10.8l-34.8,34.8  h50.5c0.7,4.3,1.1,8.6,1.1,13.1c0,5.5-0.6,10.9-1.7,16.1h-50l33.4,33.5c-3.3,3.8-6.9,7.4-10.9,10.5l-33.2-33.3v48.4  C85.9,152.6,81.3,153,76.5,153z M97.5,150v-28.9l19.9,19.9C111.3,144.9,104.6,148,97.5,150z M137.9,121.8l-22.1-22.1h33.3  C146.6,107.7,142.8,115.1,137.9,121.8z M150.3,57.4h-31.5l21.9-22C145.1,42.1,148.3,49.5,150.3,57.4z M121.6,14.8L97.5,39V3  C106.3,5.5,114.4,9.5,121.6,14.8z"></path>
                              <path style="opacity:0.7;fill:#293379;" d="M3.6,99.7c2.5,8,6.4,15.5,11.2,22.1l22.1-22.1H3.6z   M35.3,141c6.1,3.9,12.8,7,19.9,9v-28.9L35.3,141z M97.5,150c7.1-2,13.8-5.1,19.9-9l-19.9-19.9V150z M137.9,121.8  c4.9-6.6,8.7-14.1,11.2-22.1h-33.3L137.9,121.8z M150.3,57.4c-2-7.9-5.3-15.3-9.5-22l-21.9,22H150.3z M121.6,14.8  C114.4,9.5,106.3,5.5,97.5,3v36L121.6,14.8z M55.3,3c-8.8,2.5-16.9,6.6-24.1,11.9L55.3,39V3z M11.9,35.4c-4.3,6.7-7.5,14.1-9.5,22  h31.5L11.9,35.4z"></path>
                              <path style="opacity:0.85;fill:#E41D35;" d="M0,76.5c0-4.5,0.4-8.8,1.1-13.1h49.5L16.4,29.1  c3.1-4,6.6-7.6,10.5-10.9l34.4,34.5V1.5c4.9-1,9.9-1.5,15.1-1.5c4.8,0,9.5,0.4,14.1,1.3v51.5l34.9-35c3.9,3.2,7.4,6.8,10.6,10.8  l-34.8,34.8h50.5c0.7,4.3,1.1,8.6,1.1,13.1c0,5.5-0.6,10.9-1.7,16.1h-50l33.4,33.5c-3.3,3.8-6.9,7.4-10.9,10.5l-33.2-33.3v48.4  c-4.6,0.8-9.3,1.3-14.1,1.3c-5.2,0-10.2-0.5-15.1-1.5v-48.2l-32.8,32.8c-3.9-3.2-7.5-6.7-10.8-10.6l32.9-32.9h-49  C0.6,87.4,0,82,0,76.5z"></path>
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>



