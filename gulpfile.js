// Include gulp and all of our tasks
var gulp = require('gulp'),
    iconfont = require('gulp-iconfont'),
    iconfontCss = require('gulp-iconfont-css');

// SVG To Web Font Task
var fontName = 'icon-font';

gulp.task('iconfont', function(){
  return gulp.src('assets/img/icons/*.svg')
    .pipe(iconfontCss({
      fontName: fontName,
      path: 'assets/scss/template/_icon-font_template.scss',
      targetPath: '../../scss/generated/_icon-font.scss',
      fontPath: '../fonts/icons/'
    }))
    .pipe(iconfont({
      fontName: fontName,
      normalize: true
    }))
    .pipe(gulp.dest('assets/fonts/icons/'))
});
