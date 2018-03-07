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
    <?php if(is_page_template('front-page.php')) {?>
<link href="<?php echo get_template_directory_uri(); ?>/css/landing-main.css" rel="stylesheet" type="text/css">
  <?php } else {?>
<link href="<?php echo get_template_directory_uri(); ?>/css/contacts.css" rel="stylesheet" type="text/css">
  <?php } ?>
  <?php wp_head(); ?>






<!--     <script src='https://www.google.com/recaptcha/api.js'></script>
    <!– Global site tag (gtag.js) - Google Analytics –>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-99843530-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-99843530-1');
    </script> -->
</head>

<!--         <?php if ( !is_front_page() && !is_home() ){ ?>
  <a href="<?php echo home_url(); ?>">
<?php } ?>
    <img src="<?php echo get_template_directory_uri(); ?>/img/logo.png" alt="<?php wp_title( '' ); ?>" title="<?php wp_title( '' ); ?>" class="logo-img">
<?php if ( !is_front_page() && !is_home() ){ ?>
  </a>
<?php } ?> -->

<body <?php body_class('tm-noblog'); ?>>

  <div class="wrapper">

    <header>
  <?php

  $currentLanguage  = get_bloginfo('language');

  if ( $currentLanguage == "ru-RU" ) {
    $home__id = '37';

  }  else if ( $currentLanguage == "en-US" ) {
    $home__id = '1457';

  } else if ( $currentLanguage == "pl-PL" ) {
    $home__id = '1597';

  }
  ?>

      <div class="uk-container">
        <div class="logo_wrapp">
          <?php if ( !is_front_page() && !is_home() ){ ?>
            <a href="<?php echo home_url(); ?>" class="logo">
          <?php } else { ?>
            <span class="logo">
          <?php } ?>
              <img src="<?php echo get_template_directory_uri(); ?>/img/logo_crest.svg" class="uk-responsive-height" alt="Harmony Suites">
<!--               <img src="<?php echo get_template_directory_uri(); ?>/img/logo_crest_inverse.svg" class="uk-responsive-height uk-logo-inverse"> -->
          <?php if ( !is_front_page() && !is_home() ){ ?>
            </a>
          <?php } else { ?>
            </span>
          <?php } ?>

        </div>
        <?php if( have_rows('head_phones', $home__id) ): ?>
          <div class="phon_wrapp">
            <div class="phones_title"><?php the_field('phones_title', $home__id); ?></div>
            <div class="phones">
              <?php while ( have_rows('head_phones', $home__id) ) : the_row(); ?>
                <a href="tel:<?php the_sub_field('phone'); ?>" class="phone"><i></i><?php the_sub_field('phone'); ?></a>
              <?php  endwhile; ?>
            </div>
          </div>
        <?php endif; ?>
      </div>
      <div class="menu_wrapp">
        <div class="uk-container">
          <nav class="main__menu">            <div class="lang_wrapp">
              <?php wpeLangNav(); ?>
            </div>
            <?php wpeHeadNav(); ?>
<div class="mob_overlay"></div>
          </nav>
          <div id="humburger" class="humburger"><i class="fa fa-bars"></i></i></div>

        </div>
      </div>
    </header>





