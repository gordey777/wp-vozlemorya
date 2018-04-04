<?php /* Template Name: Home Page */ get_header(); ?>




      <?php if( have_rows('main_slider') ): ?>
      <div id="home__slider" class="slider owl-carousel owl-theme uk-container">
        <?php while ( have_rows('main_slider') ) : the_row(); ?>
          <?php $image = get_sub_field('img'); ?>
          <?php $link = get_sub_field('link'); ?>

          <div class="slide item uk-flex uk-flex-middle" >
            <div class="slide_img" style="background-image: url(<?php if ( !empty($image)) { echo $image['url'];} ?>);"></div>
                    <div class="slide_conten_wrapp">
                      <div  class="slide-content" uk-scrollspy-class="">
                        <?php the_sub_field('content'); ?>
                      </div>

                      <?php  if ( !empty($link)) { ?>
                        <div class="uk-button-extra-large green uk-margin-remove-vertical uk-text-center" uk-scrollspy-class="">
                        <a class="el-content uk-button uk-button-default" href="<?php the_sub_field('link'); ?>" class="slide-btn red-btn"><?php the_sub_field('btn_label'); ?></a>
                        </div>
                      <?php } ?>

                    </div>

          </div>
          <?php  endwhile; ?>
        </div>
      <?php endif; ?>


    <div id="hs11" class="uk-section-default uk-section">
      <div class="uk-container">
        <?php if( have_rows('plans_block') ): ?>
          <div class="uk-grid-margin" uk-grid="">
            <?php $i = 0; ?>
            <?php while ( have_rows('plans_block') ) : the_row(); ?>
              <?php $image = get_sub_field('img'); ?>
              <?php $link = get_sub_field('link'); ?>

              <?php $i++; ?>


              <div class="uk-width-expand@m">
                <div id="Invest__<?php echo $i;  ?>" class="green-box request-link uk-margin uk-text-center uk-card uk-card-hover">
                  <a href="<?php the_sub_field('link'); ?>" uk-scroll="" class="el-link uk-position-cover uk-position-z-index uk-margin-remove-adjacent"></a>
                  <?php if ( !empty($image)) { ?>
                    <div class="uk-card-media-top">
                      <img src="<?php echo $image['url'];  ?>" class="el-image" alt="">
                    </div>
                  <?php } ?>
                  <div class="uk-card-body">
                    <h3 class="el-title uk-margin uk-card-title"><?php the_sub_field('title'); ?> <br><?php the_sub_field('price'); ?></h3>
                    <div class="el-content uk-margin">
                      <p><?php the_sub_field('square'); ?></p>
                      <p class="uk-margin-remove"><a class="el-link uk-button uk-button-default"><?php the_sub_field('btn_label'); ?></a></p>
                    </div>
                  </div>
                </div>
              </div>
            <?php  endwhile; ?>

          </div>
        <?php endif; ?>

