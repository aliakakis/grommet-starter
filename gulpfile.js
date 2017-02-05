'use strict';

require("babel-core/register");

var browserify = require('browserify'),
    gulp = require('gulp'),
    react = require('gulp-react'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    inject = require('gulp-inject'),
    del = require('del'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    watchify = require('watchify'),
    babel = require("gulp-babel"),
    babelify = require("babelify"),
    gutil = require('gulp-util'),
    sourcemaps = require('gulp-sourcemaps'),
    notify = require('gulp-notify'),
    mocha = require('gulp-mocha'),
    filter = require('gulp-filter'),
    gulpif = require('gulp-if'),
    debug = require('gulp-debug'),
    argv = require('yargs').argv,
    rev = require('gulp-rev'),
    revReplace = require('gulp-rev-replace'),
    useref = require('gulp-useref'),
    revnapkin = require('gulp-rev-napkin'),
    wrap = require('gulp-wrap'),
    declare = require('gulp-declare'),
    sass = require('gulp-sass'),
    cleancss = require('gulp-clean-css'),
    strip = require('gulp-strip-comments'),
    stripdebug = require('gulp-strip-debug'),
    htmlmin = require('gulp-htmlmin'),
    image = require('gulp-image'),
    glob = require('glob'),
    es = require('event-stream');

var optimizeAssets = argv.production;

/* Watch */
// Clean scripts for watch
gulp.task('watch:clean_scripts', function () {
    return del('build/dist/scripts/**/*');
});

/**
 * Browserify Development watch
 */
gulp.task('watch:optimize_scripts', ['watch:clean_scripts'], function() {
    return browserify('./js/index.js')
        .transform(babelify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(gulp.dest('build/dist/scripts/'));
});

// NODE_ENV
gulp.task('set-dev-node-env', function() {
    return process.env.NODE_ENV = 'development';
});

gulp.task('set-prod-node-env', function() {
    return process.env.NODE_ENV = 'production';
});

// Clean
gulp.task('clean', function () {
    return del('build/dist/');
});

/**
 * Browserify Development
 */
gulp.task('optimize:scripts', ['clean'], function() {
    return browserify('./js/index.js')
        .transform(babelify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(gulpif(argv.production, strip()))
        .pipe(gulpif(argv.production, stripdebug()))
        .pipe(gulpif(argv.production, uglify()))
        .pipe(gulp.dest('build/dist/scripts/'));
});

/**
 * Testing
 */
gulp.task('test', function () {
    return gulp.src('js/dev/**/*.spec.js', { read: false })
        .pipe(mocha({
            compilers: {
                js: babel
            }
        }));
});

gulp.task('optimize:templates', ['optimize:styles', 'optimize:scripts'], function () {
    return gulp.src('index.html')
        .pipe(gulpif(argv.production, strip()))
        .pipe(gulp.dest('build/dist/'));
});

gulp.task('copy:lib', ['clean'], function () {
    return gulp.src('node_modules/grommet/*.min.css')
        .pipe(gulp.dest('build/dist/css/grommet/'));
});

gulp.task('copy:fonts', ['clean'], function () {
    return gulp.src('css/fonts/**/*')
        .pipe(gulp.dest('build/dist/css/fonts/'));
});

gulp.task('optimize:images', ['clean'], function () {
    return gulp.src('css/images/**/*')
        .pipe(gulpif(optimizeAssets, image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            advpng: true,
            jpegRecompress: false,
            jpegoptim: true,
            mozjpeg: true,
            gifsicle: true,
            svgo: true
        })))
        .pipe(gulp.dest('build/dist/css/images/'));
});

gulp.task('optimize:styles', ['clean'], function () {
    return gulp.src(['css/styles/**/*.css', 'css/styles/sass/**/*.scss'])
        .pipe(sass())
        .pipe(gulpif(argv.production, strip()))
        .pipe(gulpif(optimizeAssets, cleancss()))
        .pipe(gulp.dest('build/dist/css/'));
});

gulp.task('run:dev', ['set-dev-node-env', 'clean', 'optimize:scripts', 'optimize:images', 'optimize:styles', 'optimize:templates', 'copy:lib', 'copy:fonts']);

gulp.task('run:prod', ['set-prod-node-env', 'clean', 'optimize:scripts', 'optimize:images', 'optimize:styles', 'optimize:templates', 'copy:lib', 'copy:fonts'], function () {
    const notTemplateFilter = filter(['**/*', '!**/*.html'], {restore: true});

    return gulp.src(['build/dist/**/*'])
     .pipe(notTemplateFilter)
     .pipe(rev())
     .pipe(notTemplateFilter.restore)
     .pipe(revReplace({replaceInExtensions: ['.html', '.css']}))
     .pipe(gulp.dest('build/dist/'))
     .pipe(revnapkin({verbose: false}));
});

/**
 * Watch for changes
 */
gulp.task('watch:scripts', function () {
    return gulp.watch(['js/**/*'], ['watch:optimize_scripts']);
});

/**
 * Watchify
 */
var bundler = watchify(browserify(watchify.args));
// add the file to bundle
bundler.add([
    './js/index.js',
    './js/app/App.js',

    './js/components/common/AppHeader.js',
    './js/components/common/AppFooter.js',

    './js/components/login/Login.js',

    './js/components/home/Home.js',
    './js/components/home/HomeHero.js',
    './js/components/home/HomeScrollMore.js',
    './js/components/home/HomeDetails.js',
    './js/components/home/HomeIssues.js',
    './js/components/home/HomeSolutions.js',
    './js/components/home/HomeGetStarted.js',

    './js/components/signup/SignUp.js',

    './js/stores/AppStore.js',
    './js/stores/HomeStore.js',
    './js/stores/LoginStore.js',
    './js/stores/SignUpStore.js',

    './js/decorators/RouteTransition.js'
]);
// add any other browserify options or transforms here
bundler.transform(babelify);

gulp.task('run:watchify', bundle); // so you can run `gulp watchify` to build the file
bundler.on('update', bundle); // on any dep update, runs the bundler
bundler.on('log', gutil.log); // output build logs to terminal

function bundle() {
    return bundler.bundle()
        // log errors if they happen
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('bundle.js'))
        // minify for production
        .pipe(buffer())
        //.pipe(uglify())
        //.pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest('build/dist/scripts/'));
}
