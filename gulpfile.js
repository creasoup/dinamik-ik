var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync'),
    nunjucksRender = require('gulp-nunjucks-render'),
    data = require('gulp-data'),
    reload = browserSync.reload;

gulp.task('browser-sync', function() {
  browserSync({
  	server: {
  		baseDir: "public/"
  	}
  });
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('images', function(){
  gulp.src('dev/assets/img/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('public/assets/img/'));
});

gulp.task('styles', function(){
  gulp.src(['dev/assets/scss/**/*.scss'])
  	.pipe(sass({
    	includePaths: [
        'node_modules/bootstrap/scss/',
      ]
    }).on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('public/assets/css/'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('scripts', function(){
  return gulp.src(['dev/assets/js/*.js'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('public/assets/js/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('public/assets/js/'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('libJS', function(){
  return gulp.src([
  		'node_modules/jquery/dist/jquery.min.js',
  		'node_modules/tether/dist/js/tether.min.js',
  		'node_modules/bootstrap/dist/js/bootstrap.min.js',
      'node_modules/isotope-layout/dist/isotope.pkgd.min.js',
      'node_modules/select2/dist/js/select2.full.min.js'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(concat('libs.js'))
    .pipe(gulp.dest('public/assets/js/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('public/assets/js/'))
});

gulp.task('nunjucks', function() {

  return gulp.src('dev/views/pages/*.+(nunjucks)')
  .pipe(nunjucksRender({
    path: ['dev/views']
  }))
  .pipe(plumber())
  .pipe(gulp.dest('public'))

});

gulp.task('default', ['browser-sync'], function(){
  gulp.watch("dev/assets/scss/**/*.scss", ['styles']);
  gulp.watch("dev/assets/js/*.js", ['scripts']);
  gulp.watch("dev/views/**/*.+(html|nunjucks)", ['nunjucks']);
  gulp.watch("public/*.html", ['bs-reload']);
});
