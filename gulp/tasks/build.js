const gulp = require('gulp');
const babel = require('gulp-babel');
const filter = require('gulp-filter');
const htmlMinifier = require('gulp-htmlmin');
const gulpif = require('gulp-if');
const uglifyes = require('uglify-es');
const composer = require('gulp-uglify/composer');
const rename = require('gulp-rename');

const { PolymerProject, HtmlSplitter } = require('polymer-build');
const {
  generateShellMergeStrategy,
} = require('polymer-bundler');
const mergeStream = require('merge-stream');

const polymerConfig = require('../../polymer');

function minifyStream(stream, minify, transpile) {
  const sourcesHtmlSplitter = new HtmlSplitter();
  let result = stream
    .pipe(sourcesHtmlSplitter.split())
    .pipe(gulpif(transpile, gulpif(/src\/.*\.js$/, babel({
      sourceType: 'script',
      presets: [
        ['es2015', { modules: false }],
      ],
    }))));
  if (minify) {
    result = result
      .pipe(gulpif(/src\/.*\.js$/, composer(uglifyes, console)({ sourceMap: false })))
      .pipe(gulpif(/\.html$/, htmlMinifier({
        collapseWhitespace: true,
        removeComments: true,
        minifyCSS: true,
      })));
  }
  return result.pipe(sourcesHtmlSplitter.rejoin());
}

function build(minify, transpile) {
  const strategy = generateShellMergeStrategy(polymerConfig.shell);
  const project = new PolymerProject(polymerConfig);
  return mergeStream(minifyStream(project.sources(), minify, transpile),
    minifyStream(project.dependencies(), minify, transpile))
    .pipe(project.bundler({
      strategy,
      sourcemaps: false,
    }))
    .pipe(filter(['src/state-card-custom-ui.html']))
    .pipe(rename({ basename: `state-card-custom-ui${minify ? '' : '-dbg'}${transpile ? '-es5' : ''}` }))
    .pipe(gulp.dest('build/'));
}

gulp.task('build', ['build-minify', 'build-dbg', 'build-minify-es5', 'build-dbg-es5']);

gulp.task('build-minify', ['clean'], build.bind(null, true, false));
gulp.task('build-dbg', ['clean'], build.bind(null, false, false));
gulp.task('build-minify-es5', ['clean'], build.bind(null, true, true));
gulp.task('build-dbg-es5', ['clean'], build.bind(null, false, true));
