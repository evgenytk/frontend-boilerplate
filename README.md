
# Frontend Boilerplate
This boilerplate based on Gulp and Webpack will be helpful to build your projects. You may be used therefor making simple HTML templates with regular JS or for making complicated SPA with modern UI based on JS and React. 

Boilerplate already has a minimal kit for start development.

# Main features
 1. **CSS**: CSSComb, autoprefix, convert custom properties, flexbox fix, minify and concat, checking browser support;
 2. **JS**: linting (Airbnb config), source maps, support ES6, React, JSX, minify and optimize, making bundle;
 3. **SVG**: optimizing and minifying;
 4. **Icons**: building your own iconfont pack;
 5. **Images**: minifying by TinyPNG API;
 6. **HTML**: features for including another HTML files into one (will be helpful for complicated UI);

Also, you'll get a notification about errors and warnings in notification center on your OS.

## Requirements

 - Windows 8+/OS X 10.8+/Linux
 - Node.js v.8+
 - NPM v.5+

## Installing
Clone this repository:

    $ git clone ...

Install packages:

    $ npm i

## How to use:
Build:

    $ npm run build
    
Watching changes:

    $ npm run watch

Production build:

    $ npm run prod
    
Check browsers support:

    $ npm run check

## How to work with JS:

**Gulp task names**: 
 - build:js

Source JS files folder - **/resources/assets/js**.
App entry point: **/resources/assets/js/index.js**.
Development Webpack config: **/webpack.dev.js**.
Production Webpack config: **/webpack.prod.js**.

What happening in this task:
 1. Analyzing your code by **ESLint** (Airbnb config);
 2. **Watching** for changes;
 3. Compiling **ES6** and **JSX**;
 4. Making **source maps**;
 5. Making **development** and **production builds**;
 6. **Sending notifications** about errors and warnings.

This boilerplate has actually some important JS dependencies, like that:

- [React 16.4.2](https://www.npmjs.com/package/react)
- [React Dom 16.4.2](https://www.npmjs.com/package/react-dom)
 - [React Router 4.3.1](https://www.npmjs.com/package/react-router)
 - [PropTypes 15.6.2](https://www.npmjs.com/package/prop-types)
 - [Axios 0.18](https://www.npmjs.com/package/axios)

You might change default Axios settings in **/resources/assets/js/index.js** like a base URI, authentication headers or anything else (read [docs](https://github.com/axios/axios)). For access to anywhere, Axios was be defined in the global *window* object.

## How to work with CSS:

**Gulp task names**: 
 - build:css
 - build:cssVendor

Source CSS folder - **/resources/assets/css**.
Vendor CSS folder - **/resources/assets/css/vendor**.
Public CSS folder - **/public/assets/css**.

What happening in this task:

 1. **Autoprefix** for last 8 browser versions;
 2. **Convert**  [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) to static values (for more browsers compatibility);
 3. **Autofix** [flexbox bugs](https://github.com/luisrudge/postcss-flexbugs-fixes);
 4. **Minifying** (if you're used production mode);
 5. **Concatenation** into one file (main.css and vendor.css).

>Note: this task based on PostCSS. You might customize this task with your favorite plugins if you want to.

## How to work with icons and SVG:

**Gulp task names**:

 - build:fonts
 - build:iconsfont
 - optimize:svg

SVG folder - **/resources/images/svg**.
Public SVG folrder - **/public/images/svg**

>**WARNING**: Don't use spaces in a filename.

Put your SVG in **/resources/images/svg**. After that, you may be using new icons in your code:

    <i class="i-home"></i>
    
If you want to change class prefix, open **/gulpfile.js**, find **build:iconsfont** task and change className into **consolidate** function.

	.pipe(consolidate('lodash', {
		className: 'YOUR-CLASS-NAME'
	}))
	
You might change the CSS template based on lodash in **/resources/assets/css/iconsfont/iconsfont.css**. 

> Note: You don't care about /resources/assets/css/iconsfont.css. It's already built CSS file.

## How to work with images:

**Gulp task names**:

 - build:images

Source images folder - **/resources/images**. 
Public images folder - **/public/images**.

For optimize and minify images, you should have an account in [TinyPNG](https://tinypng.com/) service. If you actually have an account, paste API token to **/gulpfile.js**;

    var TINYPNG_API_TOKEN = 'xaJXmhawe4FkjwO6At126xbz45McXet1l_';
   
Then put your images into **/resources/images**. After all, run NPM in production mode:

    $ npm run prod
   
> Note: don't worry, images don't handling by TinyPNG again whenever you run production build. After handling by TinyPNG, images will have modified MD5 signatures.

## How to work with HTML:

**Gulp task names**:

 - build:html

> Note: If you want to build complicated SPA with modern UI based on JS and React, you might skip this part. This task instead for making simple HTML templates, landing pages, etc. But anyway, I recommend you read this.

Source HTML folder - **/resources/html**. 
Public HTML folder - **/public**.

**[Gulp-rigger](https://www.npmjs.com/package/gulp-rigger)** plugin for "include" separate HTML parts into one file. That's will be helpful for complicated UI with a lot of pages and UI elements. This allows to **reuse your code**, follow **BEM methodology** and DRY principle.

**How to use includes:**

Let's make new HTML file in **/resouces/html/includes** folder called *example.html* and put some code in there.

    <article>
		<h1>Welcome to Frontend Boilerplate</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
	</article>

Then, open your general HTML file (for example: */resouces/html/index.html*), and include your *example.html* like that:

    <body>
	    //= includes/example.html
		<script src="assets/js/app.js"></script>
	</body>

Run NPM and get the result (for example: */public/index.html*):

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
- [eslint 4.19.1](https://www.npmjs.com/package/eslint)
- [eslint-config-airbnb 17.0.0](https://www.npmjs.com/package/eslint-config-airbnb)
- [eslint-plugin-import 2.13.0](https://www.npmjs.com/package/eslint-plugin-import)
- [eslint-plugin-jsx-a11y 6.1.1](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
- [eslint-plugin-react 7.10.0](https://www.npmjs.com/package/eslint-plugin-react)
- [gulp 3.9.1](https://www.npmjs.com/package/gulp)
- [gulp-concat 2.6.1](https://www.npmjs.com/package/gulp-concat)
- [gulp-consolidate 0.2.0](https://www.npmjs.com/package/gulp-consolidate)
- [gulp-csscomb 3.0.8](https://www.npmjs.com/package/gulp-csscomb)
- [gulp-eslint 5.0.0](https://www.npmjs.com/package/gulp-eslint)
- [gulp-iconfont 9.1.0](https://www.npmjs.com/package/gulp-iconfont)
- [gulp-iconfont-css 2.1.0](https://www.npmjs.com/package/gulp-iconfont-css)
- [gulp-if 2.0.2](https://www.npmjs.com/package/gulp-if)
- [gulp-plumber 1.2.0](https://www.npmjs.com/package/gulp-plumber)
- [gulp-postcss 7.0.1](https://www.npmjs.com/package/gulp-postcss)
- [gulp-rigger 0.5.8](https://www.npmjs.com/package/gulp-rigger)
- [gulp-stylelint 7.0.0](https://www.npmjs.com/package/gulp-stylelint)
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
- [Roboto](https://fonts.google.com/specimen/Roboto)

## Other libraries and frameworks:
- [Bootstrap Grid v4.0.0-beta.2](https://getbootstrap.com)

## License
[MIT license](https://opensource.org/licenses/MIT)