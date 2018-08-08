var webpack = require('webpack'),
	webpackGulp = require('webpack-stream'),
	eslint = require('gulp-eslint'),
	gulp = require('gulp'),
	concat = require('gulp-concat'),
	browserSync = require("browser-sync"),
	rigger = require('gulp-rigger'),
	tinypng = require('gulp-tinypng-compress'),
	gulpif = require('gulp-if'),
	consolidate = require('gulp-consolidate'),
	iconfont = require('gulp-iconfont'),
	iconfontCss = require('gulp-iconfont-css'),
	svgmin = require('gulp-svgmin'),
	csscomb = require('gulp-csscomb'),
	postcss = require('gulp-postcss'),
	doiuse = require('doiuse'),
	autoprefixer = require('autoprefixer'),
	cssnano = require('cssnano'),
	customProperties = require('postcss-custom-properties'),
	flexboxFix = require('postcss-flexbugs-fixes'),
	plumber = require('gulp-plumber'),
	notifier = require('node-notifier'),
	argv = require('yargs').argv;

var browsersyncConfig = {
    server: {
        baseDir: './public'
    },
    tunnel: false,
    host: 'localhost',
    port: 9000,
    logLevel: 'silent'
    // logPrefix: "Browsersync",
};

var resources = {
	css: ['resources/assets/css/*.css'],
	cssVendor: ['resources/assets/css/vendor/*.css'],
	js: ['resources/assets/js/**/*.*'],
	fonts: ['resources/assets/fonts/**/*.*'],
	images: ['resources/images/**/*.*'],
	favicon: ['resources/images/logo.png'],
	svg: ['resources/images/svg/**/*.svg'],
	html: ['resources/html/*.html'],
	htmlIncludes: ['resources/html/includes/*.html']
};

var webpackStatsConfig = {
    colors: true, hash: true, version: true, timings: true, assets: true, chunks: true,
    chunkModules: false, modules: false, children: false, cached: false, reasons: false,
    source: false, errorDetails: true, chunkOrigins: false
};

var TINYPNG_API_TOKEN = 'xaJXmnf4FkjwO6AtnvExbz45McXet1l_';

/*
* Apply CSSComb
*/
gulp.task('csscomb', function(){
	return gulp.src(resources.css)
		.pipe(csscomb())
		.pipe(gulp.dest('resources/assets/css'));
});

/*
* Applying PostCSS plugins
*/
gulp.task('build:css', function(){
	var plugins = [
        autoprefixer({browsers: ['last 8 versions'], cascade: false}),
		customProperties({
			preserve: false
		}),
		flexboxFix()
    ];

    if (argv.prod) 
    	plugins.push(cssnano());

	return gulp.src(resources.css)
		.pipe(postcss(plugins))
		.pipe(concat('main.css'))
		.pipe(gulp.dest('public/assets/css'))
		.pipe(browserSync.reload({stream: true}));
});

/*
* Build vendor CSS
*/
gulp.task('build:cssVendor', function(){
	var plugins = [];

    if (argv.prod) 
    	plugins.push(cssnano());

	return gulp.src(resources.cssVendor)
		.pipe(postcss(plugins))
		.pipe(concat('vendor.css'))
		.pipe(gulp.dest('public/assets/css'))
		.pipe(browserSync.reload({stream: true}));
});

/*
* ESLint
*/
gulp.task('eslint', function(done){
	return gulp.src(resources.js)
			.pipe(eslint())
			.pipe(eslint.format('codeframe'))
			.pipe(eslint.result(function(result){
				if (result.errorCount > 0 || result.warningCount > 0)
					notifier.notify({
						title: 'ESLint',
						message: '⚠️ Warnings: ' + result.warningCount + '\r❌ Errors: ' + result.errorCount
					})
			}))
			.pipe(browserSync.reload({stream: true}));
});

/*
* Webpack
*/
gulp.task('build:js', ['eslint'], function(done){
	return gulp.src('resources/assets/js/index.js')
		.pipe(plumber({
			errorHandler: function(error){
				notifier.notify({
					title: 'Gulp',
					message: '❌ Build failed!'
				})
			}
		}))
		.pipe(webpackGulp(require(argv.prod ? './webpack.prod.js' : './webpack.dev.js'), webpack, function(err, stats) {
			if (err) {
				notifier.notify({
					title: 'Webpack',
					message: '❌ Build failed!'
				});
				console.log(err);
			}
			console.log(stats.toString(webpackStatsConfig));
		}))
		.pipe(gulp.dest('public/assets/js'))
		.pipe(browserSync.reload({stream: true}));
});

