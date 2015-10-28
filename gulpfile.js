var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('minify-css', function() {
	return gulp.src(['./bower_components/bootstrap/dist/css/bootstrap.min.css',
					 './bower_components/font-awesome/css/font-awesome.min.css',
					 './bower_components/jplayer/dist/skin/blue.monday/css/jplayer.blue.monday.css'])
					 .pipe(concat('app.css'))
					 .pipe(gulp.dest('./dist'));
});

gulp.task('uglify', function() {
	gulp.src(['./bower_components/jquery/dist/jquery.min.js',
			  './bower_components/bootstrap/dist/js/bootstrap.min.js',
			  './node_modules/react/dist/react.min.js',
			  './node_modules/react-dom/dist/react-dom.min.js',
			  './bower_components/jplayer/dist/jplayer/jquery.jplayer.min.js'])
			  .pipe(concat('app.js'))
			  .pipe(uglify())
			  .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['minify-css', 'uglify']);