// gulp packagemodule
var gulp         = require('gulp');
var sass         = require('gulp-sass');
var rename       = require('gulp-rename');
var minify       = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var uglify       = require('gulp-uglify');
var browserSync  = require('browser-sync');
var plumber      = require('gulp-plumber');

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


/* ====================
	scss a-blog #23
==================== */
// scssファイル
var sassSrc = 'ablog_sass/src/scss/**/*.scss';

// cssファイル
var cssSrc  = 'ablog_sass/app/css';

// jsファイル
var prejsSrc  = 'ablog_sass/src/js/**/*.js';

// js圧縮ファイル
var minjsSrc = 'ablog_sass/app/js';

// 監視ディレクトリ
var devSrc  = 'ablog_sass/app/**'

// rootディレクトリ 
var rootSrc = 'ablog_sass/app'

gulp.task('sassAcms', function(){
	gulp.src(sassSrc)
		.pipe(plumber())
		.pipe(sass({
			outputStyle :'expanded'
		}))
		.pipe(autoprefixer(["last 2 version", "ie 8"]))
		.pipe(gulp.dest(cssSrc))
		.pipe(minify())
		.pipe(rename({
			extname: '.min.css'
		}))
		.pipe(gulp.dest(cssSrc))
});

gulp.task('jsAcms', function () {
	gulp.src(prejsSrc)
		.pipe(uglify())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(minjsSrc));
});

gulp.task('browserSync', function () {
	browserSync({
		server: {
			baseDir: rootSrc // ルートとなるディレクトリを指定
		}
	});
	browserSync.reload();   // ファイルに変更があれば同期しているブラウザをリロード
});

// ファイルを監視して、タスクを実行
gulp.task('default', function(){
	gulp.watch(sassSrc, ['sassAcms']);
	gulp.watch(prejsSrc, ['jsAcms']);
	// フォルダ以下のファイルを監視
	gulp.watch(devSrc, ['browserSync']);
});
