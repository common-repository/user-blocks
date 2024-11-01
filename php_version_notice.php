<?php

function user_blocks_below_php_version_notice() {
    if (current_user_can('activate_plugins')) {
        ?>
        <div class="notice notice-error">
            <p>
                <span class="dashicons dashicons-warning" style="color:#dc3232;"></span>
                <?php echo __('Your version of PHP is below the minimum version of PHP required by User Blocks.', 'user-blocks'); ?>
                <?php echo __('Please contact your host and request that your version be upgraded to 5.6 or later.', 'user-blocks'); ?>
            </p>
        </div>
        <?php
    }
}
add_action('admin_notices', 'user_blocks_below_php_version_notice');
