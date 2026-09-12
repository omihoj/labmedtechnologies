<?php
/**
 * Site footer.
 *
 * @package Labmed
 */

defined( 'ABSPATH' ) || exit;

$labmed_contact = labmed_contact();
?>
</main>

<footer class="site-footer">
	<div class="wrap cols">
		<div class="lg-col-4">
			<img src="<?php echo esc_url( labmed_img( 'labmed-logo-light.png' ) ); ?>" alt="<?php bloginfo( 'name' ); ?>" />
			<p class="intro">
				<?php
				printf(
					/* translators: %s: B-BBEE level. */
					esc_html__( 'Quality consumables, equipment and scientific services across South Africa and surrounding African countries. %s B-BBEE.', 'labmed' ),
					esc_html( $labmed_contact['bbbee'] )
				);
				?>
			</p>
		</div>

		<div class="lg-col-3">
			<h2 class="eyebrow"><?php esc_html_e( 'Products', 'labmed' ); ?></h2>
			<ul>
				<?php foreach ( labmed_categories() as $cat ) : ?>
					<li><a href="<?php echo esc_url( labmed_url_products() . '#' . $cat['slug'] ); ?>"><?php echo esc_html( $cat['name'] ); ?></a></li>
				<?php endforeach; ?>
			</ul>
		</div>

		<div class="lg-col-2">
			<h2 class="eyebrow"><?php esc_html_e( 'Company', 'labmed' ); ?></h2>
			<ul>
				<li><a href="<?php echo esc_url( labmed_url_about() ); ?>"><?php esc_html_e( 'About Us', 'labmed' ); ?></a></li>
				<li><a href="<?php echo esc_url( labmed_url_services() ); ?>"><?php esc_html_e( 'Services', 'labmed' ); ?></a></li>
				<li><a href="<?php echo esc_url( labmed_url_contact() ); ?>"><?php esc_html_e( 'Contact Us', 'labmed' ); ?></a></li>
			</ul>
		</div>

		<div class="lg-col-3">
			<h2 class="eyebrow"><?php esc_html_e( 'Get in touch', 'labmed' ); ?></h2>
			<ul class="contact-list">
				<li>
					<?php labmed_icon( 'map-pin' ); ?>
					<span>
						<?php foreach ( $labmed_contact['address'] as $line ) : ?>
							<span style="display:block;"><?php echo esc_html( $line ); ?></span>
						<?php endforeach; ?>
					</span>
				</li>
				<li>
					<?php labmed_icon( 'phone' ); ?>
					<span style="display:grid;gap:4px;">
						<a href="<?php echo esc_url( $labmed_contact['tel_href'] ); ?>"><?php echo esc_html( $labmed_contact['tel_display'] ); ?></a>
						<a href="<?php echo esc_url( $labmed_contact['cell_href'] ); ?>"><?php echo esc_html( $labmed_contact['cell_display'] ); ?></a>
					</span>
				</li>
				<li>
					<?php labmed_icon( 'message-circle' ); ?>
					<a href="<?php echo esc_url( $labmed_contact['whatsapp'] ); ?>" target="_blank" rel="noreferrer">
						<?php echo esc_html( $labmed_contact['cell_display'] ); ?> (WhatsApp)
					</a>
				</li>
				<li>
					<?php labmed_icon( 'mail' ); ?>
					<a href="mailto:<?php echo esc_attr( $labmed_contact['email'] ); ?>" style="word-break:break-all;"><?php echo esc_html( $labmed_contact['email'] ); ?></a>
				</li>
				<li>
					<?php labmed_icon( 'clock' ); ?>
					<span><?php echo esc_html( $labmed_contact['hours'] ); ?></span>
				</li>
			</ul>
		</div>
	</div>

	<div class="footer-bottom">
		<div class="wrap">
			<p>&copy; <?php echo esc_html( gmdate( 'Y' ) ); ?> <?php bloginfo( 'name' ); ?>. <?php esc_html_e( 'All rights reserved.', 'labmed' ); ?></p>
			<p><?php echo esc_html( $labmed_contact['bbbee'] ); ?> <?php esc_html_e( 'B-BBEE Company', 'labmed' ); ?></p>
		</div>
	</div>
</footer>

<a class="whatsapp-fab sheen" href="<?php echo esc_url( $labmed_contact['whatsapp'] ); ?>" target="_blank" rel="noreferrer" aria-label="<?php esc_attr_e( 'Chat with us on WhatsApp', 'labmed' ); ?>">
	<?php labmed_icon( 'message-circle' ); ?><span class="label"><?php esc_html_e( 'Chat With Us', 'labmed' ); ?></span>
</a>

<button class="back-to-top" type="button" id="back-to-top" aria-label="<?php esc_attr_e( 'Back to top', 'labmed' ); ?>">
	<?php labmed_icon( 'arrow-up' ); ?>
</button>

<?php wp_footer(); ?>
</body>
</html>
