var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var jpegtran = require('imagemin-jpegtran');
var minifyCSS = require('gulp-minify-css');
var uglify =  require('gulp-uglify');

gulp.task('sass', function () {
    gulp.src('source/sass/app.scss')
        .pipe(sass({lineNumbers: true}))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./css'));
});


gulp.task('image', function () {
    return gulp.src('source/img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant(),jpegtran()]
        }))
        .pipe(gulp.dest('./img'));
});

gulp.task('js', function(){
	gulp.src('source/js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('./js'))
});