<?php get_header(); ?>


<?php if (have_posts()): while (have_posts()) : the_post(); ?>

  <?php

  $currentLanguage  = get_bloginfo('language');

  if ( $currentLanguage == "ru-RU" ) {
    $home__id = '37';

  }  else if ( $currentLanguage == "en-US" ) {
    $home__id = '1457';

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
          </article>
        </main>
      </div>
    </div>
  </div>
</div>


  <?php endwhile; endif; ?>


<?php get_footer(); ?>