<div class="uk-container">


        <div class="uk-grid-margin" uk-grid="">
          <div class="uk-width-1-1@m">
            <div>
              <hr class="uk-margin uk-divider-icon green uk-scrollspy-inview uk-animation-fade" uk-scrollspy-class="" style="fill: red !important;">
            </div>
            <h1 class="uk-margin-remove-vertical uk-text-center uk-text-primary">
              <span style="font-size: 24pt;"><?php the_field('short_about_title'); ?></span>
            </h1>
            <div class="uk-margin uk-width-xxlarge uk-margin-auto uk-text-justify uk-dropcap uk-text-lead">
              <?php the_field('short_about_text'); ?>
            </div>
          </div>
        </div>

        <div class="uk-grid-margin" uk-grid="">
          <div class="uk-width-expand@m uk-width-1-2@s"></div>
          <?php if( have_rows('short_about_lists') ): ?>
            <?php while ( have_rows('short_about_lists') ) : the_row(); ?>

              <div class="uk-width-expand@m uk-width-1-2@s">
                <div class="uk-margin uk-text-left uk-text-meta">
                  <h3><?php the_sub_field('subtitle'); ?></h3>
                  <?php if( have_rows('sub_items') ): ?>
                    <?php while ( have_rows('sub_items') ) : the_row(); ?>
                    <span style="color:#21ad00;  padding-RIGHT: 2px"> <i class="fa fa-check"></i> </span><?php the_sub_field('sub_item'); ?>
                    <br>
                    <?php  endwhile; ?>
                  <?php endif; ?>
                </div>

              </div>
            <?php  endwhile; ?>
          <?php endif; ?>
          <div class="uk-width-expand@m uk-width-1-2@s"></div>
        </div>



        <div class="uk-grid-margin" uk-grid="">
          <div class="uk-width-1-1@m">
            <div class="uk-margin uk-width-xxlarge uk-margin-auto uk-text-center">
              <?php the_field('short_about_info'); ?>
            </div>
            <div>
              <hr class="uk-margin uk-divider-icon green uk-scrollspy-inview uk-animation-fade" uk-scrollspy-class="" style="fill: red !important;">
            </div>
          </div>
        </div>

      <?php if( have_rows('short_about_images') ): ?>
        <div class="uk-grid-margin" uk-grid="">
          <?php while ( have_rows('short_about_images') ) : the_row(); ?>
            <?php $image = get_sub_field('img'); ?>
            <?php if ( !empty($image)) { ?>
              <div class="uk-width-expand@m">
                <div class="uk-margin">
                  <img src="<?php echo $image['url'];  ?>" class="el-image" alt="">
                </div>
              </div>
              <?php } ?>
            <?php  endwhile; ?>
          </div>
        <?php endif; ?>

        <?php if( have_rows('floor_plans_img') ): ?>
          <div class="uk-grid-margin" uk-grid="">
            <div class="uk-width-1-1@m">
              <div>
                <hr class="uk-margin uk-divider-icon green uk-scrollspy-inview uk-animation-fade" uk-scrollspy-class="" style="fill: red !important;">
              </div>
              <h2 class="uk-margin-remove-vertical uk-text-center uk-text-primary"><span style="font-size: 24pt;"><?php the_sub_field('floor_plans_title'); ?></span></h2>
            </div>
          </div>

          <div class="uk-grid-margin" uk-grid="">
            <div class="uk-width-1-1@m">
              <div class="uk-margin uk-text-center uk-child-width-1-3 uk-child-width-1-3@m" uk-grid-parallax="translate: ">
            <?php while ( have_rows('floor_plans_img') ) : the_row(); ?>
              <?php $image = get_sub_field('img'); ?>

                <div>
                  <div class="el-item uk-inline-clip uk-transition-toggle">
                    <div class="el-image uk-inline uk-background-norepeat uk-background-cover" style="background-image: url(<?php if ( !empty($image)) { ?><?php echo $image['sizes']['medium'];  ?><?php } ?>);">
                      <img src="<?php echo $image['sizes']['medium']; ?>" alt="" class="uk-invisible">
                    </div>
                    <div class="uk-position-center">
                      <div class="el-content uk-overlay uk-transition-fade uk-overlay-default uk-transition-fade">
                        <h3 class="el-title uk-margin">
          Overlay    </h3>
                      </div>
                    </div>
                    <a  rel="lightbox" href="<?php if ( !empty($image)) { ?><?php echo $image['url'];  ?><?php } ?>" class="uk-position-cover"></a>
                  </div>
                </div>

              <?php  endwhile; ?>

              </div>
              <div>
                <hr class="uk-margin uk-divider-icon green uk-scrollspy-inview uk-animation-fade" uk-scrollspy-class="" style="fill: red !important;">
              </div>
            </div>
          </div>

        <?php endif; ?>

      </div>
      </div>
    </div>







    <div id="gallery" class="uk-section-default uk-section" uk-scrollspy="{&quot;target&quot;:&quot;[uk-scrollspy-class]&quot;,&quot;cls&quot;:&quot;uk-animation-fade&quot;,&quot;delay&quot;:300}">
      <div class="uk-container">
        <?php $gal_images = get_field('lend_gallery_img');

        if( $gal_images ): ?>
          <div class="uk-grid-margin" uk-grid="">
            <?php foreach( $gal_images as $gal_image ): ?>
            <div class="uk-width-expand@m">
              <div class="uk-margin" uk-scrollspy-class="">
                <img src="<?php echo $gal_image['url']; ?>" class="el-image" alt="">
              </div>
            </div>
            <?php endforeach; ?>
          </div>
        <?php endif; ?>


        <div class="uk-grid-margin" uk-grid="">
          <div class="uk-width-1-1@m">
            <div class="uk-margin uk-width-xlarge uk-margin-auto uk-text-center uk-dropcap uk-text-lead" uk-scrollspy-class="">
              <?php the_field('lend_gallery_content'); ?>
            </div>
          </div>
        </div>
        <?php $banner_image = get_field('lend_gallery_baner');
        if( $banner_image ): ?>
          <div class="uk-grid-margin" uk-grid="">
            <div class="uk-width-1-1@m">
              <div class="uk-margin uk-text-center" uk-scrollspy-class="">
                <img src="<?php echo $banner_image['url']; ?>" class="el-image" alt="">
              </div>
            </div>
          </div>
        <?php endif; ?>

        <?php $gal_videos = get_field('lend_gallery_videos');?>
        <?php if ( !empty($gal_videos)) : ?>
          <div class="uk-grid-margin" uk-grid="">
            <div class="uk-width-1-1@m">
              <div>
                <hr class="uk-margin uk-divider-icon green uk-scrollspy-inview uk-animation-fade" uk-scrollspy-class="" style="fill: red !important;">
              </div>
              <div class="uk-margin uk-text-center uk-text-large" uk-scrollspy-class=""><?php the_field('lend_video_title');?></div>
            </div>
          </div>
          <div class="uk-grid-margin" uk-grid="">
            <?php foreach ( $gal_videos as $gal_video ) { ?>
              <div class="uk-width-expand@m">
                <div>
                  <div class="embed-container">
                    <?php echo $gal_video['iframe']; ?>
                  </div>
                </div>
              </div>
            <?php } ?>
          </div>
        <?php endif;?>
        <div class="uk-grid-margin" uk-grid="">
          <div class="uk-width-1-1@m">
            <div>
              <hr class="uk-margin uk-divider-icon green uk-scrollspy-inview uk-animation-fade" uk-scrollspy-class="" style="fill: red !important;">
            </div>
          </div>
        </div>
      </div>
    </div>


    <div id="payments-awards-location" class="uk-section-default uk-section" uk-scrollspy="{&quot;target&quot;:&quot;[uk-scrollspy-class]&quot;,&quot;cls&quot;:&quot;uk-animation-slide-top&quot;,&quot;delay&quot;:300}">
      <div class="uk-container">
        <div class="uk-grid-margin" uk-grid="">
          <div class="uk-width-expand@m">
            <h2 class="uk-margin-remove-vertical uk-text-left uk-text-primary" uk-scrollspy-class=""><span style="font-size: 24pt;"><?php the_field('land_payments_title'); ?></span></h2>
            <div><?php the_field('land_payments_cont'); ?></div>
          </div>
          <div class="uk-width-expand@m">
            <h2 class="uk-margin-remove-vertical uk-text-left uk-text-primary" uk-scrollspy-class=""><span style="font-size: 24pt;"><?php the_field('land_award_title'); ?></span></h2>
            <div class="uk-margin" uk-scrollspy-class="">
              <?php $award_image = get_field('land_award_img');
              if( $award_image ): ?>
               <img src="<?php echo $award_image['url']; ?>" class="el-image" alt="">
              <?php endif; ?>

            </div>
            <div><?php the_field('land_award_content'); ?></div>
          </div>
        </div>
      </div>
    </div>


    <div id="testimonials" class="uk-section-default uk-section" uk-scrollspy="{&quot;target&quot;:&quot;[uk-scrollspy-class]&quot;,&quot;cls&quot;:&quot;uk-animation-fade&quot;,&quot;delay&quot;:300}">
      <div class="uk-container">
        <div class="uk-grid-margin" uk-grid="">
          <div class="uk-width-1-1@m">
            <div>
              <hr class="uk-margin uk-divider-icon green uk-scrollspy-inview uk-animation-fade" uk-scrollspy-class="" style="fill: red !important;">
            </div>
            <h2 class="uk-margin-remove-vertical uk-text-center uk-text-primary" uk-scrollspy-class=""><span style="font-size: 24pt;"><?php the_field('lend_map_title'); ?></span></h2>
            <div class="uk-margin uk-width-large uk-margin-auto uk-text-center" uk-scrollspy-class="">
              <?php $location = get_field('land_map'); ?>
              GPS: Latitude: <?php echo mb_strimwidth($location['lat'], 0, 10); ?> | Longitude: <?php echo mb_strimwidth($location['lng'], 0, 10); ?></div>
          </div>
        </div>
        <div class="uk-grid-margin" uk-grid="">
          <div class="uk-width-expand@m">
            <?php if( !empty($location) ): ?>
              <div class="acf-map uk-position-relative uk-position-z-index"  uk-scrollspy-class="" style="height:350px">
                <div class="marker"  data-lat="<?php echo $location['lat']; ?>" data-lng="<?php echo $location['lng']; ?>"></div>
              </div>
            <?php endif; ?>
          </div>
          <div class="uk-width-expand@m">
            <div class="uk-margin" uk-scrollspy-class="">
              <?php $map_image = get_field('land_map_img'); ?>
              <?php if ( !empty($map_image)) { ?>
                <img src="<?php echo $map_image['url'];  ?>" class="el-image" alt="">
              <?php } ?>
            </div>
          </div>
        </div>

        <div class="uk-grid-margin" uk-grid="">
          <div class="uk-width-1-1@m">
            <div>
              <hr class="uk-margin uk-divider-icon green uk-scrollspy-inview uk-animation-fade" uk-scrollspy-class="" style="fill: red !important;">
            </div>
            <h2 class="uk-margin-remove-vertical uk-text-center uk-text-primary" uk-scrollspy-class=""><?php the_field('lend_reviews_title'); ?></h2>
            <div class="uk-margin uk-width-medium uk-margin-auto uk-text-center" uk-scrollspy-class=""><?php the_field('lend_reviews_subtitle'); ?></div>
          </div>
        </div>

        <div class="uk-grid-margin" uk-grid="">

          <?php if( have_rows('lend_reviews') ): ?>

            <div class="uk-width-expand@m">
              <div class="uk-margin uk-grid-match uk-child-width-1-1 uk-child-width-1-1@m" uk-scrollspy-class="uk-animation-slide-left-medium" uk-grid="">
                <?php while ( have_rows('lend_reviews') ) : the_row(); ?>
                  <?php $rev_image = get_sub_field('img'); ?>

                  <div>
                    <div uk-scrollspy-class="" class="el-item uk-panel">
                      <div class="uk-child-width-expand uk-flex-middle" uk-grid="">
                        <div class="uk-width-1-5@m">
                          <div class="uk-box-shadow-bottom">
                            <?php if ( !empty($rev_image)) { ?>
                              <img src="<?php echo $rev_image['url'];  ?>" class="el-image uk-border-circle uk-box-shadow-medium" alt="">
                            <?php } ?>
                          </div>
                        </div>
                        <div>
                          <div class="el-content uk-margin">
                            <blockquote class="uk-margin-remove uk-text-center-xsmall" style="font-size:17px;">
                              <p class="tm-compensate-whitespace-top uk-text-left uk-text-center-xsmall uk-margin-small"><?php the_sub_field('content'); ?></p>
                              <small class="uk-text-left uk-text-muted"><?php the_sub_field('name'); ?></small>
                            </blockquote>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                <?php  endwhile; ?>
              </div>
            </div>

          <?php endif; ?>


          <?php $rev_video = get_field('video_review');?>
          <?php if ( !empty($rev_video)) { ?>
            <div class="uk-width-expand@m">
              <div>
                <div class="embed-container">
                  <?php echo $rev_video['iframe']; ?>
                </div>
              </div>
            </div>
          <?php } ?>
        </div>
        <div class="uk-grid-margin" uk-grid="">
          <div class="uk-width-1-1@m">
            <div>
              <hr class="uk-margin uk-divider-icon green uk-scrollspy-inview uk-animation-fade" uk-scrollspy-class="" style="fill: red !important;">
            </div>
          </div>
        </div>
      </div>
    </div>



    <div id="trip" class="uk-section-default uk-section" uk-scrollspy="{&quot;target&quot;:&quot;[uk-scrollspy-class]&quot;,&quot;cls&quot;:&quot;uk-animation-slide-left&quot;,&quot;delay&quot;:300}">
      <div class="uk-container">
        <div class="uk-grid-margin" uk-grid="">
          <div class="uk-width-expand@m">
            <div class="uk-margin uk-panel" uk-scrollspy-class="">
              <h3 class="el-title uk-margin uk-h2"><?php the_field('view_tour_title'); ?></h3>
            </div>
            <div class="uk-button-extra-large green uk-margin-remove-vertical uk-text-center" uk-scrollspy-class="uk-animation-slide-right">

              <a class="el-content uk-button uk-button-primary uk-button-large" href="#request<?php //the_field('view_tour_link'); ?>" uk-scroll="">
                <?php the_field('view_tour_link_label'); ?>
              </a>
            </div>
          </div>


          <?php if( have_rows('view_tour_adv') ): ?>
            <div class="uk-width-3-4@m">
              <div class="uk-margin uk-grid-match uk-child-width-1-1 uk-child-width-1-3@m" uk-scrollspy-class="" uk-grid="">

                <?php while ( have_rows('view_tour_adv') ) : the_row(); ?>
                  <?php $image = get_sub_field('img'); ?>
                  <div>
                    <div uk-scrollspy-class="" class="el-item uk-card uk-card-default uk-card-small uk-card-body">
                      <?php if ( !empty($image)) { ?>
                        <img src="<?php echo $image['url'];  ?>" class="el-image" alt="">
                      <?php } ?>

                      <div class="el-content uk-margin"><?php the_sub_field('content'); ?></div>
                    </div>
                  </div>
                <?php  endwhile; ?>

              </div>
            </div>
          <?php endif; ?>

        </div>
        <div class="uk-grid-margin" uk-grid="">
          <div class="uk-width-1-1@m">
            <div>
              <hr class="uk-margin uk-divider-icon green uk-scrollspy-inview uk-animation-fade" uk-scrollspy-class="" style="fill: red !important;">
            </div>
          </div>
        </div>
      </div>
    </div>



