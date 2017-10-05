/* jslint node: true */

'use strict';
// Require Gulp first
const gulp = require('gulp');
//  packageJson = require('./package.json'),
// Load plugins
const $ = require('gulp-load-plugins')({lazy: true});
// Static Web Server stuff
const browserSync = require('browser-sync');
// const reload = browserSync.reload;
const historyApiFallback = require('connect-history-api-fallback');

// postcss
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
// SASS
const sass = require('gulp-ruby-sass');
// SASSDoc
const sassdoc = require('sassdoc');
// scss lint
const scsslint = require('gulp-scss-lint');
// Critical CSS
const critical = require('critical');
// Imagemin and Plugins
const imagemin = require('gulp-imagemin');
const mozjpeg = require('imagemin-mozjpeg');
// Utilities
const runSequence = require('run-sequence');
const del = require('del');
// Act only on newer files
const newer = require('gulp-newer');
// Markdown
const markdown = require('gulp-remarkable');
// explicitly require eslint
const eslint = require('gulp-eslint');
// accessibility testing
const axe = require('gulp-axe-webdriver');

const SITE = "";
/**
 * @name markdown
 * @description converts markdown to HTML
 */
gulp.task('markdown', () => {
  return gulp.src('src/md-content/*.md')
    .pipe(markdown({
      preset: 'commonmark',
      typographer: true,
      remarkableOptions: {
        typographer: true,
        linkify: true,
        breaks: false
      }
    }))
    .pipe(gulp.dest('src/html-content/'));
});

gulp.task('build-template', ['markdown'], () => {
  gulp.src('./src/html-content/*.html')
    .pipe($.wrap({src: './src/templates/template.html'}))
    .pipe(gulp.dest('./src/'));
});

// Build Google Slides
gulp.task('build-slides', () => {
  return gulp.src('./src/slides/*.md')
  .pipe($.exec('md2gslides --style github <%= file.path %> '))
  .pipe($.exec.reporter());
});

// Tasks  for working with paged media content
gulp.task('build-pm-template', () => {
  gulp.src('./src/html-content/*.html')
    .pipe($.wrap({src: './src/templates/template-pm.html'}))
    .pipe(gulp.dest('./src/pm-content'));
});

gulp.task('build-pdf', ['build-pm-template'], () => {
  return gulp.src('./src/pm-content/*.html')
    .pipe(newer('src/pdf/'))
    .pipe($.exec('prince --verbose --input=html --javascript --style ./src/css/article-styles.css <%= file.path %> '))
    .pipe($.exec.reporter());
});

gulp.task('copy-pdf', () => {
  gulp.src('src/pm-content/*.pdf', {
    dot: true
  })
  .pipe(gulp.dest('src/pdf'))
  .pipe($.size({
    pretty: true,
    title: 'copy'
  }));
});

gulp.task('prep-essays', () => {
  return gulp.src([
    'src/pdf/**',
    'src/css/**/*',
    'src/fonts/**/*',
    'src/images/*.{gif,png,svg,jpg}',
    'src/scripts/**/*',
    'src/*.html'
  ], {
    base: 'src',
    overwrite: true
  })
    .pipe(newer('../essays'))
    .pipe(gulp.dest('../essays/'));
});

// SCSS conversion and CSS processing
/**
 * @name sass:dev
 * @description SASS conversion task to produce development css with expanded syntax.
 *
 * We run this task agains Ruby SASS, not lib SASS. As such it requires the SASS Gem to be installed
 *
 * @see {@link http://sass-lang.com|SASS}
 * @see {@link http://sass-compatibility.github.io/|SASS Feature Compatibility}
 */
gulp.task('sass:dev', () => {
  return sass('src/sass/**/*.scss', {
    sourcemap: true, style: 'expanded'
  })
  .pipe(gulp.dest('src/css'))
  .pipe($.size({
    pretty: true,
    title: 'SASS'
  }));
});

/**
 * @name scss-lint
 * @description Runs scss-lint against your SCSS files (will not work on files written with the original SASS syntax) to provide style checks.
 *
 * This task depends on the scss-lint Ruby gem
 *
 * @see {@link https://github.com/brigade/scss-lint|scss-lint}
 */
