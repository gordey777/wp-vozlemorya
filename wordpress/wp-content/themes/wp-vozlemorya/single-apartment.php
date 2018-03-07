<?php /*
Template Name: Апартамент
Template Post Type: post, page
*/
get_header(); ?>


<?php if (have_posts()): while (have_posts()) : the_post(); ?>

  <?php
  $location_fild = get_field_object('location');
  $property_type_fild = get_field_object('property_type');
  $status_fild = get_field_object('status');
  $floor_fild = get_field_object('floor');
  $view_fild = get_field_object('view');
  $area_fild = get_field_object('area');
  $living_area_fild = get_field_object('living_area');
  $rooms_fild = get_field_object('rooms');
  $bathrooms_fild = get_field_object('bathrooms');

    $location_label = $location_fild["instructions"];
    $property_type_label = $property_type_fild["instructions"];
    $status_label = $status_fild["instructions"];
    $floor_label = $floor_fild["instructions"];
    $view_label = $view_fild["instructions"];
    $area_label = $area_fild["instructions"];
    $living_area_label = $living_area_fild["instructions"];
    $rooms_label = $rooms_fild["instructions"];
    $bathrooms_label = $bathrooms_fild["instructions"];
    $cat_desc = 'Описание';
    $cat_det = 'Детали';


  $currentLanguage  = get_bloginfo('language');

  if ( $currentLanguage == "ru-RU" ) {
    $home__id = '37';

  }  else if ( $currentLanguage == "en-US" ) {
    $home__id = '1457';
    $location_label = $location_fild["label"];
    $property_type_label = $property_type_fild["label"];
    $status_label = $status_fild["label"];
    $floor_label = $floor_fild["label"];
    $view_label = $view_fild["label"];
    $area_label = $area_fild["label"];
    $living_area_label = $living_area_fild["label"];
    $rooms_label = $rooms_fild["label"];
    $bathrooms_label = $bathrooms_fild["label"];
    $cat_desc = 'Description';
    $cat_det = 'Details';
  }
  else if ( $currentLanguage == "pl-PL" ) {
    $home__id = '1597';
    $location_label = 'Lokalizacja';
    $property_type_label = 'Rodzaj nieruchomości';
    $status_label = 'Status';
    $floor_label = 'Piętro';
    $view_label = 'Wyświetl';
    $area_label = 'Obszar';
    $living_area_label = 'Powierzchnia mieszkalna';
    $rooms_label = 'Pokoje';
    $bathrooms_label = 'Łazienki';
    $cat_desc = 'Opis';
    $cat_det = 'Szczegóły';
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


  <div class="uk-block tm-block-main uk-block-default" style="padding-bottom:0;">
    <div class="">
      <div id="tm-middle" class="tm-middle uk-grid" data-uk-grid-match data-uk-grid-margin>
        <div class="tm-main uk-width-medium-1-1">
          <main id="post-<?php the_ID(); ?>"  <?php post_class('tm-content'); ?>>
            <div id="system-message-container"> </div>
            <div class="uk-article">
              <div class="uk-container uk-container-center">
                <h1 class="uk-article-title"><?php the_title(); ?></h1>
                <div class="uk-grid uk-grid-small tm-margin-compensate">
                  <div class="uk-h3 uk-text-muted uk-width-1-1 uk-width-small-3-4"> <span><?php the_field('location_title'); ?>, <?php the_field('location_country'); ?></span>
                    <div class="single__price">
                      <span>
                        <i class="fa fa-eur"></i>
                        <?php $output = get_field('price');
                        $price = number_format( $output, 0, '.', ',');
                        echo $price; ?>
                      </span>
                    </div>
                  </div>
                  <div class="uk-width-1-1 uk-width-small-1-4 uk-text-right uk-text-left-small"> <!-- <i class="uk-icon-eye" title="10327 хиты"></i>&nbsp;10327  --></div>
                </div>

                <div class="uk-margin-top uk-visible-large">&nbsp;</div>
                <?php $gallery_images = get_field('apartments_gallery');

                if( $gallery_images ): ?>
                  <div class="uk-grid uk-margin">
                    <div class="uk-width-1-1">
                      <div class="uk-panel">
                        <div class="rama-wrap">

                          <div id="sync1" class="owl-carousel owl-theme">
                            <?php foreach( $gallery_images as $gallery_image ): ?>
                              <div class="item">
                                <a rel="lightbox" class="post-slide-link" href="<?php echo $gallery_image['url']; ?>">
                                  <!-- <img class="post-slide-img" src="https://visairkutsk.ru/wp-content/uploads/2017/05/P1270379-600x450.jpg" alt=""> -->
                                  <div class="post-slide-img" style="background-image: url('<?php echo $gallery_image['sizes']['large']; ?>')"></div>
                                </a>
                              </div>
                            <?php endforeach; ?>

                          </div>

                          <div id="thumbs_navs">
                            <div id="sync2" class="owl-carousel owl-theme">
                              <?php foreach( $gallery_images as $gallery_image ): ?>
                                <div class="item">
                                  <img src="<?php echo $gallery_image['sizes']['small']; ?>" alt="">
                                </div>
                              <?php endforeach; ?>

                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                <?php endif; ?>
              </div>


              <div class="uk-margin-top uk-visible-large"></div>
              <div class="uk-container uk-container-center uk-margin">
                <div class="uk-grid uk-grid-match uk-grid-medium" data-uk-grid-match="{target:'> div > .uk-panel', row:true}" data-uk-grid-margin>
                  <div class="uk-width-1-1 uk-width-medium-1-2 uk-width-large-2-3 property-descripton-wrapper">
                    <div class="uk-panel uk-panel-header">
                      <div class="uk-h3 uk-panel-title"><?php echo $cat_desc; ?></div>
                        <?php the_content(); ?>

                    </div>
                  </div>
                  <div class="uk-width-1-1 uk-width-medium-1-2 uk-width-large-1-3">
                    <div class="uk-panel uk-panel-header">
                      <div class="uk-h3 uk-panel-title"><?php echo $cat_det; ?></div>

                        <ul class="uk-list uk-list-space">

                          <?php if(get_field('location')); { ?>
                            <li>
                              <span class="uk-display-inline-block uk-text-top uk-width-1-2 icon-row"><i class="uk-icon-map-marker"></i><?php echo $location_label; ?></span><span class="uk-display-inline-block uk-text-top uk-width-1-2 uk-text-right uk-text-bold"><?php the_field('location'); ?>, <?php the_field('location_country'); ?></span>
                            </li>
                          <?php } ?>


                          <?php if(get_field('property_type')); { ?>
                            <li>
                              <span class="uk-display-inline-block uk-text-top uk-width-1-2 icon-row"><i class="uk-icon-home"></i><?php echo $property_type_label; ?></span><span class="uk-display-inline-block uk-text-top uk-width-1-2 uk-text-right uk-text-bold"><?php the_field('property_type'); ?></span>
                            </li>
                          <?php } ?>



                          <?php if(get_field('floor')); { ?>
                            <li>
                              <span class="uk-display-inline-block uk-text-top uk-width-1-2 icon-row"><i class="fa fa-building-o"></i><?php echo $floor_label; ?></span><span class="uk-display-inline-block uk-text-top uk-width-1-2 uk-text-right uk-text-bold"><?php the_field('floor'); ?></span>
                            </li>
                          <?php } ?>

                          <?php if(get_field('view')); { ?>
                            <li>
                              <span class="uk-display-inline-block uk-text-top uk-width-1-2 icon-row"><i class="uk-icon-eye"></i><?php echo $view_label; ?></span><span class="uk-display-inline-block uk-text-top uk-width-1-2 uk-text-right uk-text-bold"><?php the_field('view'); ?></span>
                            </li>
                          <?php } ?>

                          <?php if(get_field('area')); { ?>
                            <li>
                              <span class="uk-display-inline-block uk-text-top uk-width-1-2 icon-row"><i class="uk-icon-square-o"></i><?php echo $area_label; ?></span><span class="uk-display-inline-block uk-text-top uk-width-1-2 uk-text-right uk-text-bold"><?php the_field('area'); ?></span>
                            </li>
                          <?php } ?>

                          <?php if(get_field('living_area')); { ?>
                            <li>
                              <span class="uk-display-inline-block uk-text-top uk-width-1-2 icon-row"><i class="uk-icon-check-square-o"></i><?php echo $living_area_label; ?></span><span class="uk-display-inline-block uk-text-top uk-width-1-2 uk-text-right uk-text-bold"><?php the_field('living_area'); ?></span>
                            </li>
                          <?php } ?>

                          <?php if(get_field('rooms')); { ?>
                            <li>
                              <span class="uk-display-inline-block uk-text-top uk-width-1-2 icon-row"><i class="uk-icon-qrcode"></i><?php echo $rooms_label; ?></span><span class="uk-display-inline-block uk-text-top uk-width-1-2 uk-text-right uk-text-bold"><?php the_field('rooms'); ?></span>
                            </li>
                          <?php } ?>

                          <?php if(get_field('bathrooms')); { ?>
                            <li>
                              <span class="uk-display-inline-block uk-text-top uk-width-1-2 icon-row"><i class="uk-icon-tint"></i><?php echo $bathrooms_label; ?></span><span class="uk-display-inline-block uk-text-top uk-width-1-2 uk-text-right uk-text-bold"><?php the_field('bathrooms'); ?></span>
                            </li>
                          <?php } ?>

                        </ul>

                    </div>
                  </div>
                </div>
              </div>
<!--
              <div class="uk-block tm-block-bottom-b uk-block-muted uk-margin-large">
                <div class="uk-container uk-container-center">
                  <div class="uk-width-1-1">
                    <div class="uk-panel uk-panel-header">
                      <p class="uk-h3 uk-panel-title">Особености</p>
                      <ul class="uk-grid uk-grid-small" data-uk-grid-match="{target:'> div', row:true}" data-uk-grid-margin>
                        <div class="uk-width-1-1 uk-width-medium-1-3 uk-width-large-1-5">Кондиционер</div>
                        <div class="uk-width-1-1 uk-width-medium-1-3 uk-width-large-1-5">Интернет / WiFi</div>
                        <div class="uk-width-1-1 uk-width-medium-1-3 uk-width-large-1-5">Спутниковое ТВ</div>
                        <div class="uk-width-1-1 uk-width-medium-1-3 uk-width-large-1-5">Лифт</div>
                        <div class="uk-width-1-1 uk-width-medium-1-3 uk-width-large-1-5">Балкон</div>
                        <div class="uk-width-1-1 uk-width-medium-1-3 uk-width-large-1-5">Бассейн</div>
                        <div class="uk-width-1-1 uk-width-medium-1-3 uk-width-large-1-5">Детский бассейн</div>
                        <div class="uk-width-1-1 uk-width-medium-1-3 uk-width-large-1-5">Площадка для детей</div>
                        <div class="uk-width-1-1 uk-width-medium-1-3 uk-width-large-1-5">Паркинг</div>
                        <div class="uk-width-1-1 uk-width-medium-1-3 uk-width-large-1-5">24ч. охрана</div>
                        <div class="uk-width-1-1 uk-width-medium-1-3 uk-width-large-1-5">Прачечная</div>
                        <div class="uk-width-1-1 uk-width-medium-1-3 uk-width-large-1-5">Ресторан</div>
                        <div class="uk-width-1-1 uk-width-medium-1-3 uk-width-large-1-5">Бар у бассейна</div>
                        <div class="uk-width-1-1 uk-width-medium-1-3 uk-width-large-1-5">Офис / Рецепция</div>
                        <div class="uk-width-1-1 uk-width-medium-1-3 uk-width-large-1-5">Клубный комплекс</div>
                        <div class="uk-width-1-1 uk-width-medium-1-3 uk-width-large-1-5">Домофоны</div>
                        <div class="uk-width-1-1 uk-width-medium-1-3 uk-width-large-1-5">Противопожарная защита</div>
                      </ul>
                    </div>
                  </div>
                </div>
              </div> -->


               <div class="uk-container uk-container-center uk-margin-large">
                <div class="uk-grid uk-margin" data-uk-grid-margin="">
                  <div class="uk-width-1-1 uk-width-large-1-3">
                    <p class="uk-h3"><?php the_field('lend_consalt_title', $home__id); ?></p>
                    <div id="contact-agent overflow-hidden">
                      <div class="agent-information">
                        <div class="agent-image uk-text-center uk-width-1-2 uk-push-small-1-4"> <span style="display:inline-block; overflow:hidden; width:100%; height:0; padding-bottom:100%; border-radius:50%;"><img alt="<?php the_field('lend_consalt_name', $home__id); ?>" src="<?php echo get_field('lend_consalt_img', $home__id)['url']; ?>"></span> </div>
                        <div class="uk-panel uk-text-center-xsmall uk-margin-top">
                          <div class="uk-h3 uk-h4 uk-margin-top-remove uk-margin-bottom-remove tm-alt-font  tm-text-highlight">
                            <?php the_field('lend_consalt_name', $home__id); ?>
                            </div>
                          <p class="uk-margin-top-remove tm-alt-font"><?php the_field('lend_consalt_position', $home__id); ?></p>
                          <div class="uk-margin">
                            <div class="uk-margin-top uk-clearfix">
                              <i class="fa fa-phone" style="margin-right:3px;"></i> <a href="tel:<?php the_field('lend_consalt_tel1', $home__id); ?>"><?php the_field('lend_consalt_tel1', $home__id); ?></a>
                              <i class="fa fa-whatsapp" style="color:#47C252; margin-left:5px;" title="WhatsApp"></i>
                              <i style="color:#7C529E; margin-left:3px;" class="uk-icon ftl-icon-viber" title="Viber"></i>
                            </div>
                            <div class="uk-margin-top uk-clearfix">
                              <i class="fa fa-phone" style="margin-right:3px;"></i> <a href="tel:<?php the_field('lend_consalt_tel2', $home__id); ?>"><?php the_field('lend_consalt_tel2', $home__id); ?></a>
                              <i class="fa fa-whatsapp" style="color:#47C252; margin-left:5px;" title="WhatsApp"></i>
                              <i style="color:#7C529E; margin-left:3px;" class="uk-icon ftl-icon-viber" title="Viber"></i>
                            </div>
                            <div class="uk-margin-remove uk-clearfix">
                              <i class="fa fa-at" style="margin-right:3px;"></i> <a href="mailto:<?php the_field('lend_consalt_mail', $home__id); ?>"><?php the_field('lend_consalt_mail', $home__id); ?></a>
                            </div>
                            <div class="uk-margin-remove uk-clearfix">
                              <i class="fa fa-skype" style="margin-right:3px;"></i> <a href="s<?php the_field('lend_consalt_skype', $home__id); ?>"><?php the_field('lend_consalt_skype', $home__id); ?></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="uk-width-1-1 uk-width-large-2-3">
                    <p class="uk-h3"><?php the_field('lend_form_title', $home__id); ?></p>
                    <div class="sendrequest-form">
                      <div class="visforms-form">
                        <div class="alert alert-danger error-note" style="display: none;"></div>
                        <div class="category-desc"><?php the_field('lend_form_subtitle', $home__id); ?></div>
                          <?php $form__code = get_field('lend_form_shortcode', $home__id); ?>
                          <?php echo do_shortcode($form__code); ?>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

          </main>
          </div>
        </div>
      </div>
    </div>

  <?php endwhile; endif; ?>






<?php get_footer(); ?>
