const gulp = require('gulp'); // gulp
const sass = require('gulp-sass'); // sass编译
const babel = require('gulp-babel'); // js语法转换
const autoprefixer = require('gulp-autoprefixer'); // css前缀
const javascriptObfuscator = require('gulp-javascript-obfuscator'); // js混淆
const rename = require('gulp-rename'); // js后缀
const clean = require('gulp-clean'); // 清理文件或文件夹

// 获取配置文件
const {config} = require('./app/index');

/*
 * sass编译
 */
function sassDev() {
    return gulp
        .src('template/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(
            autoprefixer({
                remove: false,
            })
        )
        .pipe(gulp.dest('./dist'));
}

gulp.task('sass', sassDev);

/**
 * js编译、压缩
 */
function jsDev() {
    return gulp
        .src(['template/**/*.js'])
        .pipe(
            babel({
                presets: ['@babel/env'],
            })
        )
        .pipe(javascriptObfuscator())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'));
}

gulp.task('js', jsDev);

/**
 * img 移动文件
 */
function imgDev() {
    return gulp.src(['template/*/img/*.*']).pipe(gulp.dest('./dist'));
}

gulp.task('img', imgDev);

/**
 * 清空文件
 */
function cleanDev() {
    return gulp.src('dist/*', {read: false}).pipe(clean());
}

gulp.task('clean', cleanDev);

gulp.task('resume:dist', gulp.series('clean', gulp.parallel('sass', 'js', 'img')));

// 实时编译
gulp.task('resume:watch', () => {
    gulp.watch('template/', sassDev);
    gulp.watch('template/', jsDev);
    gulp.watch('template/', imgDev);
});

// 创建简历
gulp.task('resume:create', config);
