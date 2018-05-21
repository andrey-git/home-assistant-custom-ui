const gulp = require('gulp');
const rename = require('gulp-rename');
const inlinesource = require('gulp-inline-source');
const replace = require('gulp-batch-replace');

function build(minify, transpile) {
  const toReplace = [
    ['./entrypoints/scripts.js', `../build/scripts${minify ? '' : '-dbg'}${transpile ? '-es5' : ''}.js`],
  ];
  return gulp.src('src/state-card-custom-ui.html')
    .pipe(replace(toReplace))
    .pipe(inlinesource({ compress: false }))
    .pipe(rename({ basename: `state-card-custom-ui${minify ? '' : '-dbg'}${transpile ? '-es5' : ''}` }))
    .pipe(gulp.dest('build/'));
}

gulp.task('build', ['build-minify', 'build-dbg', 'build-minify-es5', 'build-dbg-es5']);

gulp.task('build-minify', [], build.bind(null, true, false));
gulp.task('build-dbg', [], build.bind(null, false, false));
gulp.task('build-minify-es5', [], build.bind(null, true, true));
gulp.task('build-dbg-es5', [], build.bind(null, false, true));
