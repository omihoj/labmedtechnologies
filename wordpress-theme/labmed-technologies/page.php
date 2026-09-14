<?php
/**
 * Default page template.
 *
 * @package Labmed
 */

defined( 'ABSPATH' ) || exit;

get_header();

while ( have_posts() ) :
	the_post();

	labmed_page_hero( get_bloginfo( 'name' ), get_the_title(), '', 'hero1.jpg' );
	?>
	<section class="bg-background">
		<div class="wrap section">
			<div class="entry-content reveal">
				<?php
				the_content();
				wp_link_pages();
				?>
			</div>
		</div>
	</section>
	<?php
endwhile;

labmed_cta_band();
get_footer();
