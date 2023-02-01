<?php
/**
 * Plugin Name:       Collapsible List
 * Description:       Core WP list with buttons to control expand and collapse
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       collapsible-list
 *
 * @package           va
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function va_collapsible_list_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'va_collapsible_list_block_init' );



function va_collapsible_list_block_enqueue() {
    wp_enqueue_script(
        'collapsibleList',
        plugins_url( 'collapsibleList.js', __FILE__ ),
		[ 'jquery' ],
        1,
		true
    );
}
add_action( 'wp_enqueue_scripts', 'va_collapsible_list_block_enqueue' );