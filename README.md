

# Frontend Boilerplate
This boilerplate based on Gulp and Webpack will be helpful to build your projects. You may be used therefor making simple HTML templates with regular JS or for making complicated SPA with modern UI based on JS and React. 

Boilerplate already has a minimal kit for start development.

## Requirements

 - Windows 8+/OS X 10.8+/Linux
 - Node.js v.8+
 - NPM v.5+

## Installing
Clone this repository:

    $ git clone https://github.com/evgenytk/frontend-boilerplate

Install packages:

    $ npm i

## How to use:
Build:

    $ npm run build
    
Watching changes:

    $ npm run watch
Development server - http://localhost:3000/

Production build:

    $ npm run prod

## Folder Structure:
**Fonts**:
- *resources/fonts* - Main fonts folder;
- *resources/fonts/Iconsfont* - Iconsfont folder;
- *resources/fonts/Iconsfont/_iconsfont.scss* - Lodash Template for iconsfont.

**HTML**:
- *resources/html* - Main HTML folder;
- *resources/html/includes* - Separate HTML parts.

**Images**:
- *resources/images* - Main images folder;
- *resources/images/svg* - Icons for custom Iconsfont.

**JavaScript**:
- *resources/js* - Mail JS folder;
- *resources/js/index.js* - App entry point;
- *resources/js/containers* - Complex React components (statefull);
- *resources/js/components* - Simple React components (stateless).

**SCSS**: 
- *resources/scss* - Main SCSS folder;
- *resources/scss/components* - Separate components styles;
- *resources/scss/helpers* - Utils and helpers;
- *resources/scss/layouts* - Layout elemets (sidebar, header, footer and etc);
- *resources/scss/typography* - Typography styles;
- *resources/scss/vendor* - Vendor styles.

**Other**:
- *gulpfile.js* - Main gulpfile config file;
- *webpack.dev.js* - Development Webpack config;
- *webpack.prod.js* - Production Webpack config;

## Building JS:

    $ gulp build:js

 1. Traspiling **ES6** and **JSX**;
 2. Making source maps;
 3. Making bundle;
 4. Sending notifications about errors and warnings;

