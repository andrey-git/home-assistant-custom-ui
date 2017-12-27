const gulp = require('gulp');
const zopfli = require('gulp-zopfli');

gulp.task('compress', () =>
  gulp.src('state-card-custom-ui*.html')
    .pipe(zopfli())
    .pipe(gulp.dest('./')));
