var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles',function(){
	gulp.src('styles/sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('styles/css/'));
});

gulp.task('lint-css', function lintCssTask(){
	const gulpStylelint = require('gulp-stylelint');	
	return gulp
		.src('styles/sass/**/*.scss')
		.pipe(gulpStylelint({
      failAfterError : false,
			reporters: [
				{formatter: 'string', console:true}
			]
	}));
})

gulp.task('default',function(){
	gulp.watch('styles/sass/**/*.scss', ['styles', 'lint-css']);
});