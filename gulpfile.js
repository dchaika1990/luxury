var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    pug = require('gulp-pug');

gulp.task('pug', function() {
    return gulp.src(["./*.pug","!node_modules"])
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest("./"))
});

gulp.task('sass', function () {
    gulp.src('assets/styles/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('assets/styles/'))
}) ;

gulp.task('watch', ['pug', 'sass'], function() {
    gulp.watch('./*.pug', ['pug']);
    gulp.watch('assets/styles/*.sass', ['sass']);
});

gulp.task('default', ['watch']);