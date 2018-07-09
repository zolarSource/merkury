var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync  = require('browser-sync');

gulp.task('sass', function(){
	return gulp.src('scss/main.scss')
	.pipe(sass())
	.pipe(gulp.dest('css'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: './'
		},
		notify: false
	});
});

gulp.task('watch', ['browser-sync', 'sass'] ,function(){
	gulp.watch('scss/main.scss', [sass]);
});