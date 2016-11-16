/**
 * Created by PC on 10.11.2016.
 */

 var gulp = require ('gulp'),
    del = require ('del'),
    concat = require('gulp-concat'),
    min = require ('gulp-uglify'),
    sass = require('gulp-sass'),
    size = require ('gulp-size'),
    sourcemaps = require ('gulp-sourcemaps'),
    browser = require ("browser-sync").create();

var paths = {
    js : './js/**/*.js',
    jsdir : './js',
    script : './scripts/**/*.js',
    scss : [
        './scss/**/*.scss',
        '!scss/**/*_scsslint_tmp*.scss'
    ],
    cssdir : './css',
    html: './**/*.html'
};

gulp.task ('clean', function () {
    del.sync([
        paths.jsdir,
        paths.cssdir
    ]);
});

gulp.task('sass:dev', function () {
    return gulp.src(paths.scss)
        .pipe(sourcemaps.init())
        .pipe(sass({
            sourceCommets: "normal"
        }))
        .pipe(size({showFiles: true}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.cssdir))
        .pipe(browser.stream());
});