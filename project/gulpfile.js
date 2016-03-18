var path = '' // let empty if Laravel 4 or no Laravel project
var elixir = require('laravel-elixir')
var postStylus = require('poststylus')
require('wo-laravel-elixir-jade')
require('laravel-elixir-stylus')

elixir.config.sourcemaps = false
elixir.config.assetsPath = 'assets/'

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

/* [COPY] images and fonts to public folder */
// elixir(function (mix) {
//   /* images */
//   mix.copy(path + 'assets/img/', 'public/img')
// })

/* [COMPILE] jade files */
elixir(function (mix) {
  mix.jade('**/*.jade', 'public', {
    basedir: path + 'views',
    pretty: true, // no minifi
    extension: '.html'
  })
})

/* [COMPILE] stylus files */
elixir(function (mix) {
  mix.stylus([
    'main.styl'
  ], 'public/main.css', {
    use: [postStylus(['lost', 'postcss-position'])]
  })
})

/* [COMPILE] js files */
elixir(function (mix) {
  /* landing */
  mix.scripts([
    'index.js'
  ], 'public/main.js')
})

/* [RELOAD] browserSync */
elixir(function (mix) {
  /* Elixir no laravel project */
  mix.browserSync({
    server: {
      baseDir: 'public',
      directory: true,
      index: 'index.html' // doesn't work
    },
    files: [ 'public/**/*', '!public/**.map' ],
    online: false, // localtunel
    proxy: false
  })
})
