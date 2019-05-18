const gulp = require('gulp');
const rename = require('gulp-rename');
const inlinesource = require('gulp-inline-source');
const replace = require('gulp-batch-replace');

function build(minify, transpile) {
  const toReplace = [
    ['./entrypoints/scripts.js', minify ? `../build/scripts${transpile ? '-es5' : ''}.js` : `scripts-dbg${transpile ? '-es5' : ''}.js`],
  ];
  let stream = gulp.src('src/state-card-custom-ui.html')
    .pipe(replace(toReplace));
  if (minify) {
    stream = stream.pipe(inlinesource({ compress: false }));
  }
  return stream
    .pipe(rename({ basename: `state-card-custom-ui${minify ? '' : '-dbg'}${transpile ? '-es5' : ''}` }))
    .pipe(gulp.dest('build/'));
}


gulp.task('build-minify', build.bind(null, true, false));
gulp.task('build-dbg', build.bind(null, false, false));
gulp.task('build-minify-es5', build.bind(null, true, true));
gulp.task('build-dbg-es5', build.bind(null, false, true));
gulp.task('build', gulp.series('build-minify', 'build-dbg', 'build-minify-es5', 'build-dbg-es5'));
