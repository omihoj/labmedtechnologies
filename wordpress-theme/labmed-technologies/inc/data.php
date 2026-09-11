<?php
/**
 * Site content data: contact details, product categories and service lists.
 * Contact values are overridable in Appearance > Customize > Labmed Contact.
 *
 * @package Labmed
 */

defined( 'ABSPATH' ) || exit;

/**
 * Contact details.
 *
 * @return array
 */
function labmed_contact() {
	$tel   = get_theme_mod( 'labmed_tel', '012 004 2837' );
	$cell  = get_theme_mod( 'labmed_cell', '064 936 6549' );
	$email = get_theme_mod( 'labmed_email', 'info@labmedtechnologies.co.za' );

	$digits = function ( $number, $prefix = '+27' ) {
		$clean = preg_replace( '/\D+/', '', $number );
		return $prefix . ltrim( $clean, '0' );
	};

	return array(
		'tel_display'   => $tel,
		'tel_href'      => 'tel:' . $digits( $tel ),
		'cell_display'  => $cell,
		'cell_href'     => 'tel:' . $digits( $cell ),
		'whatsapp'      => 'https://wa.me/' . ltrim( $digits( $cell ), '+' ),
		'email'         => $email,
		'address'       => array( '583 Heatherview', 'Akasia', 'Pretoria', '0182' ),
		'address_line'  => '583 Heatherview, Akasia, Pretoria, 0182',
		'hours'         => get_theme_mod( 'labmed_hours', 'Monday – Friday, 8:00 – 16:30' ),
		'bbbee'         => get_theme_mod( 'labmed_bbbee', 'Level 1' ),
	);
}

/**
 * Theme image URL helper.
 *
 * @param string $file File name inside assets/img.
 * @return string
 */
function labmed_img( $file ) {
	return get_template_directory_uri() . '/assets/img/' . $file;
}

/**
 * Product categories.
 *
 * @return array
 */
function labmed_categories() {
	return array(
		array(
			'slug'  => 'chemicals',
			'name'  => 'Chemicals',
			'image' => 'img0008.jpg',
			'blurb' => 'Analytical reagents, solvents, standards and culture media from trusted brands.',
			'items' => array(
				'Analytical reagents (AR & LR grade)',
				'HPLC & GC solvents',
				'Certified reference standards',
				'Buffers, indicators and titrants',
				'Culture media and agar',
				'Stains, dyes and fixatives',
				'Acids, bases and salts',
				'Volumetric solutions',
			),
		),
		array(
			'slug'  => 'laboratory-supplies',
			'name'  => 'Laboratory Supplies',
			'image' => 'img0009.jpg',
			'blurb' => 'Glassware, plasticware, instruments and consumables for every bench.',
			'items' => array(
				'Borosilicate glassware',
				'Pipettes, tips and dispensers',
				'Balances, ovens and incubators',
				'Centrifuges and shakers',
				'pH, conductivity and TDS meters',
				'Spectrophotometers',
				'Filtration and water purification',
				'Safety wear and fume handling',
			),
		),
		array(
			'slug'  => 'medical-supplies',
			'name'  => 'Medical Supplies',
			'image' => 'img0015.jpg',
			'blurb' => 'Clinical consumables, diagnostics and instruments for healthcare facilities.',
			'items' => array(
				'Gloves, masks and PPE',
				'Syringes, needles and cannulae',
				'Wound care and dressings',
				'Diagnostic sets and stethoscopes',
				'Surgical instruments',
				'Sample collection tubes',
				'Rapid test kits',
				'Sterilisation and disinfection',
			),
		),
		array(
			'slug'  => 'dental-supplies',
			'name'  => 'Dental Supplies',
			'image' => 'img0016.jpg',
			'blurb' => 'Restorative materials, handpieces and chairside consumables.',
			'items' => array(
				'Handpieces and burs',
				'Restorative and impression materials',
				'Curing lights and scalers',
				'Barrier and infection control',
				'Endodontic instruments',
				'Prophylaxis consumables',
				'Dental x-ray accessories',
				'Chairside disposables',
			),
		),
		array(
			'slug'  => 'beauty-supplies',
			'name'  => 'Beauty Supplies',
			'image' => 'img0018.jpg',
			'blurb' => 'Professional salon and aesthetic equipment with full technical backup.',
			'items' => array(
				'Multifunction beauty units',
				'Magnifying and LED lamps',
				'Steamers and vaporisers',
				'Sterilisers and UV cabinets',
				'Facial and body treatment devices',
				'Salon furniture and trolleys',
				'Disposables and linens',
				'Skincare consumables',
			),
		),
		array(
			'slug'  => 'office-supplies',
			'name'  => 'Office Supplies',
			'image' => 'img0017.jpg',
			'blurb' => 'Everything the administrative side of your operation runs on.',
			'items' => array(
				'Paper, files and filing systems',
				'Writing and marking instruments',
				'Printer and toner consumables',
				'Desk accessories and organisers',
				'Boards, planners and labels',
				'Cleaning and hygiene products',
				'Packaging and shipping supplies',
				'Office furniture',
			),
		),
		array(
			'slug'  => 'agricultural-supplies',
			'name'  => 'Agricultural Supplies',
			'image' => 'agri.jpg',
			'blurb' => 'Soil, feed, water and dairy testing solutions for primary producers.',
			'items' => array(
				'Soil sampling and testing kits',
				'Feed and forage analysis consumables',
				'Milk and dairy testing equipment',
				'Irrigation water test kits',
				'Moisture meters',
				'Seed germination equipment',
				'Field sampling accessories',
				'Veterinary consumables',
			),
		),
	);
}

