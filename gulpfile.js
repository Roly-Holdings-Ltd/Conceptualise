const gulp          = require('gulp');
const sass          = require('gulp-sass');
const autoprefixer  = require('gulp-autoprefixer');
const rename        = require('gulp-rename');
const uglify        = require('gulp-uglify');
const replace       = require('gulp-replace');
const concat        = require('gulp-concat-util');

gulp.task('sass-compile', function() {
    return gulp
    .src(['./styles/*.scss'])
    .pipe(
        sass({
        // Values: nested, expanded, compact, compressed
        outputStyle: 'compressed'
        }).on('error', sass.logError)
    )
    .pipe(
        autoprefixer({
            cascade: false
        })
    )
    .pipe(
        rename(function(path) {
          path.basename = path.basename.replace(/\.scss/gi, '');
          path.extname = '.css.liquid';
        })
    )
    .pipe(replace('"{{', '{{'))
    .pipe(replace('}}"', '}}'))
    .pipe(gulp.dest('./assets'));
});

gulp.task('sass-compile-standalone', function() {
    return gulp
    .src(['./styles/sections/*.scss',
    './styles/components/*.scss',
    './styles/standalone/*.scss'])
    .pipe(
        sass({
        // Values: nested, expanded, compact, compressed
        outputStyle: 'compressed'
        }).on('error', sass.logError)
    )
    .pipe(
        autoprefixer({
            cascade: false
        })
    )
    .pipe(
        rename(function(path) {
          path.basename = path.basename.replace(/\.scss/gi, '');
          path.extname = '.css';
        })
    )
    // .pipe(replace('"{{', '{{'))
    // .pipe(replace('}}"', '}}'))
    .pipe(gulp.dest('./assets'));
});

//watch command for `js` and `style`
gulp.task('styles', function() {
    gulp.watch(['./styles/**/*.scss'], gulp.series('sass-compile', 'sass-compile-standalone'));
});

gulp.task('default', gulp.parallel('styles'));