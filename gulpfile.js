const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const changed = require('gulp-changed');

const jadeDest = './build/views';
const jadeSrc= './views/*.jade';
const jsDest = './build/js';
const jsSrc= './js/*.js';
const sassDest = './build/css';
const sassSrc= './css/*.scss';

gulp.task('dev', ['js', 'views', 'sass', 'watch']); 

gulp.task('watch', () => {
  gulp.watch(jadeSrc, ['views']);
  gulp.watch(jsSrc, ['js']);
  gulp.watch(sassSrc, ['sass']);
});

gulp.task('sass', () => {
  return gulp.src(sassSrc)
    .pipe(changed(sassDest, { extension: '.css' }))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(sassDest));
});

gulp.task('js', () => {
  return gulp.src(jsSrc)
    .pipe(changed(jsDest))
    .pipe(gulp.dest(jsDest));
});

gulp.task('views', () => {
  return gulp.src(jadeSrc)
    .pipe(changed(jadeDest, { extension: '.html' }))
    .pipe(pug())
    .pipe(gulp.dest(jadeDest));
});
