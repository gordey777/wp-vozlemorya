<?php /*
Template Name: Контакты
*/
get_header(); ?>


<?php if (have_posts()): while (have_posts()) : the_post(); ?>

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



<?php get_sidebar(); ?>

<div id="tm-breadcrumbs" class="uk-block tm-block-breadcrumbs tm-parallax-background tm-block-padding-collapse " style="background-image: url(<?php echo get_template_directory_uri(); ?>/img/p_back.jpg); background-size: auto; background-repeat: no-repeat; background-position: 50% 0%;" data-uk-parallax="{bgp:'70%'}">
  <div class="tm-breadcrumbs-highcontrast">
    <div class="uk-container uk-container-center">
      <?php easy_breadcrumbs(); ?>


    </div>
  </div>
</div>





<div class="uk-block tm-block-main uk-block-default">
  <div class="uk-container uk-container-center">
    <div id="tm-middle" class="tm-middle uk-grid" data-uk-grid-match="" data-uk-grid-margin="">
      <div class="tm-main uk-width-medium-1-1">
        <main id="post-<?php the_ID(); ?>"  <?php post_class('tm-content'); ?>>
          <div id="system-message-container"> </div>
          <article class="uk-article">
            <h1 class="uk-article-title"><?php the_title(); ?></h1>
            <?php the_content(); ?>

          <?php if( have_rows('workers') ): ?>

            <div id="wk-grid8cc" class="uk-grid-width-1-1 uk-grid-width-small-1-1 uk-grid-width-medium-1-2 uk-grid-width-large-1-2 uk-grid-width-xlarge-1-2 uk-grid uk-grid-match uk-grid-medium uk-text-left " data-uk-grid-match="{target:'> div > .uk-panel', row:true}" data-uk-grid-margin="">

            <div class="uk-width-3-4@m">
              <div class="uk-margin uk-grid-match uk-child-width-1-1 uk-child-width-1-3@m" uk-scrollspy-class="" uk-grid="">

                <?php while ( have_rows('workers') ) : the_row(); ?>
                  <?php $image = get_sub_field('img'); ?>
                  <?php $cyty = get_sub_field('cyty'); ?>
                  <?php $mail = get_sub_field('mail'); ?>
                  <?php $skype = get_sub_field('skype'); ?>
                  <?php $tel2 = get_sub_field('tel2'); ?>


                <div class=" uk-panel uk-width-small-1-1 uk-width-medium-1-1 uk-width-large-1-2" style="min-height: 136px;">
                  <div class="uk-grid uk-grid-small " data-uk-grid-margin="">
                    <div class="uk-position-relative uk-text-center-xsmall  uk-width-small-3-10 uk-width-medium-3-10 uk-width-large-1-3 uk-row-first">
                      <img src="<?php echo $image['url'];  ?>" alt="<?php the_sub_field('name'); ?>" style="">
                    </div>
                    <div class="uk-width-small-7-10 uk-width-medium-7-10 uk-width-large-2-3">
                      <div class="uk-panel uk-text-center-xsmall">
                        <div class="uk-h3 uk-h4 uk-margin-top-remove uk-margin-bottom-remove uk-margin-bottom-remove tm-alt-font  tm-text-highlight tm-compensate-whitespace-top"><?php the_sub_field('name'); ?></div>
                        <p class="uk-margin-top-remove  tm-alt-font  "><?php the_sub_field('position'); ?></p>
                        <?php if($cyty){ ?>
                          <p class="uk-margin-top-remove  tm-alt-font  ">
                            <i class="uk-icon-map-marker"  style="margin-right:3px;"></i><?php the_sub_field('cyty'); ?>
                          </p>
                        <?php } ?>
                        <div class="uk-margin">

                          <div class="uk-margin-remove uk-clearfix"> <i class="uk-icon uk-icon-phone" style="margin-right:3px;"></i>
                            <a href="tel:<?php the_sub_field('tel1'); ?>"><?php the_sub_field('tel1'); ?></a>
                            <i class="uk-icon uk-icon-whatsapp" style="color:#47C252; margin-left:5px;" title="WhatsApp"></i><i style="color:#7C529E; margin-left:3px;" class="uk-icon ftl-icon-viber" title="Viber"></i>
                          </div>
                        <?php if($tel2){ ?>
                          <div class="uk-margin-remove uk-clearfix"> <i class="uk-icon uk-icon-phone" style="margin-right:3px;"></i>
                            <a href="tel:<?php the_sub_field('tel2'); ?>"><?php the_sub_field('tel2'); ?></a>
                            <i class="uk-icon uk-icon-whatsapp" style="color:#47C252; margin-left:5px;" title="WhatsApp"></i><i style="color:#7C529E; margin-left:3px;" class="uk-icon ftl-icon-viber" title="Viber"></i>
                          </div>
                        <?php } ?>
                        <?php if($mail){ ?>
                          <div class="uk-margin-remove uk-clearfix">
                            <i class="uk-icon uk-icon-at" style="margin-right:3px;"></i> <span id="cloak7025c93c6fa81b265224ab9bc786edb7"><a href="mailto:<?php the_sub_field('mail'); ?>"><?php the_sub_field('mail'); ?></a></span>
                          </div>
                        <?php } ?>
                        <?php if($skype){ ?>
                          <div class="uk-margin-remove uk-clearfix">
                            <i class="uk-icon uk-icon-skype" style="margin-right:3px;"></i> <a href="skype:<?php the_sub_field('skype'); ?>"><?php the_sub_field('skype'); ?></a>
                          </div>
                        <?php } ?>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <?php endwhile; ?>

            </div>
          <?php endif; ?>
              <div class="uk-grid uk-margin" data-uk-grid-margin="">

                <div class="uk-width-1-1 uk-width-large-2-3">
                  <p class="uk-h3"><?php the_field('contacts_form_title'); ?></p>
                  <div class="sendrequest-form">
                    <div class="visforms-form">
                      <div class="alert alert-danger error-note" style="display: none;"></div>
                      <div class="category-desc"><?php the_field('contacts_form_subtitle'); ?></div>
                        <?php $form__code = get_field('contacts_form_shortcode'); ?>
                        <?php echo do_shortcode($form__code); ?>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
<?php $map = get_field('cont_map'); ?>
 <?php if($map){ ?>

            <div class="uk-accordion uk-margin-large" data-uk-accordion="{showfirst: false}">
              <p class="uk-h3 uk-accordion-title uk-padding-remove uk-text-center-xsmall" style="border: 0 none;"><span class="uk-button">Карта</span></p>
              <div class="uk-accordion-content uk-padding-remove">
                <div class="uk-hidden" id="wk-map-ex5a710a4fc0d3c-marker-1">
                  <div class="uk-text-left">
                    <p class="uk-h4 uk-margin-top-remove">Комплекс „Harmony Suites II”</p>
                    <div class="uk-margin">Солнечный Берег 8240
                      <br> <a href="tel:359897001800">+359 897 001 800</a></div>
                  </div>
                </div>
<?php } ?>
              </div>
            </div>
          </article>
        </main>
      </div>
    </div>
  </div>
</div>



  <?php endwhile; endif; ?>






<?php get_footer(); ?>
