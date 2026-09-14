<?php
/**
 * Template Name: Labmed — Services
 *
 * @package Labmed
 */

defined( 'ABSPATH' ) || exit;

get_header();

$labmed_commitments = array(
	__( 'Accurate analysis by highly skilled professionals, using state-of-the-art equipment and globally recognised methodology', 'labmed' ),
	__( 'A cost-competitive service', 'labmed' ),
	__( 'Quick turn-around time', 'labmed' ),
);

labmed_page_hero(
	__( 'Services', 'labmed' ),
	__( 'Analysis, systems and support — from one team.', 'labmed' ),
	__( 'Testing, quality-systems consulting and technical service designed around how your laboratory actually works.', 'labmed' ),
	'img0010.jpg'
);
?>

<section class="bg-background border-b" id="laboratory-testing" style="scroll-margin-top:96px;">
	<div class="wrap section lg-grid-12 gap-12">
		<div class="reveal lg-col-5">
			<?php labmed_icon( 'flask-conical', 'icon' ); ?>
			<p class="eyebrow text-accent" style="margin-top:32px;"><?php esc_html_e( '01 — Laboratory Testing', 'labmed' ); ?></p>
			<h2 class="h2" style="margin-top:16px;"><?php esc_html_e( 'A one-stop service for all your laboratory analysis needs.', 'labmed' ); ?></h2>
			<p class="lead" style="margin-top:24px;"><?php esc_html_e( 'We specialise in customised and personal service to ensure the suite of analysis methods selected are optimal and best for your analysis needs.', 'labmed' ); ?></p>
		</div>
		<div class="reveal lg-col-7">
			<div class="cell-grid">
				<?php foreach ( labmed_testing_services() as $labmed_test ) : ?>
					<div class="cell">
						<span><?php echo esc_html( $labmed_test ); ?></span>
						<span class="rule"></span>
					</div>
				<?php endforeach; ?>
			</div>
		</div>
	</div>
</section>

<section class="bg-surface" id="consulting" style="scroll-margin-top:96px;">
	<div class="wrap section lg-grid-12 gap-12">
		<div class="reveal lg-col-5">
			<?php labmed_icon( 'clipboard-check', 'icon' ); ?>
			<p class="eyebrow text-accent" style="margin-top:32px;"><?php esc_html_e( '02 — Consulting', 'labmed' ); ?></p>
			<h2 class="h2" style="margin-top:16px;"><?php esc_html_e( 'Laboratory systems expertise, end to end.', 'labmed' ); ?></h2>
			<p class="lead" style="margin-top:24px;"><?php esc_html_e( 'Labmed Technologies is your ideal partner to guide your organisation in its journey to establishing a sound Laboratory Management System, both from a quality and technical view.', 'labmed' ); ?></p>
		</div>
		<div class="reveal lg-col-7">
			<ol class="split-list" style="border-top:1px solid var(--border);border-bottom:1px solid var(--border);">
				<?php foreach ( labmed_consulting_services() as $labmed_i => $labmed_service ) : ?>
					<li>
						<span class="eyebrow text-muted"><?php echo esc_html( sprintf( '%02d', $labmed_i + 1 ) ); ?></span>
						<span class="body" style="margin-top:0;color:var(--foreground);"><?php echo esc_html( $labmed_service ); ?></span>
					</li>
				<?php endforeach; ?>
			</ol>
			<div style="margin-top:40px;">
				<h3 class="eyebrow text-accent"><?php esc_html_e( 'We are committed to', 'labmed' ); ?></h3>
				<ul class="checklist" style="grid-template-columns:1fr;">
					<?php foreach ( $labmed_commitments as $labmed_commit ) : ?>
						<li><?php labmed_icon( 'check', 'icon-xs' ); ?><span class="text-muted"><?php echo esc_html( $labmed_commit ); ?></span></li>
					<?php endforeach; ?>
				</ul>
			</div>
		</div>
	</div>
</section>

<section class="bg-background" id="technical-services" style="scroll-margin-top:96px;">
	<div class="wrap section lg-grid-12 gap-12">
		<div class="reveal lg-col-5">
			<?php labmed_icon( 'wrench', 'icon' ); ?>
			<p class="eyebrow text-accent" style="margin-top:32px;"><?php esc_html_e( '03 — Technical Services', 'labmed' ); ?></p>
			<h2 class="h2" style="margin-top:16px;"><?php esc_html_e( 'Repair, maintenance and calibration you can plan around.', 'labmed' ); ?></h2>
			<p class="lead" style="margin-top:24px;"><?php esc_html_e( 'Technical Support offers a broad repair and maintenance programme, personal technical support and a selection of service level and maintenance contracts. You are guaranteed original spare parts.', 'labmed' ); ?></p>
		</div>
		<div class="reveal lg-col-7">
			<p class="lead"><?php esc_html_e( 'In our products and services we hope to perform to the total satisfaction of our clients, ensuring you are empowered to make more accurate diagnostic decisions, advance research methods and results, and improve production performance. The ability to repair, maintain and calibrate laboratory instrumentation that we supply is an important aspect of our overall customer service policy.', 'labmed' ); ?></p>
			<div class="cell-grid" style="margin-top:40px;">
				<?php foreach ( labmed_technical_services() as $labmed_service ) : ?>
					<div class="cell"><span><?php echo esc_html( $labmed_service ); ?></span><span class="rule"></span></div>
				<?php endforeach; ?>
			</div>
		</div>
	</div>
</section>

<?php
labmed_cta_band();
get_footer();
