<?php get_header(); ?>

  <?php $cat__ID = get_queried_object()->cat_ID; ?>
  <?php $field_term = 'category_' . $cat__ID; ?>


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

<?php get_sidebar(); ?>


<div class="uk-block tm-block-main uk-block-default">
    <div class="uk-container uk-container-center">
      <div id="tm-middle" class="tm-middle uk-grid" data-uk-grid-match="" data-uk-grid-margin="">
        <div class="tm-main uk-width-medium-1-1">
          <main id="tm-content" class="tm-content">
            <article class="uk-article">
              <h1 class="uk-article-title"><?php single_cat_title(); ?></h1>

              <div id="wk-grid4b1" class="uk-grid-width-1-1 uk-grid-width-small-1-1 uk-grid-width-medium-1-2 uk-grid-width-large-1-3 uk-grid-width-xlarge-1-3 uk-grid uk-grid-match uk-grid-medium uk-text-left " data-uk-grid-match="{target:'> div > .uk-panel', row:true}" data-uk-grid-margin="">
                <?php get_template_part('loop'); ?>
                <?php get_template_part('pagination'); ?>

              </div>
              <br>
              <br>

              <?php the_field('cat_content', $field_term); ?>
            </article>


          </main>
        </div>
      </div>
    </div>
  </div>

<?php get_footer(); ?>