You might change default Axios settings in **/resources/assets/js/index.js** like a base URI, authentication headers or anything else (read [docs](https://github.com/axios/axios)). For access to anywhere, Axios was be defined in the global *window* object.

## Building SASS (SCSS)

    $ gulp build:scss

 - Autoprefix for last 8 browser versions;
 - Converting  [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) to static values (for more browsers compatibility);
 - Autofixing [flexbox bugs](https://github.com/luisrudge/postcss-flexbugs-fixes);
- Making source maps;
- Concatenation into one file.

You can use PostCSS plugins. Add your plugins into *plugins* array 

    gulp.task('build:scss', function(){
	    var plugins = [
	        autoprefixer({browsers: ['last 8 versions'], cascade: false}),
			customProperties({
				preserve: false
			}),
			flexboxFix()
			// your plugins here...
	    ];
	 // ...

## Building iconsfont:

    $ gulp build:iconsfont
    $ gulp build:fonts
    $ gulp build:scss

Put SVG into */resources/images/svg* folder. After that, you may be using new icons in your code:

    <i class="i-home"></i>
>**WARNING**: Don't use spaces in a filename.    

Read more about [gulp-iconsfont](https://www.npmjs.com/package/gulp-iconfont) plugin.


## Building images:

    $ gulp build:images

For optimize and minify images, you should have an account in [TinyPNG](https://tinypng.com/) service. Put your API token into */gulpfile.js*;

    var TINYPNG_API_TOKEN = 'xaJXmhawe4Fk12351sfAt126xbz45McXet1l_';
   
Then put your images into */resources/images* folder. After all, run NPM in production mode:

    $ npm run prod
   
> Note: after production build, images will have modified MD5 signatures. 

## Building HTML:

    $ gulp build:html


[Gulp-rigger](https://www.npmjs.com/package/gulp-rigger) plugin for include separate HTML parts into one file. 

**How to use:**

*/resouces/html/includes/example.html*

    <article>
		<h1>Welcome to Frontend Boilerplate</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
	</article>

*/resouces/html/index.html*

    <body>
	    //= includes/example.html
		<script src="assets/js/app.js"></script>
	</body>

Run gulp task and see result.

*public/index.html*

    <body>
	    <article>
			<h1>Welcome to Frontend Boilerplate</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
		</article>
		<script src="assets/js/app.js"></script>
	</body>
	
## Dependencies :

 - [autoprefixer 8.6.4](https://www.npmjs.com/package/autoprefixer)
- [babel-core 6.26.0](https://www.npmjs.com/package/babel-core)
- [babel-loader 7.1.2](https://www.npmjs.com/package/babel-loader)
- [babel-plugin-transform-async-to-generator 6.24.1](https://www.npmjs.com/package/babel-plugin-transform-async-to-generator)
- [babel-plugin-transform-class-properties 6.24.1](https://www.npmjs.com/package/babel-plugin-transform-class-properties)
- [babel-plugin-transform-runtime 6.23.0](https://www.npmjs.com/package/babel-plugin-transform-runtime)
- [babel-preset-es2015 6.24.1](https://www.npmjs.com/package/@babel/preset-es2015)
- [babel-preset-react 6.24.1](https://www.npmjs.com/package/babel-preset-react)
- [babel-preset-stage-0 6.24.1](https://www.npmjs.com/package/babel-preset-stage-0)
- [browser-sync 2.24.5](https://www.npmjs.com/package/browser-sync)
- [cssnano 3.10.0](https://www.npmjs.com/package/cssnano)
- [doiuse 4.1.0](https://www.npmjs.com/package/doiuse)
- [gulp 3.9.1](https://www.npmjs.com/package/gulp)
- [gulp-concat 2.6.1](https://www.npmjs.com/package/gulp-concat)
- [gulp-consolidate 0.2.0](https://www.npmjs.com/package/gulp-consolidate)
- [gulp-csscomb 3.0.8](https://www.npmjs.com/package/gulp-csscomb)
- [gulp-iconfont 9.1.0](https://www.npmjs.com/package/gulp-iconfont)
- [gulp-if 2.0.2](https://www.npmjs.com/package/gulp-if)
- [gulp-plumber 1.2.0](https://www.npmjs.com/package/gulp-plumber)
- [gulp-postcss 7.0.1](https://www.npmjs.com/package/gulp-postcss)
- [gulp-rigger 0.5.8](https://www.npmjs.com/package/gulp-rigger)
- [gulp-svgmin 1.2.4](https://www.npmjs.com/package/gulp-svgmin)
- [gulp-tinypng-compress 1.2.1](https://www.npmjs.com/package/gulp-tinypng-compress)
- [node-notifier 5.2.1](https://www.npmjs.com/package/node-notifier)
- [postcss-custom-properties 7.0.0](https://www.npmjs.com/package/postcss-custom-properties)
- [postcss-flexbugs-fixes 4.1.0](https://www.npmjs.com/package/postcss-flexbugs-fixes)
- [webpack 4.16.4](https://www.npmjs.com/package/webpack)
- [webpack-stream 5.1.0](https://www.npmjs.com/package/webpack-stream)
- [yargs 12.0.1](https://www.npmjs.com/package/yargs)
- [prop-types 15.6.2](https://www.npmjs.com/package/prop-types)
- [react 16.4.2](https://www.npmjs.com/package/react)
- [react-dom 16.4.2](https://www.npmjs.com/package/react-dom)
- [react-router 4.3.1](https://www.npmjs.com/package/react-router)
- [axios 0.18.0](https://www.npmjs.com/package/axios)

## Fonts :
- [FontAwesome 5.0.2](https://fontawesome.com/)
- [Roboto Font](https://fonts.google.com/specimen/Roboto)

## Other libraries and frameworks:
- [Bootstrap Grid v4.1.3](https://getbootstrap.com)

## License
[MIT license](https://opensource.org/licenses/MIT)