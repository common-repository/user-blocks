<?php

/**
 * Plugin Name: User Blocks
 * Description: User blocks for building profile and account pages.
 * Version: 1.0.0
 */

// Require PHP v5.6+
if (version_compare(PHP_VERSION, '5.6', '<')) {
    return include plugin_dir_path(__FILE__) . 'php_version_notice.php';
}

require_once plugin_dir_path( __FILE__ ) . 'blocks/src/init.php';
