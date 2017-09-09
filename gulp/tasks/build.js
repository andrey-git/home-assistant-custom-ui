const gulp = require('gulp');
const babel = require('gulp-babel');
const filter = require('gulp-filter');
const htmlMinifier = require('gulp-htmlmin');
const gulpif = require('gulp-if');
const uglify = require('gulp-uglify');

const { PolymerProject, HtmlSplitter } = require('polymer-build');
const {
  generateShellMergeStrategy,
} = require('polymer-bundler');
const mergeStream = require('merge-stream');

const polymerConfig = require('../../polymer');

function minifyStream(stream) {
  const sourcesHtmlSplitter = new HtmlSplitter();
  return stream
    .pipe(sourcesHtmlSplitter.split())
    .pipe(gulpif(/src\/.*\.js$/, babel({
      sourceType: 'script',
      presets: [
        ['es2015', { modules: false }]
      ]
    })))
    .pipe(gulpif(/src\/.*\.js$/, uglify({ sourceMap: false })))
    .pipe(gulpif(/\.html$/, htmlMinifier({
      collapseWhitespace: true,
      removeComments: true,
      minifyCSS: true,
    })))
    .pipe(sourcesHtmlSplitter.rejoin());
};

/**
 * Polymer build strategy to strip imports, even if explictely imported
 */
 function stripImportsStrategy(urls) {
  return (bundles) => {
    for (const bundle of bundles) {
      for (const url of urls) {
        bundle.stripImports.add(url);
      }
    }
    return bundles;
  };
};

gulp.task('build', ['clean'], () => {
  const strategy = generateShellMergeStrategy(polymerConfig.shell);
  const project = new PolymerProject(polymerConfig);
  return mergeStream(minifyStream(project.sources()),
             minifyStream(project.dependencies()))
    .pipe(project.bundler({
      strategy,
      sourcemaps: false,
    }))
    .pipe(filter(['src/state-card-custom-ui.html']))
    .pipe(gulp.dest('build/'));
});
