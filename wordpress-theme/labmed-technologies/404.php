<?php
/**
 * 404 template.
 *
 * @package Labmed
 */

defined( 'ABSPATH' ) || exit;

get_header();

labmed_page_hero(
	__( 'Error 404', 'labmed' ),
	__( "This page doesn't exist.", 'labmed' ),
	__( 'The page you were looking for has moved or never existed. Try our products, services or contact page.', 'labmed' ),
	'hero2.jpg'
);
?>

<section class="bg-background">
	<div class="wrap section">
		<div class="reveal" style="display:flex;flex-wrap:wrap;gap:12px;">
			<a class="btn btn--accent sheen" href="<?php echo esc_url( home_url( '/' ) ); ?>">
				<?php esc_html_e( 'Back home', 'labmed' ); ?><?php labmed_icon( 'arrow-right' ); ?>
			</a>
			<a class="btn btn--outline" href="<?php echo esc_url( labmed_url_products() ); ?>"><?php esc_html_e( 'All products', 'labmed' ); ?></a>
			<a class="btn btn--outline" href="<?php echo esc_url( labmed_url_contact() ); ?>"><?php esc_html_e( 'Contact us', 'labmed' ); ?></a>
		</div>
	</div>
</section>

<?php
get_footer();
