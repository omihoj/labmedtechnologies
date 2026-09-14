<?php
/**
 * Fallback template (blog index / archives).
 *
 * @package Labmed
 */

defined( 'ABSPATH' ) || exit;

get_header();

labmed_page_hero(
	is_home() ? __( 'Journal', 'labmed' ) : __( 'Archive', 'labmed' ),
	is_home() ? get_bloginfo( 'name' ) : wp_strip_all_tags( get_the_archive_title() ),
	is_home() ? __( 'News, product updates and technical notes from the Labmed Technologies team.', 'labmed' ) : '',
	'hero2.jpg'
);
?>

<section class="bg-background">
	<div class="wrap section">
		<?php if ( have_posts() ) : ?>
			<?php
			while ( have_posts() ) :
				the_post();
				?>
				<article <?php post_class( 'post-card reveal' ); ?>>
					<p class="eyebrow text-accent"><?php echo esc_html( get_the_date() ); ?></p>
					<h2 class="h3" style="margin-top:12px;">
						<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
					</h2>
					<p class="lead" style="margin-top:12px;"><?php echo esc_html( get_the_excerpt() ); ?></p>
					<a class="btn btn--outline" style="margin-top:16px;" href="<?php the_permalink(); ?>">
						<?php esc_html_e( 'Read more', 'labmed' ); ?><?php labmed_icon( 'arrow-right' ); ?>
					</a>
				</article>
				<?php
			endwhile;
			?>
			<div class="pagination"><?php posts_nav_link( ' ', __( 'Newer', 'labmed' ), __( 'Older', 'labmed' ) ); ?></div>
		<?php else : ?>
			<p class="lead"><?php esc_html_e( 'Nothing published yet — please check back soon.', 'labmed' ); ?></p>
		<?php endif; ?>
	</div>
</section>

<?php
labmed_cta_band();
get_footer();
