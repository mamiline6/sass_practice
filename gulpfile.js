var gulp      = require('gulp');
var sass      = require('gulp-sass');
var rename = require('gulp-rename');
var minify = require('gulp-minify-css');

// watch の解除をしない命令文
var plumber = require('gulp-plumber');

var sassSrc = '_scss/**/*.scss';

gulp.task('sass', function(){
  gulp.src(sassSrc)
    .pipe(plumber())
    .pipe(sass({
      style      : 'expanded'
     }))
    .pipe(gulp.dest('css'))
    .pipe(minify())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('css'))
});

gulp.task('watch', function(){
	// ファイルを監視して、sass タスクを実行
	gulp.watch(sassSrc, ['sass']);
});

