<?php
/**
 * Template Name: Labmed — Contact
 *
 * @package Labmed
 */

defined( 'ABSPATH' ) || exit;

get_header();

$labmed_contact  = labmed_contact();
$labmed_status   = isset( $_GET['enquiry'] ) ? sanitize_text_field( wp_unslash( $_GET['enquiry'] ) ) : ''; // phpcs:ignore WordPress.Security.NonceVerification.Recommended
$labmed_selected = isset( $_GET['category'] ) ? sanitize_text_field( wp_unslash( $_GET['category'] ) ) : ''; // phpcs:ignore WordPress.Security.NonceVerification.Recommended
$labmed_map      = get_theme_mod( 'labmed_map_query', '583 Heatherview Akasia Pretoria' );

$labmed_faqs = array(
	array( __( 'Do you deliver outside Pretoria?', 'labmed' ), __( 'Yes. We deliver across South Africa and to surrounding African countries. Delivery costs and lead times are confirmed with your quote.', 'labmed' ) ),
	array( __( "Can I order products that aren't listed?", 'labmed' ), __( 'Absolutely. Our listed ranges are a summary — tell us what you need and we will source it for you.', 'labmed' ) ),
	array( __( 'Do you service and repair equipment?', 'labmed' ), __( 'We offer on-site and in-house repairs, preventative maintenance and service agreements using original spare parts.', 'labmed' ) ),
	array( __( 'How quickly will I get a quote?', 'labmed' ), __( 'Most enquiries are answered the same working day, Monday to Friday between 08:00 and 16:30.', 'labmed' ) ),
);

labmed_page_hero(
	__( 'Contact Us', 'labmed' ),
	__( 'Talk to a team that knows the products.', 'labmed' ),
	__( "Send us an enquiry and we'll come back to you with a quote, availability and technical guidance.", 'labmed' ),
	'img0008.jpg'
);
?>

