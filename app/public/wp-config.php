<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '+]AcOK~927a@<O)c]$|]F`}ADpb?Pfu;EOcY2*&k5lSr(Kd1#figl,Z=-p=,wJv>' );
define( 'SECURE_AUTH_KEY',   '0=t5Jv2kv,^Lr(YVrk?klSn&L*LY*!mMGQ1si,o#eFxKMRVa2YWX9iU!e !:V 7#' );
define( 'LOGGED_IN_KEY',     '<6u4tR&I;Gg7I`XhL1H+F/Lst&,7Bn~F=&jpVze5bT4ABFGwJ~CA4QQ?Yzw?,nhM' );
define( 'NONCE_KEY',         'EF8gQPD_Y|MmLVX--e,OR7%8wfC}a7v{Iu9=nS>?qwsbAf$jo-vE nuT0Ag!tv$4' );
define( 'AUTH_SALT',         'u#;YO$fE<,6-[ulNFotm+2,9-p@ioIKUMV){Ykla<uZ9XD;b3DgH%IpRkLGX$G`s' );
define( 'SECURE_AUTH_SALT',  '7x^uzy@5=[n5#LX[QRd)` @SFWE^&YjRiB<!!txo:4FNSj2 _};0 =5QSO(#fP*[' );
define( 'LOGGED_IN_SALT',    'W#&_3@-lNJDX^,*XB?T_XK>%a4gyO!]98gF:0c#)sFf]iX*I>h]HQBqaFgcP-7aZ' );
define( 'NONCE_SALT',        'Q7-zc3+cUKdYZA&9{%0U<SHzR{6)zX|nZ0:PV@DJaLgH[fR70ea[B6e:A(m;^C|>' );
define( 'WP_CACHE_KEY_SALT', 'yRq{Y3^NlLoa7ru>~567.>iVCDFD(vyez7h3<40rCN3:]C2,Ngv5v~)?_l6T%&[$' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
