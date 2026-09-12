<?php
/**
 * Site header.
 *
 * @package Labmed
 */

defined( 'ABSPATH' ) || exit;

$labmed_contact = labmed_contact();
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="profile" href="https://gmpg.org/xfn/11" />
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div class="scroll-progress" aria-hidden="true"><span id="scroll-progress-bar"></span></div>

<a class="skip-link screen-reader-text" href="#main"><?php esc_html_e( 'Skip to content', 'labmed' ); ?></a>

<header class="site-header" id="site-header">
	<div class="wrap">
		<a class="site-logo" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
			<img class="logo-light" src="<?php echo esc_url( labmed_img( 'labmed-logo-light.png' ) ); ?>" alt="<?php bloginfo( 'name' ); ?>" />
			<img class="logo-dark" src="<?php echo esc_url( labmed_img( 'labmed-logo.png' ) ); ?>" alt="<?php bloginfo( 'name' ); ?>" />
		</a>

		<nav class="main-nav" aria-label="<?php esc_attr_e( 'Primary', 'labmed' ); ?>">
			<?php
			if ( has_nav_menu( 'primary' ) ) {
				wp_nav_menu(
					array(
						'theme_location' => 'primary',
						'container'      => false,
						'menu_class'     => 'nav-list',
						'depth'          => 1,
						'items_wrap'     => '<ul class="nav-list" style="display:flex;align-items:center;gap:32px;">%3$s</ul>',
					)
				);
			} else {
				echo '<div style="display:flex;align-items:center;gap:32px;">';
				labmed_default_menu();
				echo '</div>';
			}
			?>
			<a class="header-tel" href="<?php echo esc_url( $labmed_contact['tel_href'] ); ?>">
				<?php labmed_icon( 'phone' ); ?><?php echo esc_html( $labmed_contact['tel_display'] ); ?>
			</a>
			<a class="btn btn--accent sheen" href="<?php echo esc_url( $labmed_contact['cell_href'] ); ?>">
				<?php labmed_icon( 'phone' ); ?><?php echo esc_html( $labmed_contact['cell_display'] ); ?>
			</a>
		</nav>

		<button class="nav-toggle" type="button" id="nav-toggle" aria-expanded="false" aria-controls="mobile-nav" aria-label="<?php esc_attr_e( 'Open menu', 'labmed' ); ?>">
			<?php labmed_icon( 'menu', 'icon-menu' ); ?>
		</button>
	</div>

	<div class="mobile-nav" id="mobile-nav">
		<?php
		if ( has_nav_menu( 'primary' ) ) {
			wp_nav_menu(
				array(
					'theme_location' => 'primary',
					'container'      => false,
					'depth'          => 1,
				)
			);
		} else {
			labmed_default_menu();
		}
		?>
		<div class="wrap" style="padding-bottom:20px;">
			<a class="btn btn--accent" style="width:100%;justify-content:center;" href="<?php echo esc_url( $labmed_contact['cell_href'] ); ?>">
				<?php labmed_icon( 'phone' ); ?><?php echo esc_html( $labmed_contact['cell_display'] ); ?>
			</a>
			<a class="btn btn--outline" style="width:100%;justify-content:center;margin-top:12px;" href="<?php echo esc_url( $labmed_contact['tel_href'] ); ?>">
				<?php labmed_icon( 'phone' ); ?><?php echo esc_html( $labmed_contact['tel_display'] ); ?>
			</a>
		</div>
	</div>
</header>

<main id="main">
