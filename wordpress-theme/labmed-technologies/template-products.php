<?php
/**
 * Template Name: Labmed — Products
 *
 * @package Labmed
 */

defined( 'ABSPATH' ) || exit;

get_header();

$labmed_cats = labmed_categories();

labmed_page_hero(
	__( 'All Products', 'labmed' ),
	__( "Seven supply ranges, sourced from the world's leading brands.", 'labmed' ),
	__( 'Our range is extensive — here are the categories we supply. Tell us what you need and our team will quote you directly.', 'labmed' ),
	'hero1.jpg'
);
?>

<section class="bg-background border-b">
	<div class="wrap section--tight">
		<div class="anchor-bar reveal">
			<?php foreach ( $labmed_cats as $labmed_cat ) : ?>
				<a class="eyebrow" href="#<?php echo esc_attr( $labmed_cat['slug'] ); ?>"><?php echo esc_html( $labmed_cat['name'] ); ?></a>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<section class="bg-background">
	<div class="wrap">
		<?php foreach ( $labmed_cats as $labmed_i => $labmed_cat ) : ?>
			<article class="category-block" id="<?php echo esc_attr( $labmed_cat['slug'] ); ?>">
				<div class="lg-grid-12 gap-12">
					<div class="reveal lg-col-5"<?php echo ( $labmed_i % 2 === 1 ) ? ' style="order:2;"' : ''; ?>>
						<span class="media" style="display:block;">
							<img src="<?php echo esc_url( labmed_img( $labmed_cat['image'] ) ); ?>" alt="<?php echo esc_attr( $labmed_cat['name'] ); ?>" loading="lazy" />
						</span>
					</div>
					<div class="reveal lg-col-7">
						<p class="eyebrow text-accent"><?php echo esc_html( sprintf( '%02d — %s', $labmed_i + 1, __( 'Category', 'labmed' ) ) ); ?></p>
						<h2 class="h2" style="margin-top:16px;font-size:1.875rem;"><?php echo esc_html( $labmed_cat['name'] ); ?></h2>
						<p class="lead" style="margin-top:16px;max-width:36rem;"><?php echo esc_html( $labmed_cat['blurb'] ); ?></p>
						<ul class="checklist">
							<?php foreach ( $labmed_cat['items'] as $labmed_item ) : ?>
								<li><?php labmed_icon( 'check', 'icon-xs' ); ?><span><?php echo esc_html( $labmed_item ); ?></span></li>
							<?php endforeach; ?>
						</ul>
						<a class="btn btn--outline" style="margin-top:32px;" href="<?php echo esc_url( add_query_arg( 'category', rawurlencode( $labmed_cat['name'] ), labmed_url_contact() ) ); ?>">
							<?php esc_html_e( 'Enquire about this range', 'labmed' ); ?><?php labmed_icon( 'arrow-right' ); ?>
						</a>
					</div>
				</div>
			</article>
		<?php endforeach; ?>
	</div>
</section>

<section class="bg-surface">
	<div class="wrap section">
		<div class="reveal">
			<p class="eyebrow text-accent"><?php esc_html_e( 'Browse by category', 'labmed' ); ?></p>
			<h2 class="h2" style="margin-top:16px;"><?php esc_html_e( 'Everything we supply, at a glance.', 'labmed' ); ?></h2>
		</div>
		<div style="margin-top:48px;">
			<?php labmed_category_tiles(); ?>
		</div>
	</div>
</section>

<?php
labmed_cta_band();
get_footer();