<section class="bg-background">
	<div class="wrap section lg-grid-12 gap-14">
		<div class="reveal lg-col-5">
			<p class="eyebrow text-accent"><?php esc_html_e( 'Details', 'labmed' ); ?></p>
			<h2 class="h2" style="margin-top:16px;font-size:1.875rem;"><?php esc_html_e( 'Labmed Technologies', 'labmed' ); ?></h2>

			<ul class="contact-list-lg">
				<li>
					<?php labmed_icon( 'phone', 'icon-sm' ); ?>
					<span>
						<span class="eyebrow"><?php esc_html_e( 'Telephone', 'labmed' ); ?></span>
						<a href="<?php echo esc_url( $labmed_contact['tel_href'] ); ?>" style="display:block;margin-top:4px;"><?php echo esc_html( $labmed_contact['tel_display'] ); ?></a>
						<button class="copy-line" type="button" data-copy="<?php echo esc_attr( $labmed_contact['tel_display'] ); ?>">
							<?php labmed_icon( 'copy', 'icon-xs' ); ?><span class="copy-label"><?php esc_html_e( 'Copy number', 'labmed' ); ?></span>
						</button>
						<a href="<?php echo esc_url( $labmed_contact['cell_href'] ); ?>" style="display:block;margin-top:8px;"><?php echo esc_html( $labmed_contact['cell_display'] ); ?></a>
					</span>
				</li>
				<li>
					<?php labmed_icon( 'message-circle', 'icon-sm' ); ?>
					<span>
						<span class="eyebrow"><?php esc_html_e( 'Cell / WhatsApp', 'labmed' ); ?></span>
						<a href="<?php echo esc_url( $labmed_contact['whatsapp'] ); ?>" target="_blank" rel="noopener" style="display:block;margin-top:4px;"><?php echo esc_html( $labmed_contact['cell_display'] ); ?></a>
					</span>
				</li>
				<li>
					<?php labmed_icon( 'mail', 'icon-sm' ); ?>
					<span>
						<span class="eyebrow"><?php esc_html_e( 'E-mail', 'labmed' ); ?></span>
						<a href="mailto:<?php echo esc_attr( $labmed_contact['email'] ); ?>" style="display:block;margin-top:4px;word-break:break-all;"><?php echo esc_html( $labmed_contact['email'] ); ?></a>
					</span>
				</li>
				<li>
					<?php labmed_icon( 'map-pin', 'icon-sm' ); ?>
					<span>
						<span class="eyebrow"><?php esc_html_e( 'Physical Address', 'labmed' ); ?></span>
						<span class="lead" style="display:block;margin-top:4px;"><?php echo esc_html( $labmed_contact['address_line'] ); ?></span>
					</span>
				</li>
				<li>
					<?php labmed_icon( 'clock', 'icon-sm' ); ?>
					<span>
						<span class="eyebrow"><?php esc_html_e( 'Office Hours', 'labmed' ); ?></span>
						<span class="lead" style="display:block;margin-top:4px;"><?php echo esc_html( $labmed_contact['hours'] ); ?></span>
					</span>
				</li>
			</ul>

			<div class="contact-map">
				<iframe title="<?php esc_attr_e( 'Labmed Technologies location', 'labmed' ); ?>" src="https://www.google.com/maps?q=<?php echo esc_attr( rawurlencode( $labmed_map ) ); ?>&amp;output=embed" loading="lazy"></iframe>
			</div>
		</div>

		<div class="reveal lg-col-7" id="enquiry">
			<div class="enquiry-card">
				<p class="eyebrow text-accent"><?php esc_html_e( 'Enquiry form', 'labmed' ); ?></p>
				<h2 class="h3" style="margin-top:16px;"><?php esc_html_e( 'Send us a message', 'labmed' ); ?></h2>

				<?php if ( 'sent' === $labmed_status ) : ?>
					<div class="form-notice">
						<?php labmed_icon( 'check', 'icon-sm' ); ?>
						<p><?php esc_html_e( 'Thank you — your enquiry has been sent. We will come back to you shortly.', 'labmed' ); ?></p>
					</div>
				<?php elseif ( 'error' === $labmed_status ) : ?>
					<div class="form-notice">
						<?php labmed_icon( 'x', 'icon-sm' ); ?>
						<p class="form-error"><?php esc_html_e( 'Please complete your name, a valid e-mail address and a message.', 'labmed' ); ?></p>
					</div>
				<?php endif; ?>

				<form class="enquiry-form" method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>">
					<input type="hidden" name="action" value="labmed_enquiry" />
					<?php wp_nonce_field( 'labmed_enquiry', 'labmed_enquiry_nonce' ); ?>

					<label>
						<span class="eyebrow text-muted"><?php esc_html_e( 'Name*', 'labmed' ); ?></span>
						<input type="text" name="labmed_name" required placeholder="<?php esc_attr_e( 'Your full name', 'labmed' ); ?>" />
					</label>
					<label>
						<span class="eyebrow text-muted"><?php esc_html_e( 'Company', 'labmed' ); ?></span>
						<input type="text" name="labmed_company" placeholder="<?php esc_attr_e( 'Organisation', 'labmed' ); ?>" />
					</label>
					<label>
						<span class="eyebrow text-muted"><?php esc_html_e( 'E-mail*', 'labmed' ); ?></span>
						<input type="email" name="labmed_email" required placeholder="<?php esc_attr_e( 'you@company.co.za', 'labmed' ); ?>" />
					</label>
					<label>
						<span class="eyebrow text-muted"><?php esc_html_e( 'Phone', 'labmed' ); ?></span>
						<input type="text" name="labmed_phone" placeholder="<?php esc_attr_e( 'Contact number', 'labmed' ); ?>" />
					</label>
					<label class="full">
						<span class="eyebrow text-muted"><?php esc_html_e( 'Category of interest', 'labmed' ); ?></span>
						<select name="labmed_category">
							<option value=""><?php esc_html_e( 'Select a category', 'labmed' ); ?></option>
							<?php
							$labmed_options = array_merge(
								wp_list_pluck( labmed_categories(), 'name' ),
								array( __( 'Laboratory Testing', 'labmed' ), __( 'Consulting', 'labmed' ), __( 'Technical Services', 'labmed' ) )
							);
							foreach ( $labmed_options as $labmed_option ) :
								?>
								<option value="<?php echo esc_attr( $labmed_option ); ?>" <?php selected( $labmed_selected, $labmed_option ); ?>><?php echo esc_html( $labmed_option ); ?></option>
							<?php endforeach; ?>
						</select>
					</label>
					<label class="full">
						<span class="eyebrow text-muted"><?php esc_html_e( 'Message*', 'labmed' ); ?></span>
						<textarea name="labmed_message" rows="6" required placeholder="<?php esc_attr_e( 'Tell us what you need', 'labmed' ); ?>"></textarea>
					</label>
					<div class="full">
						<button class="btn btn--accent sheen" type="submit">
							<?php esc_html_e( 'Send enquiry', 'labmed' ); ?><?php labmed_icon( 'send' ); ?>
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</section>

<section class="faq">
	<div class="wrap section">
		<div class="reveal">
			<p class="eyebrow text-accent"><?php esc_html_e( 'Questions', 'labmed' ); ?></p>
			<h2 class="h2" style="margin-top:16px;"><?php esc_html_e( 'Good to know', 'labmed' ); ?></h2>
		</div>
		<div class="faq-list">
			<?php foreach ( $labmed_faqs as $labmed_i => $labmed_faq ) : ?>
				<div class="faq-item<?php echo 0 === $labmed_i ? ' is-open' : ''; ?>">
					<button class="faq-q" type="button" aria-expanded="<?php echo 0 === $labmed_i ? 'true' : 'false'; ?>">
						<span><?php echo esc_html( $labmed_faq[0] ); ?></span>
						<?php labmed_icon( 'plus', 'icon-sm' ); ?>
					</button>
					<div class="faq-a"><p><?php echo esc_html( $labmed_faq[1] ); ?></p></div>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<?php
get_footer();
