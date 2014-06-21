var gulp = require('gulp'),
	bower = require('bower'),
	clean = require('gulp-clean'),
	concat = require('gulp-concat'),
	connect = require('gulp-connect'),
	exec = require('child_process').exec,
	gutil = require('gulp-util'),
	minifyCss = require('gulp-minify-css'),
	rename = require('gulp-rename'),
	sh = require('shelljs');
	
var paths = {
	html: ['./index.html', './templates/**/*.html'],
	js: ['js/**/*.js']
};

gulp.task('connect', function() {
	connect.server({
		root: '.',
		port: 9000,
		livereload: true
	});
});

gulp.task('default', ['js']);

gulp.task('html', function (done) {
  gulp.src(['./index.html', './templates/**/*.html'])
    .pipe(connect.reload())
	.on('end', done);
});

gulp.task('js', function(done) {
    gulp.src([
                './js/controllers/**/*.js',
                './js/services/**/*.js',
                './js/home.js',
                './js/controllers.js',
                './js/services.js'
		])
        //.pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('./js'))
		.pipe(connect.reload())
        .on('end', done);
});

//gulp.task('sass', function(done) {
//  gulp.src(['./scss/app.scss', './scss/ionic.app.scss'])
//    .pipe(sass())
//    .pipe(gulp.dest('./www/css/'))
//    .pipe(minifyCss({
//		keepSpecialComments: 0
//    }))
//    .pipe(rename({ extname: '.min.css' }))
//    .pipe(gulp.dest('./www/css/'))
//	.pipe(connect.reload())
//    .on('end', done);
//});

gulp.task('watch', function() {
	gulp.watch(paths.js, ['js']);
	//gulp.watch(paths.scss, ['sass']);
	gulp.watch(paths.html, ['html']);	
});

// Tasks
gulp.task('serve', ['default', 'connect', 'watch']);


gulp.task('unittest',function(callback){
    return exec('karma start config/karma.conf.js',cb);  
});