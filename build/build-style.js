// 获取 gulp
const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const modifyCssUrls=require('gulp-modify-css-urls');
const minifycss = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('scss', ()=> {
    gulp.src("../src/scss/build.scss")
        .pipe(sass())
        .pipe(modifyCssUrls(
            {
                modify: function (url, filePath) {

                    if(url.indexOf("/font/")!= -1){
                        return url.substring(3)
                    }
                    else if(url.indexOf("/image/")!= -1){
                        return './..'+url.substring(url.indexOf("/image/"))
                    }
                }
            })
        )
        .pipe(rename('index.css'))
        .pipe(minifycss({
            advanced: true,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
            keepBreaks: false,//类型：Boolean 默认：false [是否保留换行]
            keepSpecialComments: '*'
            //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
        }))
        .pipe(gulp.dest("../dist/css"))

});

gulp.task('fonts', function () {
    gulp.src(['../src/font/*.*','../src/font/**/'])
        .pipe(gulp.dest('../dist/font'));

});
gulp.task('images', function () {
    gulp.src(['../src/image/*.*','../src/image/**/'])
        .pipe(gulp.dest('../dist/image'));

});

gulp.task('default', ['scss', 'fonts','images']);