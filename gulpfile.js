var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var jade = require('gulp-jade');
var jadeify = require('jadeify');
var concat = require('gulp-concat');
var browserify = require("browserify");
var watchify = require("watchify");
var watch = require("gulp-watch");
var source = require("vinyl-source-stream");
var buffer = require("vinyl-buffer");
var sourcemaps = require("gulp-sourcemaps");

function browserifyBundler(setup) {
  var opts = {
    entries: [setup.input],
    debug: true,
    cache: {},
    packageCache: {},
    transform: [jadeify]
    //transform: [jadeify, stringify]
  };
  var b = browserify(opts);
  var w = watchify(b);

  var sourceMapsOpts = {
    loadMaps: true
  };

  function bundle() {
    return w.bundle()
    .on("error", gutil.log.bind(gutil, "Browserify Error"))
    .pipe(source(setup.output))
    .pipe(buffer())
    .pipe(sourcemaps.init(sourceMapsOpts))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(setup.dest));
  }

  w.on("update", bundle);
  w.on("log", gutil.log);

  return bundle;
}

gulp.task("sass", function() {
  return gulp.src("./app/app.scss")
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'));
});

gulp.task("sass:watch", function() {
  watch("./app/*.scss", function() {
    gulp.src("./app/app.scss")
    .pipe(sass())
    .pipe(gulp.dest("./www/css/"));
  });
}); 

gulp.task("js", function() {
  return gulp.src(["./app/*.js", "./app/**/*.js"])
    .pipe(concat("app.js"))
    .pipe(gulp.dest("./www/js/"));
});

gulp.task("js:watch", browserifyBundler({
  input: "./app/app.js",
  output: "app.js",
  dest: "www/js/"
}));

gulp.task("html", function() {
  return gulp.src("./app/app.jade")
  .pipe(jade({}))
  .pipe(rename("index.html"))
  .pipe(gulp.dest("./www/"));
});

gulp.task("html:watch", function() {
  watch("./app/**/*.jade", function() {
    gulp.run("html");
  });
});

gulp.task("watch", ["html:watch", "js:watch", "sass:watch"]);

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
