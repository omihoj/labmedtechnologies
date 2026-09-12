<?php
/**
 * Labmed Technologies theme functions.
 *
 * @package Labmed
 */

defined( 'ABSPATH' ) || exit;

define( 'LABMED_VERSION', '1.0.0' );

require_once get_template_directory() . '/inc/data.php';
require_once get_template_directory() . '/inc/icons.php';
require_once get_template_directory() . '/inc/customizer.php';
require_once get_template_directory() . '/inc/parts.php';

/**
 * Theme setup.
 */
function labmed_setup() {
	load_theme_textdomain( 'labmed', get_template_directory() . '/languages' );

	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'automatic-feed-links' );
	add_theme_support( 'responsive-embeds' );
	add_theme_support( 'custom-logo', array(
		'height'      => 120,
		'width'       => 400,
		'flex-height' => true,
		'flex-width'  => true,
	) );
	add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ) );

	register_nav_menus( array(
		'primary' => __( 'Primary Menu', 'labmed' ),
	) );
}
add_action( 'after_setup_theme', 'labmed_setup' );

/**
 * Enqueue styles and scripts.
 */
function labmed_assets() {
	wp_enqueue_style(
		'labmed-fonts',
		'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500&family=Playfair+Display:wght@600;700&display=swap',
		array(),
		null
	);

	wp_enqueue_style( 'labmed-style', get_stylesheet_uri(), array( 'labmed-fonts' ), LABMED_VERSION );

	wp_enqueue_script( 'labmed-main', get_template_directory_uri() . '/assets/js/main.js', array(), LABMED_VERSION, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'labmed_assets' );

/**
 * Preconnect to Google Fonts.
 *
 * @param array  $urls Resource URLs.
 * @param string $relation_type Relation type.
 * @return array
 */
function labmed_resource_hints( $urls, $relation_type ) {
	if ( 'preconnect' === $relation_type ) {
		$urls[] = array( 'href' => 'https://fonts.gstatic.com', 'crossorigin' );
		$urls[] = array( 'href' => 'https://fonts.googleapis.com' );
	}
	return $urls;
}
add_filter( 'wp_resource_hints', 'labmed_resource_hints', 10, 2 );

/**
 * Fallback primary menu when none is assigned.
 */
function labmed_default_menu() {
	$items = array(
		home_url( '/' )       => __( 'Home', 'labmed' ),
		labmed_url_about()    => __( 'About Us', 'labmed' ),
		labmed_url_products() => __( 'All Products', 'labmed' ),
		labmed_url_services() => __( 'Services', 'labmed' ),
		labmed_url_contact()  => __( 'Contact Us', 'labmed' ),
	);

	echo '<ul>';
	foreach ( $items as $url => $label ) {
		$current = untrailingslashit( $url ) === untrailingslashit( home_url( add_query_arg( array() ) ) ) ? ' class="current-menu-item"' : '';
		printf( '<li%1$s><a href="%2$s">%3$s</a></li>', $current, esc_url( $url ), esc_html( $label ) ); // phpcs:ignore
	}
	echo '</ul>';
}

/**
 * Body classes.
 *
 * @param array $classes Body classes.
 * @return array
 */
function labmed_body_classes( $classes ) {
	if ( is_front_page() ) {
		$classes[] = 'is-front';
	}
	return $classes;
}
add_filter( 'body_class', 'labmed_body_classes' );

/**
 * Handle the contact form submission (sends an email to the site address).
 */
function labmed_handle_enquiry() {
	if ( empty( $_POST['labmed_enquiry_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['labmed_enquiry_nonce'] ) ), 'labmed_enquiry' ) ) {
		return;
	}

	$name     = sanitize_text_field( wp_unslash( $_POST['labmed_name'] ?? '' ) );
	$company  = sanitize_text_field( wp_unslash( $_POST['labmed_company'] ?? '' ) );
	$email    = sanitize_email( wp_unslash( $_POST['labmed_email'] ?? '' ) );
	$phone    = sanitize_text_field( wp_unslash( $_POST['labmed_phone'] ?? '' ) );
	$category = sanitize_text_field( wp_unslash( $_POST['labmed_category'] ?? '' ) );
	$message  = sanitize_textarea_field( wp_unslash( $_POST['labmed_message'] ?? '' ) );

	if ( ! $name || ! is_email( $email ) || ! $message ) {
		wp_safe_redirect( add_query_arg( 'enquiry', 'error', wp_get_referer() ? wp_get_referer() : home_url( '/' ) ) );
		exit;
	}

	$contact = labmed_contact();
	$to      = $contact['email'];
	$subject = sprintf( 'Website enquiry%s', $category ? ' — ' . $category : '' );
	$body    = sprintf(
		"Name: %s\nCompany: %s\nE-mail: %s\nPhone: %s\nCategory: %s\n\n%s",
		$name,
		$company,
		$email,
		$phone,
		$category,
		$message
	);

	wp_mail(
		$to,
		$subject,
		$body,
		array(
			'Content-Type: text/plain; charset=UTF-8',
			'Reply-To: ' . $name . ' <' . $email . '>',
		)
	);

	wp_safe_redirect( add_query_arg( 'enquiry', 'sent', wp_get_referer() ? wp_get_referer() : home_url( '/' ) ) . '#enquiry' );
	exit;
}
add_action( 'admin_post_nopriv_labmed_enquiry', 'labmed_handle_enquiry' );
add_action( 'admin_post_labmed_enquiry', 'labmed_handle_enquiry' );

/**
 * LocalBusiness structured data in the head.
 */
function labmed_schema() {
	if ( ! is_front_page() && ! is_page_template( 'template-contact.php' ) ) {
		return;
	}

	$contact = labmed_contact();
	$schema  = array(
		'@context'     => 'https://schema.org',
		'@type'        => 'LocalBusiness',
		'name'         => get_bloginfo( 'name' ),
		'url'          => home_url( '/' ),
		'telephone'    => array( $contact['tel_display'], $contact['cell_display'] ),
		'email'        => $contact['email'],
		'address'      => array(
			'@type'           => 'PostalAddress',
			'streetAddress'   => '583 Heatherview, Akasia',
			'addressLocality' => 'Pretoria',
			'postalCode'      => '0182',
			'addressCountry'  => 'ZA',
		),
		'openingHours' => 'Mo-Fr 08:00-16:30',
	);

	echo '<script type="application/ld+json">' . wp_json_encode( $schema ) . '</script>' . "\n";
}
add_action( 'wp_head', 'labmed_schema' );

/**
 * Excerpt length.
 *
 * @param int $length Word count.
 * @return int
 */
function labmed_excerpt_length( $length ) {
	return 28;
}
add_filter( 'excerpt_length', 'labmed_excerpt_length' );
