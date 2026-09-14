<?php
/**
 * Front page template.
 *
 * @package Labmed
 */

defined( 'ABSPATH' ) || exit;

get_header();

$labmed_contact = labmed_contact();

$labmed_slides = array(
	array(
		'image'   => 'hero1.jpg',
		'eyebrow' => __( 'We provide Science Solutions', 'labmed' ),
		'title'   => __( 'Quality consumables and equipment', 'labmed' ),
		'body'    => __( 'Solutions and services to accelerate science together.', 'labmed' ),
	),
	array(
		'image'   => 'hero2.jpg',
		'eyebrow' => __( 'Side by side with our clients', 'labmed' ),
		'title'   => __( 'Science is a journey to continuously grow, nurture and evolve', 'labmed' ),
		'body'    => __( 'We are passionate about working side by side with our clients and stakeholders to make a difference towards better health, well-being and a cleaner environment.', 'labmed' ),
	),
	array(
		'image'   => 'hero3.jpg',
		'eyebrow' => __( 'South Africa & beyond', 'labmed' ),
		'title'   => __( 'One partner for laboratory, medical and agricultural supply', 'labmed' ),
		'body'    => __( 'Supplying laboratories, clinics, producers and institutions across South Africa and surrounding African countries.', 'labmed' ),
	),
);

$labmed_pillars = array(
	array( 'award', __( 'Product Quality', 'labmed' ), __( "Labmed Technologies has partnered with the world's leading brands to offer the best quality.", 'labmed' ) ),
	array( 'boxes', __( 'Latest Product Range', 'labmed' ), __( 'The only thing more diverse than our product range is the potential it holds for you to realise your vision.', 'labmed' ) ),
	array( 'heart-handshake', __( 'Amazing Customer Service', 'labmed' ), __( 'Customer satisfaction is of paramount importance to us, from the time of order through to after-sales service.', 'labmed' ) ),
);

$labmed_home_services = array(
	array( __( 'Laboratory Testing', 'labmed' ), __( 'A one-stop service for all your laboratory analysis needs, from water and soils to microbiology.', 'labmed' ) ),
	array( __( 'Consulting', 'labmed' ), __( 'Expertise to build, document and maintain a sound laboratory management system.', 'labmed' ) ),
	array( __( 'Technical Services', 'labmed' ), __( 'Repair, maintenance and calibration with original spare parts and service level agreements.', 'labmed' ) ),
);
?>

<section class="hero" id="hero">
	<?php foreach ( $labmed_slides as $labmed_slide ) : ?>
		<div class="hero-slide">
			<img src="<?php echo esc_url( labmed_img( $labmed_slide['image'] ) ); ?>" alt="" aria-hidden="true" />
		</div>
	<?php endforeach; ?>

	<div class="hero-overlay veil"></div>
	<div class="hero-lines grid-lines"></div>

	<div class="wrap hero-inner">
		<div class="lg-grid-12 gap-12" style="align-items:flex-end;">
			<div class="lg-col-8">
				<div class="hero-copy">
					<?php foreach ( $labmed_slides as $labmed_slide ) : ?>
						<div class="hero-text">
							<p class="eyebrow text-accent"><?php echo esc_html( $labmed_slide['eyebrow'] ); ?></p>
							<h1><?php echo esc_html( $labmed_slide['title'] ); ?></h1>
							<p><?php echo esc_html( $labmed_slide['body'] ); ?></p>
						</div>
					<?php endforeach; ?>
				</div>

				<div class="hero-actions">
					<a class="btn btn--accent sheen" href="<?php echo esc_url( labmed_url_contact() ); ?>">
						<?php esc_html_e( 'Contact Us', 'labmed' ); ?><?php labmed_icon( 'arrow-right' ); ?>
					</a>
					<a class="btn btn--ghost-light" href="<?php echo esc_url( labmed_url_products() ); ?>">
						<?php esc_html_e( 'View Our Products', 'labmed' ); ?>
					</a>
				</div>
			</div>

			<div class="lg-col-4">
				<div class="hero-dots">
					<?php foreach ( $labmed_slides as $labmed_i => $labmed_slide ) : ?>
						<button type="button" aria-label="<?php echo esc_attr( sprintf( __( 'Go to slide %d', 'labmed' ), $labmed_i + 1 ) ); ?>"></button>
					<?php endforeach; ?>
				</div>
			</div>
		</div>
	</div>
</section>

<?php labmed_marquee(); ?>