<div id="request" class="uk-section-default">
  <div style="background-image: url('/<?php echo get_template_directory_uri(); ?>/img/sunny-beach_bw.jpg');" class="uk-background-norepeat uk-background-cover uk-background-center-center uk-section">
    <div class="uk-container">
      <div class="uk-grid-margin uk-grid" uk-grid="">
        <div class="uk-width-large@m uk-first-column">
          <div class="uk-panel">
            <div class="custom">
              <div>
                <span style="display:inline-block; overflow:hidden; width:60%; height:0; padding-bottom:60%; border-radius:50%;">
    <img alt="Вячеслав Пулев" src="<?php echo get_field('lend_consalt_img')['url']; ?>">
  </span>
              </div>
              <div class="uk-margin-remove-vertical uk-text-primary uk-text-large"><?php the_field('lend_consalt_name'); ?></div>
              <div class="uk-margin-remove-vertical"><?php the_field('lend_consalt_position'); ?></div>
              <div class="uk-margin-top uk-clearfix">
                <a class="contacts_callback" data-toggle="modal" href="#mod__callback">Callback</a>
              </div>
              <div class="uk-margin-top uk-clearfix">
                <i class="fa fa-phone" style="margin-right:3px;"></i> <a href="tel:<?php the_field('lend_consalt_tel1'); ?>"><?php the_field('lend_consalt_tel1'); ?></a>
                <i class="fa fa-whatsapp" style="color:#47C252; margin-left:5px;" title="WhatsApp"></i>
                <i style="color:#7C529E; margin-left:3px;" class="uk-icon ftl-icon-viber" title="Viber"></i>
              </div>
              <div class="uk-margin-top uk-clearfix">
                <i class="fa fa-phone" style="margin-right:3px;"></i> <a href="tel:<?php the_field('lend_consalt_tel2'); ?>"><?php the_field('lend_consalt_tel2'); ?></a>
                <i class="fa fa-whatsapp" style="color:#47C252; margin-left:5px;" title="WhatsApp"></i>
                <i style="color:#7C529E; margin-left:3px;" class="uk-icon ftl-icon-viber" title="Viber"></i>
              </div>
              <div class="uk-margin-remove uk-clearfix">
                <i class="fa fa-at" style="margin-right:3px;"></i> <a href="mailto:<?php the_field('lend_consalt_mail'); ?>"><?php the_field('lend_consalt_mail'); ?></a>
              </div>
              <div class="uk-margin-remove uk-clearfix">
                <i class="fa fa-skype" style="margin-right:3px;"></i> <a href="s<?php the_field('lend_consalt_skype'); ?>"><?php the_field('lend_consalt_skype'); ?></a>
              </div>
            </div>
          </div>
        </div>
        <div class="uk-width-expand@m">
          <h2 class="uk-text-primary"><?php the_field('lend_form_title'); ?></h2>
          <div class="uk-margin"><?php the_field('lend_form_subtitle'); ?></div>
          <div class="uk-panel">
            <div class="visforms-form">
              <div class="alert alert-danger error-note" style="display: none;"></div>
              <div class="category-desc">
              </div>

<?php $form__code = get_field('lend_form_shortcode'); ?>
<?php echo do_shortcode($form__code); ?>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>






<?php get_footer(); ?>
