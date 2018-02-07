

</div><!-- /wrapper -->

  <?php

  $currentLanguage  = get_bloginfo('language');

  if ( $currentLanguage == "ru-RU" ) {
    $home__id = '37';

  }  else if ( $currentLanguage == "en-US" ) {
    $home__id = '1457';

  }
  ?>
<footer>
      <div class="uk-container">
        <div class="footer_logo_wrapp">
          <?php if ( !is_front_page() && !is_home() ){ ?>
            <a href="<?php echo home_url(); ?>" class="logo">
          <?php } else { ?>
            <span class="logo">
          <?php } ?>
              <img src="<?php echo get_template_directory_uri(); ?>/img/logo_crest.svg" class="uk-responsive-height" alt="Harmony Suites">
              <img src="<?php echo get_template_directory_uri(); ?>/img/logo_crest_inverse.svg" class="uk-responsive-height uk-logo-inverse">
          <?php if ( !is_front_page() && !is_home() ){ ?>
            </a>
          <?php } else { ?>
            </span>
          <?php } ?>

        </div>

        <div class="uk-panel uk-margin-top">
          <?php wpeFootNav(); ?>

        </div>
        <div class="uk-panel uk-margin-top">
    <p class="copyright">
      &copy; <?php echo date("Y"); ?> <?php bloginfo('name'); ?>.
    </p><!-- /copyright -->

        </div>

      </div>


</footer><!-- /footer -->

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBcayTYSI4rr00RHsTKXYNHSRY5JnMcAYY"></script>
    <?php wp_footer(); ?>


  <script src="<?php echo get_template_directory_uri(); ?>/js/bootstrap.min.js" type="text/javascript"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/js/owl.carousel.min.js" type="text/javascript"></script>

<script src="<?php echo get_template_directory_uri(); ?>/js/scripts-d0ec24c5.js" type="text/javascript"></script>
    <?php if(is_page_template('front-page.php')) {?>


  <?php } else {?>

  <?php } ?>
<!--
<script type="text/javascript">
document.addEventListener( 'wpcf7mailsent', function( event ) {
    if ( '1118' == event.detail.contactFormId ) {
        ga('send', 'event', { eventCategory: '/property', eventAction: '#getCallBack', eventLabel: '#getCallBack'});
    }
}, false );
document.addEventListener( 'wpcf7mailsent', function( event ) {
    if ( '4' == event.detail.contactFormId ) {
    ga('send', 'event', { eventCategory: '/property', eventAction: '#formcontrol', eventLabel: '#formcontrol'})
    }
}, false );
document.addEventListener( 'wpcf7mailsent', function( event ) {
    if ( '1119' == event.detail.contactFormId ) {
    ga('send', 'event', { eventCategory: '/property', eventAction: '#formcontrol', eventLabel: '#formcontrol'})
    }
}, false );
document.addEventListener( 'wpcf7mailsent', function( event ) {
    if ( '604' == event.detail.contactFormId ) {
    ga('send', 'event', { eventCategory: '/property', eventAction: '#formcontrol', eventLabel: '#formcontrol'})
    }
}, false );
</script> -->


</body>
</html>