<section class="bg-background border-b">
	<div class="wrap section lg-grid-12 gap-12">
		<div class="reveal lg-col-5">
			<p class="eyebrow text-accent"><?php esc_html_e( 'Who we are', 'labmed' ); ?></p>
			<h2 class="h2" style="margin-top:20px;"><?php esc_html_e( "One of South Africa's leading consumables and equipment suppliers.", 'labmed' ); ?></h2>
			<p class="lead" style="margin-top:28px;">
				<?php echo esc_html( sprintf( __( '%s B-BBEE company', 'labmed' ), $labmed_contact['bbbee'] ) ); ?>
			</p>
		</div>
		<div class="reveal lg-col-7">
			<p class="lead"><?php esc_html_e( "Labmed Technologies is one of South Africa's leading laboratory, medical, dental, office and beauty consumables and equipment suppliers. We provide supplies and scientific equipment in South Africa and surrounding African countries.", 'labmed' ); ?></p>
			<p class="lead" style="margin-top:20px;"><?php esc_html_e( 'We strive to provide the highest quality consumables and equipment at competitive prices. Our sales staff are knowledgeable about our products and have a strong emphasis on personal service.', 'labmed' ); ?></p>
			<p class="lead" style="margin-top:20px;"><?php esc_html_e( 'We understand the importance of delivering not only the necessary equipment but also the ancillaries and accessories that complement these analytical methods. Moreover, we are committed to ensuring customer satisfaction by offering comprehensive pre and post-sales support, as well as reliable service and maintenance for a wide range of analytical instruments.', 'labmed' ); ?></p>
			<a class="btn btn--outline" style="margin-top:24px;" href="<?php echo esc_url( labmed_url_products() ); ?>">
				<?php esc_html_e( 'View our products', 'labmed' ); ?><?php labmed_icon( 'arrow-right' ); ?>
			</a>
		</div>
	</div>
</section>

<?php labmed_stats_band(); ?>

<section class="bg-surface">
	<div class="wrap section">
		<div class="reveal">
			<p class="eyebrow text-accent"><?php esc_html_e( 'Product categories', 'labmed' ); ?></p>
			<h2 class="h2" style="margin-top:16px;"><?php esc_html_e( 'Seven ranges. One supplier.', 'labmed' ); ?></h2>
		</div>
		<div style="margin-top:48px;">
			<?php labmed_category_tiles(); ?>
		</div>
	</div>
</section>

<section class="bg-background border-y">
	<div class="pillars cell-grid">
		<?php foreach ( $labmed_pillars as $labmed_pillar ) : ?>
			<div class="cell reveal" style="padding:56px 24px;">
				<?php labmed_icon( $labmed_pillar[0], 'icon' ); ?>
				<h3 class="eyebrow" style="margin-top:32px;"><?php echo esc_html( $labmed_pillar[1] ); ?></h3>
				<p class="lead" style="margin-top:16px;"><?php echo esc_html( $labmed_pillar[2] ); ?></p>
			</div>
		<?php endforeach; ?>
	</div>
</section>

<section class="bg-background">
	<div class="wrap section lg-grid-12 gap-14" style="align-items:center;">
		<div class="reveal lg-col-5">
			<div class="category-block media" style="border:0;padding:0;">
				<img src="<?php echo esc_url( labmed_img( 'img0010.jpg' ) ); ?>" alt="<?php esc_attr_e( 'Laboratory analyst loading samples into an analytical instrument', 'labmed' ); ?>" loading="lazy" />
			</div>
		</div>
		<div class="lg-col-7">
			<div class="reveal">
				<p class="eyebrow text-accent"><?php esc_html_e( 'Services', 'labmed' ); ?></p>
				<h2 class="h2" style="margin-top:16px;"><?php esc_html_e( 'Beyond supply — analysis, systems and support.', 'labmed' ); ?></h2>
			</div>
			<div class="split-list" style="margin-top:40px;border-top:1px solid var(--border);border-bottom:1px solid var(--border);">
				<?php foreach ( $labmed_home_services as $labmed_i => $labmed_service ) : ?>
					<a class="reveal" href="<?php echo esc_url( labmed_url_services() ); ?>">
						<span class="eyebrow text-muted">0<?php echo (int) ( $labmed_i + 1 ); ?></span>
						<span>
							<span class="title"><?php echo esc_html( $labmed_service[0] ); ?></span>
							<span class="body"><?php echo esc_html( $labmed_service[1] ); ?></span>
						</span>
					</a>
				<?php endforeach; ?>
			</div>
		</div>
	</div>
</section>

<section class="quote-band bg-surface border-y">
	<div class="wrap section">
		<div class="reveal">
			<?php labmed_icon( 'quote', 'icon' ); ?>
			<blockquote style="margin-top:24px;">
				<?php esc_html_e( 'Science is a journey to continuously grow, nurture and evolve — we are passionate about working side by side with our clients towards better health, well-being and a cleaner environment.', 'labmed' ); ?>
			</blockquote>
			<p class="eyebrow text-muted" style="margin-top:24px;"><?php esc_html_e( 'Labmed Technologies', 'labmed' ); ?></p>
		</div>
	</div>
</section>

<?php
labmed_cta_band();
get_footer();
