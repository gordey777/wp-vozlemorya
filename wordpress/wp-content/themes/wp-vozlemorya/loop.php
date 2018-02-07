<?php if (have_posts()): while (have_posts()) : the_post(); ?>
  <div id="post-<?php the_ID(); ?>" <?php post_class('looper'); ?>>
    <?php //$gal__id = get_ID(); ?>
    <?php $gallery_images = get_field('apartments_gallery');

      $image = $gallery_images[0];
      $imageid = $image['id'];
    ?>



    <?php //the_field('floor'); ?>
<!-- location_title
location_country -->
    <div class="uk-panel uk-panel-box uk-panel-box-hover uk-overlay-hover">
      <a class="uk-position-cover uk-position-z-index" href="<?php the_permalink(); ?>"></a>
      <p class="uk-h4 uk-margin-top-remove uk-margin-bottom-remove uk-margin-bottom-remove tm-alt-font  tm-text-highlight tm-compensate-whitespace-top">
        <a class="uk-link-reset" href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
      </p>
      <p class="uk-margin-top-remove  tm-alt-font  "><?php the_field('location'); ?></p>
      <div class="uk-margin uk-text-center uk-position-relative">
        <div class="uk-overlay" style="width:100%;">
        <?php if ( has_post_thumbnail()) { ?>
          <img src="<?php echo the_post_thumbnail_url('medium'); ?>"  class=" uk-overlay-scale" title="<?php the_title(); ?>" alt="<?php the_title(); ?>"  width="100%"/>
        <?php } else if( $imageid != '' ) { ?>
          <img src="<?php echo $image['sizes']['medium']; ?>" title="<?php the_title(); ?>" alt="<?php the_title(); ?>" />
        <?php } else { ?>
          <img src="<?php echo catchFirstImage(); ?>" title="<?php the_title(); ?>" alt="<?php the_title(); ?>" />
        <?php } ?>

        </div>
      </div>
      <div class="uk-margin-remove uk-grid uk-grid-collapse uk-position-relative" data-uk-grid-margin="" style="opacity:.6; cursor:pointer; z-index:99999999;">
        <div data-uk-tooltip="" title="View" class="uk-width-1-5 uk-width-medium-1-5 uk-text-center tm-alt-font" style="white-space:nowrap;"><i class="uk-icon-eye"></i>
          <br><span style="font-size:12px;"><?php the_field('view'); ?></span></div>
        <div data-uk-tooltip="" title="Area" class="uk-width-1-5 uk-width-medium-1-5 uk-text-center tm-alt-font" style="white-space:nowrap;"><i class="uk-icon-square-o"></i>
          <br><span style="font-size:12px;"><?php the_field('area'); ?></span></div>
        <div data-uk-tooltip="" title="Living area" class="uk-width-1-5 uk-width-medium-1-5 uk-text-center tm-alt-font" style="white-space:nowrap;"><i class="uk-icon-check-square-o"></i>
          <br><span style="font-size:12px;"><?php the_field('living_area'); ?></span></div>
        <div data-uk-tooltip="" title="Rooms" class="uk-width-1-5 uk-width-medium-1-5 uk-text-center tm-alt-font" style="white-space:nowrap;"><i class="uk-icon-qrcode"></i>
          <br><span style="font-size:12px;"><?php the_field('rooms'); ?></span></div>
        <div data-uk-tooltip="" title="Bathrooms" class="uk-width-1-5 uk-width-medium-1-5 uk-text-center tm-alt-font" style="white-space:nowrap;"><i class="uk-icon-tint"></i>
          <br><span style="font-size:12px;"><?php the_field('bathrooms'); ?></span></div>
      </div>
      <div class="tm-block-divider uk-margin uk-clearfix">&nbsp;</div>
      <div class="uk-margin">
        <div class="uk-grid uk-grid-small">
          <div class="uk-width-1-1 uk-margin">
            <p class="uk-text-justify" style="font-size: 14px; line-height: normal;"><?php wpeExcerpt('wpeExcerpt20'); ?></p>
          </div>
          <div class="uk-width-2-5 tm-price">
            <p style="color: rgb(255, 255, 255) ! important; font-weight: 600; text-align: right; font-size: 25px; line-height: 13px; padding: 4px 5px; background: rgb(81, 159, 9);" class="uk-margin-small tm-alt-font"><i class="fa fa-eur"> </i>
                        <?php $output = get_field('price');
                        $price = number_format( $output, 0, '.', ',');
                        echo $price; ?>
            </p>
            <p class="uk-margin-remove tm-alt-font uk-text-small uk-text-muted" style="padding-top: 2px;"><?php the_field('property_type'); ?></p>
          </div>
          <div class="uk-width-3-5">
            <p style="line-height: 20px; padding-left: 7px; font-size: 18px; margin-top:1px; margin-bottom:4px;">Saint Vlas</p>
            <p class="uk-margin-remove" style="line-height: 20px; padding-left: 7px; paddin-bottom:2px;">Bulgaria</p>
  <!--           <p class="uk-margin-small tm-alt-font uk-text-small" style="padding-left: 7px; text-transform:lowercase; color: #CC0000;"><span class="negotiable-price">Call for Price</span></p> -->
          </div>
        </div>
      </div>
    </div>
  </div><!-- /looper -->
<?php endwhile; endif; ?>
