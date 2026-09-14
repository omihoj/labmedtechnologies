<?php
/**
 * Single post template.
 *
 * @package Labmed
 */

defined( 'ABSPATH' ) || exit;

get_header();

while ( have_posts() ) :
	the_post();

	labmed_page_hero( get_the_date(), get_the_title(), '', 'hero3.jpg' );
	?>
	<section class="bg-background">
		<div class="wrap section">
			<div class="entry-content reveal">
				<?php
				if ( has_post_thumbnail() ) {
					the_post_thumbnail( 'large' );
				}
				the_content();
				wp_link_pages();
				?>
			</div>
		</div>
	</section>
	<?php
	if ( comments_open() || get_comments_number() ) {
		echo '<section class="bg-surface"><div class="wrap section">';
		comments_template();
		echo '</div></section>';
	}
endwhile;

labmed_cta_band();
get_footer();
