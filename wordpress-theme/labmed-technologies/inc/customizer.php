<?php
/**
 * Customizer settings: contact details shown across the theme.
 *
 * @package Labmed
 */

defined( 'ABSPATH' ) || exit;

/**
 * Register Customizer controls.
 *
 * @param WP_Customize_Manager $wp_customize Customizer instance.
 */
function labmed_customize_register( $wp_customize ) {
	$wp_customize->add_section(
		'labmed_contact',
		array(
			'title'       => __( 'Labmed Contact', 'labmed' ),
			'priority'    => 30,
			'description' => __( 'Telephone, cell, e-mail and trading details used in the header, footer and contact page.', 'labmed' ),
		)
	);

	$fields = array(
		'labmed_tel'   => array( __( 'Telephone', 'labmed' ), '012 004 2837' ),
		'labmed_cell'  => array( __( 'Cell / WhatsApp', 'labmed' ), '064 936 6549' ),
		'labmed_email' => array( __( 'E-mail address', 'labmed' ), 'info@labmedtechnologies.co.za' ),
		'labmed_hours' => array( __( 'Office hours', 'labmed' ), 'Monday – Friday, 8:00 – 16:30' ),
		'labmed_bbbee' => array( __( 'B-BBEE level', 'labmed' ), 'Level 1' ),
	);

	foreach ( $fields as $id => $field ) {
		$wp_customize->add_setting(
			$id,
			array(
				'default'           => $field[1],
				'sanitize_callback' => 'sanitize_text_field',
				'transport'         => 'refresh',
			)
		);

		$wp_customize->add_control(
			$id,
			array(
				'label'   => $field[0],
				'section' => 'labmed_contact',
				'type'    => 'text',
			)
		);
	}

	$wp_customize->add_setting(
		'labmed_map_query',
		array(
			'default'           => '583 Heatherview Akasia Pretoria',
			'sanitize_callback' => 'sanitize_text_field',
		)
	);
	$wp_customize->add_control(
		'labmed_map_query',
		array(
			'label'       => __( 'Map search query', 'labmed' ),
			'description' => __( 'Used for the Google Maps embed on the contact page.', 'labmed' ),
			'section'     => 'labmed_contact',
			'type'        => 'text',
		)
	);
}
add_action( 'customize_register', 'labmed_customize_register' );
