<?php get_header(); ?>
  <article>

    <h1 class="cat-title inner-title"><?php single_cat_title(); ?></h1>
<?php

$cat__ID = get_queried_object()->term_taxonomy_id;

  $args = array(
  'tax_query' => array(
    array(
      'taxonomy' => 'property_group',
      'field' => 'id',
      'terms' => $cat__ID,
    )
  ),
  'post_type' => 'property',
  'posts_per_page' => -1
);

$loop = new WP_Query( $args );
while ( $loop->have_posts() ) : $loop->the_post(); ?>
  <div id="post-<?php the_ID(); ?>" <?php post_class('looper'); ?>>

    <a rel="nofollow" class="feature-img" href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
      <?php if ( has_post_thumbnail()) { ?>
        <img src="<?php echo the_post_thumbnail_url('medium'); ?>" title="<?php the_title(); ?>" alt="<?php the_title(); ?>" />
      <?php } else { ?>
        <img src="<?php echo catchFirstImage(); ?>" title="<?php the_title(); ?>" alt="<?php the_title(); ?>" />
      <?php } ?>
    </a><!-- /post thumbnail -->

    <h2 class="inner-title">
      <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a>
    </h2><!-- /post title -->

    <span class="date"><?php the_time('j F Y'); ?> <span><?php the_time('G:i'); ?></span></span>
    <span class="author"><?php _e( 'Published by', 'wpeasy' ); ?> <?php the_author_posts_link(); ?></span>
    <span class="comments"><?php comments_popup_link( __( 'Leave your thoughts', 'wpeasy' ), __( '1 Comment', 'wpeasy' ), __( '% Comments', 'wpeasy' )); ?></span><!-- /post details -->

    <?php wpeExcerpt('wpeExcerpt40'); ?>

  </div><!-- /looper -->

<?php
endwhile; ?>

<div class="pagination">
<?php pagination_bar( $loop ); ?>


</div><!-- /pagination -->
<?php wp_reset_query(); ?>



  </article>
<?php get_sidebar(); ?>
<?php get_footer(); ?>
