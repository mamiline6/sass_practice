var gulp      = require('gulp');
var sass      = require('gulp-ruby-sass');

// watch の解除をしない命令文
var plumber = require('gulp-plumber');

gulp.task('sass', function(){
  gulp.src('_scss/*.scss')
    .pipe(plumber())
    .pipe(sass({
      bundleExec : true,
      style      : 'expanded'
     }))
    .pipe(gulp.dest('css'))
});

gulp.task('watch', function(){
	// ファイルを監視して、sass タスクを実行
	gulp.watch('_scss/*.scss', ['sass']);
});