gulp.task('scss-lint', ['sass:dev'], () => {
  return gulp.src(['src/scss/**/*.scss'])
    .pipe(scsslint({
      reporterOutputFormat: 'Checkstyle'
    }));
});

/**
 * @name sassdoc
 * @description generate documentation from your SASS stylesheets
 *
 * @see {@link http://sassdoc.com/|SASSDoc}
 * @see {@link http://sassdoc.com/getting-started/|SASSDoc documentation}
 */
gulp.task('sassdoc', ['scss-lint'], () => {
  return gulp.src('src/sass/**/*.scss')
    .pipe(sassdoc({
      dest: 'src/sassdocs',
      verbose: true,
      display: {
        access: ['public', 'private'],
        alias: true
      }
    }));
});

/**
 * @name processCSS
 *
 * @description Run autoprefixer and cleanCSS on the CSS files under src/css
 *
 * Moved from gulp-autoprefixer to postcss. It may open other options in the future
 * like cssnano to compress the files
 *
 * @see {@link https://github.com/postcss/autoprefixer|autoprefixer}
 */
gulp.task('processCSS', () => {
  // What processors/plugins to use with PostCSS
  const PROCESSORS = [
    autoprefixer({browsers: ['last 3 versions']})
  ];
  return gulp
    .src('src/css/**/*.css')
    .pipe($.sourcemaps.init())
    .pipe(postcss(PROCESSORS))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('src/css'))
    .pipe($.size({
      pretty: true,
      title:
        'processCSS'
    }));
});

/**
 * @name uncss
 * @description Taking a css and an html file, UNCC will strip all CSS selectors not used in the page
 *
 * @see {@link https://github.com/giakki/uncss|uncss}
 */
gulp.task('uncss', () => {
  return gulp.src('src/css/**/*.css')
    .pipe($.concat('main.css'))
    .pipe($.uncss({
      html: ['index.html']
    }))
    .pipe(gulp.dest('css/main.css'))
    .pipe($.size({
      pretty: true,
      title: 'Uncss'
    }));
});

// Generate & Inline Critical-path CSS
gulp.task('critical', () => {
  return gulp.src('src/*.html')
    .pipe(critical({
      base: 'src/',
      inline: true,
      css: ['src/css/main.css'],
      minify: true,
      extract: false,
      ignore: ['font-face'],
      dimensions: [{
        width: 320,
        height: 480
      }, {
        width: 768,
        height: 1024
      }, {
        width: 1280,
        height: 960
      }]
    }))
    .pipe($.size({
      pretty: true,
      title: 'Critical'
    }))
    .pipe(gulp.dest('dist'));
});

/**
 * @name babel
 * @description Transpiles ES6 to ES5 using Babel. As Node and browsers support more of the spec natively this will move to supporting ES2016 and later transpilation
 *
 * It requires the `babel`, `babel-preset-es2015`, `babel-preset-es2016` and `babel-preset-es2017` plugins
 *
 * @see {@link http://babeljs.io/|Babel}
 * @see {@link http://babeljs.io/docs/learn-es2015/|Learn ES2015}
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/|ECMAScript 2015 specification}
 */
