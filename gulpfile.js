var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify-es').default;
var babel = require('gulp-babel');
var imageMin = require('gulp-imagemin');
var del = require('del');

gulp.task('html', function () {
	browserSync.notify('Compiling HTML');

	return gulp.src('app/*.html')
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('css', function () {
	return gulp.src(['app/scss/*.scss'])
		.pipe(sass())
		.pipe(cssnano({
			reduceIdents: false
		}))
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
			cascade: true
		}))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.stream())
});

gulp.task('js', function () {
	browserSync.notify('Compiling internal JS');

	return gulp.src('app/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('fonts', function () {
	return gulp.src(['app/fonts/*.eot', 'app/fonts/*.ttf', 'app/fonts/*.woff', 'app/fonts/*.woff2'])
		.pipe(gulp.dest('dist/fonts'))
     	.pipe(browserSync.stream())
});

gulp.task('img', function () {
	browserSync.notify('Compiling internal JS');

	return gulp.src(['app/images/*.png', 'app/images/*.svg', 'app/images/*.jpeg', 'app/images/*.jpg', 'app/images/*.gif'])
     	.pipe(imageMin())
		.pipe(gulp.dest('dist/images'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('webserver', function () {
	browserSync({
		server: {
			baseDir: 'dist',
			tunnel: true
		},
		notify: true,
		tunnel: true
	});
});

gulp.task('clean', function () {
	return del(['dist']);
});

gulp.task('watch', function () {
	gulp.watch('app/scss/*.scss', gulp.series('css'));
	gulp.watch('app/*.html', gulp.series('html'));
	gulp.watch('app/js/*.js', gulp.series('js'));
	gulp.watch(['app/images/*.png', 'app/images/*.svg', 'app/images/*.jpeg', 'app/images/*.jpg', 'app/images/*.gif'], gulp.series('img'));
});

gulp.task('create', gulp.series('clean', gulp.parallel('html', 'css', 'js', 'img', 'fonts')));
gulp.task('default', gulp.series('create', gulp.parallel('webserver', 'watch')));