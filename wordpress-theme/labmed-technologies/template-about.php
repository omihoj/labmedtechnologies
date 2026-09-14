<?php
/**
 * Template Name: Labmed — About
 *
 * @package Labmed
 */

defined( 'ABSPATH' ) || exit;

get_header();

$labmed_contact    = labmed_contact();
$labmed_highlights = array(
	array( 'microscope', __( 'Quality Products & Technical Expertise', 'labmed' ), __( 'We offer a wide range of quality products, backed by technical expertise. We carefully select the best brands and provide comprehensive support and after-sales service.', 'labmed' ) ),
	array( 'sparkles', __( 'Quality Brands', 'labmed' ), __( 'Our brand partners are at the forefront of innovation in their industries. We proudly stand alongside them in offering you outstanding products and services.', 'labmed' ) ),
	array( 'handshake', __( 'Amazing Customer Service', 'labmed' ), __( 'Customer satisfaction is of paramount importance to us, from the time of order through to after-sales service. Our aim is to understand your needs to ensure you receive true value from your investment. Getting this right is our business.', 'labmed' ) ),
	array( 'truck', __( 'Fast, Efficient and Hassle-Free Service', 'labmed' ), __( 'We believe in keeping things simple and straightforward for our customers. Our extensive experience has enabled us to forge strong relationships with water boards, municipalities, auditors, consultants, laboratories, food and beverage manufacturers, educational institutes, as well as primary producers such as farmers, dairies and mining companies.', 'labmed' ) ),
);

labmed_page_hero(
	__( 'About Us', 'labmed' ),
	__( 'A reliable partner for laboratories and scientific institutions.', 'labmed' ),
	__( "Labmed Technologies is one of South Africa's leading suppliers, operating across South Africa and surrounding African countries, supplying laboratory, medical and agricultural products and services.", 'labmed' ),
	'hero2.jpg'
);
?>

<section class="bg-background border-b">
	<div class="wrap section lg-grid-12 gap-12">
		<div class="reveal lg-col-4">
			<p class="eyebrow text-accent"><?php esc_html_e( 'Our approach', 'labmed' ); ?></p>
			<h2 class="h2" style="margin-top:20px;"><?php esc_html_e( "We understand our clients' needs and provide tailored solutions.", 'labmed' ); ?></h2>
		</div>
		<div class="reveal lg-col-8">
			<p class="lead"><?php esc_html_e( 'With years of experience, Labmed Technologies is a reliable partner for laboratories and scientific institutions. We understand our clients\' needs and provide tailored solutions across every discipline we serve.', 'labmed' ); ?></p>
			<p class="lead" style="margin-top:20px;"><?php esc_html_e( 'From consumables and analytical instrumentation to testing, consulting and technical support, we work to make sure the tools in your facility perform exactly as they should — and keep performing.', 'labmed' ); ?></p>
			<p class="lead" style="margin-top:20px;color:var(--foreground);">
				<?php echo esc_html( sprintf( __( 'Labmed Technologies is a %s B-BBEE company.', 'labmed' ), $labmed_contact['bbbee'] ) ); ?>
			</p>
		</div>
	</div>
</section>

<section class="bg-surface">
	<div class="wrap section">
		<div class="highlight-grid">
			<?php foreach ( $labmed_highlights as $labmed_item ) : ?>
				<div class="cell reveal">
					<?php labmed_icon( $labmed_item[0], 'icon' ); ?>
					<h2><?php echo esc_html( $labmed_item[1] ); ?></h2>
					<p><?php echo esc_html( $labmed_item[2] ); ?></p>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<section class="bg-background">
	<div class="wrap section lg-grid-12 gap-14" style="align-items:center;">
		<div class="reveal lg-col-6">
			<p class="eyebrow text-accent"><?php esc_html_e( 'Efficient Delivery', 'labmed' ); ?></p>
			<h2 class="h2" style="margin-top:20px;"><?php esc_html_e( 'Delivered efficiently across South Africa and the rest of Africa.', 'labmed' ); ?></h2>
			<p class="lead" style="margin-top:24px;"><?php esc_html_e( 'Labmed Technologies delivers efficiently through our courier partners across South Africa and the rest of Africa. With years of experience, we eagerly anticipate continuing to be an invaluable partner in helping you meet your quality requirements.', 'labmed' ); ?></p>
		</div>
		<div class="reveal lg-col-6">
			<img src="<?php echo esc_url( labmed_img( 'hero3.jpg' ) ); ?>" alt="<?php esc_attr_e( 'Clear water sample being analysed in laboratory glassware', 'labmed' ); ?>" loading="lazy" style="width:100%;aspect-ratio:16/10;object-fit:cover;" />
		</div>
	</div>
</section>

<?php
if ( have_posts() ) {
	while ( have_posts() ) :
		the_post();
		if ( trim( get_the_content() ) ) {
			echo '<section class="bg-background"><div class="wrap section"><div class="entry-content reveal">';
			the_content();
			echo '</div></div></section>';
		}
	endwhile;
}

labmed_cta_band();
get_footer();