/**
 * Laboratory testing disciplines.
 *
 * @return array
 */
function labmed_testing_services() {
	return array(
		'Asphalt Testing',
		'Aggregate Testing',
		'Geotechnical Testing',
		'Chemical Testing',
		'Soils & Gravels Testing',
		'Concrete Testing',
		'Water Analysis',
		'Microbiology Testing',
		'Elemental Analysis',
	);
}

/**
 * Consulting offering.
 *
 * @return array
 */
function labmed_consulting_services() {
	return array(
		'Laboratory start-up cost analysis and designing of the lab',
		'Compilation of quality manual, standard operating procedures and supporting documents',
		'Maintenance of existing laboratory management systems',
		'Root-cause analysis, corrective and preventive actions on non-conforming products',
		'Method development and validation',
	);
}

/**
 * Technical service offering.
 *
 * @return array
 */
function labmed_technical_services() {
	return array(
		'On-site service and repairs',
		'In-house service and repairs',
		'Service contracts or preventative service agreements for specific equipment',
	);
}

/**
 * Resolve a page URL by template file, falling back to a slug.
 *
 * @param string $template Template file name.
 * @param string $slug     Fallback page slug.
 * @return string
 */
function labmed_page_url( $template, $slug ) {
	$pages = get_pages(
		array(
			'meta_key'   => '_wp_page_template',
			'meta_value' => $template,
			'number'     => 1,
		)
	);

	if ( ! empty( $pages ) ) {
		return get_permalink( $pages[0]->ID );
	}

	$page = get_page_by_path( $slug );
	if ( $page ) {
		return get_permalink( $page->ID );
	}

	return home_url( '/' . $slug . '/' );
}

/** Convenience URL helpers. */
function labmed_url_products() {
	return labmed_page_url( 'template-products.php', 'products' );
}
function labmed_url_services() {
	return labmed_page_url( 'template-services.php', 'services' );
}
function labmed_url_about() {
	return labmed_page_url( 'template-about.php', 'about' );
}
function labmed_url_contact() {
	return labmed_page_url( 'template-contact.php', 'contact' );
}
