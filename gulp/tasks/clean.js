const del = require('del');
const gulp = require('gulp');

gulp.task('clean', () => del(['build']));
