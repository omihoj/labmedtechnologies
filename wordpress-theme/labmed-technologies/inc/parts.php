<?php
/**
 * Shared markup parts: page hero, CTA band, product tiles.
 *
 * @package Labmed
 */

defined( 'ABSPATH' ) || exit;

/**
 * Dark page hero used on all inner pages.
 *
 * @param string $eyebrow Small label.
 * @param string $title   H1 text.
 * @param string $body    Intro paragraph.
 * @param string $image   Image file name in assets/img.
 */
function labmed_page_hero( $eyebrow, $title, $body = '', $image = 'hero1.jpg' ) {
	?>
	<section class="page-hero">
		<img src="<?php echo esc_url( labmed_img( $image ) ); ?>" alt="" aria-hidden="true" />
		<div class="hero-overlay veil"></div>
		<div class="hero-lines grid-lines"></div>
		<div class="wrap inner">
			<div class="reveal">
				<p class="eyebrow text-accent"><?php echo esc_html( $eyebrow ); ?></p>
				<h1><?php echo esc_html( $title ); ?></h1>
				<?php if ( $body ) : ?>
					<p><?php echo esc_html( $body ); ?></p>
				<?php endif; ?>
			</div>
		</div>
	</section>
	<?php
}

/**
 * Closing call-to-action band.
 */
function labmed_cta_band() {
	$contact = labmed_contact();
	?>
	<section class="cta-band gradient-ink noise">
		<div class="wrap section lg-grid-12 gap-12">
			<div class="reveal lg-col-7">
				<p class="eyebrow text-accent"><?php esc_html_e( "Let's work together", 'labmed' ); ?></p>
				<h2><?php esc_html_e( 'An invaluable partner in meeting your quality requirements.', 'labmed' ); ?></h2>
			</div>
			<div class="reveal lg-col-5">
				<p><?php esc_html_e( 'Speak to our team about products, testing, consulting or technical support.', 'labmed' ); ?></p>
				<div class="actions">
					<a class="btn btn--accent sheen" href="<?php echo esc_url( labmed_url_contact() ); ?>">
						<?php esc_html_e( 'Contact Us', 'labmed' ); ?><?php labmed_icon( 'arrow-right' ); ?>
					</a>
					<a class="btn btn--ghost-light" href="<?php echo esc_url( $contact['tel_href'] ); ?>"><?php echo esc_html( $contact['tel_display'] ); ?></a>
					<a class="btn btn--ghost-light" href="<?php echo esc_url( $contact['cell_href'] ); ?>"><?php echo esc_html( $contact['cell_display'] ); ?></a>
				</div>
			</div>
		</div>
	</section>
	<?php
}

/**
 * Product category tile grid.
 */
function labmed_category_tiles() {
	$products = labmed_url_products();
	?>
	<div class="tile-grid">
		<?php foreach ( labmed_categories() as $cat ) : ?>
			<a class="tile reveal" href="<?php echo esc_url( $products . '#' . $cat['slug'] ); ?>">
				<span class="thumb">
					<img src="<?php echo esc_url( labmed_img( $cat['image'] ) ); ?>" alt="<?php echo esc_attr( $cat['name'] ); ?>" loading="lazy" />
				</span>
				<span class="body">
					<span>
						<h3><?php echo esc_html( $cat['name'] ); ?></h3>
						<p><?php echo esc_html( $cat['blurb'] ); ?></p>
					</span>
					<?php labmed_icon( 'arrow-up-right', 'arrow' ); ?>
				</span>
			</a>
		<?php endforeach; ?>

		<div class="tile tile--cta gradient-ink noise reveal">
			<h3><?php esc_html_e( "Can't find it? We'll source it.", 'labmed' ); ?></h3>
			<a class="btn btn--accent sheen" href="<?php echo esc_url( labmed_url_contact() ); ?>">
				<?php esc_html_e( 'Send an enquiry', 'labmed' ); ?><?php labmed_icon( 'arrow-right' ); ?>
			</a>
		</div>
	</div>
	<?php
}

/**
 * Scrolling trust marquee.
 */
function labmed_marquee() {
	$contact = labmed_contact();
	$items   = array_merge(
		array( $contact['bbbee'] . ' B-BBEE' ),
		wp_list_pluck( labmed_categories(), 'name' ),
		array( __( 'Nationwide delivery', 'labmed' ), __( 'Technical service & repairs', 'labmed' ) )
	);
	$loop    = array_merge( $items, $items );
	?>
	<div class="marquee" aria-hidden="true">
		<div class="marquee-track">
			<?php foreach ( $loop as $item ) : ?>
				<span class="eyebrow"><?php echo esc_html( $item ); ?><i class="marquee-dot"></i></span>
			<?php endforeach; ?>
		</div>
	</div>
	<?php
}

/**
 * Stats band.
 */
function labmed_stats_band() {
	$contact = labmed_contact();
	$stats   = array(
		array( '7', __( 'Product ranges', 'labmed' ) ),
		array( '9', __( 'Testing disciplines', 'labmed' ) ),
		array( '3', __( 'Service divisions', 'labmed' ) ),
		array( $contact['bbbee'], __( 'B-BBEE contributor', 'labmed' ) ),
	);
	?>
	<section class="stats gradient-ink noise">
		<div class="wrap" style="padding-left:0;padding-right:0;">
			<div class="grid">
				<?php foreach ( $stats as $stat ) : ?>
					<div class="cell gradient-ink reveal">
						<p class="num" data-count="<?php echo esc_attr( $stat[0] ); ?>"><?php echo esc_html( $stat[0] ); ?></p>
						<p class="eyebrow"><?php echo esc_html( $stat[1] ); ?></p>
					</div>
				<?php endforeach; ?>
			</div>
		</div>
	</section>
	<?php
}
