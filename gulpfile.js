var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

var sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src',
  'bower_components/css-hamburgers/_sass/hamburgers'
];

gulp.task('sass', function() {
  return gulp.src('_scss/styles.scss')
    .pipe($.sass({
      includePaths: sassPaths
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('static/css'));
});

gulp.task('default', ['sass'], function() {
  gulp.watch(['_scss/**/*.scss'], ['sass']);
});
