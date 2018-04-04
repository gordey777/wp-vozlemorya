

</div><!-- /wrapper -->

  <?php

  $currentLanguage  = get_bloginfo('language');

  if ( $currentLanguage == "ru-RU" ) {
    $home__id = '37';

  }  else if ( $currentLanguage == "en-US" ) {
    $home__id = '1627';

  } else if ( $currentLanguage == "pl-PL" ) {
    $home__id = '1597';

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

  <div class="order-tours--container">
    <div class="order-tours">
      <div class="order-tours--item order-tours--item-1">
        <h5>Смотровой тур на двоих за 250 евро</h5>
        <button data-toggle="modal" href="#modal-order" >Подпишись сейчас</button>
      </div>
      <div class="order-tours--item order-tours--item-2">
        <p>Наш опытный персонал организует вашу поездку с момента вашего прибытия в Болгарию до самого отьезда</p>
      </div>
      <div class="order-tours--item order-tours--item-3">
        <h5>Путешествовать</h5>
        <ul>
          <li>Бронирование и покупка авиабилетов, страховка</li>
          <li>Трансфер из аэропорта и обратно</li>
        </ul>
      </div>
      <div class="order-tours--item order-tours--item-4">
        <h5>Проживание и обслуживание</h5>
        <ul>
          <li>Бесплатное проживание в Harmony Suites</li>
          <li>Личный риэлтор</li>
        </ul>
      </div>
    </div><!-- /.order-tours -->
    <a href="#" class="order-tours--close">X</a>
  </div><!-- /.order-tours--container -->

</footer><!-- /footer -->

  <a class="head_callback" data-toggle="modal" href="#mod__callback" onclick="ga('send', 'event', { eventCategory: '/', eventAction: '#callback_form', eventLabel: '#callback_form'});">Call Back</a>

  <div class="modal fade modal-order" id="modal-order">
    <div class="modal-dialog">
      <div class="modal-body">
         <button class="close" data-dismiss="modal" aria-label="Close">×</button>
          <div class="container-fluid">
          <div class="col-md-12">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo nesciunt sit quibusdam atque aspernatur labore praesentium, excepturi veniam, cupiditate consequatur optio odio eos sequi id consequuntur at voluptates ut repudiandae?
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /#modal-order.modal fade modal-order -->

  <?php if (get_field('callback', $home__id)) { ?>
    <div class="modal fade modal-callback" id="mod__callback" tabindex="-1">
      <div class="modal-dialog">
          <div class="modal-body">
            <button class="close" data-dismiss="modal" aria-label="Close">×</button>
            <div class="container-fluid">
            <div class="col-md-12">
              <h2><?php the_field('callback_title', $home__id); ?></h2>
              <p><?php the_field('callback_subitle', $home__id); ?></p>

              <?php $form__callback = get_field('callback', $home__id); ?>
              <?php echo do_shortcode($form__callback); ?>
            </div>
          </div>
        </div>
      </div>
    </div>
  <?php } ?>

  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBcayTYSI4rr00RHsTKXYNHSRY5JnMcAYY"></script>
  <?php wp_footer(); ?>


  <script src="<?php echo get_template_directory_uri(); ?>/js/bootstrap.min.js" type="text/javascript"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/js/owl.carousel.min.js" type="text/javascript"></script>

  <script src="<?php echo get_template_directory_uri(); ?>/js/scripts-d0ec24c5.js" type="text/javascript"></script>

  <?php if(is_page_template('front-page.php')) {?>


  <?php } else {?>

  <?php } ?>

<script type="text/javascript">
document.addEventListener( 'wpcf7mailsent', function( event ) {
    if ( '1701' == event.detail.contactFormId ) {
        ga('send', 'event', { eventCategory: '/', eventAction: '#callback_form_submit', eventLabel: '#callback_form_submit'});
    }
}, false );
document.addEventListener( 'wpcf7mailsent', function( event ) {
    if ( '1702' == event.detail.contactFormId ) {
    ga('send', 'event', { eventCategory: '/', eventAction: '#callback_form_submit', eventLabel: '#callback_form_submit'});
    }
}, false );
document.addEventListener( 'wpcf7mailsent', function( event ) {
    if ( '1703' == event.detail.contactFormId ) {
    ga('send', 'event', { eventCategory: '/', eventAction: '#callback_form_submit', eventLabel: '#callback_form_submit'});
    }
}, false );
document.addEventListener( 'wpcf7mailsent', function( event ) {
    if ( '36' == event.detail.contactFormId ) {
    ga('send', 'event', { eventCategory: '/', eventAction: '#write_us_submit', eventLabel: '#write_us_submit'});
    }
}, false );
document.addEventListener( 'wpcf7mailsent', function( event ) {
    if ( '1618' == event.detail.contactFormId ) {
    ga('send', 'event', { eventCategory: '/', eventAction: '#write_us_submit', eventLabel: '#write_us_submit'});
    }
}, false );
document.addEventListener( 'wpcf7mailsent', function( event ) {
    if ( '1619' == event.detail.contactFormId ) {
    ga('send', 'event', { eventCategory: '/', eventAction: '#write_us_submit', eventLabel: '#write_us_submit'});
    }
}, false );
</script>

<link href="//vozlemorya.com/telegram/telegram-site-helper.css" rel="stylesheet">
<script type="text/javascript" src="//vozlemorya.com/telegram/telegram-site-helper.js"></script>

<script type="text/javascript">
telegramSiteHelper={"apiUrl":"//vozlemorya.com/telegram/telegram-site-helper-api.php", "translationType":"sse", "type":"popup", "showLabel":true, "parentElementId":"", "popupbyelement":"", "chatPosition":"lt", "attachFile":true, "maxFileSize":"12048", "requireName":false, "overrideChatCustomerName":null, "requirePhone":false, "mainColor":"#eeeeee", "accentColor":"#bdd649", "textColor":"#000000", "fontFamily":"'Open Sans', 'Roboto'", "boxWidth":"360px", "boxHeight":"40%", "boxZindex":"", "label":"On-line chat", "yourName":"Enter your name", "yourPhone":"Enter your phone", "startChat":"Start", "enterYourMessage":"Enter you message and press enter", "you":"You", "manager":"Manager", "noManagersAvailable":"No managers available", "attachFileTitle":"Attach file", "maxFileSizeError":"Error: max file size is:", "base64string":"data:audio/mp3;base64,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///////////////////9AJptuSSySXNupuQBAzGDNYi80v1z4dkrcEAyXzDAQ5WMXP2AiorfR3uFlyZtVW4ywVWFaxNioVM17QFBHw2QVip2W0iPfUHZZBKG540kjXn6AnaVl/qI345X/1f7epj/UccZ7WIvlyCsO/Xdzqdf+ve18zb0r9ptTfvlL0vua/Gs5hnYKVbmluZvX0r+ahcw84Aezcp0s5xVl6glpJuONyuOSifAHQ6pWUwhNjibY0FleqVQwkVFR0DLtISVImSFU0KSJNksKcshMliaeKuRNXktjYNQ9yQakA2EMFR4NUFrWrKFnWBa9qYaK0VYqio0rB0mypRxJrNNrRRy01tYrRTiqFQdIrDSKwsMSa1k//uQwPGAGpmjOaw9DbJsqqU1h7G1mrRVrTWtrDSKoc7OsNKwzNNFNNNRVrTSqLBzrDSsmwVRBKX/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////tklJKU1S2AoNQaBmHohDyQCuv5E8tOio0HypwuojYnBNVJdg0KQsMh4aTSTSTSTODR0ojYaZld/KIkhIEBiQIWYTQuCzSj4WicaUz1NGnAYEKAzD4uHZni0UjTiy2dnOLKLLKPi8392vKk4sootnZ2LKOLMtBc0/+VJxpRZZRZlw7FllXGzTsztNGnFlFFlXFw7M8XlSU9T///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////uQwP+AHoGTK6elDapfs9kwxJm1//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//uQwP+AMYABLgAAACAAACXAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"}
document.addEventListener("DOMContentLoaded", function(){startTelegramSiteHelper(telegramSiteHelper);});
</script>

</body>
</html>