gulp.task('babel', () => {
  return gulp.src('src/es6/**/*.js')
    .pipe($.sourcemaps.init())
    .pipe($.babel({
      presets: ['es2015', 'es2016', 'es2017']
    }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('src/js/'))
    .pipe($.size({
      pretty: true,
      title: 'Babel'
    }));
});

/**
 * @name eslint
 * @description Runs eslint on all javascript files
 */
gulp.task('eslint', () => {
  return gulp.src([
    'scr/scripts/**/*.js'
  ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

/**
 * @name jsdoc
 * @description runs jsdoc on the gulpfile and README.md to genereate documentation
 *
 * @see {@link https://github.com/jsdoc3/jsdoc|JSDOC}
 */
gulp.task('jsdoc', () => {
  return gulp.src(['README.md', 'gulpfile.js'])
    .pipe($.jsdoc3());
});

/**
 * @name psi:mobile
 * @description Mobile performance check using Google Page Speed Insight
 *
 * Use the `nokey` option to try out PageSpeed Insights as part of your build process. For more frequent use, we recommend registering for your own API key.
 *
 * @see {@link https://developers.google.com/speed/docs/insights/v2/getting-started|PSI Getting Started}
 */
gulp.task('psi:mobile', () => {
  return $.psi(SITE, {
    // key: key
    nokey: 'true',
    strategy: 'mobile'
  }).then(data => {
    console.log('Speed score: ' + data.ruleGroups.SPEED.score);
    console.log('Usability score: ' + data.ruleGroups.USABILITY.score);
  });
});

/**
 * @name psi:desktop
 * @description Desktop performance check using Google Page Speed Insight
 *
 * Use the `nokey` option to try out PageSpeed Insights as part of your build process. For more frequent use, we recommend registering for your own API key.
 *
 * @see {@link https://developers.google.com/speed/docs/insights/v2/getting-started|PSI Getting Started}
 */
gulp.task('psi:desktop', () => {
  return $.psi(SITE, {
    nokey: 'true',
    // key: key,
    strategy: 'desktop'
  }).then(data => {
    console.log('Speed score: ' + data.ruleGroups.SPEED.score);
  });
});

/**
 * @name imagemin
 * @description Reduces image file sizes. Doubly important if we'll choose to play with responsive images.
 *
 * Imagemin will compress jpg (using mozilla's mozjpeg), SVG (using SVGO) GIF and PNG images but WILL NOT create multiple versions for use with responsive images
 *
 * @see {@link https://github.com/postcss/autoprefixer|Autoprefixer}
 * @see {@link processImages}
 */
gulp.task('imagemin', () => {
  return gulp.src('src/images/originals/**')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [
        {removeViewBox: false},
        {cleanupIDs: false}
      ],
      use: [mozjpeg()]
    }))
    .pipe(gulp.dest('src/images'))
    .pipe($.size({
      pretty: true,
      title: 'imagemin'
    }));
});

/**
 * @name processImages
 * @description processImages creates a set of responsive images for each of the PNG and JPG images in the images
 * directory
 *
 * @see {@link http://sharp.dimens.io/en/stable/install/|Sharp}
 * @see {@link https://github.com/jcupitt/libvips|LibVIPS dependency for Mac}
 * @see {@link https://www.npmjs.com/package/gulp-responsive|gulp-responsive}
 * @see {@link imagemin}
 *
 */
gulp.task('processImages', () => {
  return gulp.src(['src/images/**/*.{jpg,png}', '!src/images/touch/*.png'])
    .pipe($.responsive({
      '*': [{
        // image-small.jpg is 200 pixels wide
        width: 200,
        rename: {
          suffix: '-small',
          extname: '.jpg'
        }
      }, {
        // image-small@2x.jpg is 400 pixels wide
        width: 200 * 2,
        rename: {
          suffix: '-small@2x',
          extname: '.jpg'
        }
      }, {
        // image-large.jpg is 480 pixels wide
        width: 480,
        rename: {
          suffix: '-large',
          extname: '.jpg'
        }
      }, {
        // image-large@2x.jpg is 960 pixels wide
        width: 480 * 2,
        rename: {
          suffix: '-large@2x',
          extname: '.jpg'
        }
      }, {
        // image-extralarge.jpg is 1280 pixels wide
        width: 1280,
        rename: {
          suffix: '-extralarge',
          extname: '.jpg'
        }
      }, {
        // image-extralarge@2x.jpg is 2560 pixels wide
        width: 1280 * 2,
        rename: {
          suffix: '-extralarge@2x',
          extname: '.jpg'
        }
      }, {
        // image-small.webp is 200 pixels wide
        width: 200,
        rename: {
          suffix: '-small',
          extname: '.webp'
        }
      }, {
        // image-small@2x.webp is 400 pixels wide
        width: 200 * 2,
        rename: {
          suffix: '-small@2x',
          extname: '.webp'
        }
      }, {
        // image-large.webp is 480 pixels wide
        width: 480,
        rename: {
          suffix: '-large',
          extname: '.webp'
        }
      }, {
        // image-large@2x.webp is 960 pixels wide
        width: 480 * 2,
        rename: {
          suffix: '-large@2x',
          extname: '.webp'
        }
      }, {
        // image-extralarge.webp is 1280 pixels wide
        width: 1280,
        rename: {
          suffix: '-extralarge',
          extname: '.webp'
        }
      }, {
        // image-extralarge@2x.webp is 2560 pixels wide
        width: 1280 * 2,
        rename: {
          suffix: '-extralarge@2x',
          extname: '.webp'
        }
      }, {
        // Global configuration for all images
        // The output quality for JPEG, WebP and TIFF output formats
        quality: 80,
        // Use progressive (interlace) scan for JPEG and PNG output
        progressive: true,
        // Skip enalrgement warnings
        skipOnEnlargement: false,
        // Strip all metadata
        withMetadata: true
      }]
    })
    .pipe(gulp.dest('dist/images')));
});

/**
 * @name CopyAssets
 * @description Copies assets into the distribution directory.
 */
gulp.task('copyAssets', () => {
  return gulp.src([
    'src/**/*',
    '!src/paged-media/',
    '!src/es6',
    '!src/scss',
    '!src/test',
    '!src/bower_components',
    '!src/cache-config.json',
    '!**/.DS_Store' // Mac specific directory we don't want to copy over
  ], {
    dot: true
  }).pipe(gulp.dest('dist'))
    .pipe($.size({
      pretty: true,
      title: 'copy'
    }));
});

/**
 * @name clean
 * @description deletes specified files
 */
gulp.task('clean', () => {
  return del.sync([
    'dist/',
    '.tmp',
    'src/html-content',
    'src/*.html',
    'src/pm-content',
    'src/pdf'
  ]);
});

gulp.task('serve', () => {
  browserSync({
    port: 2509,
    notify: false,
    logPrefix: 'ATHENA',
    snippetOptions: {
      rule: {
        match: '<span id="browser-sync-binding"></span>',
        fn: function(snippet) {
          return snippet;
        }
      }
    },
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: {
      baseDir: ['.tmp', 'src'],
      middleware: [historyApiFallback()]
    }
  });

  // gulp.watch(['src/md-content/*.md'], ['md-watch'], reload) ;
  // gulp.watch(['src/css/**/*.scss'], ['sass', 'processCSS', reload]);
  // gulp.watch(['src/images/**/*'], reload);
});

// Build and serve the output from the dist build
gulp.task('serve:dist', () => {
  browserSync({
    port: 5001,
    notify: false,
    logPrefix: "ATHENA",
    snippetOptions: {
      rule: {
        match: '<span id="browser-sync-binding"></span>',
        fn: function(snippet) {
          return snippet;
        }
      }
    },
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: "dist/",
    middleware: [historyApiFallback()]
  });
  // gulp.watch(['src/md-content/*.md'], ['md-watch'], reload)
  // gulp.watch(['src/css/**/*.scss'], ['sass', 'processCSS', reload]);
  // gulp.watch(['src/images/**/*'], reload);
});

// AXE CORE A11Y Tests
gulp.task('axe', done => {
  var options = {
    saveOutputIn: './a11yReport.json',
    browser: 'phantomjs',
    urls: ['src/*.html']
  };
  return axe(options, done);
});

gulp.task('watch', () => {
  gulp.watch('src/md-content/*.md', ['build-template']);
});

// COMBINED TASKS
gulp.task('prep', () => {
  runSequence(['copyAssets', 'copyBower', 'copyFonts'], 'processImages');
});

/**
 * @name pdf-build
 * @description creates PDF by running markdown inserting fragment into template, running it through Princexml and copying it to the PDF directory
 */
gulp.task('pdf-build', () => {
  runSequence('markdown', 'build-pm-template', 'build-pdf', 'copy-pdf', 'gcs-publish-pdf');
});

/**
 * @name default
 * @description uses clean, processCSS, build-template, imagemin and copyAssets to build the HTML content from Markdown source
 */
gulp.task('default', () => {
  runSequence('processCSS', 'build-template', 'imagemin', 'copyAssets');
});
