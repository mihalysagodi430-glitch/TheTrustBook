<?php
function thetrustbook_scripts() {
    wp_enqueue_style( 'thetrustbook-style', get_stylesheet_uri() );
}
add_action( 'wp_enqueue_scripts', 'thetrustbook_scripts' );
<?php
function thetrustbook_enqueue_styles() {
    wp_enqueue_style( 'thetrustbook-style', get_stylesheet_uri() );
}
add_action( 'wp_enqueue_scripts', 'thetrustbook_enqueue_styles' );
?>