/*
* Copying fonts
*/
gulp.task('build:fonts', ['build:iconsfont'], function(){
	return gulp.src(resources.fonts)
		.pipe(gulp.dest('public/assets/fonts'))
		.pipe(browserSync.reload({stream: true}));
});

/*
* Making iconfonts
*/
gulp.task('build:iconsfont', ['optimize:svg'], function(){
	return gulp.src(resources.svg)
		.pipe(iconfont({
			fontName: 'Iconsfont',
			appendCodepoints: true,
			appendUnicode: false,
			normalize: true,
			fontHeight: 1000,
			centerHorizontally: true,
			formats: ['ttf', 'eot', 'woff', 'woff2'],
			timestamp: Math.round(Date.now()/1000),
		}))
		.on('glyphs', function(glyphs, options) {
			gulp.src('resources/assets/css/iconsfont/iconsfont.css')
				.pipe(consolidate('lodash', {
					glyphs: glyphs,
					fontName: options.fontName,
					className: 'i',
					timestamp: Math.round(Date.now()/1000)
				}))
			.pipe(gulp.dest('resources/assets/css'))
		})
		.pipe(gulp.dest('public/assets/fonts/Iconsfont'))
		.pipe(browserSync.reload({stream: true}));
});

/*
* Optimizing svg
*/
gulp.task('optimize:svg', function(){
	return gulp.src(resources.svg)
		.pipe(svgmin({
			plugins: [
                { removeDimensions: true },
                { cleanupListOfValues: true },
                { cleanupNumericValues: true }
            ]
		}))
		.pipe(gulp.dest('resources/images/svg'));
});

/*
* Build images
*/
gulp.task('build:images', function(){

	if (TINYPNG_API_TOKEN && argv.prod)
		return gulp.src(resources.images)
			.pipe(gulpif(/.*\.(png|jpg)$/, tinypng({
				key: TINYPNG_API_TOKEN,
				sigFile: 'images/.tinypng-sigs',
				log: true
			})))
			.pipe(gulp.dest('public/images'));

	return gulp.src(resources.images)
		.pipe(gulp.dest('public/images'))
		.pipe(browserSync.reload({stream: true}));
});

/*
* Build HTML templates 
*/
gulp.task('build:html', function(){
	return gulp.src(resources.html)
		.pipe(rigger())
		.pipe(gulp.dest('public'))
		.pipe(browserSync.reload({stream: true}));
});

/*
* Checking browser compatibility
*/
gulp.task('browsers', function(){
	var plugins = [
        doiuse({
			browsers: [
				'ie >= 10',
				'> 3%'
			],
			// ignore: ['rem'],
			ignoreFiles: ['**/bootstrap4-grid.css', '**/fontawesome-all.css', '**/iconsfont.css'],
			onFeatureUsage: function (usageInfo) {
				console.log(usageInfo.message)
			}
		}),
    ];
	return gulp.src(resources.css)
		.pipe(postcss(plugins));
});

/*
* Main build task
*/
gulp.task('build', [
	'csscomb',
	'build:css',
	'build:cssVendor',
	'build:js',
	'build:fonts',
	'build:images',
	'build:html'
]);

/*
* Watch task
*/
gulp.task('watch',function(){
	gulp.watch(resources.css, ['build:css']);
	gulp.watch(resources.cssVendor, ['build:cssVendor']);
	gulp.watch(resources.fonts, ['build:fonts']);
	gulp.watch(resources.svg, ['build:iconsfont']);
	gulp.watch(resources.js, ['build:js']);
	gulp.watch(resources.images, ['build:images']);
	gulp.watch(resources.html, ['build:html']);
	gulp.watch(resources.htmlIncludes, ['build:html']);
});

/*
* Browsersync server task
*/
gulp.task('webserver', function () {
    browserSync(browsersyncConfig);
});

gulp.task('default', [
	'build', 
	'webserver', 
	'watch'
]);
