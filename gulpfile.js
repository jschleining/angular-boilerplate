const BUILD_DIR_NAME = 'build';
const BUILD_DIR = BUILD_DIR_NAME;
const JS_FILENAME = 'main.js';
const NODE_MODULES_DIR = 'node_modules/**';

var gulp = require('gulp');
var rename = require('gulp-rename');
var log = require('fancy-log');
var concat = require('gulp-concat');
var less = require('gulp-less');
var del = require('del');
var runSequence = require('run-sequence');
var jshint = require('gulp-jshint');

var paths = {
  srcjs: ['src/**/*.js'],
  less: ['src/**/*.less'],
  html: ['src/**/*.html', '!src/index.html'],
  index: ['src/index.html']
};

var buildPaths = {
  // Folders.
  rootDir: BUILD_DIR,
  jsDir: BUILD_DIR + '/js',
  viewsDir: BUILD_DIR + '/views',
  stylesDir: BUILD_DIR + '/styles',
  nodeModulesDir: BUILD_DIR + '/vendors/node_modules',
  // Glob files.
  jsFiles: [BUILD_DIR + '/js/**/*.js'],
  cssFiles: [BUILD_DIR + '/styles/**/*.css'],
  viewFiles: [BUILD_DIR + '/views/**/*.html'],
  indexHtmlFile: [BUILD_DIR + '/index.html']
};

/* Gulp Tasks */
gulp.task('deletebuild', function(cb) {
  return del('./build', cb);
});

gulp.task('copyNodeModules', function() {
  return gulp.src(NODE_MODULES_DIR)
      .pipe(gulp.dest(buildPaths.nodeModulesDir));
});

gulp.task('js', function() {
  return gulp.src(paths.srcjs)
      .pipe(jshint())
      .pipe(concat(JS_FILENAME))
      .pipe(rename({extname: '.min.js'}))
      .pipe(gulp.dest(buildPaths.jsDir));
});

gulp.task('less', function() {
  return gulp.src(paths.less)
      .pipe(less().on('error', function(err) {
        log(err);
        this.emit('end');
      }))
      .pipe(concat('master.css'))
      .pipe(gulp.dest(buildPaths.stylesDir));
});

gulp.task('html', function() {
  return gulp.src(paths.html)
      .pipe(gulp.dest(buildPaths.viewsDir));
});

gulp.task('copyIndex', function() {
  return gulp.src(paths.index)
      .pipe(gulp.dest(BUILD_DIR_NAME));
});

// Watch the file changes, update on change.
gulp.task('watch', function() {
  gulp.watch(paths.srcjs, ['js']);
  gulp.watch(paths.less, ['less']);
  gulp.watch(paths.html, ['html']);
  gulp.watch(paths.index, ['copyIndex']);
});

// Rebuild the project.
gulp.task('build', function(callback) {
  runSequence(['deletebuild'], ['copyNodeModules'], ['js', 'less', 'html', 'copyIndex']);
});

// Run the project.
gulp.task('default', function() {
  runSequence('js', 'less', 'html', 'copyIndex', 'watch');
});