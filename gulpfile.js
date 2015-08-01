// gulp packagemodule
var gulp         = require('gulp');
var sass         = require('gulp-sass');
var rename       = require('gulp-rename');
var minify       = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var plumber      = require('gulp-plumber'); // watch の解除をしない命令文

/* ====================
	scss basic 
 ==================== */
// scss file
var sassSrc = '_scss/**/*.scss';

// task
gulp.task('sass', function(){
	gulp.src(sassSrc)
		.pipe(plumber())
		.pipe(sass({
			style : 'expanded'
		}))
		.pipe(autoprefixer(["last 2 version", "ie 8"]))
		.pipe(gulp.dest('css'))
		.pipe(minify())
		.pipe(rename({
			extname: '.min.css'
		}))
		.pipe(gulp.dest('css'))
});

// ファイルを監視して、sass タスクを実行
gulp.task('watch', function(){
	gulp.watch(sassSrc, ['sass']);
});

/* ====================
	scss tab #21
 ==================== */
// scss file
var sassTabSrc = 'practice_tab/src/scss/**/*.scss';

// css file
var cssTabSrc = 'practice_tab/app/css';

// task tab
gulp.task('sasstab', function(){
	gulp.src(sassTabSrc)
		.pipe(plumber())
		.pipe(sass({
			outputStyle :'expanded'
		}))
		.pipe(autoprefixer(["last 2 version", "ie 8"]))
		.pipe(gulp.dest(cssTabSrc))
		.pipe(minify())
		.pipe(rename({
			extname: '.min.css'
		}))
		.pipe(gulp.dest(cssTabSrc))
});

// ファイルを監視して、sass タスクを実行
gulp.task('watch', function(){
	gulp.watch(sassTabSrc, ['sasstab']);
});
